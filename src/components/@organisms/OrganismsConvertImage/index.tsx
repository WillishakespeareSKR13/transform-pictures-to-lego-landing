import { css } from '@emotion/react';
import { AtomInput, AtomLoader, AtomText, AtomWrapper } from '@sweetsyui/ui';
import PinturaEditor from '@Utils/react-pintura/PinturaEditor';
import { EditorMethods, getEditorDefaults } from '@Utils/pintura';
import { createRef, FC, useContext, useMemo, useState } from 'react';
import { ContextFile } from '@Src/pages';
import { COLORTYPE, CROPPEDIMAGE } from '@Src/config';
import AtomButton from '@Src/components/@atoms/AtomButton';
import { StyledImage } from './styles';
import { cropAndFilter } from '@Src/utils/pixelit';
import DownloadPdf from '@Src/components/@atoms/AtomPdf';
import AtomModalImage from '@Src/components/@atoms/AtomModalImage';
import { useQuery } from '@apollo/client';
import {
  IBoard,
  IBoardSize,
  IQueryFilter,
  IRoom,
  IRoomSizesSizes
} from 'graphql';
import { GET_BOARDS } from '@Src/apollo/client/query/boards';
import { GET_ROOM_SIZES, GET_ROOM_TYPES } from '@Src/apollo/client/query/rooms';

