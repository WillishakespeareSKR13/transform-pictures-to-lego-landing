/* tslint:disable */
/* eslint-disable */

declare module 'graphql' {
  export type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
  export type IMutationFilter<T extends keyof IMutation> = Pick<IMutation, T>;

  export type IGraphQLResponseRoot = {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  };

  interface IGraphQLResponseError {
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  ////////////////////////////////////////////////////////////////////////////////

  export interface IQuery {
    ping?: string;
    me?: IUser;
    getUsers?: Array<IUser | null>;
    getUserById?: IUser;
    getRoles?: Array<IRole | null>;
    getRoleById?: IRole;
    getSaleOrders?: Array<ISaleOrder | null>;
    getSaleOrderById?: ISaleOrder;
    paySaleOrder?: ISaleOrder;
    getStoreTypes?: Array<IStoreType | null>;
    getStoreTypeById?: IStoreType;
    getStores?: Array<IStore | null>;
    getStoreById?: IStore;
    getProducts?: Array<IProducts | null>;
    getProductById?: IProducts;
    getBoardTypes?: Array<IBoardType | null>;
    getBoardTypeById?: IBoardType;
    getBoardSizeTypes?: Array<IBoardSizeType | null>;
    getBoardSizeTypeById?: IBoardSizeType;
    getBoardSizes?: Array<IBoardSize | null>;
    getBoardSizeById?: IBoardSize;
    getBoards?: Array<IBoard | null>;
    getBoardById?: IBoard;
  }

  export interface IUser {
    id?: string;
    name?: string;
    lastname?: string;
    nickname?: string;
    email?: string;
    password?: string;
    photo?: string;
    emailVerified?: boolean;
    disabled?: boolean;
    birthdate?: string;
    role?: IRole;
    store?: IStore;
  }

  export interface IRole {
    id?: string;
    name?: string;
  }

  export interface IStore {
    id?: string;
    name?: string;
    description?: string;
    phone?: string;
    email?: string;
    website?: string;
    photo?: string;
    cash?: number;
    currency?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    storeType?: IStoreType;
  }

  export interface IStoreType {
    id?: string;
    name?: string;
  }

  export interface ISaleOrder {
    id?: string;
    stripeId?: string;
    secret?: string;
    product?: string;
    size?: string;
    quantity?: number;
    price?: number;
    status?: string;
  }

  export interface IProducts {
    id?: string;
    name?: string;
    price?: number;
    description?: string;
    sku?: string;
    stock?: number;
    image?: string;
    store?: IStore;
  }

  export interface IBoardType {
    id?: string;
    name?: string;
  }

  export interface IBoardSizeType {
    id?: string;
    name?: string;
  }

  export interface IBoardSize {
    id?: string;
    aspect?: number;
    title?: string;
    board?: IBoard;
    type?: IBoardSizeType;
    x?: number;
    y?: number;
    isPortrait?: boolean;
    size?: IsizeBoard;
  }

  export interface IBoard {
    id?: string;
    type?: IBoardType;
    price?: number;
    currency?: string;
    title?: string;
    description?: string;
    image?: string;
    sizes?: Array<IBoardSize | null>;
  }

  export interface IsizeBoard {
    width?: string;
    height?: string;
  }

  export interface IMutation {
    pong?: string;
    newUser?: IUser;
    updateUser?: IUser;
    login?: ITokenUser;
    newRole?: IRole;
    updateRole?: IRole;
    newSaleOrder?: ISaleOrder;
    updateSaleOrder?: ISaleOrder;
    newStoreType?: IStoreType;
    updateStoreType?: IStoreType;
    newStore?: IStore;
    updateStore?: IStore;
    newProduct?: IProducts;
    updateProduct?: IProducts;
    newBoardType?: IBoardType;
    updateBoardType?: IBoardType;
    newBoardSizeType?: IBoardSizeType;
    updateBoardSizeType?: IBoardSizeType;
    newBoardSize?: IBoardSize;
    updateBoardSize?: IBoardSize;
    newBoard?: IBoard;
    updateBoard?: IBoard;
  }

