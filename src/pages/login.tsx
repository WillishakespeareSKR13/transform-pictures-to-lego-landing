import { css } from '@emotion/react';
import {
  AtomButton,
  AtomImage,
  AtomInput,
  AtomLoader,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { NextPageFC } from 'next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { useAlert } from '@Src/hooks/alertContext';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'js-cookie';
import { LOGIN } from '@Src/apollo/client/mutation/user';

const initialValues = {
  email: '',
  password: ''
};

const PageLogin: NextPageFC = () => {
  const { insertAlert } = useAlert();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Por favor, ingrese un email válido')
        .required('Por favor, ingrese un email'),
      password: Yup.string().required('Por favor, ingrese una contraseña')
    }),
    onSubmit: async (valores) => {
      LoginMutation({
        variables: {
          input: {
            email: valores.email,
            password: valores.password
          }
        }
      });
    }
  });

  const [LoginMutation, { data, loading }] = useMutation(LOGIN, {
    onError: (error) => {
      insertAlert({
        id: uuidv4(),
        type: 'error',
        message: error.message
      });
    },
    onCompleted: (data) => {
      cookie.set('bearer', `${data.login.token}`);
      location.reload();
    }
  });

  return (
    <>
      <AtomLoader
        isLoading={data !== undefined || loading}
        colorLoading="#f1576c"
        backgroundColor="#00000010"
      />
      <AtomWrapper
        minHeight="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0px 40px"
        customCSS={css`
          background: url('/images/image.png'),
            linear-gradient(
              45deg,
              rgba(254, 122, 109, 1),
              rgba(255, 79, 102, 1)
            );
          background-size: cover;
          background-position: bottom;
          background-repeat: no-repeat;
        `}
      >
        <AtomWrapper
          as="form"
          onSubmit={formik.handleSubmit}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          maxWidth="410px"
          customCSS={css`
            background-color: #313139;
            height: max-content;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 1px 1px 9px #00000016;
          `}
        >
          {/* <AtomImage
            height="100%"
            alt="login"
            src="https://storage.googleapis.com/bucket_ixuabs_general/Ixulabs/template1/loginDefaul-img.png"
            customCSS={css`
              display: flex;
              min-height: 700px;
              img {
                min-height: 700px;
              }
              @media only screen and (max-width: 980px) {
                display: none;
              }
            `}
          /> */}
          <AtomWrapper alignItems="center" height="100%">
            <AtomWrapper
              justifyContent="center"
              alignItems="center"
              maxWidth="65%"
              padding="20px 0px 30px 0px"
            >
              <AtomImage
                width="max-content"
                height="60px"
                alt="LOGO"
                margin="20px 0px"
                src="/images/logo.png"
                customCSS={css`
                  img {
                    object-fit: contain;
                  }
                `}
              />
              <AtomText
                color="#dfdfdf"
                align="center"
                width="max-content"
                fontSize="16px"
                margin="0px 0px 20px 0px"
                fontWeight={700}
              >
                Iniciar sesión
              </AtomText>
              <AtomInput
                formik={formik}
                id="email"
                labelWidth="100%"
                label="Correo electrónico"
                labelFontSize="12px"
                labelFontWeight="bold"
                labelColor="#dfdfdf"
                placeholderColor="#dfdfdf"
                height="35px"
                fontSize="12px"
                spanMargin="0px 0px 10px 0px"
                placeholder="Correo electrónico"
                customCSS={css`
                  input {
                    color: #dfdfdf;
                    background-color: #202024;
                    border: 1px solid #202024;
                    :focus {
                      border: 1px solid #f1576c;
                    }
                    ::placeholder {
                      font-size: 12px;
                    }
                  }
                `}
              />
              <AtomInput
                formik={formik}
                id="password"
                type="password"
                labelMargin="10px 0px 0px 0px"
                labelWidth="100%"
                label="Contraseña"
                labelFontSize="12px"
                labelFontWeight="bold"
                labelColor="#dfdfdf"
                placeholderColor="#dfdfdf"
                height="35px"
                fontSize="12px"
                spanMargin="0px 0px 10px 0px"
                placeholder="Contraseña"
                customCSS={css`
                  input {
                    color: #dfdfdf;
                    background-color: #202024;
                    border: 1px solid #202024;
                    :focus {
                      border: 1px solid #f1576c;
                    }
                    ::placeholder {
                      font-size: 12px;
                    }
                  }
                `}
              />
              {/* <AtomLink
                link="/recover-password"
                fontWeight={600}
                fontSize="12px"
                color="#f1576c"
                customCSS={css`
                  font-weight: bold;
                `}
              >
                Olvidé mi contraseña
              </AtomLink> */}
              {/* <AtomText color="#808080" fontWeight={600} margin="20px 0px">
                O bien
              </AtomText>
              <AtomWrapper alignItems="center">
                {[
                  {
                    id: 'google1',
                    icon: 'google',
                    label: 'Continuar con Google'
                  },
                  {
                    id: 'microsoft1',
                    icon: 'microsoft',
                    label: 'Continuar con Microsoft'
                  },
                  {
                    id: 'facebook1',
                    icon: 'facebook',
                    label: 'Continuar con Facebook'
                  }
                ].map((item) => (
                  <AtomButton
                    type="button"
                    key={item.id}
                    customCSS={css`
                      display: flex;
                      margin: 0px 0px 10px 0px;
                      background-color: #ffffff;
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                      padding: 10px 20px;
                      width: 100%;
                      border-radius: 5px;
                      border: 1px solid #e9e9e9;
                      box-shadow: 1px 1px 9px #00000021;
                    `}
                  >
                    <AtomImage
                      height="20px"
                      width="20px"
                      alt="google"
                      src={`https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/button/${item.icon}.svg`}
                    />
                    <AtomText
                      fontWeight={600}
                      fontSize="12px"
                      color="#2b2b2b"
                      margin="0px 0px 0px 15px"
                      cursor="pointer"
                    >
                      {item.label}
                    </AtomText>
                  </AtomButton>
                ))}
              </AtomWrapper> */}
              <AtomButton
                type="submit"
                width="100%"
                padding="10px 30px"
                margin="20px 0px"
                backgroundColor="#202024"
              >
                Continuar
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

PageLogin.Layout = 'login';

export default PageLogin;
