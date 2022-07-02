import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GET_BOARDS } from '@Src/apollo/client/query/boards';
import {
  DELETE_ROOM,
  GET_ROOM_SIZES,
  GET_ROOM_TYPES,
  NEW_ROOM,
  UPDATE_ROOM
} from '@Src/apollo/client/query/rooms';
import { StyledImage } from '@Src/components/@organisms/OrganismsConvertImage/styles';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import uploadImage from '@Src/utils/uploadImage';
import { AtomButton, AtomInput, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { useFormik } from 'formik';
import { IBoardSize, IQueryFilter, IRoom, IRoomSizesSizes } from 'graphql';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';

const Rooms = () => {
  const router = useRouter();
  const [addRoom, setAddRoom] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('DEFAULT');
  const [selected, setSelected] = useState('SQUARE');
  const [selectedSize, setSelectedSize] = useState('SMALL');

  const { data: boards } = useQuery<IQueryFilter<'getBoards'>>(GET_BOARDS);
  const { data: rooms, refetch } =
    useQuery<IQueryFilter<'getRooms'>>(GET_ROOM_TYPES);
  const { data: roomSizes } =
    useQuery<IQueryFilter<'getRoomSizes'>>(GET_ROOM_SIZES);
  const [EXEUPDATEROOM] = useMutation(UPDATE_ROOM);
  const [EXENEWROOM] = useMutation(NEW_ROOM);
  const [EXEDELETE] = useMutation(DELETE_ROOM);

  const selectedConfig = useMemo(
    () =>
      boards?.getBoards
        ?.find((board) => board?.type?.name === selected)
        ?.sizes?.find((size) => size?.type?.name === selectedSize),
    [selected, selectedSize, boards]
  ) as IBoardSize;

  const selectedRoomConfig = useMemo(
    () => rooms?.getRooms?.find((room) => room?.id === selectedRoom),
    [selectedRoom, rooms]
  ) as IRoom;

  const selectedRoomSizeConfig = useMemo(
    () =>
      roomSizes?.getRoomSizes
        ?.find((roomSize) => roomSize?.key?.name === selected)
        ?.sizes?.find((size) => size?.key?.name === selectedSize),
    [selected, selectedSize, roomSizes]
  ) as IRoomSizesSizes;

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const getoffset = selectedRoomConfig?.offset?.find(
      (off) => off?.key?.name === selected
    )?.top;
    setOffset(getoffset ?? 0);
  }, [selectedRoomSizeConfig, selected, selectedRoom]);

  const formik = useFormik({
    initialValues: {
      key: '',
      title: '',
      image: null as unknown as File
    },
    validationSchema: Yup.object({
      key: Yup.string().required('Required'),
      title: Yup.string().required('Required'),
      image: Yup.mixed().required('Required')
    }),
    onSubmit: async (values) => {
      EXENEWROOM({
        variables: {
          input: {
            key: values.key,
            title: values.title,
            image: await uploadImage(values.image, {
              name: 'store',
              orgcode: 'LGO-0001'
            }),
            offset: boards?.getBoards?.map((board) => ({
              key: board?.type?.id,
              top: 200
            }))
          }
        }
      }).then(() => {
        refetch();
        formik.resetForm();
      });
    }
  });

  const formikEdit = useFormik({
    initialValues: {
      key: selectedRoomConfig?.key,
      title: selectedRoomConfig?.title,
      image: selectedRoomConfig?.image,
      offset: offset
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      key: Yup.string().required('Required'),
      title: Yup.string().required('Required'),
      image: Yup.mixed().required('Required')
    }),
    onSubmit: async (values) => {
      const { key, title, image, offset } = values;
      const isImage =
        typeof image === 'string'
          ? image
          : await uploadImage(image as unknown as File, {
              name: 'store',
              orgcode: 'LGO-0001'
            });
      EXEUPDATEROOM({
        variables: {
          id: selectedRoom,
          input: {
            key,
            title,
            image: isImage,
            offset: selectedRoomConfig?.offset?.map((e) => {
              const isSelect = e?.key?.name === selected;
              const topselect = isSelect ? offset : e?.top;
              return {
                key: e?.key?.id,
                top: Number(topselect)
              };
            })
          }
        }
      }).then(() => refetch());
    }
  });

  return (
    <DashWithTitle
      url={{
        pathname: router.pathname,
        query: {
          id: Array.isArray(router.query.id)
            ? router.query.id.filter((_, idx, arr) => idx !== arr.length - 1)
            : router.query.id
        }
      }}
      title="Rooms"
    >
      <AtomWrapper
        customCSS={css`
          background-color: #202024;
          padding: 0px 10px;
        `}
      >
        <AtomWrapper
          customCSS={css`
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin: 5px 0px;
            border-radius: 5px;
            overflow: hidden;
            gap: 10px;
            flex-direction: row;
          `}
        >
          {boards?.getBoards?.map((board) => (
            <AtomButton
              key={board?.id}
              onClick={() => {
                setSelected(board?.type?.name as string);
                setOffset(
                  selectedRoomConfig?.offset?.find(
                    (off) => off?.key?.name === selected
                  )?.top ?? 0
                );
                setSelectedSize(
                  board?.sizes?.find((_, index) => index === 0)?.type?.name ??
                    'SMALL'
                );
              }}
              customCSS={css`
                padding: 12px 0px;
                cursor: pointer;
                flex-grow: 1;
                border-radius: 0px;
                justify-content: center;
                align-items: center;
                background-color: ${board?.type?.name === selected
                  ? '#4a4a54'
                  : '#313139'};
              `}
            >
              <AtomWrapper
                customCSS={css`
                  cursor: pointer;
                  border-radius: 1px;
                  padding: 8px 30px;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <AtomText
                  color="white"
                  fontWeight={600}
                  fontSize="12px"
                  customCSS={css`
                    cursor: pointer;
                  `}
                >
                  {board?.type?.name}
                </AtomText>
              </AtomWrapper>
            </AtomButton>
          ))}
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            border-radius: 2px;
            margin: 5px 0px;
            border-radius: 5px;
            overflow: hidden;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 10px;
          `}
        >
          {boards?.getBoards
            ?.find((board) => board?.type?.name === selected)
            ?.sizes?.slice()
            ?.sort((a, b) => (a?.priority ?? 0) - (b?.priority ?? 0))
            ?.map((size) => (
              <AtomButton
                key={size?.id}
                onClick={() => {
                  setSelectedSize(size?.type?.name ?? 'SMALL');
                  setOffset(
                    selectedRoomConfig?.offset?.find(
                      (off) => off?.key?.name === selected
                    )?.top ?? 0
                  );
                }}
                customCSS={css`
                  padding: 5px 0px;
                  cursor: pointer;
                  flex-grow: 1;
                  border-radius: 0px;
                  justify-content: center;
                  align-items: center;
                  background-color: ${size?.type?.name === selectedSize
                    ? '#4a4a54'
                    : '#313139'};
                `}
              >
                <AtomWrapper
                  customCSS={css`
                    cursor: pointer;
                    border-radius: 1px;
                    padding: 8px 30px;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <AtomText
                    color="white"
                    fontWeight={600}
                    fontSize="12px"
                    customCSS={css`
                      cursor: pointer;
                    `}
                  >
                    {size?.type?.name?.slice(0, 1).toUpperCase()}
                  </AtomText>
                </AtomWrapper>
              </AtomButton>
            ))}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        flexDirection="row"
        customCSS={css`
          gap: 20px;
          margin-top: 20px;
        `}
      >
        <AtomWrapper
          width="max-content"
          justifyContent="center"
          alignItems="center"
        >
          {selectedRoom === 'DEFAULT' ? (
            <AtomWrapper
              customCSS={css`
                flex-direction: row;
                flex-wrap: wrap;
                width: ${(selectedRoomSizeConfig?.width ?? 0) * 3}px;
                height: ${(selectedRoomSizeConfig?.height ?? 0) * 3}px;
                align-items: center;
                justify-content: center;
                background-color: #313139;
              `}
            >
              <StyledImage
                src="/images/demoroom.jpg"
                alt="croppedImage"
                customCSS={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
            </AtomWrapper>
          ) : (
            <AtomWrapper
              customCSS={css`
                width: 600px;
                height: 600px;
                background-image: url(${selectedRoomConfig.image});
                position: relative;
              `}
            >
              <AtomWrapper
                customCSS={css`
                  width: max-content;
                  height: max-content;
                  position: absolute;
                  top: ${offset}px;
                  right: 50%;
                  transform: translate(50%, -50%);
                  background-color: #313139;
                  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.522);
                  outline: 1px solid #6a6a6a5c;
                `}
              >
                <AtomWrapper
                  customCSS={css`
                    flex-direction: row;
                    flex-wrap: wrap;
                    width: ${30 * (selectedConfig?.x ?? 0)}px;
                    height: ${30 * (selectedConfig?.y ?? 0)}px;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  {Array.from(
                    {
                      length:
                        (selectedConfig?.x ?? 0) * (selectedConfig?.y ?? 0)
                    },
                    (_, index) => index
                  ).map((_, index) => (
                    <StyledImage
                      key={index}
                      src="/images/demoroom.jpg"
                      alt="croppedImage"
                      customCSS={css`
                        width: 30px;
                        height: 30px;
                      `}
                    />
                  ))}
                </AtomWrapper>
              </AtomWrapper>
            </AtomWrapper>
          )}
          <AtomInput
            type="select"
            errorHeight="0px"
            value={selectedRoom}
            options={[
              {
                id: 'DEFAULT',
                value: 'DEFAULT',
                label: 'View Full Size'
              },
              ...(rooms?.getRooms?.map((room) => ({
                id: `${room?.id}`,
                value: `${room?.id}`,
                label: `${room?.title}`
              })) ?? [])
            ]}
            onChange={(e) => setSelectedRoom(e.target.value)}
            labelWidth="250px"
            defaultText="Pick a demo room"
            customCSS={css`
              select {
                border: 3px solid #202024;
                background-color: #313139;
                option {
                  color: #79797e;
                }
              }
              margin-top: -10px;
            `}
          />
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            gap: 10px;
          `}
        >
          <AtomWrapper
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <AtomText fontSize="18px" color="white">
              Edit room size
            </AtomText>
            {selectedRoom !== 'DEFAULT' && (
              <AtomButton
                backgroundColor="#f1576c"
                onClick={() => {
                  EXEDELETE({
                    variables: {
                      id: selectedRoom
                    }
                  })
                    .catch(() => null)
                    .then(() => {
                      setSelectedRoom('DEFAULT');
                      refetch();
                    });
                }}
              >
                Delete Room
              </AtomButton>
            )}
          </AtomWrapper>
          <AtomText fontSize="18px" color="white">
            Frame offset: {offset}px
            {'   '}
            <AtomText fontSize="12px" color="white">
              *offset is for all sizes
            </AtomText>
          </AtomText>
          <AtomWrapper
            flexDirection="row"
            width="max-content"
            customCSS={css`
              gap: 10px;
            `}
          >
            <AtomInput
              type="number"
              value={`${offset}`}
              onChange={(e) => setOffset(e.target.value)}
            />
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            justifyContent="flex-start"
            customCSS={css`
              gap: 20px;
            `}
          >
            <AtomWrapper width="max-content">
              <AtomInput
                labelWidth="300px"
                formik={formikEdit}
                id="key"
                label="Key"
                labelColor="white"
                spanMargin="10px 0px 10px 0px"
              />
              <AtomInput
                labelWidth="300px"
                formik={formikEdit}
                id="title"
                label="Title"
                labelColor="white"
                spanMargin="10px 0px 10px 0px"
              />
              <AtomButton
                width="100%"
                backgroundColor="#f1576c"
                onClick={() => {
                  formikEdit.submitForm();
                }}
              >
                SAVE
              </AtomButton>
            </AtomWrapper>
            <AtomInput
              formik={formikEdit}
              id="image"
              type="dragdrop"
              imagePreview={selectedRoomConfig?.image}
              label="Image"
              labelColor="white"
              spanMargin="10px 0px 10px 0px"
            />
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
      <AtomButton onClick={() => setAddRoom(!addRoom)}>
        Add a New Room
      </AtomButton>
      {addRoom && (
        <AtomWrapper>
          <AtomText fontSize="18px" color="white">
            Add a new room
          </AtomText>
          <AtomWrapper
            flexDirection="row"
            justifyContent="flex-start"
            customCSS={css`
              gap: 20px;
            `}
          >
            <AtomWrapper width="max-content">
              <AtomInput
                labelWidth="300px"
                formik={formik}
                id="key"
                label="Key"
                labelColor="white"
                spanMargin="10px 0px 10px 0px"
              />
              <AtomInput
                labelWidth="300px"
                formik={formik}
                id="title"
                label="Title"
                labelColor="white"
                spanMargin="10px 0px 10px 0px"
              />
              <AtomButton width="100%" onClick={() => formik.submitForm()}>
                ADD
              </AtomButton>
            </AtomWrapper>
            <AtomInput
              formik={formik}
              id="image"
              type="dragdrop"
              label="Image"
              labelColor="white"
              spanMargin="10px 0px 10px 0px"
            />
          </AtomWrapper>
        </AtomWrapper>
      )}
    </DashWithTitle>
  );
};

export default Rooms;