  export interface IInputUser {
    name: string;
    lastname: string;
    nickname?: string;
    email: string;
    password: string;
    photo?: string;
    emailVerified?: boolean;
    disabled?: boolean;
    birthdate?: string;
    role?: string;
    store?: string;
  }

  export interface IInputLogin {
    email: string;
    password: string;
  }

  export interface ITokenUser {
    token?: string;
  }

  export interface IInputRole {
    name: string;
  }

  export interface IInputSaleOrder {
    product: string;
    size: string;
    quantity?: number;
  }

  export interface IInputStoreType {
    name: string;
  }

  export interface IInputStore {
    name?: string;
    description?: string;
    phone?: string;
    email?: string;
    website?: string;
    photo?: string;
    cash?: number;
    currency?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    storeType?: string;
  }

  export interface IInputProduct {
    name?: string;
    price?: number;
    description?: string;
    sku?: string;
    stock?: number;
    image?: string;
    store?: string;
  }

  export interface IInputBoardType {
    name: string;
  }

  export interface IInputBoardSizeType {
    name: string;
  }

  export interface IInputBoardSize {
    aspect?: number;
    title?: string;
    board?: string;
    type?: string;
    x?: number;
    y?: number;
    isPortrait?: boolean;
    size?: IInputSizeBoard;
  }

  export interface IInputSizeBoard {
    width?: string;
    height?: string;
  }

  export interface IInputBoard {
    type?: string;
    price?: number;
    currency?: string;
    title?: string;
    description?: string;
    image?: string;
  }

  /*********************************
   *                               *
   *         TYPE RESOLVERS        *
   *                               *
   *********************************/
  /**
   * This interface define the shape of your resolver
   * Note that this type is designed to be compatible with graphql-tools resolvers
   * However, you can still use other generated interfaces to make your resolver type-safed
   */
  export interface IResolver {
    Query?: IQueryTypeResolver;
    User?: IUserTypeResolver;
    Role?: IRoleTypeResolver;
    Store?: IStoreTypeResolver;
    StoreType?: IStoreTypeTypeResolver;
    SaleOrder?: ISaleOrderTypeResolver;
    Products?: IProductsTypeResolver;
    BoardType?: IBoardTypeTypeResolver;
    BoardSizeType?: IBoardSizeTypeTypeResolver;
    BoardSize?: IBoardSizeTypeResolver;
    Board?: IBoardTypeResolver;
    sizeBoard?: IsizeBoardTypeResolver;
    Mutation?: IMutationTypeResolver;
    TokenUser?: ITokenUserTypeResolver;
  }
  export interface IQueryTypeResolver<TParent = any> {
    ping?: QueryToPingResolver<TParent>;
    me?: QueryToMeResolver<TParent>;
    getUsers?: QueryToGetUsersResolver<TParent>;
    getUserById?: QueryToGetUserByIdResolver<TParent>;
    getRoles?: QueryToGetRolesResolver<TParent>;
    getRoleById?: QueryToGetRoleByIdResolver<TParent>;
    getSaleOrders?: QueryToGetSaleOrdersResolver<TParent>;
    getSaleOrderById?: QueryToGetSaleOrderByIdResolver<TParent>;
    paySaleOrder?: QueryToPaySaleOrderResolver<TParent>;
    getStoreTypes?: QueryToGetStoreTypesResolver<TParent>;
    getStoreTypeById?: QueryToGetStoreTypeByIdResolver<TParent>;
    getStores?: QueryToGetStoresResolver<TParent>;
    getStoreById?: QueryToGetStoreByIdResolver<TParent>;
    getProducts?: QueryToGetProductsResolver<TParent>;
    getProductById?: QueryToGetProductByIdResolver<TParent>;
    getBoardTypes?: QueryToGetBoardTypesResolver<TParent>;
    getBoardTypeById?: QueryToGetBoardTypeByIdResolver<TParent>;
    getBoardSizeTypes?: QueryToGetBoardSizeTypesResolver<TParent>;
    getBoardSizeTypeById?: QueryToGetBoardSizeTypeByIdResolver<TParent>;
    getBoardSizes?: QueryToGetBoardSizesResolver<TParent>;
    getBoardSizeById?: QueryToGetBoardSizeByIdResolver<TParent>;
    getBoards?: QueryToGetBoardsResolver<TParent>;
    getBoardById?: QueryToGetBoardByIdResolver<TParent>;
  }