const OrganismsConvertImage: FC = () => {
  const { file, setFile } = useContext(ContextFile);
  const [selected, setSelected] = useState('SQUARE');
  const [selectedSize, setSelectedSize] = useState('SMALL');
  const [showBorder, setShowBorder] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('DEFAULT');
  const [cropImages, setCropImages] = useState<CROPPEDIMAGE>([]);
  const [cropImagesBlock, setCropImagesBlock] = useState<CROPPEDIMAGE>([]);
  const [colors, setColors] = useState<COLORTYPE[]>([]);
  const [quantity, setQuantity] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = createRef<any>();
  const refInput = createRef<HTMLInputElement>();

  const { data: boards } = useQuery<IQueryFilter<'getBoards'>>(GET_BOARDS);
  const { data: rooms } = useQuery<IQueryFilter<'getRooms'>>(GET_ROOM_TYPES);
  const { data: roomSizes } =
    useQuery<IQueryFilter<'getRoomSizes'>>(GET_ROOM_SIZES);
  // const { data: boards } = useQuery<IQueryFilter<'getBoards'>>(GET_BOARDS);

  const loading = useMemo(
    () => cropImagesBlock.length !== quantity,
    [cropImagesBlock, quantity]
  );

  const boardSelected = useMemo(
    () => boards?.getBoards?.find((board) => board?.type?.name === selected),
    [boards, selected]
  ) as IBoard;

  const selectedConfig = useMemo(
    () =>
      boards?.getBoards
        ?.find((board) => board?.type?.name === selected)
        ?.sizes?.find((size) => size?.type?.name === selectedSize),
    [selected, selectedSize, boards]
  ) as IBoardSize;

  const selectedRoomConfig = useMemo(
    () => rooms?.getRooms?.find((room) => room?.key === selectedRoom),
    // () => ROOMS.find(({ key }) => key === selectedRoom),
    [selectedRoom, rooms]
  ) as IRoom;

  const selectedRoomSizeConfig = useMemo(
    () =>
      roomSizes?.getRoomSizes
        ?.find((roomSize) => roomSize?.key?.name === selected)
        ?.sizes?.find((size) => size?.key?.name === selectedSize),
    // ROOMSSIZES.find(({ key }) => key === selected)?.sizes.find(
    //   ({ key }) => key === selectedSize
    // ),
    [selected, selectedSize, roomSizes]
  ) as IRoomSizesSizes;

  const blob = useMemo(
    () =>
      file ? URL.createObjectURL(new Blob([file], { type: 'image/png' })) : '',
    [file]
  );

  return (
    <AtomWrapper
      customCSS={css`
        border-radius: 10px;
        width: 100%;
        flex-direction: row;
        min-height: calc(100vh - 90px);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        align-items: center;
        justify-content: space-between;
        @media (max-width: 820px) {
          flex-direction: column-reverse;
        }
      `}
    >
      <AtomWrapper
        customCSS={css`
          width: 600px;
          height: max-content;
          align-items: flex-start;
          justify-content: flex-start;
          @media (max-width: 820px) {
            width: 100%;
          }
          background-color: #202024;
          box-shadow: 0px 0px 10px rgba(16, 16, 16, 0.563);
        `}
      >
        <AtomWrapper
          width="max-content"
          height="max-content"
          customCSS={css`
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            background-color: black;
            .PinturaRootWrapper {
              width: 600px;
              height: 600px;
            }

            .PinturaRoot {
              background-color: #202024;
              * {
                color: #fff;
              }
            }
            .PinturaStatus {
              background-color: #202024;
              color: #fff;
            }
          `}
        >
          <AtomButton
            customCSS={css`
              border-radius: 4px 0 0 4px;
              width: 100%;
              background-color: #e95c10;
              input {
                display: none;
              }
            `}
            onClick={() => {
              refInput.current?.click();
            }}
          >
            Cambiar imagen
            <input
              type="file"
              ref={refInput}
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  const file = e?.target?.files[0];
                  setFile(file);
                }
              }}
            />
          </AtomButton>
          <PinturaEditor
            {...getEditorDefaults()}
            enableButtonExport={false}
            src={blob}
            ref={ref}
            utils={['crop', 'filter', 'finetune', 'annotate', 'frame']}
            enableDropImage={false}
            imageCropAspectRatio={selectedConfig?.aspect}
            cropEnableCenterImageSelection
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onProcess={(res: any) => {
              const FilterAndCrop = URL.createObjectURL(res.dest);
              cropAndFilter(
                FilterAndCrop,
                setCropImages,
                selectedConfig?.x ?? 0,
                selectedConfig?.y ?? 0,
                setIsLoading,
                setColors,
                selectedConfig?.isPortrait ?? false,
                setCropImagesBlock
              );
              setQuantity((selectedConfig?.x ?? 0) * (selectedConfig?.y ?? 0));
            }}
          />
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
                  disabled={loading || isLoading}
                  key={board?.id}
                  onClick={() => {
                    setSelected(board?.type?.name as string);
                    setSelectedSize(
                      board?.sizes?.find((_, index) => index === 0)?.type
                        ?.name ?? 'SMALL'
                    );
                    setCropImages([]);
                    setCropImagesBlock([]);
                    setQuantity(0);
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
                    disabled={loading || isLoading}
                    key={size?.id}
                    onClick={() => {
                      setSelectedSize(size?.type?.name ?? 'SMALL');
                      setCropImages([]);
                      setCropImagesBlock([]);
                      setQuantity(0);
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
            <AtomWrapper
              customCSS={css`
                margin: 5px 0px;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                flex-direction: row;
              `}
            >
              <AtomButton
                disabled={loading || isLoading}
                width="100%"
                height="50px"
                backgroundColor="#e95c10"
                onClick={() => {
                  const REF = ref.current;
                  const editor = REF.editor as EditorMethods;
                  editor.processImage();
                }}
              >
                LET’S PIXIT!
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        customCSS={css`
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          @media (max-width: 820px) {
            width: 100%;
          }
        `}
      >
        <AtomWrapper
          customCSS={css`
            padding: 0px 20px;
            width: max-content;
            align-items: center;
            justify-content: center;
            background-color: #202024;
            box-shadow: 0px 0px 10px rgba(16, 16, 16, 0.563);
          `}
        >
          <AtomText
            customCSS={css`
              width: 100%;
              color: white;
              font-size: 12px;
              font-weight: 600;
              margin: 15px 0px;
              max-width: ${selectedConfig?.size?.width}px;
            `}
          >
            {
              boards?.getBoards
                ?.find((board) => board?.type?.name === selected)
                ?.sizes?.find((size) => size?.type?.name === selectedSize)
                ?.title
            }
          </AtomText>
          <AtomWrapper
            customCSS={css`
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              background-color: #313139;
            `}
          >
            {selectedRoom === 'DEFAULT' ? (
              <>
                {loading || isLoading ? (
                  <AtomLoader
                    isLoading
                    colorLoading="#dadadb"
                    type="small"
                    widthLoader="2px"
                    customCSS={css`
                      width: ${(selectedRoomSizeConfig?.width ?? 0) * 3}px;
                      height: ${(selectedRoomSizeConfig?.height ?? 0) * 3}px;
                      .lds-ring {
                        width: 30px;
                        height: 30px;
                        div {
                          margin: 1px 2px;
                          width: 30px;
                          height: 30px;
                        }
                      }
                    `}
                  />
                ) : (
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
                    {cropImagesBlock.length > 0 ? (
                      <>
                        {cropImagesBlock.map((image, i) => (
                          <AtomButton
                            key={`image${i}`}
                            customCSS={css`
                              display: flex;
                              padding: 0px;
                            `}
                            onClick={() => {
                              setModalImage(true);
                              setSelectedImage(i);
                            }}
                          >
                            <StyledImage
                              src={image.image}
                              alt="croppedImage"
                              customCSS={css`
                                ${showBorder &&
                                css`
                                  border: 2px solid #202024;
                                `}
                                width: ${((selectedRoomSizeConfig?.width ?? 0) *
                                  3 ?? 0) / (selectedConfig?.x ?? 0)}px;
                                height: ${((selectedRoomSizeConfig?.height ??
                                  0) * 3 ?? 0) / (selectedConfig?.y ?? 0)}px;
                              `}
                            />
                          </AtomButton>
                        ))}
                      </>
                    ) : (
                      <AtomWrapper
                        justifyContent="center"
                        alignItems="center"
                        width="max-content"
                      >
                        <AtomText
                          color="#dadadb"
                          fontSize="22px"
                          fontWeight={600}
                          customCSS={css`
                            text-align: center;
                          `}
                        >
                          Pixit your image
                        </AtomText>
                      </AtomWrapper>
                    )}
                  </AtomWrapper>
                )}
              </>
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
                    top: ${selectedRoomConfig.offset?.find(
                      (off) => off?.key?.name === selected
                    )?.top}px;
                    right: 50%;
                    transform: translate(50%, -50%);
                    background-color: #313139;
                    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.522);
                    outline: 1px solid #6a6a6a5c;
                  `}
                >
                  {loading || isLoading ? (
                    <AtomLoader
                      isLoading
                      colorLoading="#4a4a54"
                      type="small"
                      customCSS={css`
                        width: ${30 * (selectedConfig?.x ?? 0)}px;
                        height: ${30 * (selectedConfig?.y ?? 0)}px;
                        .lds-ring {
                          width: 30px;
                          height: 30px;
                          div {
                            margin: 1px 2px;
                            width: 30px;
                            height: 30px;
                          }
                        }
                      `}
                    />
                  ) : (
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
                      {cropImages.length > 0 ? (
                        <>
                          {cropImages.map((image, i) => (
                            <AtomButton
                              key={`image${i}`}
                              customCSS={css`
                                display: flex;
                                padding: 0px;
                              `}
                              onClick={() => {
                                setModalImage(true);
                                setSelectedImage(i);
                              }}
                            >
                              <StyledImage
                                src={image.image}
                                alt="croppedImage"
                                customCSS={css`
                                  ${showBorder &&
                                  css`
                                    border: 2px solid #202024;
                                  `}
                                  width: 30px;
                                  height: 30px;
                                `}
                              />
                            </AtomButton>
                          ))}
                        </>
                      ) : (
                        <AtomWrapper
                          justifyContent="center"
                          alignItems="center"
                          width="max-content"
                        >
                          <AtomText
                            color="#4a4a54"
                            fontSize={`${4 * (selectedConfig?.x ?? 0)}px`}
                            fontWeight={600}
                            customCSS={css`
                              text-align: center;
                            `}
                          >
                            Pixit your image
                          </AtomText>
                        </AtomWrapper>
                      )}
                    </AtomWrapper>
                  )}
                </AtomWrapper>
              </AtomWrapper>
            )}
          </AtomWrapper>

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
                value: `${room?.key}`,
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
          <AtomWrapper
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            padding="10px 20px 30px 20px"
          >
            <AtomInput
              type="checkbox"
              checked={showBorder}
              onChange={() => setShowBorder(!showBorder)}
              customCSS={css`
                margin-right: 30px;
                span {
                  display: none;
                }
                div {
                  font-size: 12px;
                  font-weight: 700;
                  color: #9f9faa;
                }
                input[type='checkbox'] {
                  position: relative;
                  width: 16px;
                  height: 16px;
                  color: #9f9faa;
                  background-color: #313139;
                  border: 1px solid #9f9faa;
                  border-radius: 4px;
                  appearance: none;
                  outline: 0;
                  cursor: pointer;
                  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
                  &::before {
                    position: absolute;
                    content: '';
                    display: block;
                    top: 0px;
                    left: 4px;
                    width: 6px;
                    height: 12px;
                    border-style: solid;
                    border-color: white;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                    opacity: 0;
                  }
                  &:checked {
                    color: #e95c10;
                    border-color: #e95c10;
                    background: #e95c10;
                    &::before {
                      opacity: 1;
                    }
                    ~ label::before {
                      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                    }
                  }
                }
              `}
            >
              Show Borders
            </AtomInput>
            {cropImages.length === 0 || loading || isLoading ? (
              <AtomButton
                disabled
                width="200px"
                backgroundColor="#d6d6d7"
                color="#4a4a54"
                fontSize="12px"
                padding="10px 30px"
              >
                PIXIT YOUR IMAGE
              </AtomButton>
            ) : (
              <DownloadPdf
                imagesBlock={cropImagesBlock.map((image) => image.image)}
                images={cropImages.map((image) => image.image)}
                colors={colors}
                height={`${selectedConfig.y}`}
                width={`${selectedConfig.x}`}
                isPortrait={selectedConfig.isPortrait}
                payment={{
                  color: colors,
                  isReady: !(cropImages.length === 0 || loading || isLoading),
                  board: boardSelected,
                  size: selectedConfig
                }}
              />
            )}
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>

      <AtomModalImage
        state={modalImage}
        setState={setModalImage}
        selected={selectedImage}
        setSelected={setSelectedImage}
        images={cropImagesBlock
          .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
          .map((image) => image.image)}
      />
    </AtomWrapper>
  );
};

export default OrganismsConvertImage;