  export interface QueryToPingResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToMeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetUsersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetUserByIdArgs {
    id: string;
  }
  export interface QueryToGetUserByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetUserByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetRolesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetRoleByIdArgs {
    id: string;
  }
  export interface QueryToGetRoleByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetRoleByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSaleOrdersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSaleOrderByIdArgs {
    id: string;
  }
  export interface QueryToGetSaleOrderByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetSaleOrderByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToPaySaleOrderArgs {
    id: string;
  }
  export interface QueryToPaySaleOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToPaySaleOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetStoreTypesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetStoreTypeByIdArgs {
    id: string;
  }
  export interface QueryToGetStoreTypeByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetStoreTypeByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetStoresResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetStoreByIdArgs {
    id: string;
  }
  export interface QueryToGetStoreByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetStoreByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProductsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProductByIdArgs {
    id: string;
  }
  export interface QueryToGetProductByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetProductByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardTypesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardTypeByIdArgs {
    id: string;
  }
  export interface QueryToGetBoardTypeByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetBoardTypeByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardSizeTypesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardSizeTypeByIdArgs {
    id: string;
  }
  export interface QueryToGetBoardSizeTypeByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetBoardSizeTypeByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardSizesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardSizeByIdArgs {
    id: string;
  }
  export interface QueryToGetBoardSizeByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetBoardSizeByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetBoardByIdArgs {
    id: string;
  }
  export interface QueryToGetBoardByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetBoardByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUserTypeResolver<TParent = any> {
    id?: UserToIdResolver<TParent>;
    name?: UserToNameResolver<TParent>;
    lastname?: UserToLastnameResolver<TParent>;
    nickname?: UserToNicknameResolver<TParent>;
    email?: UserToEmailResolver<TParent>;
    password?: UserToPasswordResolver<TParent>;
    photo?: UserToPhotoResolver<TParent>;
    emailVerified?: UserToEmailVerifiedResolver<TParent>;
    disabled?: UserToDisabledResolver<TParent>;
    birthdate?: UserToBirthdateResolver<TParent>;
    role?: UserToRoleResolver<TParent>;
    store?: UserToStoreResolver<TParent>;
  }

  export interface UserToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToLastnameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToNicknameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToEmailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToPasswordResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToPhotoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToEmailVerifiedResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToDisabledResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToBirthdateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToRoleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRoleTypeResolver<TParent = any> {
    id?: RoleToIdResolver<TParent>;
    name?: RoleToNameResolver<TParent>;
  }

  export interface RoleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RoleToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStoreTypeResolver<TParent = any> {
    id?: StoreToIdResolver<TParent>;
    name?: StoreToNameResolver<TParent>;
    description?: StoreToDescriptionResolver<TParent>;
    phone?: StoreToPhoneResolver<TParent>;
    email?: StoreToEmailResolver<TParent>;
    website?: StoreToWebsiteResolver<TParent>;
    photo?: StoreToPhotoResolver<TParent>;
    cash?: StoreToCashResolver<TParent>;
    currency?: StoreToCurrencyResolver<TParent>;
    street?: StoreToStreetResolver<TParent>;
    city?: StoreToCityResolver<TParent>;
    state?: StoreToStateResolver<TParent>;
    zip?: StoreToZipResolver<TParent>;
    storeType?: StoreToStoreTypeResolver<TParent>;
  }

  export interface StoreToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToEmailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToWebsiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToPhotoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToCashResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToCurrencyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToStreetResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToCityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToZipResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToStoreTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStoreTypeTypeResolver<TParent = any> {
    id?: StoreTypeToIdResolver<TParent>;
    name?: StoreTypeToNameResolver<TParent>;
  }

  export interface StoreTypeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreTypeToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISaleOrderTypeResolver<TParent = any> {
    id?: SaleOrderToIdResolver<TParent>;
    stripeId?: SaleOrderToStripeIdResolver<TParent>;
    secret?: SaleOrderToSecretResolver<TParent>;
    product?: SaleOrderToProductResolver<TParent>;
    size?: SaleOrderToSizeResolver<TParent>;
    quantity?: SaleOrderToQuantityResolver<TParent>;
    price?: SaleOrderToPriceResolver<TParent>;
    status?: SaleOrderToStatusResolver<TParent>;
  }

  export interface SaleOrderToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToStripeIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToSecretResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToSizeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToQuantityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProductsTypeResolver<TParent = any> {
    id?: ProductsToIdResolver<TParent>;
    name?: ProductsToNameResolver<TParent>;
    price?: ProductsToPriceResolver<TParent>;
    description?: ProductsToDescriptionResolver<TParent>;
    sku?: ProductsToSkuResolver<TParent>;
    stock?: ProductsToStockResolver<TParent>;
    image?: ProductsToImageResolver<TParent>;
    store?: ProductsToStoreResolver<TParent>;
  }

  export interface ProductsToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToSkuResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToStockResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductsToStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBoardTypeTypeResolver<TParent = any> {
    id?: BoardTypeToIdResolver<TParent>;
    name?: BoardTypeToNameResolver<TParent>;
  }

  export interface BoardTypeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardTypeToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBoardSizeTypeTypeResolver<TParent = any> {
    id?: BoardSizeTypeToIdResolver<TParent>;
    name?: BoardSizeTypeToNameResolver<TParent>;
  }

  export interface BoardSizeTypeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeTypeToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBoardSizeTypeResolver<TParent = any> {
    id?: BoardSizeToIdResolver<TParent>;
    aspect?: BoardSizeToAspectResolver<TParent>;
    title?: BoardSizeToTitleResolver<TParent>;
    board?: BoardSizeToBoardResolver<TParent>;
    type?: BoardSizeToTypeResolver<TParent>;
    x?: BoardSizeToXResolver<TParent>;
    y?: BoardSizeToYResolver<TParent>;
    isPortrait?: BoardSizeToIsPortraitResolver<TParent>;
    size?: BoardSizeToSizeResolver<TParent>;
  }

  export interface BoardSizeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToAspectResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToBoardResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToXResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToYResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToIsPortraitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardSizeToSizeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBoardTypeResolver<TParent = any> {
    id?: BoardToIdResolver<TParent>;
    type?: BoardToTypeResolver<TParent>;
    price?: BoardToPriceResolver<TParent>;
    currency?: BoardToCurrencyResolver<TParent>;
    title?: BoardToTitleResolver<TParent>;
    description?: BoardToDescriptionResolver<TParent>;
    image?: BoardToImageResolver<TParent>;
    sizes?: BoardToSizesResolver<TParent>;
  }

  export interface BoardToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToCurrencyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BoardToSizesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IsizeBoardTypeResolver<TParent = any> {
    width?: sizeBoardToWidthResolver<TParent>;
    height?: sizeBoardToHeightResolver<TParent>;
  }

  export interface sizeBoardToWidthResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface sizeBoardToHeightResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMutationTypeResolver<TParent = any> {
    pong?: MutationToPongResolver<TParent>;
    newUser?: MutationToNewUserResolver<TParent>;
    updateUser?: MutationToUpdateUserResolver<TParent>;
    login?: MutationToLoginResolver<TParent>;
    newRole?: MutationToNewRoleResolver<TParent>;
    updateRole?: MutationToUpdateRoleResolver<TParent>;
    newSaleOrder?: MutationToNewSaleOrderResolver<TParent>;
    updateSaleOrder?: MutationToUpdateSaleOrderResolver<TParent>;
    newStoreType?: MutationToNewStoreTypeResolver<TParent>;
    updateStoreType?: MutationToUpdateStoreTypeResolver<TParent>;
    newStore?: MutationToNewStoreResolver<TParent>;
    updateStore?: MutationToUpdateStoreResolver<TParent>;
    newProduct?: MutationToNewProductResolver<TParent>;
    updateProduct?: MutationToUpdateProductResolver<TParent>;
    newBoardType?: MutationToNewBoardTypeResolver<TParent>;
    updateBoardType?: MutationToUpdateBoardTypeResolver<TParent>;
    newBoardSizeType?: MutationToNewBoardSizeTypeResolver<TParent>;
    updateBoardSizeType?: MutationToUpdateBoardSizeTypeResolver<TParent>;
    newBoardSize?: MutationToNewBoardSizeResolver<TParent>;
    updateBoardSize?: MutationToUpdateBoardSizeResolver<TParent>;
    newBoard?: MutationToNewBoardResolver<TParent>;
    updateBoard?: MutationToUpdateBoardResolver<TParent>;
  }

  export interface MutationToPongResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewUserArgs {
    input?: IInputUser;
  }
  export interface MutationToNewUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToNewUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateUserArgs {
    id: string;
    input?: IInputUser;
  }
  export interface MutationToUpdateUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToLoginArgs {
    input?: IInputLogin;
  }
  export interface MutationToLoginResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToLoginArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewRoleArgs {
    input?: IInputRole;
  }
  export interface MutationToNewRoleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToNewRoleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateRoleArgs {
    id: string;
    input?: IInputRole;
  }
  export interface MutationToUpdateRoleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateRoleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewSaleOrderArgs {
    input?: IInputSaleOrder;
  }
  export interface MutationToNewSaleOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToNewSaleOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSaleOrderArgs {
    id: string;
    input?: IInputSaleOrder;
  }
  export interface MutationToUpdateSaleOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateSaleOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewStoreTypeArgs {
    input?: IInputStoreType;
  }
  export interface MutationToNewStoreTypeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToNewStoreTypeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateStoreTypeArgs {
    id: string;
    input?: IInputStoreType;
  }
  export interface MutationToUpdateStoreTypeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateStoreTypeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewStoreArgs {
    input?: IInputStore;
  }
  export interface MutationToNewStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToNewStoreArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateStoreArgs {
    id: string;
    input?: IInputStore;
  }
  export interface MutationToUpdateStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateStoreArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewProductArgs {
    input?: IInputProduct;
  }
  export interface MutationToNewProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToNewProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateProductArgs {
    id: string;
    input?: IInputProduct;
  }
  export interface MutationToUpdateProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewBoardTypeArgs {
    input?: IInputBoardType;
  }
  export interface MutationToNewBoardTypeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToNewBoardTypeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateBoardTypeArgs {
    id: string;
    input?: IInputBoardType;
  }
  export interface MutationToUpdateBoardTypeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateBoardTypeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewBoardSizeTypeArgs {
    input?: IInputBoardSizeType;
  }
  export interface MutationToNewBoardSizeTypeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToNewBoardSizeTypeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateBoardSizeTypeArgs {
    id: string;
    input?: IInputBoardSizeType;
  }
  export interface MutationToUpdateBoardSizeTypeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateBoardSizeTypeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewBoardSizeArgs {
    input?: IInputBoardSize;
  }
  export interface MutationToNewBoardSizeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToNewBoardSizeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateBoardSizeArgs {
    id: string;
    input?: IInputBoardSize;
  }
  export interface MutationToUpdateBoardSizeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateBoardSizeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToNewBoardArgs {
    input?: IInputBoard;
  }
  export interface MutationToNewBoardResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToNewBoardArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateBoardArgs {
    id: string;
    input?: IInputBoard;
  }
  export interface MutationToUpdateBoardResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateBoardArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ITokenUserTypeResolver<TParent = any> {
    token?: TokenUserToTokenResolver<TParent>;
  }

  export interface TokenUserToTokenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }
}
