/* tslint:disable */
/* eslint-disable */

declare module 'graphql' {
  export declare type IQueryFilter<T extends keyof IQuery> = Pick<IQuery, T>;
  export declare type IMutationFilter<T extends keyof IMutation> = Pick<
    IMutation,
    T
  >;

  export declare type IGraphQLResponseRoot = {
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
    listUser?: IUserReturn;
    getUserById?: IUser;
    listProfile?: Array<IProfile | null>;
    getProfileById?: IProfile;
    listDetail?: Array<IDetail | null>;
    getDetailById?: IDetail;
    listMailingAddress?: Array<IMailingAddress | null>;
    getMailingAddressById?: IMailingAddress;
    listInvoiceAddress?: Array<IInvoiceAddress | null>;
    getInvoiceAddressById?: IInvoiceAddress;
    searchEmailUser?: IEmailUserReturn;
    users: Array<IUser>;
    profile: Array<IProfile>;
    detail: Array<IDetail>;
    mailingaddress: Array<IMailingAddress>;
    mailingaddressForID: IMailingAddress;
    me: IProfile;
    listPartner?: IPartnerReturn;
    getPartnerById?: IPartner;
    checkUrlFromPartner: boolean;
    listAccess?: IAccessReturn;
    getAccessById?: IAccess;
    listRule?: IRuleReturn;
    getRuleById?: IRule;
    organization: Array<IOrganization>;
    partner: Array<IPartner>;
    app: Array<IApp>;
    orgapp: Array<IOrgApp>;
    access: Array<IAccess>;
    group: Array<IGroup>;
    rule: Array<IRule>;
    rol: Array<IRol>;
    liveness?: IStartupstatus;
    readiness?: IStartupstatus;
    getSellerByIdUser?: ISellerUser;
    listUserSellers: ISellerUserReturn;
    getSector?: ISector;
    listSectors: ISectorReturn;
    getFeatured?: IFeatured;
    listFeatured: IFeaturedReturn;
    listCategory?: ICategoryReturn;
    getCategoryById?: ICategory;
    listSubcategory?: ISubcategoryReturn;
    getSubcategoryById?: ISubcategory;
    listProduct?: IProductReturn;
    getProductById?: IProduct;
    listProductSemi?: IProductSemiReturn;
    getProductSemiById?: IProductSemi;
    listCatalogSemi?: ICatalogSemiReturn;
    listLocationsSemi?: ILocationsSemiReturn;
    listAttributesSemi?: IAttributesSemiReturn;
    listAppraisalsSemi?: IAppraisalPayload;
    listCardealersSemi?: ICardealersSemiReturn;
    listCatalogSemiNew?: ICatalogSemiNewReturn;
    listAddress?: IAddressReturn;
    getAddressById?: IAddress;
    listAttachment?: IAttachmentReturn;
    getAttachmentById?: IAttachment;
    listDetailProperty?: IDetailPropertyReturn;
    getDetailPropertyById?: IDetailProperty;
    listVersion?: IVersionReturn;
    getVersionById?: IVersion;
    listSaleOrder?: ISaleOrderReturn;
    getSaleOrderById?: ISaleOrder;
    getSaleOrderMe: Array<ISaleOrder | null>;
    getSaleOrderMeLast: ISaleOrder;
    listProductOrder?: IProductOrderReturn;
    getProductOrderById?: IProductOrder;
    listReview?: IReviewReturn;
    getReviewById?: IReview;
    listConversation?: IConversationReturn;
    getConversationById?: IConversation;
    listZipCode?: IZipCodeReturn;
    getZipCodeById?: IZipCode;
    listStores?: IStoreReturn;
    getStoreById?: IStore;
    listJourney?: IJourneyReturn;
    getJourneyById?: IJourney;
    listShipload?: IShiploadReturn;
    getShipload?: IShipProd;
    listShiploadProduct?: IShiploadProductReturn;
    listWishLists?: IWishListReturn;
    getWishListById?: IWishList;
    listWishedItems?: IWishedProductReturn;
    getWishedItemById?: IWishedProduct;
    listSectionOfProduct?: ISectionOfProductReturn;
    getSectionOfProduct?: ISectionOfProduct;
    listTemplateInfo?: ITemplateInfoReturn;
    getTemplateInfo?: ITemplateInfo;
    listValueOfTemplate?: IValuesOfTemplateReturn;
    getValueOfTemplate?: IValuesOfTemplate;
    review: Array<IReview>;
    conversation: Array<IConversation>;
    talk: Array<ITalk>;
    listDepartments: Array<IqueryDepartment | null>;
    listWaste?: IRecordReturn;
    listInvoices: Array<IqueryInvoice | null>;
    getInvoiceBySaleOrder?: IqueryInvoice;
    storesWithDebts?: IDebtsReturn;
    getSellerBySaleOrderDash?: ISellerSaleOrderReturn;
    getProductBySaleOrderDash?: IProductSaleOrderReturn;
    listPromotion?: IPromotionReturn;
    getPromotionById?: IPromotion;
    key: Array<IKey>;
    payments: Array<IPayment>;
    paymentForSalesOrder: Array<IPayment>;
    listArticle?: IArticleReturn;
    getArticleById?: IArticle;
    listAttachmentOfArticle?: IAttachmentOfArticleReturn;
    getAttachmentOfArticleById?: IAttachmentOfArticle;
    listTagsOfArticle?: ITagsOfArticleReturn;
    getTagsOfArticleById?: ITagsOfArticle;
    listCategoryOfArticle?: ICategoryOfArticleReturn;
    getCategoryOfArticleById?: ICategoryOfArticle;
    listComments?: ICommentReturn;
    getComment?: IComment;
    listVotesOnComment?: IVoteOnCommentReturn;
    getVoteOnComment?: IVoteOnComment;
    listTopic?: ITopicReturn;
    getTopic?: ITopic;
    listProgram?: IProgramReturn;
    getProgram?: IProgram;
    listPodcast?: IPodcastReturn;
    getPodcast?: IPodcast;
    listCategoryForEntertaiment?: ICategoryForEntertaimentReturn;
    getCategoryForEntertaiment?: ICategoryForEntertaiment;
    listMetadataForEntertaiment?: IMetadataForEntertaimentReturn;
    getMetadataForEntertaiment?: IMetadataForEntertaiment;
    listMeme?: IMemeReturn;
    getMeme?: IMeme;
    listDomiConversation?: IChatBotResult;
    listDomiConversationMessages?: Array<IChatBotMessage | null>;
    getDomiConversationsMetrics?: IDomiMetrics;
    getDomiConversationsMetricsByProperty?: IDomiMetrics;
    getAppointmentById?: IAppointment;
    listAppointments?: IAppointmentResult;
    listAppointmentsByUser?: IAppointmentResult;
    listAvailableSchedules?: Array<IAvailableSchedule | null>;
    listLogs?: ILogsByPage;
    getAddressValidation?: IStatusReturn;
    getRating?: IStatusReturn;
    getTimeInTransit?: ITimeInTransit;
    getGoal?: IGoal;
    goalList?: IgoalReturn;
    listPage?: IPageReturn;
    getPageById?: IPage;
    listPageSection?: IPageSectionReturn;
    getPageSectionById?: IPageSection;
    listPageSubsection?: IPageSubsectionReturn;
    getPageSubsectionById?: IPageSubsection;
    listPageHeader?: IPageHeaderReturn;
    getPageHeaderById?: IPageHeader;
    listMetadata?: IMetadataReturn;
    getMetadataById?: IMetadata;
    listKeywords?: IKeywordsReturn;
    getKeywordsById?: IKeywords;
    listDirectory?: IDirectoryReturn;
    getDirectoryById?: IDirectory;
    listSites?: ISitesReturn;
    getSitesById?: ISites;
    listStyle?: IStyleReturn;
    getStyle?: IStyle;
    listFont?: IFontReturn;
    getFont?: IFont;
    listColor?: IColorReturn;
    getColor?: IColor;
    listLogo?: ILogoReturn;
    getLogo?: ILogo;
    listCarousel?: ICarouselReturn;
    getCarousel?: ICarousel;
    getPageMetadata?: IPageMetadata;
  }

  export interface IUserFilterInput {
    page?: number;
    limit?: number;
    id?: string;
    username?: string;
    email?: string;
    numberPhone?: string;
    fullname?: string;
    lastlogin?: ISTATUS_LAST_LOGIN;
    isactive?: boolean;
    accesscode?: Array<string | null>;
    partnerCode?: string;
    region?: Array<string | null>;
    agent?: Array<string | null>;
    orderBy?: IUSER_ORDER_BY;
  }

  export const enum ISTATUS_LAST_LOGIN {
    LASTMONTH = 'LASTMONTH'
  }

  export const enum IUSER_ORDER_BY {
    FIRSTNAME = 'FIRSTNAME',
    FIRSTNAMEDESC = 'FIRSTNAMEDESC',
    LASTNAME = 'LASTNAME',
    LASTNAMEDESC = 'LASTNAMEDESC',
    DATEJOINED = 'DATEJOINED',
    DATEJOINEDDESC = 'DATEJOINEDDESC'
  }

  export interface IUserReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IUser | null>;
  }

  export interface IUser {
    id: string;
    firstname?: string;
    lastname?: string;
    fullname?: string;
    email: string;
    username?: string;
    isstaff?: boolean;
    isactive?: boolean;
    issuperuser?: boolean;
    lastlogin?: IDatetime;
    userinprofile?: IProfile;
    salesOrders?: Array<ISaleOrder | null>;
    conversations?: Array<IConversation | null>;
    agentproducts?: Array<IProduct | null>;
    appointments?: Array<IAppointment | null>;
    logsUser?: Array<ILog | null>;
  }

  export type IDatetime = any;

  export interface IProfile {
    id: string;
    user?: IUser;
    partner?: IPartner;
    access?: IAccess;
    city?: string;
    country?: string;
    gender?: string;
    age?: number;
    birthdate?: IDatetime;
    phone?: string;
    picture?: string;
    acronym?: string;
    editor?: boolean;
    agent?: IUser;
    profileindetail?: Array<IDetail | null>;
    profileinmailingaddress?: Array<IMailingAddress | null>;
    profileinregion?: Array<IRegion | null>;
    profileininvoiceaddress?: Array<IInvoiceAddress | null>;
  }

  export interface IPartner {
    id: string;
    organization?: IOrganization;
    name: string;
    code: string;
    description?: string;
    url?: string;
    urlFront?: string;
    urlImage?: string;
    phone?: string;
    email?: string;
    sector?: ISector;
    featured?: IFeatured;
    active?: boolean;
    partnerSocialmedia?: Array<ISocialMedia | null>;
    partnerDatacontact?: Array<IDataContact | null>;
    partnerAccess?: Array<IAccess | null>;
    sectionOfProduct?: Array<ISectionOfProduct | null>;
    site?: Array<ISites | null>;
  }

  export interface IOrganization {
    id: string;
    name?: string;
    code: string;
    orgOrgapp?: Array<IOrgApp | null>;
    sites?: Array<ISite | null>;
  }

  export interface IOrgApp {
    id: string;
    app?: IApp;
    paid?: boolean;
  }

  export interface IApp {
    id: string;
    name?: string;
    code?: string;
    description?: string;
  }

  export interface ISite {
    id: string;
    domain?: string;
    logo?: string;
    code: string;
    token?: string;
    organizations?: Array<IOrganization | null>;
  }

  export interface ISector {
    id?: string;
    name?: string;
    description?: string;
    partnerSector?: Array<IPartner | null>;
  }

  export interface IFeatured {
    id?: string;
    name?: string;
    description?: string;
    partnerFeatured?: Array<IPartner | null>;
  }

  export interface ISocialMedia {
    id: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  }

  export interface IDataContact {
    id: string;
    whatsapp?: string;
    phone?: string;
    client?: string;
  }

  export interface IAccess {
    id: string;
    partner?: IPartner;
    name: string;
    code: string;
    level?: string;
    accessGroup?: Array<IGroup | null>;
  }

  export interface IGroup {
    id: string;
    access?: IAccess;
    name: string;
    code: string;
    level?: string;
    description?: string;
    groupRol?: Array<IRol | null>;
  }

  export interface IRol {
    id: string;
    group?: IGroup;
    rule?: IRule;
    name?: string;
  }

  export interface IRule {
    id: string;
    name: string;
    description?: string;
    code: string;
    level?: string;
    levelPublic?: string;
    min?: number;
    max?: number;
    companyLife?: number;
    companyGMM?: number;
    partner?: IPartner;
  }

  export interface ISectionOfProduct {
    id?: string;
    name?: string;
    active?: boolean;
    sectionInfo?: Array<ITemplateInfo | null>;
    partnerCode: string;
    partner?: IPartner;
  }

  export interface ITemplateInfo {
    id?: string;
    sectionOfProduct?: ISectionOfProduct;
    nameField?: string;
    valueTemplate?: Array<IValuesOfTemplate | null>;
  }

  export interface IValuesOfTemplate {
    id?: string;
    templateInfo?: ITemplateInfo;
    product?: IProduct;
    value?: string;
  }

  export interface IProduct {
    id: string;
    site?: ISite;
    category?: ICategory;
    subcategory?: ISubcategory;
    brand?: IBrand;
    type?: string;
    name: string;
    sku: string;
    price: number;
    offers?: number;
    discount?: number;
    model?: string;
    stock?: number;
    stocktaking?: string;
    active?: boolean;
    status?: IENUM_PRODUCT_STATUS;
    description?: string;
    modeldate?: string;
    agente: number;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    partnercode?: string;
    condition?: string;
    publicationdate?: IDatetime;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    box_size?: number;
    review?: number;
    productaddress?: Array<IAddress | null>;
    productinattachment?: Array<IAttachment | null>;
    productindproperty?: Array<IDetailProperty | null>;
    productinversion?: Array<IVersion | null>;
    productinconversation?: Array<IConversation | null>;
    productinschedule?: Array<ISchedule | null>;
    valueProduct?: Array<IValuesOfTemplate | null>;
    benefitsProduct?: Array<IBenefitsOfProduct | null>;
    agentproducts?: Array<IUser | null>;
  }

  export interface ICategory {
    id: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    site?: ISite;
    name: string;
    description?: string;
    image?: string;
    categoryinsubcategory?: Array<ISubcategory | null>;
  }

  export interface ISubcategory {
    id: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    site?: ISite;
    category?: ICategory;
    name: string;
    description?: string;
    image?: string;
  }

  export interface IBrand {
    id: string;
    name: string;
    createdAt?: IDatetime;
    updatedAt?: IDatetime;
    site?: ISite;
  }

  export const enum IENUM_PRODUCT_STATUS {
    DRAFT = 'DRAFT',
    APPROVED = 'APPROVED'
  }

  export interface IAddress {
    id: string;
    product?: IProduct;
    street?: string;
    suburb: string;
    town?: string;
    state?: string;
    country?: string;
    cp?: string;
    numint?: string;
    numext?: string;
    longitude?: string;
    latitude?: string;
    constructionarea?: string;
    totalarea?: string;
  }

  export interface IAttachment {
    id: string;
    product?: IProduct;
    version?: IVersion;
    url: string;
    type: string;
    title?: string;
  }

  export interface IVersion {
    id: string;
    product?: IProduct;
    price: number;
    offers: number;
    productiondate?: IDatetime;
    version: string;
    material?: string;
    odometer?: number;
    interiorcolor?: string;
    exteriorcolor?: string;
    stock?: number;
    stocktaking?: string;
    active?: boolean;
    versionincolorext?: Array<IColors | null>;
    versionincolorint?: Array<IColors | null>;
    versioninattachment?: Array<IAttachment | null>;
  }

  export interface IColors {
    id: string;
    name: string;
    image: string;
  }

  export interface IDetailProperty {
    id: string;
    product?: IProduct;
    transaction?: string;
    offer?: string;
    modality?: string;
    environment?: string;
    numparking?: number;
    numbathroom?: number;
    numbedroom?: number;
    maintenance?: string;
    numbathroommed?: number;
    antiquity?: number;
    warehouse?: boolean;
    studio?: boolean;
    partyroom?: boolean;
    multipurposeroom?: boolean;
    tvroom?: boolean;
    lobby?: boolean;
    gym?: boolean;
    playarea?: boolean;
    furnished?: boolean;
    privatesecurity?: boolean;
    cistern?: boolean;
    basicservices?: boolean;
    gas?: boolean;
    waterheater?: boolean;
    elevator?: boolean;
    roaster?: boolean;
    tenniscourt?: boolean;
    squashcourt?: boolean;
    weighingmachine?: boolean;
    swimmingpool?: boolean;
    utilityrooms?: boolean;
    nearbyschools?: boolean;
    integralkitchen?: boolean;
    disabledaccess?: boolean;
  }

  export interface IConversation {
    id: string;
    product: IProduct;
    code?: string;
    user: number;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    conversationintalk?: Array<ITalk | null>;
    userconversation?: IUser;
  }

  export interface ITalk {
    id: string;
    conversation?: IConversation;
    user: number;
    talk: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    usertalk?: IUser;
  }

  export interface ISchedule {
    id: string;
    product?: string;
    since?: string;
    until?: string;
    days?: string;
  }

  export interface IBenefitsOfProduct {
    id?: string;
    product?: string;
    title?: string;
    information?: string;
    bulletsBenefits?: Array<IBulletsOfBenefits | null>;
  }

  export interface IBulletsOfBenefits {
    id?: string;
    description?: string;
  }

  export interface ISites {
    id: string;
    metadata?: IMetadata;
    pages?: Array<IPage | null>;
    directory?: Array<IDirectory | null>;
    styleSite?: Array<IStyle | null>;
    subCode?: string;
    partner?: IPartner;
  }

  export interface IMetadata {
    id: string;
    title?: string;
    description?: string;
    keywords?: Array<IKeywords | null>;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface IKeywords {
    id: string;
    keyword?: string;
  }

  export interface IPage {
    id: string;
    slugEs?: string;
    slugEn?: string;
    titleEs?: string;
    titleEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
    metaDescriptionEs?: string;
    metaDescriptionEn?: string;
    createdAt?: IDatetime;
    updatedAt?: IDatetime;
    status?: IENUM_PAGE_STATUS;
    header?: IPageHeader;
    sections?: Array<IPageSection | null>;
    intoPage?: Array<IPageSectionIntoPage | null>;
    metadataPage?: IPageMetadata;
  }

  export const enum IENUM_PAGE_STATUS {
    DRAFT = 'DRAFT',
    REJECTED = 'REJECTED',
    APPROVED = 'APPROVED'
  }

  export interface IPageHeader {
    id: string;
    title?: string;
    description?: string;
    banner?: string;
  }

  export interface IPageSection {
    id: string;
    titleEs?: string;
    titleEn?: string;
    contentEs?: string;
    contentEn?: string;
    skuEs?: string;
    skuEn?: string;
    image?: string;
    active?: boolean;
    subsections?: Array<IPageSubsection | null>;
    intoSection?: Array<IPageSectionIntoPage | null>;
    carouselSection?: Array<ICarousel | null>;
    carouselintoSection?: Array<ICarouselIntoPageSection | null>;
  }

  export interface IPageSubsection {
    id: string;
    titleEs?: string;
    titleEn?: string;
    contentEs?: string;
    contentEn?: string;
    image?: string;
  }

  export interface IPageSectionIntoPage {
    id?: string;
    page?: IPage;
    pageSection?: IPageSection;
    active: boolean;
    titleEs?: string;
    titleEn?: string;
  }

  export interface ICarousel {
    id?: string;
    titleEs?: string;
    titleEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
    keyWordsEs?: string;
    keyWordsEn?: string;
    altEs?: string;
    altEn?: string;
    image?: string;
    order?: number;
    carouselSection?: IPageSection;
    carouselintoCarousel?: Array<ICarouselIntoPageSection | null>;
  }

  export interface ICarouselIntoPageSection {
    id?: string;
    carousel?: ICarousel;
    pageSection?: IPageSection;
  }

  export interface IPageMetadata {
    id?: string;
    page?: IPage;
    title?: string;
    slug?: string;
    description?: string;
    keyWords?: string;
    structuredMarked?: string;
    altImage?: string;
  }

  export interface IDirectory {
    id: string;
    site: string;
    name?: string;
    country?: string;
    latitude?: string;
    longitude?: string;
    phone?: string;
    mobile?: string;
  }

  export interface IStyle {
    id?: string;
    site?: ISites;
    order?: number;
    logoStyle?: Array<ILogo | null>;
    colorStyle?: Array<IColor | null>;
    fontStyle?: Array<IFont | null>;
  }

  export interface ILogo {
    id?: string;
    style?: IStyle;
    height?: string;
    length?: string;
    width?: string;
    url?: string;
  }

  export interface IColor {
    id?: string;
    style?: IStyle;
    header?: string;
    highlight?: string;
    background?: string;
    backgroundSecondary?: string;
    positive?: string;
    negative?: string;
  }

  export interface IFont {
    id?: string;
    style?: IStyle;
    titleFont?: string;
    textFont?: string;
    align?: IENUM_TEXT_ALIGN;
  }

  export const enum IENUM_TEXT_ALIGN {
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
  }

  export interface IDetail {
    id: string;
    profile?: IProfile;
    name?: string;
    value?: string;
  }

  export interface IMailingAddress {
    id: string;
    profile?: IProfile;
    name?: string;
    deliverto?: string;
    phone?: string;
    email?: string;
    street?: string;
    numint?: string;
    numext?: string;
    suburb?: string;
    town?: string;
    state?: string;
    codeState?: string;
    cp?: string;
    detail?: string;
    principal?: boolean;
  }

  export interface IRegion {
    id: string;
    profile: string;
    name?: string;
    value?: string;
  }

  export interface IInvoiceAddress {
    id: string;
    profile?: IProfile;
    mailingAddress?: IMailingAddress;
    rfc?: string;
    socialReason?: string;
    street?: string;
    numint?: string;
    numext?: string;
    suburb?: string;
    town?: string;
    state?: string;
    cp?: string;
  }

  export interface ISaleOrder {
    id: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    site?: ISite;
    user: number;
    payment?: number;
    code?: string;
    price?: number;
    validityDate?: IDatetime;
    number?: number;
    paid?: boolean;
    status?: ISTATUS_SALEORDER;
    sendstatus?: string;
    guidenumber?: string;
    mailingaddress?: number;
    storage?: number;
    typeSale?: IENUM_TYPE_SALE_ORDER;
    saleinporder?: Array<IProductOrder | null>;
    shipload?: IShipload;
    store?: IStore;
    seller?: number;
    users?: Array<IUser | null>;
    sellers?: ISellerUser;
    payments?: Array<IPayment | null>;
  }

  export const enum ISTATUS_SALEORDER {
    PENDING = 'PENDING',
    SOLD = 'SOLD',
    CANCEL = 'CANCEL',
    PAYEDBYENTERPRISE = 'PAYEDBYENTERPRISE',
    PAYEDBYSELLER = 'PAYEDBYSELLER',
    APPROVED = 'APPROVED',
    SHIPPED = 'SHIPPED'
  }

  export const enum IENUM_TYPE_SALE_ORDER {
    RETAIL = 'RETAIL',
    WHOLESALER = 'WHOLESALER',
    ORDER = 'ORDER'
  }

  export interface IProductOrder {
    id: string;
    product?: IProduct;
    saleorder?: ISaleOrder;
    quantity: number;
    price?: number;
    version?: IVersion;
    productexternal?: number;
    material?: string;
    interiorcolor?: string;
    exteriorcolor?: string;
  }

  export interface IShipload {
    id?: number;
    status?: ISTATUS_SALEORDER;
    code?: string;
    sellerCar?: number;
    date?: IDatetime;
    journey?: IJourney;
    total?: number;
    sellers?: ISellerUser;
  }

  export interface IJourney {
    id?: string;
    code?: string;
    name?: string;
    storejourney?: Array<IStore | null>;
    isActive?: boolean;
  }

  export interface IStore {
    id?: string;
    storeName?: string;
    nameShort?: string;
    image?: string;
    addressLine?: string;
    personInCharge?: string;
    zipCode?: number;
    state?: string;
    city?: string;
    length?: number;
    latitude?: number;
    type?: string;
    storePhones?: Array<Istorephones | null>;
    storeMails?: Array<Istoremails | null>;
    journeyVisitStore?: Array<IJourneyVisitStore | null>;
    notes?: string;
    isActive?: boolean;
  }

  export interface Istorephones {
    number?: string;
  }

  export interface Istoremails {
    mail?: string;
  }

  export interface IJourneyVisitStore {
    id?: string;
    createdat?: IDatetime;
  }

  export interface ISellerUser {
    id?: string;
    user?: IUser;
    licensePlates?: string;
    addressLine?: string;
    sellerphones?: Array<Isellerphones | null>;
    sellermails?: Array<Isellermails | null>;
    active?: boolean;
    shipload?: IShipload;
    saleOrder?: ISaleOrder;
    goal?: Array<IGoal | null>;
  }

  export interface Isellerphones {
    id?: string;
    numberPhone?: string;
  }

  export interface Isellermails {
    id?: string;
    mail?: string;
  }

  export interface IGoal {
    id?: string;
    seller?: number;
    startDate?: IDatetime;
    validityDate?: IDatetime;
    saleGoal?: number;
    status?: IENUM_STATUS_GOAL;
    isActive?: boolean;
    sellers?: ISellerUser;
    sales?: Array<ISaleOrder | null>;
    totalSale?: number;
  }

  export const enum IENUM_STATUS_GOAL {
    COMPLETE = 'COMPLETE',
    INCOMPLETE = 'INCOMPLETE'
  }

  export interface IPayment {
    id: string;
    created_at?: IDatetime;
    request?: string;
    response?: string;
    paid?: boolean;
    status?: string;
    token?: string;
    name?: string;
    amount?: number;
    quantity?: number;
    payment_type?: number;
    type?: number;
    user?: number;
    sale_order: number;
    salesOrders?: Array<ISaleOrderID | null>;
  }

  export interface ISaleOrderID {
    id: string;
    site?: ISite;
    user: number;
    payment: number;
    code?: string;
    validityDate?: IDatetime;
    price?: number;
    number?: number;
    paid?: boolean;
    status?: ISTATUS_SALEORDER;
    sendstatus?: string;
    guidenumber?: string;
    mailingaddress?: number;
    storage?: number;
    typeSale?: IENUM_TYPE_SALE_ORDER;
    productorder?: Array<IProductOrder | null>;
    paymentss?: Array<IPayment | null>;
  }

  export interface IAppointment {
    _id?: string;
    createdAt?: IDate;
    updatedAt?: IDate;
    user?: number;
    agent?: number;
    duration?: number;
    date?: IDate;
    product?: number;
    room?: string;
    userappointment?: Array<IUser | null>;
    agentappointment?: Array<IUser | null>;
    appointmentproducts?: Array<IProduct | null>;
  }

  export type IDate = any;

  export interface ILog {
    id?: number;
    user_id?: number;
    service?: Iservice;
    created_at?: string;
    action?: string;
    action_in_spanish?: string;
    userlogs?: IUser;
  }

  export const enum Iservice {
    ACCESS_SERVICE = 'ACCESS_SERVICE',
    CONTENT_MANAGER = 'CONTENT_MANAGER',
    PAYMENT_SERVICE = 'PAYMENT_SERVICE',
    BLOG_SERVICE = 'BLOG_SERVICE',
    LIFE_SERVICE = 'LIFE_SERVICE',
    WEBSITES_SERVICE = 'WEBSITES_SERVICE',
    GMM_SERVICE = 'GMM_SERVICE',
    MORTGAGE_SERVICE = 'MORTGAGE_SERVICE',
    REPORT_SERVICE = 'REPORT_SERVICE',
    CONTEST_SERVICE = 'CONTEST_SERVICE',
    OTRO = 'OTRO'
  }

  export interface IEmailUserInput {
    email?: string;
    details?: Array<IDetailInputData | null>;
  }

  export interface IDetailInputData {
    name: string;
    value: string;
  }

  export interface IEmailUserReturn {
    docs?: IUser;
    detailclientid: boolean;
    detailinvoiceid: boolean;
  }

  export interface IPartnerFilterInput {
    page?: number;
    limit?: number;
    name?: string;
    sector?: number;
    featured?: number;
    url?: string;
    active?: boolean;
  }

  export interface IPartnerReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPartner | null>;
  }

  export interface IAccessFilterInput {
    page?: number;
    limit?: number;
    partnerCode?: string;
  }

  export interface IAccessReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IAccess | null>;
  }

  export interface IRuleFilterInput {
    page?: number;
    limit?: number;
    partnerCode?: string;
  }

  export interface IRuleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IRule | null>;
  }

  export interface IStartupstatus {
    status?: boolean;
  }

  export interface ISellerUserInput {
    page?: number;
    limit?: number;
    id?: string;
    fullname?: string;
    user?: number;
    licensePlates?: string;
    addressLine?: string;
    numberPhones?: Array<string | null>;
    emails?: Array<string | null>;
    active?: boolean;
    userActive?: boolean;
  }

  export interface ISellerUserReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISellerUser | null>;
  }

  export interface ISectorFilterInput {
    page?: number;
    limit?: number;
    name?: string;
    description?: string;
  }

  export interface ISectorReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISector | null>;
  }

  export interface IFeaturedFilterInput {
    page?: number;
    limit?: number;
    name?: string;
    description?: string;
  }

  export interface IFeaturedReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IFeatured | null>;
  }

  export interface ICategoryFilterInput {
    page?: number;
    limit?: number;
  }

  export interface ICategoryReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ICategory | null>;
  }

  export interface ISubcategoryFilterInput {
    page?: number;
    limit?: number;
  }

  export interface ISubcategoryReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISubcategory | null>;
  }

  export interface IProductFilterInput {
    page?: number;
    limit?: number;
    category?: string;
    subcategory?: string;
    brand?: string;
    type?: Array<IENUM_TYPE_PROD | null>;
    name?: string;
    priceMin?: number;
    priceMax?: number;
    active?: boolean;
    status?: IENUM_PRODUCT_STATUS;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    agente?: number;
    orderBy?: IENUM_ORDER_BY;
  }

  export const enum IENUM_TYPE_PROD {
    LIVE = 'LIVE',
    ARCHIVED = 'ARCHIVED',
    SCHEDULED = 'SCHEDULED',
    MAN = 'MAN',
    WOMAN = 'WOMAN',
    KIDS = 'KIDS',
    NEW = 'NEW'
  }

  export const enum IENUM_ORDER_BY {
    ID = 'ID',
    PUBLICATIONDATE = 'PUBLICATIONDATE',
    PUBLICATIONDATEDESC = 'PUBLICATIONDATEDESC',
    NAME = 'NAME',
    NAMEDESC = 'NAMEDESC',
    CREATEDAT = 'CREATEDAT',
    CREATEDATDESC = 'CREATEDATDESC',
    PRICE = 'PRICE',
    PRICEDESC = 'PRICEDESC'
  }

  export interface IProductReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IProduct | null>;
  }

  export interface IProductSemiFilterInput {
    page?: number;
    limit?: number;
    brand?: Array<string | null>;
    modeldate?: Array<string | null>;
    model?: Array<string | null>;
    priceMin?: number;
    priceMax?: number;
    odometerMin?: number;
    odometerMax?: number;
  }

  export interface IProductSemiReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IProductSemi | null>;
    additional?: ISemiFilters;
  }

  export interface IProductSemi {
    id: string;
    site?: ISite;
    category?: ICategory;
    subcategory?: ISubcategory;
    brand?: string;
    type?: string;
    name?: string;
    sku?: string;
    price?: number;
    offers?: number;
    discount?: number;
    model?: string;
    stock?: number;
    active?: boolean;
    description?: string;
    modeldate?: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    thumbnail?: string;
    odometer?: string;
    tankCapacity?: string;
    power?: string;
    torque?: string;
    dimensionsWeight?: string;
    dimensionsHeight?: string;
    dimensionsWidth?: string;
    dimensionsLength?: string;
    consumptionCity?: string;
    diameterWheels?: string;
    consumptionCombined?: string;
    consumptionRoad?: string;
    doors?: string;
    cylinders?: string;
    valves?: string;
    passengers?: string;
    speeds?: string;
    direction?: string;
    transmission?: string;
    traction?: string;
    energy?: string;
    armour?: string;
    condition?: string;
    climate?: string;
    finantial?: string;
    productinattachment?: Array<IAttachment | null>;
    productinversion?: Array<IVersion | null>;
  }

  export interface ISemiFilters {
    brand?: Array<string | null>;
    model?: Array<string | null>;
    year?: Array<string | null>;
    price?: IMaxMin;
    odometer?: IMaxMin;
  }

  export interface IMaxMin {
    max?: number;
    min?: number;
  }

  export interface ICatalogSemiFilterInput {
    page?: number;
    limit?: number;
    id?: string;
    brand?: string;
    model?: string;
    year?: string;
    version?: string;
  }

  export interface ICatalogSemiReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ICatalogSemi | null>;
  }

  export interface ICatalogSemi {
    id?: string;
    name?: string;
    level?: number;
    label?: string;
    labelId?: string;
    labelChildren?: string;
    labelChildrenId?: string;
    parents?: Array<IparentsSemi | null>;
    children?: Array<IchildrenSemi | null>;
  }

  export interface IparentsSemi {
    id?: string;
    name?: string;
    labelId?: string;
    label?: string;
  }

  export interface IchildrenSemi {
    id?: string;
    name?: string;
    action?: string;
  }

  export interface ILocationsSemiFilterInput {
    page?: number;
    limit?: number;
    id: string;
  }

  export interface ILocationsSemiReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ILocationsSemi | null>;
  }

  export interface ILocationsSemi {
    id?: string;
    name?: string;
    childrenLocations?: Array<IchildrenLocationSemi | null>;
  }

  export interface IchildrenLocationSemi {
    locationId?: string;
    name?: string;
  }

  export interface IAttributesSemiFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IAttributesSemiReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IAttributesSemi | null>;
  }

  export interface IAttributesSemi {
    id?: string;
    label?: string;
    type?: string;
    help?: string;
    alert?: string;
    placeholder?: string;
    inputType?: string;
    valueType?: string;
    required?: boolean;
    groupId?: string;
    groupName?: string;
    allowEdit?: boolean;
    order?: number;
    valueId?: string;
    value?: string;
  }

  export interface IAppraisalsSemiFilterInput {
    page?: number;
    limit?: number;
    id: string;
  }

  export interface IAppraisalPayload {
    statusCode?: number;
    id?: string;
    amount?: number;
    purchasePrice?: number;
    odometer?: number;
    sellerId?: number;
    status?: string;
    type?: string;
    validity?: string;
    observations?: string;
    car?: string;
    owner?: string;
    address?: string;
    images?: string;
    commercialName?: string;
    valueOffered?: string;
    saleValueOffered?: string;
  }

  export interface ICardealersSemiFilterInput {
    page?: number;
    limit?: number;
  }

  export interface ICardealersSemiReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ICardealersSemi | null>;
  }

  export interface ICardealersSemi {
    commercialName?: string;
    sellerId?: string;
    location?: IlocationSemi;
    geoReference?: string;
    zipCode?: string;
  }

  export interface IlocationSemi {
    neighborhood?: IlocationData;
    city?: IlocationData;
    state?: IlocationData;
    country?: IlocationData;
  }

  export interface IlocationData {
    id?: string;
    name?: string;
  }

  export interface ICatalogSemiNewReturn {
    data?: string;
  }

  export interface IAddressFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IAddressReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IAddress | null>;
  }

  export interface IAttachmentFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IAttachmentReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IAttachment | null>;
  }

  export interface IDetailPropertyFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IDetailPropertyReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IDetailProperty | null>;
  }

  export interface IVersionFilterInput {
    page?: number;
    limit?: number;
    product?: string;
    nameExact?: string;
    interiorcolor?: string;
    exteriorcolor?: string;
    repeatName?: boolean;
    active?: boolean;
  }

  export interface IVersionReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IVersion | null>;
  }

  export interface ISaleOrderFilterInput {
    page?: number;
    limit?: number;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    code?: string;
    status?: Array<ISTATUS_SALEORDER | null>;
    storage?: number;
    typeSale?: Array<IENUM_TYPE_SALE_ORDER | null>;
    orderBy?: IENUM_ORDER_BY_SALE_ORDER;
    seller?: number;
    store?: IStoreInput;
    category?: number;
    categoryOfProducts?: number;
  }

  export const enum IENUM_ORDER_BY_SALE_ORDER {
    CODE = 'CODE',
    CODEDESC = 'CODEDESC',
    CREATEDAT = 'CREATEDAT',
    CREATEDATDESC = 'CREATEDATDESC',
    PRICE = 'PRICE',
    PRICEDESC = 'PRICEDESC'
  }

  export interface IStoreInput {
    page?: number;
    limit?: number;
    id?: string;
    storeName?: string;
    nameShort?: string;
    image?: string;
    addressLine?: string;
    personInCharge?: string;
    zipCode?: number;
    state?: string;
    city?: string;
    length?: number;
    latitude?: number;
    type?: string;
    storePhones?: Array<string | null>;
    storeMails?: Array<string | null>;
    isActive?: boolean;
    notes?: string;
    journey?: number;
  }

  export interface ISaleOrderReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISaleOrder | null>;
  }

  export interface IProductOrderFilterInput {
    page?: number;
    limit?: number;
    agente?: number;
  }

  export interface IProductOrderReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IProductOrder | null>;
  }

  export interface IReviewFilterInput {
    page?: number;
    limit?: number;
    product?: string;
  }

  export interface IReviewReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IReview | null>;
  }

  export interface IReview {
    id: string;
    productOrder?: IProductOrder;
    point: number;
    detail: string;
  }

  export interface IConversationFilterInput {
    page?: number;
    limit?: number;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    timeAgo?: IDatetime;
  }

  export interface IConversationReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IConversation | null>;
  }

  export interface IZipCodeFilterInput {
    page?: number;
    limit?: number;
    cp?: string;
  }

  export interface IZipCodeReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IZipCode | null>;
  }

  export interface IZipCode {
    id: string;
    cp?: string;
    suburb?: string;
    town?: string;
    state?: string;
    codeTown?: string;
    codeState?: string;
    txtState?: string;
  }

  export interface IStoreReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IStore | null>;
  }

  export interface IJourneyFilterInput {
    page?: number;
    limit?: number;
    name?: string;
    stores?: Array<number | null>;
    locations?: Array<string | null>;
    lastTrip?: IDatetime;
    isActive?: boolean;
  }

  export interface IJourneyReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IJourney | null>;
  }

  export interface IShiploadFilterInput {
    page?: number;
    limit?: number;
    id?: string;
    site?: number;
    status?: Array<ISTATUS_SALEORDER | null>;
    code?: string;
    sellerCar?: number;
    date?: IDatetime;
    total?: number;
    journey?: number;
    product?: Array<string | null>;
    productQuantity?: Array<number | null>;
  }

  export interface IShiploadReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IShipProd | null>;
  }

  export interface IShipProd {
    shipload?: IShipload;
    product?: Array<IProdOfShip | null>;
  }

  export interface IProdOfShip {
    product?: IProduct;
    quantity?: number;
  }

  export interface IShiploadProductFilterInput {
    page?: number;
    limit?: number;
    shipload?: number;
    productName?: string;
    orderBy?: IENUM_ORDER_BY;
  }

  export interface IShiploadProductReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IShiploadProduct | null>;
  }

  export interface IShiploadProduct {
    product?: IProduct;
    quantity?: number;
  }

  export interface IWishListFilterInput {
    page?: number;
    limit?: number;
    name?: string;
  }

  export interface IWishListReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IWishList | null>;
  }

  export interface IWishList {
    id?: string;
    name?: string;
  }

  export interface IWishedProductFilterInput {
    page?: number;
    limit?: number;
    list: string;
  }

  export interface IWishedProductReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IWishedProduct | null>;
  }

  export interface IWishedProduct {
    id?: string;
    list?: string;
    product?: IProduct;
    customOrder?: number;
  }

  export interface ISectionOfProductInput {
    name?: string;
    active?: boolean;
    partnerCode?: string;
  }

  export interface ISectionOfProductReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISectionOfProduct | null>;
  }

  export interface ITemplateInfoInput {
    sectionOfProduct?: number;
    nameField?: string;
  }

  export interface ITemplateInfoReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ITemplateInfo | null>;
  }

  export interface IValuesOfTemplateInput {
    templateInfo?: number;
    product?: number;
    value?: string;
  }

  export interface IValuesOfTemplateReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IValuesOfTemplate | null>;
  }

  export interface IqueryDepartment {
    id?: string;
    name?: string;
  }

  export interface IRecordInput {
    page?: number;
    limit?: number;
    id?: string;
    product?: number;
    quantity?: number;
    orderBy?: IRECORD_WASTE_ORDER;
    dateStart?: IDatetime;
    dateEnd?: IDatetime;
    word?: string;
  }

  export const enum IRECORD_WASTE_ORDER {
    PRODUCT_ID = 'PRODUCT_ID',
    PRODUCT_IDDESC = 'PRODUCT_IDDESC',
    DATE = 'DATE',
    DATEDESC = 'DATEDESC',
    CREATEDAT = 'CREATEDAT',
    CREATEDATDESC = 'CREATEDATDESC',
    PRICE = 'PRICE',
    PRICEDESC = 'PRICEDESC',
    DEFAULT = 'DEFAULT'
  }

  export interface IRecordReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IqueryRecord | null>;
  }

  export interface IqueryRecord {
    id?: string;
    action?: string;
    activity?: string;
    price?: number;
    quantity?: number;
    product?: IProduct;
    shipload?: IShipload;
    date?: IDatetime;
  }

  export interface IqueryInvoice {
    id?: string;
    path?: string;
    sale_order?: ISaleOrder;
  }

  export interface IhomeInput {
    page?: number;
    limit?: number;
    month?: number;
    year?: number;
  }

  export interface IDebtsReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IDebts | null>;
  }

  export interface IDebts {
    store?: IStore;
    seller?: number;
    total?: number;
    datesale?: IDatetime;
    duedate?: IDatetime;
    status?: boolean;
  }

  export interface ISellerBySaleOrderDash {
    page?: number;
    limit?: number;
    status: IENUM_SELLER_DASH;
    dateStart?: IDatetime;
    dateEnd?: IDatetime;
  }

  export const enum IENUM_SELLER_DASH {
    BEST = 'BEST',
    DEBT = 'DEBT'
  }

  export interface ISellerSaleOrderReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISellerSaleOrder | null>;
  }

  export interface ISellerSaleOrder {
    price?: number;
    seller?: number;
  }

  export interface IProductSaleOrderReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IProductSaleOrder | null>;
  }

  export interface IProductSaleOrder {
    id: string;
    name: string;
    stock?: number;
  }

  export interface IPromotionFilterInput {
    page?: number;
    limit?: number;
    type?: string;
  }

  export interface IPromotionReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPromotion | null>;
  }

  export interface IPromotion {
    id?: string;
    site?: ISite;
    url?: string;
    url1?: string;
    descripcion?: string;
    type?: string;
  }

  export interface IKey {
    id: string;
    sub_name?: string;
    sub_id?: string;
    sub_code?: string;
    creator_name?: string;
    creator_id?: string;
    org_code?: string;
    key_private: string;
    key_public?: string;
    type: number;
  }

  export const enum IEnumStatus_Paid {
    NONE = 'NONE',
    TRUE = 'TRUE',
    FALSE = 'FALSE'
  }

  export interface IArticleFilterInput {
    page?: number;
    limit?: number;
    creatorid?: number;
    category?: Array<string | null>;
    tag?: Array<string | null>;
    views?: number;
    active?: boolean;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    topic?: number;
    titleEs?: string;
    titleEn?: string;
    status?: Array<IENUM_ARTICLE_STATUS | null>;
    orderBy?: IENUM_ARTICLE_ORDER_BY;
  }

  export const enum IENUM_ARTICLE_STATUS {
    DRAFT = 'DRAFT',
    REJECTED = 'REJECTED',
    APPROVED = 'APPROVED'
  }

  export const enum IENUM_ARTICLE_ORDER_BY {
    TITLE = 'TITLE',
    TITLEDESC = 'TITLEDESC',
    CREATEDAT = 'CREATEDAT',
    CREATEDATDESC = 'CREATEDATDESC',
    VIEWS = 'VIEWS',
    VIEWSDESC = 'VIEWSDESC'
  }

  export interface IArticleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IArticle | null>;
  }

  export interface IArticle {
    id: string;
    titleEs?: string;
    titleEn?: string;
    subtitleEs?: string;
    subtitleEn?: string;
    contentEs?: string;
    contentEn?: string;
    banner0?: string;
    banner1?: string;
    active?: boolean;
    views?: number;
    callToActionEs?: string;
    callToActionEn?: string;
    abstractEs?: string;
    abstractEn?: string;
    iframe?: string;
    releaseDate?: IDatetime;
    status?: IENUM_ARTICLE_STATUS;
    author?: string;
    categoryonArticle?: Array<ICategoryForArticle | null>;
    metadataonArticle?: Array<IMetadataForArticle | null>;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
    articleinattachment?: Array<IAttachmentOfArticle | null>;
    articleintags?: Array<ITagsOfArticle | null>;
    articleincategory?: Array<ICategoryOfArticle | null>;
    articleinmetadata?: Array<IMetadataOfArticle | null>;
    cardArticle?: Array<ICard | null>;
    commentArticle?: Array<IComment | null>;
    topic?: ITopic;
  }

  export interface ICategoryForArticle {
    id?: string;
    article?: IArticle;
    categoryForEntertaiment?: ICategoryForEntertaiment;
  }

  export interface ICategoryForEntertaiment {
    id?: string;
    nameEs?: string;
    nameEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface IMetadataForArticle {
    id?: string;
    article?: IArticle;
    metadataForEntertaiment?: IMetadataForEntertaiment;
  }

  export interface IMetadataForEntertaiment {
    id: string;
    title?: string;
    description?: string;
    slug?: string;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface IAttachmentOfArticle {
    id: string;
    article: string;
    url: string;
    type: string;
    title?: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface ITagsOfArticle {
    id: string;
    article: string;
    name: string;
    description?: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface ICategoryOfArticle {
    id: string;
    article?: string;
    name: string;
    description?: string;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface IMetadataOfArticle {
    id: string;
    article: string;
    title?: string;
    description?: string;
    slug?: string;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface ICard {
    content?: string;
  }

  export interface IComment {
    id?: string;
    createat?: IDatetime;
    article?: number;
    content?: string;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
    voteComment?: Array<IVoteOnComment | null>;
  }

  export interface IVoteOnComment {
    id?: string;
    comment?: string;
    vote?: boolean;
  }

  export interface ITopic {
    id?: string;
    name?: string;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface IAttachmentOfArticleFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IAttachmentOfArticleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IAttachmentOfArticle | null>;
  }

  export interface ITagsOfArticleFilterInput {
    page?: number;
    limit?: number;
  }

  export interface ITagsOfArticleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ITagsOfArticle | null>;
  }

  export interface ICategoryOfArticleFilterInput {
    page?: number;
    limit?: number;
  }

  export interface ICategoryOfArticleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ICategoryOfArticle | null>;
  }

  export interface ICommentFilterInput {
    page?: number;
    limit?: number;
    beginDate?: IDatetime;
    endDate?: IDatetime;
    article: number;
  }

  export interface ICommentReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IComment | null>;
  }

  export interface IVoteOnCommentFilterInput {
    comment?: number;
    vote?: boolean;
  }

  export interface IVoteOnCommentReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IVoteOnComment | null>;
  }

  export interface ITopicFilterInput {
    name?: string;
    creatorid?: number;
  }

  export interface ITopicReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ITopic | null>;
  }

  export interface IProgramFilterInput {
    description?: string;
    category?: string;
    status?: Array<IENUM_ARTICLE_STATUS | null>;
    podcastStatus?: Array<IENUM_ARTICLE_STATUS | null>;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    creatorid?: number;
  }

  export interface IProgramReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IProgram | null>;
  }

  export interface IProgram {
    id: string;
    description?: string;
    category?: string;
    banner?: string;
    status?: IENUM_ARTICLE_STATUS;
    podcastProgram?: Array<IPodcast | null>;
    categoryonProgram?: Array<ICategoryForProgram | null>;
    metadataonProgram?: Array<IMetadataForProgram | null>;
    totalDuration?: number;
    totalListened?: number;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface IPodcast {
    id: string;
    title?: string;
    subtitle?: string;
    banner?: string;
    transcription?: string;
    abstact?: string;
    active?: boolean;
    duration?: string;
    content?: string;
    views?: number;
    status?: IENUM_ARTICLE_STATUS;
    iframe?: string;
    release_date?: IDatetime;
    program?: IProgram;
    topic?: ITopic;
    author?: string;
    categoryonPodcast?: Array<ICategoryForPodcast | null>;
    metadataonPodcast?: Array<IMetadataForPodcast | null>;
    createdat?: IDatetime;
    updatedat?: IDatetime;
    creatorid?: number;
    orgcode?: string;
    partnercode?: string;
  }

  export interface ICategoryForPodcast {
    id?: string;
    podcast?: IPodcast;
    categoryForEntertaiment?: ICategoryForEntertaiment;
  }

  export interface IMetadataForPodcast {
    id?: string;
    article?: IArticle;
    metadataForEntertaiment?: IMetadataForEntertaiment;
  }

  export interface ICategoryForProgram {
    id?: string;
    program?: IProgram;
    categoryForEntertaiment?: ICategoryForEntertaiment;
  }

  export interface IMetadataForProgram {
    program?: IProgram;
    metadataForEntertaiment?: IMetadataForEntertaiment;
  }

  export interface IPodcastFilterInput {
    title?: string;
    subtitle?: string;
    transcription?: string;
    abstact?: string;
    active?: boolean;
    duration?: string;
    views?: number;
    status?: Array<IENUM_ARTICLE_STATUS | null>;
    release_date?: IDatetime;
    program?: number;
    topic?: number;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
  }

  export interface IPodcastReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPodcast | null>;
  }

  export interface ICategoryForEntertaimentFilterInput {
    nameEs?: string;
    nameEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    creatorid?: number;
  }

  export interface ICategoryForEntertaimentReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ICategoryForEntertaiment | null>;
  }

  export interface IMetadataForEntertaimentFilterInput {
    createdatStart?: IDatetime;
    createdatEnd?: IDatetime;
    title?: string;
    description?: string;
    slug?: string;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface IMetadataForEntertaimentReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IMetadataForEntertaiment | null>;
  }

  export interface IMemeReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IMeme | null>;
  }

  export interface IMeme {
    id?: string;
    description?: string;
    name?: string;
    image?: string;
  }

  export interface IDomiConversationFilter {
    startDate?: IDate;
    endDate?: IDate;
    sender?: string;
    products?: Array<number | null>;
    actions?: Array<IDomiConversationsActions | null>;
    sortDate?: number;
    sortSender?: number;
  }

  export const enum IDomiConversationsActions {
    AGENDAR_CITA = 'AGENDAR_CITA',
    CONSULTAR_UBICACION = 'CONSULTAR_UBICACION',
    CONSULTAR_MULTIMEDIA = 'CONSULTAR_MULTIMEDIA',
    CONTACTAR_A_UN_AGENTE = 'CONTACTAR_A_UN_AGENTE',
    VER_INMUEBLES_IGUALES = 'VER_INMUEBLES_IGUALES',
    CANCELAR_CITA = 'CANCELAR_CITA'
  }

  export interface IChatBotResult {
    docs?: Array<IChatBot | null>;
    totalDocs?: number;
    limit?: number;
    page?: number;
    totalPages?: number;
    hasNextPage?: boolean;
    nextPage?: number;
    hasPrevPage?: boolean;
    pagingCounter?: number;
    prevPage?: number;
  }

  export interface IChatBot {
    _id?: string;
    createdAt?: IDate;
    updatedAt?: IDate;
    appId?: IAPP_ID;
    sender?: string;
    messages?: Array<IChatBotMessage | null>;
    products?: Array<number | null>;
    actions?: Array<string | null>;
    chatbotproducts?: Array<IProduct | null>;
  }

  export const enum IAPP_ID {
    DOMI = 'DOMI'
  }

  export interface IChatBotMessage {
    sender?: string;
    text?: string;
    date?: IDate;
  }

  export interface IDomiMetrics {
    positions?: IDomiMetricsPositions;
    rankings?: IDomiMetricsRankings;
  }

  export interface IDomiMetricsPositions {
    conversationsCount?: number;
    actionsPercentages?: Array<IActionPercentage | null>;
    appointmentsCounter?: number;
    appointmentsCanceled?: number;
    appointmentsAccomplished?: number;
  }

  export interface IActionPercentage {
    name?: string;
    value?: number;
  }

  export interface IDomiMetricsRankings {
    conversations?: Array<IDomiMetricsRanking | null>;
    contactedAgents?: Array<IDomiMetricsRanking | null>;
    appointmentsAccomplished?: Array<IDomiMetricsRanking | null>;
  }

  export interface IDomiMetricsRanking {
    _id?: string;
    property?: number;
    value?: number;
    product?: IProduct;
  }

  export interface IAppointmentFilter {
    year: number;
    month: number;
    creator?: string;
  }

  export interface IAppointmentResult {
    docs?: Array<IAppointment | null>;
    totalDocs?: number;
    limit?: number;
    page?: number;
    totalPages?: number;
    HasNextPage?: boolean;
    nextPage?: number;
    hasPrevPage?: boolean;
    pagingCounter?: number;
    prevPage?: number;
  }

  export interface IAvailableSchedule {
    start?: IDate;
    end?: IDate;
  }

  export interface ILogQueryInput {
    page?: number;
    limit?: number;
    user_id?: number;
    service?: Iservice;
    action?: Iaction;
    since?: string;
    until?: string;
    rol?: string;
    user_name?: string;
  }

  export const enum Iaction {
    Login = 'Login',
    UserUpdate = 'UserUpdate',
    quoteCreation = 'quoteCreation',
    broadcastCreation = 'broadcastCreation',
    ReportDownload = 'ReportDownload'
  }

  export interface ILogsByPage {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ILog | null>;
  }

  export interface IAddressValidationInput {
    city?: string;
    stateCode?: string;
    zipCode: string;
    countryCode?: string;
    adressLine?: string;
    packageService: IENUM_PACKAGE_SERVICE;
  }

  export const enum IENUM_PACKAGE_SERVICE {
    UPS = 'UPS',
    DHL = 'DHL'
  }

  export interface IStatusReturn {
    status?: boolean;
    detail?: string;
  }

  export interface IRatingInput {
    name?: string;
    addressLine?: string;
    stateCode?: string;
    city?: string;
    zipCode: string;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    packageService: IENUM_PACKAGE_SERVICE;
  }

  export interface ITimeInTransitInput {
    tranId: string;
    stateCode?: string;
    zipCode: string;
    pickupDate?: string;
    weight?: number;
    packageService: IENUM_PACKAGE_SERVICE;
  }

  export interface ITimeInTransit {
    status?: boolean;
    detail?: string;
    arrival?: IEstimatedArrival;
    pickup?: IEstimatedArrival;
    day?: string;
    daysintransit?: string;
    servicedays?: string;
  }

  export interface IEstimatedArrival {
    date?: string;
    time?: string;
  }

  export interface IgoalFilterInput {
    page?: number;
    limit?: number;
    validity?: boolean;
    beginDate?: IDatetime;
    endDate?: IDatetime;
    seller?: number;
    status?: IENUM_STATUS_GOAL;
    isActive?: boolean;
  }

  export interface IgoalReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IGoal | null>;
  }

  export interface IPageFilterInput {
    page?: number;
    limit?: number;
    status?: Array<IENUM_PAGE_STATUS | null>;
    partnerCode?: string;
    titleEs?: string;
    titleEn?: string;
  }

  export interface IPageReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPage | null>;
  }

  export interface IPageSectionFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IPageSectionReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPageSection | null>;
  }

  export interface IPageSubsectionFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IPageSubsectionReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPageSubsection | null>;
  }

  export interface IPageHeaderFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IPageHeaderReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPageHeader | null>;
  }

  export interface IMetadataFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IMetadataReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IMetadata | null>;
  }

  export interface IKeywordsFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IKeywordsReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IKeywords | null>;
  }

  export interface IDirectoryFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IDirectoryReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IDirectory | null>;
  }

  export interface ISitesFilterInput {
    page?: number;
    limit?: number;
    partnerCode?: string;
  }

  export interface ISitesReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISites | null>;
  }

  export interface IStyleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IStyle | null>;
  }

  export interface IFontReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IFont | null>;
  }

  export interface IColorReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IColor | null>;
  }

  export interface ILogoReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ILogo | null>;
  }

  export interface ICarouselFilterInput {
    page?: number;
    limit?: number;
    pageSection?: number;
    partnerCode?: string;
    titleEs?: string;
    titleEn?: string;
    image?: string;
    order?: number;
  }

  export interface ICarouselReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ICarousel | null>;
  }

  export interface IMutation {
    updateUser: IUserPayload;
    createProfile: IProfilePayload;
    updateProfile: IProfilePayload;
    createDetail: IDetailPayload;
    updateDetail: IDetailPayload;
    createRegion: IRegionPayload;
    updateRegion: IRegionPayload;
    deleteRegion?: Array<string>;
    createDetailMassive: IDetailMassivePayload;
    createMailingAddress: IMailingAddressPayload;
    updateMailingAddress: IMailingAddressPayload;
    deleteMailingAddress: string;
    createInvoiceAddress: IInvoiceAddressPayload;
    updateInvoiceAddress: IInvoiceAddressPayload;
    deleteInvoiceAddress: string;
    createUserProfile: IUserProfilePayload;
    updateUserProfile: IUserProfilePayload;
    login: ILoginPayload;
    sendResetPasswordLink: ISendResetPasswordLinkPayload;
    getBearer: IBearerPayload;
    getBearerValidate: IBearerValidatePayload;
    createOrganization: IOrganizationPayload;
    updateOrganization: IOrganizationPayload;
    createPartner: IPartnerPayload;
    updatePartner: IPartnerPayload;

    /**
     *
     * @deprecated No longer supported
     */
    deletePartner: string;
    createApp: IAppPayload;
    updateApp: IAppPayload;
    createOrgApp: IOrgAppPayload;
    updateOrgApp: IOrgAppPayload;
    createSocialMedia: ISocialMediaPayload;
    updateSocialMedia: ISocialMediaPayload;
    deleteSocialMedia: string;
    createDataContact: IDataContactPayload;
    updateDataContact: IDataContactPayload;
    deleteDataContact: string;
    createAccess: IAccessPayload;
    updateAccess: IAccessPayload;
    createGroup: IGroupPayload;
    updateGroup: IGroupPayload;
    createRule: IRulePayload;
    updateRule: IRulePayload;
    createRol: IRolPayload;
    updateRol: IRolPayload;
    createSeller: number;
    updateSeller?: ISellerUser;
    deleteSeller: string;
    createSector: ISector;
    updateSector?: ISector;
    deleteSector: string;
    createFeatured: IFeatured;
    updateFeatured?: IFeatured;
    deleteFeatured: string;
    createCategory: ICategoryPayload;
    updateCategory: ICategoryPayload;
    deleteCategory: string;
    createSubcategory: ISubcategoryPayload;
    updateSubcategory: ISubcategoryPayload;
    deleteSubcategory: string;
    createBrand: IBrandPayload;
    updateBrand: IBrandPayload;
    deleteBrand: string;
    createProduct: IProductPayload;
    updateProduct: IProductPayload;
    deleteProduct: string;
    deleteProductMassive: Array<string | null>;
    createProductMassive: IStatusPayload;
    createSectionOfProduct: ISectionOfProduct;
    updateSectionOfProduct: ISectionOfProduct;
    deleteSectionOfProduct: string;
    createStructuredSectionOfProduct: Array<ISectionOfProduct | null>;
    createTemplateInfo: ITemplateInfo;
    updateTemplateInfo: ITemplateInfo;
    deleteTemplateInfo: string;
    updateMassiveTemplateInfo: Array<ITemplateInfo | null>;
    createValuesOfTemplate: IValuesOfTemplate;
    updateValuesOfTemplate: IValuesOfTemplate;
    deleteValuesOfTemplate: string;
    updateMassiveValuesOfTemplate: Array<IValuesOfTemplate | null>;
    createAddress: IAddressPayload;
    updateAddress: IAddressPayload;
    deleteAddress: string;
    createAttachment: IAttachmentPayload;
    updateAttachment: IAttachmentPayload;
    deleteAttachment: string;
    createDetailProperty: IDetailPropertyPayload;
    updateDetailProperty: IDetailPropertyPayload;
    deleteDetailProperty: string;
    createSchedule: ISchedulePayload;
    updateSchedule: ISchedulePayload;
    deleteSchedule: string;
    createVersion: IVersionPayload;
    updateVersion: IVersionPayload;
    deleteVersion: string;
    createColorInt: IColorsPayload;
    updateColorInt: IColorsPayload;
    deleteColorInt: string;
    createColorExt: IColorsPayload;
    updateColorExt: IColorsPayload;
    deleteColorExt: string;
    createSaleOrder: ISaleOrderPayload;
    updateSaleOrder: ISaleOrderPayload;
    deleteSaleOrder: string;
    createProductOrder: IProductOrderPayload;
    updateProductOrder: IProductOrderPayload;
    deleteProductOrder: string;
    createReview: IReviewPayload;
    updateReview: IReviewPayload;
    deleteReview: string;
    createConversation: IConversationPayload;
    updateConversation: IConversationPayload;
    deleteConversation: string;
    createTalk: ITalkPayload;
    updateTalk: ITalkPayload;
    deleteTalk: string;
    createDepartment: IDepartmentPayload;
    updateDepartment: IDepartmentPayload;
    deleteDepartment: string;
    createWaste: Array<IqueryRecord | null>;
    updateWaste: IWastePayload;
    deleteWaste: string;
    upFileInvoice: IInvoicePayload;
    createInvoice: IInvoicePayload;
    updateInvoice: IInvoicePayload;
    deleteInvoice: string;
    createStore?: IStore;
    updateStore?: IStore;
    deleteStore: string;
    createJourney: string;
    updateJourney: string;
    deleteJourney: string;
    updateJourneyVisit: IJourneyVisitStore;
    createShipload: IShipload;
    updateShipload: IShipload;
    deleteShipload: string;
    createShiploadProduct: IShiploadProduct;
    updateShiploadProduct: IShiploadProduct;
    deleteShiploadProduct: string;
    createWishList?: IWishList;
    updateWishList?: IWishList;
    deleteWishList?: string;
    createWishedProduct?: IWishedProduct;
    updateWishedProduct?: IWishedProduct;
    deleteWishedProduct?: string;
    createAppraisal: IAppraisalPayload;
    createPromotion: IPromotionPayload;
    updatePromotion: IPromotionPayload;
    deletePromotion: string;
    createKey: IKeyPayload;
    updateKey: IKeyPayload;
    createPaymentConekta: IPaymentConektaPayload;
    createPaymentStripe: IPaymentConektaPayload;
    createSubscriptionStripe: ILinksOrderPaypal;
    createPaymentPaypal: ILinksOrderPaypal;
    updatePayment: IPayment;
    createArticle: IArticlePayload;
    updateArticle: IArticlePayload;
    deleteArticle: string;
    createAttachmentOfArticle: IAttachmentOfArticlePayload;
    updateAttachmentOfArticle: IAttachmentOfArticlePayload;
    deleteAttachmentOfArticle: string;
    createTagsOfArticle: ITagsOfArticlePayload;
    updateTagsOfArticle: ITagsOfArticlePayload;
    deleteTagsOfArticle: string;
    createCategoryOfArticle: ICategoryOfArticlePayload;
    updateCategoryOfArticle: ICategoryOfArticlePayload;
    deleteCategoryOfArticle: string;
    createMassiveCategoryOfArticle: Array<string | null>;
    deleteMassiveCategoryOfArticle: Array<string | null>;
    createMetadataOfArticle: IMetadataOfArticlePayload;
    updateMetadataOfArticle: IMetadataOfArticlePayload;
    deleteMetadataOfArticle: string;
    createComment: IComment;
    updateComment: IComment;
    deleteComment: string;
    createVoteOnComment: IVoteOnComment;
    updateVoteOnComment: IVoteOnComment;
    deleteVoteOnComment: string;
    createTopic?: ITopic;
    updateTopic?: ITopic;
    deleteTopic?: string;
    createProgram?: IProgram;
    updateProgram?: IProgram;
    deleteProgram?: string;
    createPodcast?: IPodcast;
    updatePodcast?: IPodcast;
    deletePodcast?: string;
    createCategoryForEntertaiment?: ICategoryForEntertaiment;
    updateCategoryForEntertaiment?: ICategoryForEntertaiment;
    deleteCategoryForEntertaiment?: string;
    createCategoryForPodcast?: ICategoryForPodcast;
    updateCategoryForPodcast?: ICategoryForPodcast;
    deleteCategoryForPodcast?: string;
    createCategoryForProgram?: ICategoryForProgram;
    updateCategoryForProgram?: ICategoryForProgram;
    deleteCategoryForProgram?: string;
    createCategoryForArticle?: ICategoryForArticle;
    updateCategoryForArticle?: ICategoryForArticle;
    deleteCategoryForArticle?: string;
    createMetadataForEntertaiment?: IMetadataForEntertaiment;
    updateMetadataForEntertaiment?: IMetadataForEntertaiment;
    deleteMetadataForEntertaiment?: string;
    createMetadataForPodcast?: IMetadataForPodcast;
    updateMetadataForPodcast?: IMetadataForPodcast;
    deleteMetadataForPodcast?: string;
    createMetadataForProgram?: IMetadataForProgram;
    updateMetadataForProgram?: IMetadataForProgram;
    deleteMetadataForProgram?: string;
    createMetadataForArticle?: IMetadataForArticle;
    updateMetadataForArticle?: IMetadataForArticle;
    deleteMetadataForArticle?: string;
    createMeme?: IMeme;
    updateMeme?: IMeme;
    deleteMeme?: string;
    test?: boolean;
    createAppointment?: IAppointment;
    updateAppointment?: IAppointment;
    deleteAppointments?: Array<string | null>;
    createLog?: ILog;
    createSingleShipment?: IShipment;
    createMultiShipment?: IShipment;
    cancelShipment?: IStatusReturn;
    createPickUp?: IStatusReturn;
    createGoalToSeller: IGoal;
    updateGoal: IGoal;
    deleteGoal: string;
    createPage: IPagePayload;
    updatePage: IPagePayload;
    deletePage: string;
    createPageMetadata: IPageMetadata;
    updatePageMetadata: IPageMetadata;
    deletePageMetadata: string;
    createPageSection: IPageSectionPayload;
    updatePageSection: IPageSectionPayload;
    deletePageSection: string;
    updateMassivePageSection?: Array<IPageSection>;
    createPageSectionIntoPage: IPageSectionIntoPage;
    updatePageSectionIntoPage: IPageSectionIntoPage;
    deletePageSectionIntoPage: string;
    createPageSubsection: IPageSubsectionPayload;
    updatePageSubsection: IPageSubsectionPayload;
    deletePageSubsection: string;
    updateMassivePageSubsection?: Array<IPageSubsection>;
    createPageHeader: IPageHeaderPayload;
    updatePageHeader: IPageHeaderPayload;
    deletePageHeader: string;
    createMetadata: IMetadataPayload;
    updateMetadata: IMetadataPayload;
    deleteMetadata: string;
    createKeywords: IKeywordsPayload;
    updateKeywords: IKeywordsPayload;
    deleteKeywords: string;
    createDirectory: IDirectoryPayload;
    updateDirectory: IDirectoryPayload;
    deleteDirectory: string;
    createSites: ISitesPayload;
    deleteSites: string;
    createStyle: IStyle;
    updateStyle: IStyle;
    deleteStyle: string;
    createFont: IFont;
    updateFont: IFont;
    deleteFont: string;
    createColor: IColor;
    updateColor: IColor;
    deleteColor: string;
    createLogo: ILogo;
    updateLogo: ILogo;
    deleteLogo: string;
    createCarousel: ICarousel;
    updateCarousel: ICarousel;
    deleteCarousel: string;
    createMassiveCarousel?: Array<ICarousel>;
    updateMassiveCarousel?: Array<ICarousel>;
    createCarouselIntoPageSection: ICarouselIntoPageSection;
    updateCarouselIntoPageSection: ICarouselIntoPageSection;
    deleteCarouselIntoPageSection: string;
  }

  export interface IUserInput {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    isstaff?: boolean;
    isactive?: boolean;
    issuperuser?: boolean;
    partnercode?: string;
  }

  export interface IUserPayload {
    user?: IUser;
  }

  export interface IProfileInput {
    user?: string;
    partnercode?: string;
    accesscode?: string;
    city?: string;
    country?: string;
    gender?: string;
    age?: number;
    birthdate?: IDatetime;
    phone?: string;
    picture?: string;
    acronym?: string;
    editor?: boolean;
    agent?: string;
  }

  export interface IProfilePayload {
    profile?: IProfile;
  }

  export interface IDetailInput {
    profile: string;
    name: string;
    value: string;
  }

  export interface IDetailPayload {
    detail?: IDetail;
  }

  export interface IRegionInput {
    profile: string;
    name?: Array<string>;
  }

  export interface IRegionPayload {
    region?: Array<IRegion | null>;
  }

  export interface IDetailMassiveInput {
    profile: string;
    data?: Array<IDetailInputData | null>;
  }

  export interface IDetailMassivePayload {
    detail?: Array<IDetail | null>;
  }

  export interface IMailingAddressInput {
    profile: string;
    name: string;
    deliverto: string;
    phone?: string;
    email?: string;
    street?: string;
    numint?: string;
    numext?: string;
    suburb?: string;
    town?: string;
    state?: string;
    codeState?: string;
    cp?: string;
    detail?: string;
    principal?: boolean;
  }

  export interface IMailingAddressPayload {
    status: boolean;
    error?: string;
    mailingaddress?: IMailingAddress;
  }

  export interface IInvoiceAddressInput {
    profile: string;
    mailingAddress?: string;
    rfc?: string;
    socialReason?: string;
    street?: string;
    numint?: string;
    numext?: string;
    suburb?: string;
    town?: string;
    state?: string;
    cp?: string;
  }

  export interface IInvoiceAddressPayload {
    invoiceaddress?: IInvoiceAddress;
  }

  export interface IUserProfileInput {
    firstname?: string;
    lastname?: string;
    token?: string;
    email?: string;
    password?: string;
    isstaff?: boolean;
    isactive?: boolean;
    issuperuser?: boolean;
    partnercode: string;
    accesscode: string;
    city?: string;
    country?: string;
    gender?: string;
    age?: number;
    birthdate?: IDatetime;
    phone?: string;
    picture?: string;
    acronym?: string;
    editor?: boolean;
    agent?: string;
  }

  export interface IUserProfilePayload {
    status: boolean;
    error?: string;
    user?: IUser;
  }

  export interface IUserProfileUpdatingInput {
    firstname?: string;
    lastname?: string;
    email?: string;
    isstaff?: boolean;
    isactive?: boolean;
    issuperuser?: boolean;
    accesscode?: string;
    city?: string;
    country?: string;
    gender?: string;
    age?: number;
    birthdate?: IDatetime;
    phone?: string;
    picture?: string;
    acronym?: string;
    editor?: boolean;
    agent?: string;
  }

  export interface ILoginInput {
    token: boolean;
    login: string;
    password: string;
    partnercode?: string;
  }

  export interface ILoginPayload {
    status: boolean;
    error?: string;
    token?: string;
    bearer?: string;
    me?: IProfile;
    seller?: ISellerUser;
  }

  export interface ISendResetPasswordLinkInput {
    token: boolean;
    login: string;
    partnercode?: string;
  }

  export interface ISendResetPasswordLinkPayload {
    status: boolean;
    error?: string;
    success?: string;
    email_status?: string;
  }

  export interface IBearerInput {
    token: string;
  }

  export interface IBearerPayload {
    status: boolean;
    error?: string;
    bearer?: string;
  }

  export interface IBearerValidateInput {
    bearer: string;
  }

  export interface IBearerValidatePayload {
    status: boolean;
    error?: string;
    valid?: boolean;
  }

  export interface IOrganizationInput {
    name: string;
    code: string;
    description?: string;
    url?: string;
    domain: string;
  }

  export interface IOrganizationPayload {
    status: boolean;
    error?: string;
    organization?: IOrganization;
  }

  export interface IPartnerInput {
    name: string;
    code: string;
    description?: string;
    url?: string;
    urlFront?: string;
    urlImage?: string;
    fromEmail?: string;
    phone?: string;
    email?: string;
    sector?: number;
    featured?: number;
    active?: boolean;
  }

  export interface IPartnerPayload {
    status: boolean;
    error?: string;
    partner?: IPartner;
  }

  export interface IAppInput {
    name: string;
    code: string;
    description?: string;
  }

  export interface IAppPayload {
    status: boolean;
    error?: string;
    app?: IApp;
  }

  export interface IOrgAppInput {
    organization: string;
    app: string;
    paid?: boolean;
  }

  export interface IOrgAppPayload {
    status: boolean;
    error?: string;
    orgapp?: IOrgApp;
  }

  export interface ISocialMediaInput {
    partner: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  }

  export interface ISocialMediaPayload {
    socialmedia?: ISocialMedia;
  }

  export interface IDataContactInput {
    partner: string;
    whatsapp?: string;
    phone?: string;
    client?: string;
  }

  export interface IDataContactPayload {
    datacontact?: IDataContact;
  }

  export interface IAccessInput {
    partner: string;
    name: string;
    code: string;
    level?: string;
  }

  export interface IAccessPayload {
    status: boolean;
    error?: string;
    access?: IAccess;
  }

  export interface IGroupInput {
    access: string;
    name: string;
    code: string;
    level?: string;
    description?: string;
  }

  export interface IGroupPayload {
    status: boolean;
    error?: string;
    group?: IGroup;
  }

  export interface IRuleInput {
    name: string;
    description?: string;
    code: string;
    level?: string;
    levelPublic?: string;
    min?: number;
    max?: number;
    companyLife?: number;
    companyGmm?: number;
    partner?: string;
  }

  export interface IRulePayload {
    status: boolean;
    error?: string;
    rule?: IRule;
  }

  export interface IRolInput {
    group: string;
    rule: string;
    name?: string;
  }

  export interface IRolPayload {
    status: boolean;
    error?: string;
    rol?: IRol;
  }

  export interface ISectorInput {
    name?: string;
    description?: string;
  }

  export interface IFeaturedInput {
    name?: string;
    description?: string;
  }

  export interface ICategoryInput {
    name: string;
    description?: string;
    image?: string;
  }

  export interface ICategoryPayload {
    category?: ICategory;
  }

  export interface ISubcategoryInput {
    category: string;
    name: string;
    description?: string;
    image?: string;
  }

  export interface ISubcategoryPayload {
    subcategory?: ISubcategory;
  }

  export interface IBrandInput {
    name: string;
  }

  export interface IBrandPayload {
    brand?: IBrand;
  }

  export interface IProductInput {
    category?: string;
    subcategory?: string;
    brand?: string;
    type?: string;
    name?: string;
    sku?: string;
    price?: number;
    offers?: number;
    discount?: number;
    model?: string;
    stock?: number;
    active?: boolean;
    status?: IENUM_PRODUCT_STATUS;
    description?: string;
    modeldate?: string;
    agente?: number;
    partnercode?: string;
    condition?: string;
    publicationdate?: IDatetime;
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
    box_size?: number;
  }

  export interface IProductPayload {
    product?: IProduct;
  }

  export interface IProductMassiveInput {
    url?: string;
  }

  export interface IStatusPayload {
    status?: string;
  }

  export interface ISectionofProductStructuredInput {
    partnerCode?: string;
  }

  export interface ITemplateInfoMassiveInput {
    newTemplate?: Array<ITemplateInfoInput>;
    templateZipped?: Array<ITemplateInfoZippedInput>;
    deleteable?: Array<string | null>;
  }

  export interface ITemplateInfoZippedInput {
    id: string;
    template?: ITemplateInfoInput;
  }

  export interface IValuesOfTemplateMassiveInput {
    newValue?: Array<IValuesOfTemplateInput>;
    valuesZipped?: Array<IValuesOfTemplateZippedInput>;
    deleteable?: Array<string | null>;
  }

  export interface IValuesOfTemplateZippedInput {
    id: string;
    value?: IValuesOfTemplateInput;
  }

  export interface IAddressInput {
    product: string;
    street?: string;
    suburb: string;
    town?: string;
    state?: string;
    country?: string;
    cp?: string;
    numint?: string;
    numext?: string;
    longitude?: string;
    latitude?: string;
    constructionarea?: string;
    totalarea?: string;
  }

  export interface IAddressPayload {
    address?: IAddress;
  }

  export interface IAttachmentInput {
    product?: string;
    version?: string;
    url: string;
    type: string;
    title?: string;
  }

  export interface IAttachmentPayload {
    attachment?: IAttachment;
  }

  export interface IDetailPropertyInput {
    product: string;
    transaction?: string;
    offer?: string;
    modality?: string;
    environment?: string;
    numparking?: number;
    numbathroom?: number;
    numbedroom?: number;
    maintenance?: string;
    numbathroommed?: number;
    antiquity?: number;
    warehouse?: boolean;
    studio?: boolean;
    partyroom?: boolean;
    multipurposeroom?: boolean;
    tvroom?: boolean;
    lobby?: boolean;
    gym?: boolean;
    playarea?: boolean;
    furnished?: boolean;
    privatesecurity?: boolean;
    cistern?: boolean;
    basicservices?: boolean;
    gas?: boolean;
    waterheater?: boolean;
    elevator?: boolean;
    roaster?: boolean;
    tenniscourt?: boolean;
    squashcourt?: boolean;
    weighingmachine?: boolean;
    swimmingpool?: boolean;
    utilityrooms?: boolean;
    nearbyschools?: boolean;
    integralkitchen?: boolean;
    disabledaccess?: boolean;
  }

  export interface IDetailPropertyPayload {
    detailproperty?: IDetailProperty;
  }

  export interface IScheduleInput {
    product: string;
    since?: string;
    until?: string;
    days?: string;
  }

  export interface ISchedulePayload {
    schedule?: ISchedule;
  }

  export interface IVersionInput {
    product: string;
    price: number;
    offers: number;
    productiondate?: IDatetime;
    version: string;
    material?: string;
    odometer?: number;
    interiorcolor?: string;
    exteriorcolor?: string;
    stock?: number;
  }

  export interface IVersionPayload {
    version?: IVersion;
  }

  export interface IColorsInput {
    version: string;
    name: string;
    image: string;
  }

  export interface IColorsPayload {
    color?: IColors;
  }

  export interface ISaleOrderInput {
    user: number;
    payment?: number;
    price?: number;
    validityDate?: IDatetime;
    number?: number;
    paid?: boolean;
    status?: ISTATUS_SALEORDER;
    sendstatus?: string;
    guidenumber?: string;
    mailingaddress?: number;
    storage?: number;
    typeSale?: IENUM_TYPE_SALE_ORDER;
    shipload?: number;
    store?: IStoreInput;
    seller?: number;
  }

  export interface ISaleOrderPayload {
    saleorder?: ISaleOrder;
  }

  export interface IProductOrderInput {
    product?: string;
    saleorder: string;
    quantity: number;
    price?: number;
    version?: string;
    productexternal?: number;
    material?: string;
    interiorcolor?: string;
    exteriorcolor?: string;
  }

  export interface IProductOrderPayload {
    productorder?: IProductOrder;
  }

  export interface IReviewInput {
    productorder: string;
    point: number;
    detail: string;
  }

  export interface IReviewPayload {
    status?: boolean;
    error?: string;
    review?: IReview;
  }

  export interface IupdateReviewInput {
    productorder?: string;
    point?: number;
    detail?: string;
  }

  export interface IConversationInput {
    product: string;
    code?: string;
    user: number;
  }

  export interface IConversationPayload {
    status?: boolean;
    error?: string;
    conversation?: IConversation;
  }

  export interface ITalkInput {
    conversation: string;
    user: number;
    talk: string;
  }

  export interface ITalkPayload {
    status?: boolean;
    error?: string;
    talk?: ITalk;
  }

  export interface IupdateTalkInput {
    conversation?: string;
    user?: number;
    talk?: string;
  }

  export interface IdepartmentInput {
    name: string;
  }

  export interface IDepartmentPayload {
    department?: IqueryDepartment;
  }

  export interface IupdateDepartment {
    id: string;
    name: string;
  }

  export interface IwasteInput {
    product: number;
    quantity: number;
    date?: IDatetime;
    action?: IRECORD_ACTION;
    activity?: IRECORD_ACTIVITY;
  }

  export const enum IRECORD_ACTION {
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT'
  }

  export const enum IRECORD_ACTIVITY {
    PURCHASE = 'PURCHASE',
    SALE = 'SALE',
    TRANSFER = 'TRANSFER',
    ADJUSTMENT = 'ADJUSTMENT',
    WASTE = 'WASTE'
  }

  export interface IupdateWaste {
    id: string;
    product?: number;
    quantity: number;
    date?: IDatetime;
  }

  export interface IWastePayload {
    waste?: IqueryRecord;
  }

  export interface IInvoiceInput {
    sale_order?: number;
    path?: string;
  }

  export interface IInvoicePayload {
    invoice?: IqueryInvoice;
  }

  export interface IupdateInvoice {
    id?: string;
    sale_order?: number;
    path?: string;
  }

  export interface IJourneyInput {
    id?: string;
    code?: string;
    name?: string;
    seller?: number;
    isActive?: boolean;
    stores?: Array<string | null>;
  }

  export interface IJourneyVisitInput {
    createdat?: IDatetime;
  }

  export interface IShiploadInput {
    page?: number;
    limit?: number;
    id?: string;
    site?: number;
    status?: ISTATUS_SALEORDER;
    code?: string;
    sellerCar?: number;
    date?: IDatetime;
    total?: number;
    journey?: number;
    product?: Array<string | null>;
    productQuantity?: Array<number | null>;
  }

  export interface IShiploadProductInput {
    id?: string;
    shipload: number;
    product?: number;
    quantity?: number;
  }

  export interface IWishListInput {
    name?: string;
  }

  export interface IWishedProductInput {
    list?: string;
    product?: string;
    customOrder?: number;
  }

  export interface IAppraisalInput {
    data?: Array<IdataAppraisal | null>;
  }

  export interface IdataAppraisal {
    id?: string;
    value?: string;
    valueId?: string;
  }

  export interface IPromotionInput {
    url?: string;
    url1?: string;
    descripcion?: string;
    type?: string;
  }

  export interface IPromotionPayload {
    promotion?: IPromotion;
  }

  export interface IKeyInput {
    sub_name?: string;
    sub_id?: string;
    sub_code?: string;
    creator_name?: string;
    creator_id?: string;
    org_code?: string;
    key_private: string;
    key_public?: string;
    type: number;
  }

  export interface IKeyPayload {
    status: boolean;
    error?: string;
    key?: IKey;
  }

  export interface IPaymentConektaInput {
    paymentType: number;
    amount: number;
    productName: string;
    token: string;
    saleOrder: number;
    quantity: number;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  }

  export interface IPaymentConektaPayload {
    status: boolean;
    error?: string;
    payment?: IPayment;
  }

  export interface IPaymentStripeInput {
    saleOrder?: string;
    clientEmail: string;
    amount: number;
    quantity: number;
  }

  export interface IPaymentPaypalInput {
    amount: number;
    quantity: number;
  }

  export interface ILinksOrderPaypal {
    href?: string;
    rel?: string;
    method?: string;
  }

  export interface IPaymentInput {
    saleOrder?: string;
    name?: string;
    paid?: boolean;
    status?: string;
  }

  export interface IArticleInput {
    titleEs?: string;
    titleEn?: string;
    subtitleEs?: string;
    subtitleEn?: string;
    contentEs?: string;
    contentEn?: string;
    abstractEs?: string;
    abstractEn?: string;
    banner0?: string;
    banner1?: string;
    active?: boolean;
    views?: number;
    author?: string;
    callToActionEs?: string;
    callToActionEn?: string;
    iframe?: string;
    releaseDate?: IDatetime;
    status?: IENUM_ARTICLE_STATUS;
  }

  export interface IArticlePayload {
    article?: IArticle;
  }

  export interface IAttachmentOfArticleInput {
    article: string;
    url: string;
    type: string;
    title?: string;
  }

  export interface IAttachmentOfArticlePayload {
    attachment?: IAttachmentOfArticle;
  }

  export interface ITagsOfArticleInput {
    article: string;
    name: string;
    description?: string;
  }

  export interface ITagsOfArticlePayload {
    tags?: ITagsOfArticle;
  }

  export interface ICategoryOfArticleInput {
    article?: string;
    name: string;
    description?: string;
  }

  export interface ICategoryOfArticlePayload {
    category?: ICategoryOfArticle;
  }

  export interface IMetadataOfArticleInput {
    article: string;
    title?: string;
    description?: string;
    slug?: string;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface IMetadataOfArticlePayload {
    metadata?: IMetadataOfArticle;
  }

  export interface ICommentInput {
    article?: number;
    content?: string;
  }

  export interface IVoteOnCommentInput {
    comment?: number;
    vote?: boolean;
  }

  export interface ITopicInput {
    name?: string;
    creatorid?: number;
  }

  export interface IProgramInput {
    description?: string;
    category?: string;
    banner?: string;
    status?: IENUM_ARTICLE_STATUS;
  }

  export interface IPodcastInput {
    title: string;
    subtitle?: string;
    banner?: string;
    transcription?: string;
    content: string;
    abstact?: string;
    active?: boolean;
    duration?: string;
    views?: number;
    status?: IENUM_ARTICLE_STATUS;
    iframe?: string;
    release_date?: IDatetime;
    program?: number;
    topic?: number;
    author?: string;
  }

  export interface ICategoryForEntertaimentInput {
    nameEs?: string;
    nameEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
  }

  export interface ICategoryForPodcastInput {
    podcast?: number;
    categoryForEntertaiment?: number;
  }

  export interface ICategoryForProgramInput {
    program?: number;
    categoryForEntertaiment?: number;
  }

  export interface ICategoryForArticleInput {
    article?: number;
    categoryForEntertaiment?: number;
  }

  export interface IMetadataForEntertaimentInput {
    id: string;
    title?: string;
    description?: string;
    slug?: string;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface IMetadataForPodcastInput {
    article?: string;
    metadataForEntertaiment?: string;
  }

  export interface IMetadataForProgramInput {
    program?: string;
    metadataForEntertaiment?: string;
  }

  export interface IMetadataForArticleInput {
    article?: string;
    metadataForEntertaiment?: string;
  }

  export interface IMemeInput {
    description?: string;
    name?: string;
    image?: string;
  }

  export interface IInputAppointment {
    appointmentId?: string;
    date?: IDate;
    user?: number;
    duration?: number;
    product?: number;
    agent?: number;
    sessionRoomName?: string;
    sessionRoomId?: string;
    room?: string;
  }

  export interface ILogCreateInput {
    user_id: number;
    service: Iservice;
    action: Iaction;
  }

  export interface ISingleShipmentInput {
    idOrderSale: number;
    user?: number;
    description?: string;
    addressLine: string;
    stateCode?: string;
    city?: string;
    zipCode: string;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
    numberPhone?: string;
    name: string;
    mail: string;
    packageService: IENUM_PACKAGE_SERVICE;
    mailContent?: ImailContent;
    rfc?: string;
  }

  export interface ImailContent {
    cars?: string;
    items?: string;
    date?: string;
    total?: number;
    agence?: string;
    product?: string;
    invoiceName?: string;
    invoiceAddress?: string;
  }

  export interface IShipment {
    status?: IStatusReturn;
    shipmentnumber: string;
    trackingnumber: string;
    totalcharges: number;
    htmlimage?: string;
    graphicimage?: string;
  }

  export interface IMultiShipmentInput {
    idOrderSale: number;
    user?: number;
    package?: Array<Ipackage | null>;
    addressLine: string;
    stateCode?: string;
    city?: string;
    zipCode: string;
    numberPhone?: string;
    name: string;
    packageService: IENUM_PACKAGE_SERVICE;
  }

  export interface Ipackage {
    description?: string;
    weight?: string;
  }

  export interface ICancelShipmentInput {
    idOrderSale?: number;
    shipmentNumber: string;
    packageService: IENUM_PACKAGE_SERVICE;
  }

  export interface IgoalInput {
    id?: string;
    seller?: string;
    startDate?: IDatetime;
    validityDate?: IDatetime;
    saleGoal?: number;
    status?: IENUM_STATUS_GOAL;
    isActive?: boolean;
  }

  export interface IPageInput {
    site: string;
    slugEs?: string;
    slugEn?: string;
    titleEs?: string;
    titleEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
    metaDescriptionEs?: string;
    metaDescriptionEn?: string;
    status?: IENUM_PAGE_STATUS;
  }

  export interface IPagePayload {
    page?: IPage;
  }

  export interface IPageMetadataInput {
    page?: string;
    title?: string;
    slug?: string;
    description?: string;
    keyWords?: string;
    structuredMarked?: string;
    altImage?: string;
  }

  export interface IPageSectionInput {
    titleEs?: string;
    titleEn?: string;
    contentEs?: string;
    contentEn?: string;
    skuEs?: string;
    skuEn?: string;
    image?: string;
    active?: boolean;
    page: string;
  }

  export interface IPageSectionPayload {
    pagesection?: IPageSection;
  }

  export interface IPageSectionZippedInput {
    id: string;
    pageSection?: IPageSectionInput;
  }

  export interface IPageSectionIntoPageInput {
    page?: string;
    pageSection?: string;
    active?: boolean;
    titleEs?: string;
    titleEn?: string;
  }

  export interface IPageSubsectionInput {
    titleEs?: string;
    titleEn?: string;
    contentEs?: string;
    contentEn?: string;
    image?: string;
    pageSection: string;
  }

  export interface IPageSubsectionPayload {
    pagesubsection?: IPageSubsection;
  }

  export interface IPageSubsectionZippedInput {
    id: string;
    pageSubsection?: IPageSubsectionInput;
  }

  export interface IPageHeaderInput {
    title?: string;
    description?: string;
    banner?: string;
    page: string;
  }

  export interface IPageHeaderPayload {
    pageheader?: IPageHeader;
  }

  export interface IMetadataInput {
    title?: string;
    description?: string;
    keywords?: Array<string | null>;
    analyticsCode?: string;
    serchsConsoleCode?: string;
    markdownJson?: string;
  }

  export interface IMetadataPayload {
    metadata?: IMetadata;
  }

  export interface IKeywordsInput {
    keyword?: string;
    metadata?: string;
  }

  export interface IKeywordsPayload {
    keywords?: IKeywords;
  }

  export interface IDirectoryInput {
    site: string;
    name?: string;
    country?: string;
    latitude?: string;
    longitude?: string;
    phone?: string;
    mobile?: string;
  }

  export interface IDirectoryPayload {
    directory?: IDirectory;
  }

  export interface ISitesInput {
    partneCode?: string;
  }

  export interface ISitesPayload {
    sites?: ISites;
  }

  export interface IStyleInput {
    site?: number;
    order?: number;
  }

  export interface IFontInput {
    style?: number;
    titleFont?: string;
    textFont?: string;
    align?: IENUM_TEXT_ALIGN;
  }

  export interface IColorInput {
    style?: number;
    header?: string;
    highlight?: string;
    background?: string;
    backgroundSecondary?: string;
    positive?: string;
    negative?: string;
  }

  export interface ILogoInput {
    style?: number;
    height?: string;
    length?: string;
    width?: string;
    url?: string;
  }

  export interface ICarouselInput {
    titleEs?: string;
    titleEn?: string;
    descriptionEs?: string;
    descriptionEn?: string;
    keyWordsEs?: string;
    keyWordsEn?: string;
    altEs?: string;
    altEn?: string;
    image: string;
    order?: number;
    pageSection?: number;
  }

  export interface ICarouselIntoPageSectionInput {
    carousel?: string;
    pageSection?: string;
  }

  export interface ISubcategory0 {
    id: string;
    name: string;
    description?: string;
  }

  export interface IvalueSemi {
    locationId?: string;
    name?: string;
  }

  export interface IScheduleFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IScheduleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<ISchedule | null>;
  }

  export interface IColorsFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IColorsReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IColors | null>;
  }

  export interface IRecord {
    action?: string;
    activity?: string;
    product?: number;
    price?: number;
    quantity?: number;
    shipload?: number;
  }

  export interface IPaymentPaypalPayload {
    status: boolean;
    error?: string;
    payment?: IPayment;
  }

  export interface IResponseOrderPaypal {
    id?: string;
    status?: string;
    links?: Array<ILinksOrderPaypal | null>;
    error?: string;
  }

  export interface IMetadataOfArticleFilterInput {
    page?: number;
    limit?: number;
  }

  export interface IMetadataOfArticleReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IMetadataOfArticle | null>;
  }

  export const enum ICHAT_SENDER {
    USER = 'USER',
    BOT = 'BOT'
  }

  export interface IPageMetadataInputFilter {
    page?: number;
    limit?: number;
  }

  export interface IPageMetadataReturn {
    page?: number;
    limit?: number;
    pagingcounter?: number;
    totaldocs?: number;
    hasprevpage?: boolean;
    hasnextpage?: boolean;
    docs?: Array<IPageMetadata | null>;
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
    UserReturn?: IUserReturnTypeResolver;
    User?: IUserTypeResolver;
    Datetime?: GraphQLScalarType;
    Profile?: IProfileTypeResolver;
    Partner?: IPartnerTypeResolver;
    Organization?: IOrganizationTypeResolver;
    OrgApp?: IOrgAppTypeResolver;
    App?: IAppTypeResolver;
    Site?: ISiteTypeResolver;
    Sector?: ISectorTypeResolver;
    Featured?: IFeaturedTypeResolver;
    SocialMedia?: ISocialMediaTypeResolver;
    DataContact?: IDataContactTypeResolver;
    Access?: IAccessTypeResolver;
    Group?: IGroupTypeResolver;
    Rol?: IRolTypeResolver;
    Rule?: IRuleTypeResolver;
    SectionOfProduct?: ISectionOfProductTypeResolver;
    TemplateInfo?: ITemplateInfoTypeResolver;
    ValuesOfTemplate?: IValuesOfTemplateTypeResolver;
    Product?: IProductTypeResolver;
    Category?: ICategoryTypeResolver;
    Subcategory?: ISubcategoryTypeResolver;
    Brand?: IBrandTypeResolver;
    Address?: IAddressTypeResolver;
    Attachment?: IAttachmentTypeResolver;
    Version?: IVersionTypeResolver;
    Colors?: IColorsTypeResolver;
    DetailProperty?: IDetailPropertyTypeResolver;
    Conversation?: IConversationTypeResolver;
    Talk?: ITalkTypeResolver;
    Schedule?: IScheduleTypeResolver;
    BenefitsOfProduct?: IBenefitsOfProductTypeResolver;
    BulletsOfBenefits?: IBulletsOfBenefitsTypeResolver;
    Sites?: ISitesTypeResolver;
    Metadata?: IMetadataTypeResolver;
    Keywords?: IKeywordsTypeResolver;
    Page?: IPageTypeResolver;
    PageHeader?: IPageHeaderTypeResolver;
    PageSection?: IPageSectionTypeResolver;
    PageSubsection?: IPageSubsectionTypeResolver;
    PageSectionIntoPage?: IPageSectionIntoPageTypeResolver;
    Carousel?: ICarouselTypeResolver;
    CarouselIntoPageSection?: ICarouselIntoPageSectionTypeResolver;
    PageMetadata?: IPageMetadataTypeResolver;
    Directory?: IDirectoryTypeResolver;
    Style?: IStyleTypeResolver;
    Logo?: ILogoTypeResolver;
    Color?: IColorTypeResolver;
    Font?: IFontTypeResolver;
    Detail?: IDetailTypeResolver;
    MailingAddress?: IMailingAddressTypeResolver;
    Region?: IRegionTypeResolver;
    InvoiceAddress?: IInvoiceAddressTypeResolver;
    SaleOrder?: ISaleOrderTypeResolver;
    ProductOrder?: IProductOrderTypeResolver;
    Shipload?: IShiploadTypeResolver;
    Journey?: IJourneyTypeResolver;
    Store?: IStoreTypeResolver;
    storephones?: IstorephonesTypeResolver;
    storemails?: IstoremailsTypeResolver;
    JourneyVisitStore?: IJourneyVisitStoreTypeResolver;
    SellerUser?: ISellerUserTypeResolver;
    sellerphones?: IsellerphonesTypeResolver;
    sellermails?: IsellermailsTypeResolver;
    Goal?: IGoalTypeResolver;
    Payment?: IPaymentTypeResolver;
    SaleOrderID?: ISaleOrderIDTypeResolver;
    Appointment?: IAppointmentTypeResolver;
    Date?: GraphQLScalarType;
    Log?: ILogTypeResolver;
    EmailUserReturn?: IEmailUserReturnTypeResolver;
    PartnerReturn?: IPartnerReturnTypeResolver;
    AccessReturn?: IAccessReturnTypeResolver;
    RuleReturn?: IRuleReturnTypeResolver;
    Startupstatus?: IStartupstatusTypeResolver;
    SellerUserReturn?: ISellerUserReturnTypeResolver;
    SectorReturn?: ISectorReturnTypeResolver;
    FeaturedReturn?: IFeaturedReturnTypeResolver;
    CategoryReturn?: ICategoryReturnTypeResolver;
    SubcategoryReturn?: ISubcategoryReturnTypeResolver;
    ProductReturn?: IProductReturnTypeResolver;
    ProductSemiReturn?: IProductSemiReturnTypeResolver;
    ProductSemi?: IProductSemiTypeResolver;
    SemiFilters?: ISemiFiltersTypeResolver;
    MaxMin?: IMaxMinTypeResolver;
    CatalogSemiReturn?: ICatalogSemiReturnTypeResolver;
    CatalogSemi?: ICatalogSemiTypeResolver;
    parentsSemi?: IparentsSemiTypeResolver;
    childrenSemi?: IchildrenSemiTypeResolver;
    LocationsSemiReturn?: ILocationsSemiReturnTypeResolver;
    LocationsSemi?: ILocationsSemiTypeResolver;
    childrenLocationSemi?: IchildrenLocationSemiTypeResolver;
    AttributesSemiReturn?: IAttributesSemiReturnTypeResolver;
    AttributesSemi?: IAttributesSemiTypeResolver;
    AppraisalPayload?: IAppraisalPayloadTypeResolver;
    CardealersSemiReturn?: ICardealersSemiReturnTypeResolver;
    CardealersSemi?: ICardealersSemiTypeResolver;
    locationSemi?: IlocationSemiTypeResolver;
    locationData?: IlocationDataTypeResolver;
    CatalogSemiNewReturn?: ICatalogSemiNewReturnTypeResolver;
    AddressReturn?: IAddressReturnTypeResolver;
    AttachmentReturn?: IAttachmentReturnTypeResolver;
    DetailPropertyReturn?: IDetailPropertyReturnTypeResolver;
    VersionReturn?: IVersionReturnTypeResolver;
    SaleOrderReturn?: ISaleOrderReturnTypeResolver;
    ProductOrderReturn?: IProductOrderReturnTypeResolver;
    ReviewReturn?: IReviewReturnTypeResolver;
    Review?: IReviewTypeResolver;
    ConversationReturn?: IConversationReturnTypeResolver;
    ZipCodeReturn?: IZipCodeReturnTypeResolver;
    ZipCode?: IZipCodeTypeResolver;
    StoreReturn?: IStoreReturnTypeResolver;
    JourneyReturn?: IJourneyReturnTypeResolver;
    ShiploadReturn?: IShiploadReturnTypeResolver;
    ShipProd?: IShipProdTypeResolver;
    ProdOfShip?: IProdOfShipTypeResolver;
    ShiploadProductReturn?: IShiploadProductReturnTypeResolver;
    ShiploadProduct?: IShiploadProductTypeResolver;
    WishListReturn?: IWishListReturnTypeResolver;
    WishList?: IWishListTypeResolver;
    WishedProductReturn?: IWishedProductReturnTypeResolver;
    WishedProduct?: IWishedProductTypeResolver;
    SectionOfProductReturn?: ISectionOfProductReturnTypeResolver;
    TemplateInfoReturn?: ITemplateInfoReturnTypeResolver;
    ValuesOfTemplateReturn?: IValuesOfTemplateReturnTypeResolver;
    queryDepartment?: IqueryDepartmentTypeResolver;
    RecordReturn?: IRecordReturnTypeResolver;
    queryRecord?: IqueryRecordTypeResolver;
    queryInvoice?: IqueryInvoiceTypeResolver;
    DebtsReturn?: IDebtsReturnTypeResolver;
    Debts?: IDebtsTypeResolver;
    SellerSaleOrderReturn?: ISellerSaleOrderReturnTypeResolver;
    SellerSaleOrder?: ISellerSaleOrderTypeResolver;
    ProductSaleOrderReturn?: IProductSaleOrderReturnTypeResolver;
    ProductSaleOrder?: IProductSaleOrderTypeResolver;
    PromotionReturn?: IPromotionReturnTypeResolver;
    Promotion?: IPromotionTypeResolver;
    Key?: IKeyTypeResolver;
    ArticleReturn?: IArticleReturnTypeResolver;
    Article?: IArticleTypeResolver;
    CategoryForArticle?: ICategoryForArticleTypeResolver;
    CategoryForEntertaiment?: ICategoryForEntertaimentTypeResolver;
    MetadataForArticle?: IMetadataForArticleTypeResolver;
    MetadataForEntertaiment?: IMetadataForEntertaimentTypeResolver;
    AttachmentOfArticle?: IAttachmentOfArticleTypeResolver;
    TagsOfArticle?: ITagsOfArticleTypeResolver;
    CategoryOfArticle?: ICategoryOfArticleTypeResolver;
    MetadataOfArticle?: IMetadataOfArticleTypeResolver;
    Card?: ICardTypeResolver;
    Comment?: ICommentTypeResolver;
    VoteOnComment?: IVoteOnCommentTypeResolver;
    Topic?: ITopicTypeResolver;
    AttachmentOfArticleReturn?: IAttachmentOfArticleReturnTypeResolver;
    TagsOfArticleReturn?: ITagsOfArticleReturnTypeResolver;
    CategoryOfArticleReturn?: ICategoryOfArticleReturnTypeResolver;
    CommentReturn?: ICommentReturnTypeResolver;
    VoteOnCommentReturn?: IVoteOnCommentReturnTypeResolver;
    TopicReturn?: ITopicReturnTypeResolver;
    ProgramReturn?: IProgramReturnTypeResolver;
    Program?: IProgramTypeResolver;
    Podcast?: IPodcastTypeResolver;
    CategoryForPodcast?: ICategoryForPodcastTypeResolver;
    MetadataForPodcast?: IMetadataForPodcastTypeResolver;
    CategoryForProgram?: ICategoryForProgramTypeResolver;
    MetadataForProgram?: IMetadataForProgramTypeResolver;
    PodcastReturn?: IPodcastReturnTypeResolver;
    CategoryForEntertaimentReturn?: ICategoryForEntertaimentReturnTypeResolver;
    MetadataForEntertaimentReturn?: IMetadataForEntertaimentReturnTypeResolver;
    MemeReturn?: IMemeReturnTypeResolver;
    Meme?: IMemeTypeResolver;
    ChatBotResult?: IChatBotResultTypeResolver;
    ChatBot?: IChatBotTypeResolver;
    ChatBotMessage?: IChatBotMessageTypeResolver;
    DomiMetrics?: IDomiMetricsTypeResolver;
    DomiMetricsPositions?: IDomiMetricsPositionsTypeResolver;
    ActionPercentage?: IActionPercentageTypeResolver;
    DomiMetricsRankings?: IDomiMetricsRankingsTypeResolver;
    DomiMetricsRanking?: IDomiMetricsRankingTypeResolver;
    AppointmentResult?: IAppointmentResultTypeResolver;
    AvailableSchedule?: IAvailableScheduleTypeResolver;
    LogsByPage?: ILogsByPageTypeResolver;
    StatusReturn?: IStatusReturnTypeResolver;
    TimeInTransit?: ITimeInTransitTypeResolver;
    EstimatedArrival?: IEstimatedArrivalTypeResolver;
    goalReturn?: IgoalReturnTypeResolver;
    PageReturn?: IPageReturnTypeResolver;
    PageSectionReturn?: IPageSectionReturnTypeResolver;
    PageSubsectionReturn?: IPageSubsectionReturnTypeResolver;
    PageHeaderReturn?: IPageHeaderReturnTypeResolver;
    MetadataReturn?: IMetadataReturnTypeResolver;
    KeywordsReturn?: IKeywordsReturnTypeResolver;
    DirectoryReturn?: IDirectoryReturnTypeResolver;
    SitesReturn?: ISitesReturnTypeResolver;
    StyleReturn?: IStyleReturnTypeResolver;
    FontReturn?: IFontReturnTypeResolver;
    ColorReturn?: IColorReturnTypeResolver;
    LogoReturn?: ILogoReturnTypeResolver;
    CarouselReturn?: ICarouselReturnTypeResolver;
    Mutation?: IMutationTypeResolver;
    UserPayload?: IUserPayloadTypeResolver;
    ProfilePayload?: IProfilePayloadTypeResolver;
    DetailPayload?: IDetailPayloadTypeResolver;
    RegionPayload?: IRegionPayloadTypeResolver;
    DetailMassivePayload?: IDetailMassivePayloadTypeResolver;
    MailingAddressPayload?: IMailingAddressPayloadTypeResolver;
    InvoiceAddressPayload?: IInvoiceAddressPayloadTypeResolver;
    UserProfilePayload?: IUserProfilePayloadTypeResolver;
    LoginPayload?: ILoginPayloadTypeResolver;
    SendResetPasswordLinkPayload?: ISendResetPasswordLinkPayloadTypeResolver;
    BearerPayload?: IBearerPayloadTypeResolver;
    BearerValidatePayload?: IBearerValidatePayloadTypeResolver;
    OrganizationPayload?: IOrganizationPayloadTypeResolver;
    PartnerPayload?: IPartnerPayloadTypeResolver;
    AppPayload?: IAppPayloadTypeResolver;
    OrgAppPayload?: IOrgAppPayloadTypeResolver;
    SocialMediaPayload?: ISocialMediaPayloadTypeResolver;
    DataContactPayload?: IDataContactPayloadTypeResolver;
    AccessPayload?: IAccessPayloadTypeResolver;
    GroupPayload?: IGroupPayloadTypeResolver;
    RulePayload?: IRulePayloadTypeResolver;
    RolPayload?: IRolPayloadTypeResolver;
    CategoryPayload?: ICategoryPayloadTypeResolver;
    SubcategoryPayload?: ISubcategoryPayloadTypeResolver;
    BrandPayload?: IBrandPayloadTypeResolver;
    ProductPayload?: IProductPayloadTypeResolver;
    StatusPayload?: IStatusPayloadTypeResolver;
    AddressPayload?: IAddressPayloadTypeResolver;
    AttachmentPayload?: IAttachmentPayloadTypeResolver;
    DetailPropertyPayload?: IDetailPropertyPayloadTypeResolver;
    SchedulePayload?: ISchedulePayloadTypeResolver;
    VersionPayload?: IVersionPayloadTypeResolver;
    ColorsPayload?: IColorsPayloadTypeResolver;
    SaleOrderPayload?: ISaleOrderPayloadTypeResolver;
    ProductOrderPayload?: IProductOrderPayloadTypeResolver;
    ReviewPayload?: IReviewPayloadTypeResolver;
    ConversationPayload?: IConversationPayloadTypeResolver;
    TalkPayload?: ITalkPayloadTypeResolver;
    DepartmentPayload?: IDepartmentPayloadTypeResolver;
    WastePayload?: IWastePayloadTypeResolver;
    InvoicePayload?: IInvoicePayloadTypeResolver;
    PromotionPayload?: IPromotionPayloadTypeResolver;
    KeyPayload?: IKeyPayloadTypeResolver;
    PaymentConektaPayload?: IPaymentConektaPayloadTypeResolver;
    LinksOrderPaypal?: ILinksOrderPaypalTypeResolver;
    ArticlePayload?: IArticlePayloadTypeResolver;
    AttachmentOfArticlePayload?: IAttachmentOfArticlePayloadTypeResolver;
    TagsOfArticlePayload?: ITagsOfArticlePayloadTypeResolver;
    CategoryOfArticlePayload?: ICategoryOfArticlePayloadTypeResolver;
    MetadataOfArticlePayload?: IMetadataOfArticlePayloadTypeResolver;
    Shipment?: IShipmentTypeResolver;
    PagePayload?: IPagePayloadTypeResolver;
    PageSectionPayload?: IPageSectionPayloadTypeResolver;
    PageSubsectionPayload?: IPageSubsectionPayloadTypeResolver;
    PageHeaderPayload?: IPageHeaderPayloadTypeResolver;
    MetadataPayload?: IMetadataPayloadTypeResolver;
    KeywordsPayload?: IKeywordsPayloadTypeResolver;
    DirectoryPayload?: IDirectoryPayloadTypeResolver;
    SitesPayload?: ISitesPayloadTypeResolver;
    Subcategory0?: ISubcategory0TypeResolver;
    valueSemi?: IvalueSemiTypeResolver;
    ScheduleReturn?: IScheduleReturnTypeResolver;
    ColorsReturn?: IColorsReturnTypeResolver;
    Record?: IRecordTypeResolver;
    PaymentPaypalPayload?: IPaymentPaypalPayloadTypeResolver;
    ResponseOrderPaypal?: IResponseOrderPaypalTypeResolver;
    MetadataOfArticleReturn?: IMetadataOfArticleReturnTypeResolver;
    PageMetadataReturn?: IPageMetadataReturnTypeResolver;
  }
  export interface IQueryTypeResolver<TParent = any> {
    listUser?: QueryToListUserResolver<TParent>;
    getUserById?: QueryToGetUserByIdResolver<TParent>;
    listProfile?: QueryToListProfileResolver<TParent>;
    getProfileById?: QueryToGetProfileByIdResolver<TParent>;
    listDetail?: QueryToListDetailResolver<TParent>;
    getDetailById?: QueryToGetDetailByIdResolver<TParent>;
    listMailingAddress?: QueryToListMailingAddressResolver<TParent>;
    getMailingAddressById?: QueryToGetMailingAddressByIdResolver<TParent>;
    listInvoiceAddress?: QueryToListInvoiceAddressResolver<TParent>;
    getInvoiceAddressById?: QueryToGetInvoiceAddressByIdResolver<TParent>;
    searchEmailUser?: QueryToSearchEmailUserResolver<TParent>;
    users?: QueryToUsersResolver<TParent>;
    profile?: QueryToProfileResolver<TParent>;
    detail?: QueryToDetailResolver<TParent>;
    mailingaddress?: QueryToMailingaddressResolver<TParent>;
    mailingaddressForID?: QueryToMailingaddressForIDResolver<TParent>;
    me?: QueryToMeResolver<TParent>;
    listPartner?: QueryToListPartnerResolver<TParent>;
    getPartnerById?: QueryToGetPartnerByIdResolver<TParent>;
    checkUrlFromPartner?: QueryToCheckUrlFromPartnerResolver<TParent>;
    listAccess?: QueryToListAccessResolver<TParent>;
    getAccessById?: QueryToGetAccessByIdResolver<TParent>;
    listRule?: QueryToListRuleResolver<TParent>;
    getRuleById?: QueryToGetRuleByIdResolver<TParent>;
    organization?: QueryToOrganizationResolver<TParent>;
    partner?: QueryToPartnerResolver<TParent>;
    app?: QueryToAppResolver<TParent>;
    orgapp?: QueryToOrgappResolver<TParent>;
    access?: QueryToAccessResolver<TParent>;
    group?: QueryToGroupResolver<TParent>;
    rule?: QueryToRuleResolver<TParent>;
    rol?: QueryToRolResolver<TParent>;
    liveness?: QueryToLivenessResolver<TParent>;
    readiness?: QueryToReadinessResolver<TParent>;
    getSellerByIdUser?: QueryToGetSellerByIdUserResolver<TParent>;
    listUserSellers?: QueryToListUserSellersResolver<TParent>;
    getSector?: QueryToGetSectorResolver<TParent>;
    listSectors?: QueryToListSectorsResolver<TParent>;
    getFeatured?: QueryToGetFeaturedResolver<TParent>;
    listFeatured?: QueryToListFeaturedResolver<TParent>;
    listCategory?: QueryToListCategoryResolver<TParent>;
    getCategoryById?: QueryToGetCategoryByIdResolver<TParent>;
    listSubcategory?: QueryToListSubcategoryResolver<TParent>;
    getSubcategoryById?: QueryToGetSubcategoryByIdResolver<TParent>;
    listProduct?: QueryToListProductResolver<TParent>;
    getProductById?: QueryToGetProductByIdResolver<TParent>;
    listProductSemi?: QueryToListProductSemiResolver<TParent>;
    getProductSemiById?: QueryToGetProductSemiByIdResolver<TParent>;
    listCatalogSemi?: QueryToListCatalogSemiResolver<TParent>;
    listLocationsSemi?: QueryToListLocationsSemiResolver<TParent>;
    listAttributesSemi?: QueryToListAttributesSemiResolver<TParent>;
    listAppraisalsSemi?: QueryToListAppraisalsSemiResolver<TParent>;
    listCardealersSemi?: QueryToListCardealersSemiResolver<TParent>;
    listCatalogSemiNew?: QueryToListCatalogSemiNewResolver<TParent>;
    listAddress?: QueryToListAddressResolver<TParent>;
    getAddressById?: QueryToGetAddressByIdResolver<TParent>;
    listAttachment?: QueryToListAttachmentResolver<TParent>;
    getAttachmentById?: QueryToGetAttachmentByIdResolver<TParent>;
    listDetailProperty?: QueryToListDetailPropertyResolver<TParent>;
    getDetailPropertyById?: QueryToGetDetailPropertyByIdResolver<TParent>;
    listVersion?: QueryToListVersionResolver<TParent>;
    getVersionById?: QueryToGetVersionByIdResolver<TParent>;
    listSaleOrder?: QueryToListSaleOrderResolver<TParent>;
    getSaleOrderById?: QueryToGetSaleOrderByIdResolver<TParent>;
    getSaleOrderMe?: QueryToGetSaleOrderMeResolver<TParent>;
    getSaleOrderMeLast?: QueryToGetSaleOrderMeLastResolver<TParent>;
    listProductOrder?: QueryToListProductOrderResolver<TParent>;
    getProductOrderById?: QueryToGetProductOrderByIdResolver<TParent>;
    listReview?: QueryToListReviewResolver<TParent>;
    getReviewById?: QueryToGetReviewByIdResolver<TParent>;
    listConversation?: QueryToListConversationResolver<TParent>;
    getConversationById?: QueryToGetConversationByIdResolver<TParent>;
    listZipCode?: QueryToListZipCodeResolver<TParent>;
    getZipCodeById?: QueryToGetZipCodeByIdResolver<TParent>;
    listStores?: QueryToListStoresResolver<TParent>;
    getStoreById?: QueryToGetStoreByIdResolver<TParent>;
    listJourney?: QueryToListJourneyResolver<TParent>;
    getJourneyById?: QueryToGetJourneyByIdResolver<TParent>;
    listShipload?: QueryToListShiploadResolver<TParent>;
    getShipload?: QueryToGetShiploadResolver<TParent>;
    listShiploadProduct?: QueryToListShiploadProductResolver<TParent>;
    listWishLists?: QueryToListWishListsResolver<TParent>;
    getWishListById?: QueryToGetWishListByIdResolver<TParent>;
    listWishedItems?: QueryToListWishedItemsResolver<TParent>;
    getWishedItemById?: QueryToGetWishedItemByIdResolver<TParent>;
    listSectionOfProduct?: QueryToListSectionOfProductResolver<TParent>;
    getSectionOfProduct?: QueryToGetSectionOfProductResolver<TParent>;
    listTemplateInfo?: QueryToListTemplateInfoResolver<TParent>;
    getTemplateInfo?: QueryToGetTemplateInfoResolver<TParent>;
    listValueOfTemplate?: QueryToListValueOfTemplateResolver<TParent>;
    getValueOfTemplate?: QueryToGetValueOfTemplateResolver<TParent>;
    review?: QueryToReviewResolver<TParent>;
    conversation?: QueryToConversationResolver<TParent>;
    talk?: QueryToTalkResolver<TParent>;
    listDepartments?: QueryToListDepartmentsResolver<TParent>;
    listWaste?: QueryToListWasteResolver<TParent>;
    listInvoices?: QueryToListInvoicesResolver<TParent>;
    getInvoiceBySaleOrder?: QueryToGetInvoiceBySaleOrderResolver<TParent>;
    storesWithDebts?: QueryToStoresWithDebtsResolver<TParent>;
    getSellerBySaleOrderDash?: QueryToGetSellerBySaleOrderDashResolver<TParent>;
    getProductBySaleOrderDash?: QueryToGetProductBySaleOrderDashResolver<TParent>;
    listPromotion?: QueryToListPromotionResolver<TParent>;
    getPromotionById?: QueryToGetPromotionByIdResolver<TParent>;
    key?: QueryToKeyResolver<TParent>;
    payments?: QueryToPaymentsResolver<TParent>;
    paymentForSalesOrder?: QueryToPaymentForSalesOrderResolver<TParent>;
    listArticle?: QueryToListArticleResolver<TParent>;
    getArticleById?: QueryToGetArticleByIdResolver<TParent>;
    listAttachmentOfArticle?: QueryToListAttachmentOfArticleResolver<TParent>;
    getAttachmentOfArticleById?: QueryToGetAttachmentOfArticleByIdResolver<TParent>;
    listTagsOfArticle?: QueryToListTagsOfArticleResolver<TParent>;
    getTagsOfArticleById?: QueryToGetTagsOfArticleByIdResolver<TParent>;
    listCategoryOfArticle?: QueryToListCategoryOfArticleResolver<TParent>;
    getCategoryOfArticleById?: QueryToGetCategoryOfArticleByIdResolver<TParent>;
    listComments?: QueryToListCommentsResolver<TParent>;
    getComment?: QueryToGetCommentResolver<TParent>;
    listVotesOnComment?: QueryToListVotesOnCommentResolver<TParent>;
    getVoteOnComment?: QueryToGetVoteOnCommentResolver<TParent>;
    listTopic?: QueryToListTopicResolver<TParent>;
    getTopic?: QueryToGetTopicResolver<TParent>;
    listProgram?: QueryToListProgramResolver<TParent>;
    getProgram?: QueryToGetProgramResolver<TParent>;
    listPodcast?: QueryToListPodcastResolver<TParent>;
    getPodcast?: QueryToGetPodcastResolver<TParent>;
    listCategoryForEntertaiment?: QueryToListCategoryForEntertaimentResolver<TParent>;
    getCategoryForEntertaiment?: QueryToGetCategoryForEntertaimentResolver<TParent>;
    listMetadataForEntertaiment?: QueryToListMetadataForEntertaimentResolver<TParent>;
    getMetadataForEntertaiment?: QueryToGetMetadataForEntertaimentResolver<TParent>;
    listMeme?: QueryToListMemeResolver<TParent>;
    getMeme?: QueryToGetMemeResolver<TParent>;
    listDomiConversation?: QueryToListDomiConversationResolver<TParent>;
    listDomiConversationMessages?: QueryToListDomiConversationMessagesResolver<TParent>;
    getDomiConversationsMetrics?: QueryToGetDomiConversationsMetricsResolver<TParent>;
    getDomiConversationsMetricsByProperty?: QueryToGetDomiConversationsMetricsByPropertyResolver<TParent>;
    getAppointmentById?: QueryToGetAppointmentByIdResolver<TParent>;
    listAppointments?: QueryToListAppointmentsResolver<TParent>;
    listAppointmentsByUser?: QueryToListAppointmentsByUserResolver<TParent>;
    listAvailableSchedules?: QueryToListAvailableSchedulesResolver<TParent>;
    listLogs?: QueryToListLogsResolver<TParent>;
    getAddressValidation?: QueryToGetAddressValidationResolver<TParent>;
    getRating?: QueryToGetRatingResolver<TParent>;
    getTimeInTransit?: QueryToGetTimeInTransitResolver<TParent>;
    getGoal?: QueryToGetGoalResolver<TParent>;
    goalList?: QueryToGoalListResolver<TParent>;
    listPage?: QueryToListPageResolver<TParent>;
    getPageById?: QueryToGetPageByIdResolver<TParent>;
    listPageSection?: QueryToListPageSectionResolver<TParent>;
    getPageSectionById?: QueryToGetPageSectionByIdResolver<TParent>;
    listPageSubsection?: QueryToListPageSubsectionResolver<TParent>;
    getPageSubsectionById?: QueryToGetPageSubsectionByIdResolver<TParent>;
    listPageHeader?: QueryToListPageHeaderResolver<TParent>;
    getPageHeaderById?: QueryToGetPageHeaderByIdResolver<TParent>;
    listMetadata?: QueryToListMetadataResolver<TParent>;
    getMetadataById?: QueryToGetMetadataByIdResolver<TParent>;
    listKeywords?: QueryToListKeywordsResolver<TParent>;
    getKeywordsById?: QueryToGetKeywordsByIdResolver<TParent>;
    listDirectory?: QueryToListDirectoryResolver<TParent>;
    getDirectoryById?: QueryToGetDirectoryByIdResolver<TParent>;
    listSites?: QueryToListSitesResolver<TParent>;
    getSitesById?: QueryToGetSitesByIdResolver<TParent>;
    listStyle?: QueryToListStyleResolver<TParent>;
    getStyle?: QueryToGetStyleResolver<TParent>;
    listFont?: QueryToListFontResolver<TParent>;
    getFont?: QueryToGetFontResolver<TParent>;
    listColor?: QueryToListColorResolver<TParent>;
    getColor?: QueryToGetColorResolver<TParent>;
    listLogo?: QueryToListLogoResolver<TParent>;
    getLogo?: QueryToGetLogoResolver<TParent>;
    listCarousel?: QueryToListCarouselResolver<TParent>;
    getCarousel?: QueryToGetCarouselResolver<TParent>;
    getPageMetadata?: QueryToGetPageMetadataResolver<TParent>;
  }

  export interface QueryToListUserArgs {
    input?: IUserFilterInput;
  }
  export interface QueryToListUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListUserArgs,
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

  export interface QueryToListProfileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProfileByIdArgs {
    id: string;
  }
  export interface QueryToGetProfileByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetProfileByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListDetailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetDetailByIdArgs {
    id: string;
  }
  export interface QueryToGetDetailByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetDetailByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListMailingAddressResolver<
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

  export interface QueryToGetMailingAddressByIdArgs {
    id: string;
  }
  export interface QueryToGetMailingAddressByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetMailingAddressByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListInvoiceAddressResolver<
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

  export interface QueryToGetInvoiceAddressByIdArgs {
    id: string;
  }
  export interface QueryToGetInvoiceAddressByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetInvoiceAddressByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToSearchEmailUserArgs {
    input?: IEmailUserInput;
  }
  export interface QueryToSearchEmailUserResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToSearchEmailUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToUsersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToProfileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToDetailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToMailingaddressResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToMailingaddressForIDArgs {
    id: string;
  }
  export interface QueryToMailingaddressForIDResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToMailingaddressForIDArgs,
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

  export interface QueryToListPartnerArgs {
    input?: IPartnerFilterInput;
  }
  export interface QueryToListPartnerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListPartnerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPartnerByIdArgs {
    id: string;
  }
  export interface QueryToGetPartnerByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetPartnerByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToCheckUrlFromPartnerArgs {
    url: string;
  }
  export interface QueryToCheckUrlFromPartnerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToCheckUrlFromPartnerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAccessArgs {
    input?: IAccessFilterInput;
  }
  export interface QueryToListAccessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListAccessArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetAccessByIdArgs {
    id: string;
  }
  export interface QueryToGetAccessByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetAccessByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListRuleArgs {
    input?: IRuleFilterInput;
  }
  export interface QueryToListRuleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListRuleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetRuleByIdArgs {
    id: string;
  }
  export interface QueryToGetRuleByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetRuleByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToOrganizationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToPartnerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToAppResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToOrgappResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToAccessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToRuleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToRolResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToLivenessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToReadinessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSellerByIdUserArgs {
    id: string;
  }
  export interface QueryToGetSellerByIdUserResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetSellerByIdUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListUserSellersArgs {
    input: ISellerUserInput;
  }
  export interface QueryToListUserSellersResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListUserSellersArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSectorArgs {
    id: string;
  }
  export interface QueryToGetSectorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetSectorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListSectorsArgs {
    input: ISectorFilterInput;
  }
  export interface QueryToListSectorsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListSectorsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetFeaturedArgs {
    id: string;
  }
  export interface QueryToGetFeaturedResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetFeaturedArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListFeaturedArgs {
    input: IFeaturedFilterInput;
  }
  export interface QueryToListFeaturedResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListFeaturedArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCategoryArgs {
    input?: ICategoryFilterInput;
  }
  export interface QueryToListCategoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListCategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetCategoryByIdArgs {
    id: string;
  }
  export interface QueryToGetCategoryByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetCategoryByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListSubcategoryArgs {
    input?: ISubcategoryFilterInput;
  }
  export interface QueryToListSubcategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListSubcategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSubcategoryByIdArgs {
    id: string;
  }
  export interface QueryToGetSubcategoryByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetSubcategoryByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListProductArgs {
    input?: IProductFilterInput;
  }
  export interface QueryToListProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListProductArgs,
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

  export interface QueryToListProductSemiArgs {
    input?: IProductSemiFilterInput;
  }
  export interface QueryToListProductSemiResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListProductSemiArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProductSemiByIdArgs {
    id: string;
  }
  export interface QueryToGetProductSemiByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetProductSemiByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCatalogSemiArgs {
    input?: ICatalogSemiFilterInput;
  }
  export interface QueryToListCatalogSemiResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListCatalogSemiArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListLocationsSemiArgs {
    input?: ILocationsSemiFilterInput;
  }
  export interface QueryToListLocationsSemiResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListLocationsSemiArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAttributesSemiArgs {
    input?: IAttributesSemiFilterInput;
  }
  export interface QueryToListAttributesSemiResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListAttributesSemiArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAppraisalsSemiArgs {
    input?: IAppraisalsSemiFilterInput;
  }
  export interface QueryToListAppraisalsSemiResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListAppraisalsSemiArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCardealersSemiArgs {
    input?: ICardealersSemiFilterInput;
  }
  export interface QueryToListCardealersSemiResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListCardealersSemiArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCatalogSemiNewArgs {
    input?: ICatalogSemiFilterInput;
  }
  export interface QueryToListCatalogSemiNewResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListCatalogSemiNewArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAddressArgs {
    input?: IAddressFilterInput;
  }
  export interface QueryToListAddressResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetAddressByIdArgs {
    id: string;
  }
  export interface QueryToGetAddressByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetAddressByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAttachmentArgs {
    input?: IAttachmentFilterInput;
  }
  export interface QueryToListAttachmentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListAttachmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetAttachmentByIdArgs {
    id: string;
  }
  export interface QueryToGetAttachmentByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetAttachmentByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListDetailPropertyArgs {
    input?: IDetailPropertyFilterInput;
  }
  export interface QueryToListDetailPropertyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListDetailPropertyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetDetailPropertyByIdArgs {
    id: string;
  }
  export interface QueryToGetDetailPropertyByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetDetailPropertyByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListVersionArgs {
    input?: IVersionFilterInput;
  }
  export interface QueryToListVersionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListVersionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetVersionByIdArgs {
    id: string;
  }
  export interface QueryToGetVersionByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetVersionByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListSaleOrderArgs {
    input?: ISaleOrderFilterInput;
  }
  export interface QueryToListSaleOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListSaleOrderArgs,
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

  export interface QueryToGetSaleOrderMeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSaleOrderMeLastResolver<
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

  export interface QueryToListProductOrderArgs {
    input?: IProductOrderFilterInput;
  }
  export interface QueryToListProductOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListProductOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProductOrderByIdArgs {
    id: string;
  }
  export interface QueryToGetProductOrderByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetProductOrderByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListReviewArgs {
    input?: IReviewFilterInput;
  }
  export interface QueryToListReviewResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListReviewArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetReviewByIdArgs {
    id: string;
  }
  export interface QueryToGetReviewByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetReviewByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListConversationArgs {
    input?: IConversationFilterInput;
  }
  export interface QueryToListConversationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListConversationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetConversationByIdArgs {
    id: string;
  }
  export interface QueryToGetConversationByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetConversationByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListZipCodeArgs {
    input?: IZipCodeFilterInput;
  }
  export interface QueryToListZipCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListZipCodeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetZipCodeByIdArgs {
    id: string;
  }
  export interface QueryToGetZipCodeByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetZipCodeByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListStoresArgs {
    input?: IStoreInput;
  }
  export interface QueryToListStoresResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListStoresArgs,
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

  export interface QueryToListJourneyArgs {
    input?: IJourneyFilterInput;
  }
  export interface QueryToListJourneyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListJourneyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetJourneyByIdArgs {
    id: string;
  }
  export interface QueryToGetJourneyByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetJourneyByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListShiploadArgs {
    input?: IShiploadFilterInput;
  }
  export interface QueryToListShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListShiploadArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetShiploadArgs {
    id: string;
  }
  export interface QueryToGetShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetShiploadArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListShiploadProductArgs {
    input?: IShiploadProductFilterInput;
  }
  export interface QueryToListShiploadProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListShiploadProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListWishListsArgs {
    input: IWishListFilterInput;
  }
  export interface QueryToListWishListsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListWishListsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetWishListByIdArgs {
    id: string;
  }
  export interface QueryToGetWishListByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetWishListByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListWishedItemsArgs {
    input: IWishedProductFilterInput;
  }
  export interface QueryToListWishedItemsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListWishedItemsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetWishedItemByIdArgs {
    id: string;
  }
  export interface QueryToGetWishedItemByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetWishedItemByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListSectionOfProductArgs {
    input: ISectionOfProductInput;
  }
  export interface QueryToListSectionOfProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListSectionOfProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSectionOfProductArgs {
    id: string;
  }
  export interface QueryToGetSectionOfProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetSectionOfProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListTemplateInfoArgs {
    input: ITemplateInfoInput;
  }
  export interface QueryToListTemplateInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListTemplateInfoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetTemplateInfoArgs {
    id: string;
  }
  export interface QueryToGetTemplateInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetTemplateInfoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListValueOfTemplateArgs {
    input: IValuesOfTemplateInput;
  }
  export interface QueryToListValueOfTemplateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListValueOfTemplateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetValueOfTemplateArgs {
    id: string;
  }
  export interface QueryToGetValueOfTemplateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetValueOfTemplateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToReviewResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToConversationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToTalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListDepartmentsResolver<
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

  export interface QueryToListWasteArgs {
    input: IRecordInput;
  }
  export interface QueryToListWasteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListWasteArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListInvoicesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetInvoiceBySaleOrderArgs {
    idSaleOrder: number;
  }
  export interface QueryToGetInvoiceBySaleOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetInvoiceBySaleOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToStoresWithDebtsArgs {
    input: IhomeInput;
  }
  export interface QueryToStoresWithDebtsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToStoresWithDebtsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSellerBySaleOrderDashArgs {
    input?: ISellerBySaleOrderDash;
  }
  export interface QueryToGetSellerBySaleOrderDashResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetSellerBySaleOrderDashArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProductBySaleOrderDashArgs {
    input?: ISellerBySaleOrderDash;
  }
  export interface QueryToGetProductBySaleOrderDashResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetProductBySaleOrderDashArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListPromotionArgs {
    input?: IPromotionFilterInput;
  }
  export interface QueryToListPromotionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListPromotionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPromotionByIdArgs {
    id: string;
  }
  export interface QueryToGetPromotionByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetPromotionByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToKeyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToPaymentsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToPaymentForSalesOrderArgs {
    saleorderid: string;
    paid?: IEnumStatus_Paid;
  }
  export interface QueryToPaymentForSalesOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToPaymentForSalesOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListArticleArgs {
    input?: IArticleFilterInput;
  }
  export interface QueryToListArticleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetArticleByIdArgs {
    id: string;
  }
  export interface QueryToGetArticleByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetArticleByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAttachmentOfArticleArgs {
    input?: IAttachmentOfArticleFilterInput;
  }
  export interface QueryToListAttachmentOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListAttachmentOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetAttachmentOfArticleByIdArgs {
    id: string;
  }
  export interface QueryToGetAttachmentOfArticleByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetAttachmentOfArticleByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListTagsOfArticleArgs {
    input?: ITagsOfArticleFilterInput;
  }
  export interface QueryToListTagsOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListTagsOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetTagsOfArticleByIdArgs {
    id: string;
  }
  export interface QueryToGetTagsOfArticleByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetTagsOfArticleByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCategoryOfArticleArgs {
    input?: ICategoryOfArticleFilterInput;
  }
  export interface QueryToListCategoryOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListCategoryOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetCategoryOfArticleByIdArgs {
    id: string;
  }
  export interface QueryToGetCategoryOfArticleByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetCategoryOfArticleByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCommentsArgs {
    input: ICommentFilterInput;
  }
  export interface QueryToListCommentsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListCommentsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetCommentArgs {
    id: string;
  }
  export interface QueryToGetCommentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListVotesOnCommentArgs {
    input: IVoteOnCommentFilterInput;
  }
  export interface QueryToListVotesOnCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListVotesOnCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetVoteOnCommentArgs {
    id: string;
  }
  export interface QueryToGetVoteOnCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetVoteOnCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListTopicArgs {
    input: ITopicFilterInput;
  }
  export interface QueryToListTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListTopicArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetTopicArgs {
    id: string;
  }
  export interface QueryToGetTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetTopicArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListProgramArgs {
    input: IProgramFilterInput;
  }
  export interface QueryToListProgramResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetProgramArgs {
    id: string;
  }
  export interface QueryToGetProgramResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListPodcastArgs {
    input: IPodcastFilterInput;
  }
  export interface QueryToListPodcastResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPodcastArgs {
    id: string;
  }
  export interface QueryToGetPodcastResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCategoryForEntertaimentArgs {
    input: ICategoryForEntertaimentFilterInput;
  }
  export interface QueryToListCategoryForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListCategoryForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetCategoryForEntertaimentArgs {
    id: string;
  }
  export interface QueryToGetCategoryForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetCategoryForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListMetadataForEntertaimentArgs {
    input: IMetadataForEntertaimentFilterInput;
  }
  export interface QueryToListMetadataForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListMetadataForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetMetadataForEntertaimentArgs {
    id: string;
  }
  export interface QueryToGetMetadataForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetMetadataForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListMemeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetMemeArgs {
    id: string;
  }
  export interface QueryToGetMemeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetMemeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListDomiConversationArgs {
    page: number;
    limit: number;
    productId?: number;
    filter?: IDomiConversationFilter;
  }
  export interface QueryToListDomiConversationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListDomiConversationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListDomiConversationMessagesArgs {
    conversationId: string;
  }
  export interface QueryToListDomiConversationMessagesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListDomiConversationMessagesArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetDomiConversationsMetricsArgs {
    date: IDate;
  }
  export interface QueryToGetDomiConversationsMetricsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetDomiConversationsMetricsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetDomiConversationsMetricsByPropertyArgs {
    propertyId: number;
  }
  export interface QueryToGetDomiConversationsMetricsByPropertyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetDomiConversationsMetricsByPropertyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetAppointmentByIdArgs {
    appointmentId: string;
  }
  export interface QueryToGetAppointmentByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetAppointmentByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAppointmentsArgs {
    page: number;
    limit: number;
    filter?: IAppointmentFilter;
  }
  export interface QueryToListAppointmentsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListAppointmentsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAppointmentsByUserArgs {
    page: number;
    limit: number;
    userId?: number;
  }
  export interface QueryToListAppointmentsByUserResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListAppointmentsByUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListAvailableSchedulesArgs {
    date: IDate;
    delayInMinutes?: number;
  }
  export interface QueryToListAvailableSchedulesResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListAvailableSchedulesArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListLogsArgs {
    input?: ILogQueryInput;
  }
  export interface QueryToListLogsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListLogsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetAddressValidationArgs {
    input: IAddressValidationInput;
  }
  export interface QueryToGetAddressValidationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetAddressValidationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetRatingArgs {
    input: IRatingInput;
  }
  export interface QueryToGetRatingResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetRatingArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetTimeInTransitArgs {
    input: ITimeInTransitInput;
  }
  export interface QueryToGetTimeInTransitResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetTimeInTransitArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetGoalArgs {
    id: string;
  }
  export interface QueryToGetGoalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetGoalArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGoalListArgs {
    input: IgoalFilterInput;
  }
  export interface QueryToGoalListResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGoalListArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListPageArgs {
    input?: IPageFilterInput;
  }
  export interface QueryToListPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListPageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPageByIdArgs {
    id: string;
  }
  export interface QueryToGetPageByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetPageByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListPageSectionArgs {
    input?: IPageSectionFilterInput;
  }
  export interface QueryToListPageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListPageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPageSectionByIdArgs {
    id: string;
  }
  export interface QueryToGetPageSectionByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetPageSectionByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListPageSubsectionArgs {
    input?: IPageSubsectionFilterInput;
  }
  export interface QueryToListPageSubsectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToListPageSubsectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPageSubsectionByIdArgs {
    id: string;
  }
  export interface QueryToGetPageSubsectionByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetPageSubsectionByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListPageHeaderArgs {
    input?: IPageHeaderFilterInput;
  }
  export interface QueryToListPageHeaderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListPageHeaderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPageHeaderByIdArgs {
    id: string;
  }
  export interface QueryToGetPageHeaderByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetPageHeaderByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListMetadataArgs {
    input?: IMetadataFilterInput;
  }
  export interface QueryToListMetadataResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetMetadataByIdArgs {
    id: string;
  }
  export interface QueryToGetMetadataByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetMetadataByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListKeywordsArgs {
    input?: IKeywordsFilterInput;
  }
  export interface QueryToListKeywordsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListKeywordsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetKeywordsByIdArgs {
    id: string;
  }
  export interface QueryToGetKeywordsByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetKeywordsByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListDirectoryArgs {
    input?: IDirectoryFilterInput;
  }
  export interface QueryToListDirectoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListDirectoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetDirectoryByIdArgs {
    id: string;
  }
  export interface QueryToGetDirectoryByIdResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetDirectoryByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListSitesArgs {
    input?: ISitesFilterInput;
  }
  export interface QueryToListSitesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListSitesArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetSitesByIdArgs {
    id: string;
  }
  export interface QueryToGetSitesByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetSitesByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetStyleArgs {
    id: string;
  }
  export interface QueryToGetStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetStyleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetFontArgs {
    id: string;
  }
  export interface QueryToGetFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetFontArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListColorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetColorArgs {
    id: string;
  }
  export interface QueryToGetColorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetColorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetLogoArgs {
    id: string;
  }
  export interface QueryToGetLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetLogoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToListCarouselArgs {
    input?: ICarouselFilterInput;
  }
  export interface QueryToListCarouselResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToListCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetCarouselArgs {
    id: string;
  }
  export interface QueryToGetCarouselResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: QueryToGetCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface QueryToGetPageMetadataArgs {
    id: string;
  }
  export interface QueryToGetPageMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: QueryToGetPageMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUserReturnTypeResolver<TParent = any> {
    page?: UserReturnToPageResolver<TParent>;
    limit?: UserReturnToLimitResolver<TParent>;
    pagingcounter?: UserReturnToPagingcounterResolver<TParent>;
    totaldocs?: UserReturnToTotaldocsResolver<TParent>;
    hasprevpage?: UserReturnToHasprevpageResolver<TParent>;
    hasnextpage?: UserReturnToHasnextpageResolver<TParent>;
    docs?: UserReturnToDocsResolver<TParent>;
  }

  export interface UserReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserReturnToPagingcounterResolver<
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

  export interface UserReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserReturnToHasprevpageResolver<
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

  export interface UserReturnToHasnextpageResolver<
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

  export interface UserReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUserTypeResolver<TParent = any> {
    id?: UserToIdResolver<TParent>;
    firstname?: UserToFirstnameResolver<TParent>;
    lastname?: UserToLastnameResolver<TParent>;
    fullname?: UserToFullnameResolver<TParent>;
    email?: UserToEmailResolver<TParent>;
    username?: UserToUsernameResolver<TParent>;
    isstaff?: UserToIsstaffResolver<TParent>;
    isactive?: UserToIsactiveResolver<TParent>;
    issuperuser?: UserToIssuperuserResolver<TParent>;
    lastlogin?: UserToLastloginResolver<TParent>;
    userinprofile?: UserToUserinprofileResolver<TParent>;
    salesOrders?: UserToSalesOrdersResolver<TParent>;
    conversations?: UserToConversationsResolver<TParent>;
    agentproducts?: UserToAgentproductsResolver<TParent>;
    appointments?: UserToAppointmentsResolver<TParent>;
    logsUser?: UserToLogsUserResolver<TParent>;
  }

  export interface UserToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToFirstnameResolver<TParent = any, TResult = any> {
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

  export interface UserToFullnameResolver<TParent = any, TResult = any> {
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

  export interface UserToUsernameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToIsstaffResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToIsactiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToIssuperuserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToLastloginResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToUserinprofileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToSalesOrdersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToConversationsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToAgentproductsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToAppointmentsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface UserToLogsUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProfileTypeResolver<TParent = any> {
    id?: ProfileToIdResolver<TParent>;
    user?: ProfileToUserResolver<TParent>;
    partner?: ProfileToPartnerResolver<TParent>;
    access?: ProfileToAccessResolver<TParent>;
    city?: ProfileToCityResolver<TParent>;
    country?: ProfileToCountryResolver<TParent>;
    gender?: ProfileToGenderResolver<TParent>;
    age?: ProfileToAgeResolver<TParent>;
    birthdate?: ProfileToBirthdateResolver<TParent>;
    phone?: ProfileToPhoneResolver<TParent>;
    picture?: ProfileToPictureResolver<TParent>;
    acronym?: ProfileToAcronymResolver<TParent>;
    editor?: ProfileToEditorResolver<TParent>;
    agent?: ProfileToAgentResolver<TParent>;
    profileindetail?: ProfileToProfileindetailResolver<TParent>;
    profileinmailingaddress?: ProfileToProfileinmailingaddressResolver<TParent>;
    profileinregion?: ProfileToProfileinregionResolver<TParent>;
    profileininvoiceaddress?: ProfileToProfileininvoiceaddressResolver<TParent>;
  }

  export interface ProfileToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToPartnerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToAccessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToCityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToCountryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToGenderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToAgeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToBirthdateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToPictureResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToAcronymResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToEditorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToAgentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProfileToProfileindetailResolver<
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

  export interface ProfileToProfileinmailingaddressResolver<
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

  export interface ProfileToProfileinregionResolver<
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

  export interface ProfileToProfileininvoiceaddressResolver<
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

  export interface IPartnerTypeResolver<TParent = any> {
    id?: PartnerToIdResolver<TParent>;
    organization?: PartnerToOrganizationResolver<TParent>;
    name?: PartnerToNameResolver<TParent>;
    code?: PartnerToCodeResolver<TParent>;
    description?: PartnerToDescriptionResolver<TParent>;
    url?: PartnerToUrlResolver<TParent>;
    urlFront?: PartnerToUrlFrontResolver<TParent>;
    urlImage?: PartnerToUrlImageResolver<TParent>;
    phone?: PartnerToPhoneResolver<TParent>;
    email?: PartnerToEmailResolver<TParent>;
    sector?: PartnerToSectorResolver<TParent>;
    featured?: PartnerToFeaturedResolver<TParent>;
    active?: PartnerToActiveResolver<TParent>;
    partnerSocialmedia?: PartnerToPartnerSocialmediaResolver<TParent>;
    partnerDatacontact?: PartnerToPartnerDatacontactResolver<TParent>;
    partnerAccess?: PartnerToPartnerAccessResolver<TParent>;
    sectionOfProduct?: PartnerToSectionOfProductResolver<TParent>;
    site?: PartnerToSiteResolver<TParent>;
  }

  export interface PartnerToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToOrganizationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToUrlFrontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToUrlImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToEmailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToSectorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToFeaturedResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerToPartnerSocialmediaResolver<
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

  export interface PartnerToPartnerDatacontactResolver<
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

  export interface PartnerToPartnerAccessResolver<
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

  export interface PartnerToSectionOfProductResolver<
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

  export interface PartnerToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IOrganizationTypeResolver<TParent = any> {
    id?: OrganizationToIdResolver<TParent>;
    name?: OrganizationToNameResolver<TParent>;
    code?: OrganizationToCodeResolver<TParent>;
    orgOrgapp?: OrganizationToOrgOrgappResolver<TParent>;
    sites?: OrganizationToSitesResolver<TParent>;
  }

  export interface OrganizationToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrganizationToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrganizationToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrganizationToOrgOrgappResolver<
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

  export interface OrganizationToSitesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IOrgAppTypeResolver<TParent = any> {
    id?: OrgAppToIdResolver<TParent>;
    app?: OrgAppToAppResolver<TParent>;
    paid?: OrgAppToPaidResolver<TParent>;
  }

  export interface OrgAppToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrgAppToAppResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrgAppToPaidResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAppTypeResolver<TParent = any> {
    id?: AppToIdResolver<TParent>;
    name?: AppToNameResolver<TParent>;
    code?: AppToCodeResolver<TParent>;
    description?: AppToDescriptionResolver<TParent>;
  }

  export interface AppToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISiteTypeResolver<TParent = any> {
    id?: SiteToIdResolver<TParent>;
    domain?: SiteToDomainResolver<TParent>;
    logo?: SiteToLogoResolver<TParent>;
    code?: SiteToCodeResolver<TParent>;
    token?: SiteToTokenResolver<TParent>;
    organizations?: SiteToOrganizationsResolver<TParent>;
  }

  export interface SiteToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SiteToDomainResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SiteToLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SiteToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SiteToTokenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SiteToOrganizationsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISectorTypeResolver<TParent = any> {
    id?: SectorToIdResolver<TParent>;
    name?: SectorToNameResolver<TParent>;
    description?: SectorToDescriptionResolver<TParent>;
    partnerSector?: SectorToPartnerSectorResolver<TParent>;
  }

  export interface SectorToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SectorToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SectorToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SectorToPartnerSectorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IFeaturedTypeResolver<TParent = any> {
    id?: FeaturedToIdResolver<TParent>;
    name?: FeaturedToNameResolver<TParent>;
    description?: FeaturedToDescriptionResolver<TParent>;
    partnerFeatured?: FeaturedToPartnerFeaturedResolver<TParent>;
  }

  export interface FeaturedToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FeaturedToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FeaturedToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FeaturedToPartnerFeaturedResolver<
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

  export interface ISocialMediaTypeResolver<TParent = any> {
    id?: SocialMediaToIdResolver<TParent>;
    facebook?: SocialMediaToFacebookResolver<TParent>;
    twitter?: SocialMediaToTwitterResolver<TParent>;
    instagram?: SocialMediaToInstagramResolver<TParent>;
  }

  export interface SocialMediaToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SocialMediaToFacebookResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SocialMediaToTwitterResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SocialMediaToInstagramResolver<
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

  export interface IDataContactTypeResolver<TParent = any> {
    id?: DataContactToIdResolver<TParent>;
    whatsapp?: DataContactToWhatsappResolver<TParent>;
    phone?: DataContactToPhoneResolver<TParent>;
    client?: DataContactToClientResolver<TParent>;
  }

  export interface DataContactToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DataContactToWhatsappResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DataContactToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DataContactToClientResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAccessTypeResolver<TParent = any> {
    id?: AccessToIdResolver<TParent>;
    partner?: AccessToPartnerResolver<TParent>;
    name?: AccessToNameResolver<TParent>;
    code?: AccessToCodeResolver<TParent>;
    level?: AccessToLevelResolver<TParent>;
    accessGroup?: AccessToAccessGroupResolver<TParent>;
  }

  export interface AccessToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessToPartnerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessToLevelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessToAccessGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IGroupTypeResolver<TParent = any> {
    id?: GroupToIdResolver<TParent>;
    access?: GroupToAccessResolver<TParent>;
    name?: GroupToNameResolver<TParent>;
    code?: GroupToCodeResolver<TParent>;
    level?: GroupToLevelResolver<TParent>;
    description?: GroupToDescriptionResolver<TParent>;
    groupRol?: GroupToGroupRolResolver<TParent>;
  }

  export interface GroupToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupToAccessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupToLevelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupToGroupRolResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRolTypeResolver<TParent = any> {
    id?: RolToIdResolver<TParent>;
    group?: RolToGroupResolver<TParent>;
    rule?: RolToRuleResolver<TParent>;
    name?: RolToNameResolver<TParent>;
  }

  export interface RolToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RolToGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RolToRuleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RolToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRuleTypeResolver<TParent = any> {
    id?: RuleToIdResolver<TParent>;
    name?: RuleToNameResolver<TParent>;
    description?: RuleToDescriptionResolver<TParent>;
    code?: RuleToCodeResolver<TParent>;
    level?: RuleToLevelResolver<TParent>;
    levelPublic?: RuleToLevelPublicResolver<TParent>;
    min?: RuleToMinResolver<TParent>;
    max?: RuleToMaxResolver<TParent>;
    companyLife?: RuleToCompanyLifeResolver<TParent>;
    companyGMM?: RuleToCompanyGMMResolver<TParent>;
    partner?: RuleToPartnerResolver<TParent>;
  }

  export interface RuleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToLevelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToLevelPublicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToMinResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToMaxResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToCompanyLifeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToCompanyGMMResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleToPartnerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISectionOfProductTypeResolver<TParent = any> {
    id?: SectionOfProductToIdResolver<TParent>;
    name?: SectionOfProductToNameResolver<TParent>;
    active?: SectionOfProductToActiveResolver<TParent>;
    sectionInfo?: SectionOfProductToSectionInfoResolver<TParent>;
    partnerCode?: SectionOfProductToPartnerCodeResolver<TParent>;
    partner?: SectionOfProductToPartnerResolver<TParent>;
  }

  export interface SectionOfProductToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SectionOfProductToNameResolver<
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

  export interface SectionOfProductToActiveResolver<
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

  export interface SectionOfProductToSectionInfoResolver<
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

  export interface SectionOfProductToPartnerCodeResolver<
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

  export interface SectionOfProductToPartnerResolver<
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

  export interface ITemplateInfoTypeResolver<TParent = any> {
    id?: TemplateInfoToIdResolver<TParent>;
    sectionOfProduct?: TemplateInfoToSectionOfProductResolver<TParent>;
    nameField?: TemplateInfoToNameFieldResolver<TParent>;
    valueTemplate?: TemplateInfoToValueTemplateResolver<TParent>;
  }

  export interface TemplateInfoToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TemplateInfoToSectionOfProductResolver<
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

  export interface TemplateInfoToNameFieldResolver<
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

  export interface TemplateInfoToValueTemplateResolver<
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

  export interface IValuesOfTemplateTypeResolver<TParent = any> {
    id?: ValuesOfTemplateToIdResolver<TParent>;
    templateInfo?: ValuesOfTemplateToTemplateInfoResolver<TParent>;
    product?: ValuesOfTemplateToProductResolver<TParent>;
    value?: ValuesOfTemplateToValueResolver<TParent>;
  }

  export interface ValuesOfTemplateToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ValuesOfTemplateToTemplateInfoResolver<
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

  export interface ValuesOfTemplateToProductResolver<
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

  export interface ValuesOfTemplateToValueResolver<
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

  export interface IProductTypeResolver<TParent = any> {
    id?: ProductToIdResolver<TParent>;
    site?: ProductToSiteResolver<TParent>;
    category?: ProductToCategoryResolver<TParent>;
    subcategory?: ProductToSubcategoryResolver<TParent>;
    brand?: ProductToBrandResolver<TParent>;
    type?: ProductToTypeResolver<TParent>;
    name?: ProductToNameResolver<TParent>;
    sku?: ProductToSkuResolver<TParent>;
    price?: ProductToPriceResolver<TParent>;
    offers?: ProductToOffersResolver<TParent>;
    discount?: ProductToDiscountResolver<TParent>;
    model?: ProductToModelResolver<TParent>;
    stock?: ProductToStockResolver<TParent>;
    stocktaking?: ProductToStocktakingResolver<TParent>;
    active?: ProductToActiveResolver<TParent>;
    status?: ProductToStatusResolver<TParent>;
    description?: ProductToDescriptionResolver<TParent>;
    modeldate?: ProductToModeldateResolver<TParent>;
    agente?: ProductToAgenteResolver<TParent>;
    createdat?: ProductToCreatedatResolver<TParent>;
    updatedat?: ProductToUpdatedatResolver<TParent>;
    partnercode?: ProductToPartnercodeResolver<TParent>;
    condition?: ProductToConditionResolver<TParent>;
    publicationdate?: ProductToPublicationdateResolver<TParent>;
    length?: ProductToLengthResolver<TParent>;
    width?: ProductToWidthResolver<TParent>;
    height?: ProductToHeightResolver<TParent>;
    weight?: ProductToWeightResolver<TParent>;
    box_size?: ProductToBox_sizeResolver<TParent>;
    review?: ProductToReviewResolver<TParent>;
    productaddress?: ProductToProductaddressResolver<TParent>;
    productinattachment?: ProductToProductinattachmentResolver<TParent>;
    productindproperty?: ProductToProductindpropertyResolver<TParent>;
    productinversion?: ProductToProductinversionResolver<TParent>;
    productinconversation?: ProductToProductinconversationResolver<TParent>;
    productinschedule?: ProductToProductinscheduleResolver<TParent>;
    valueProduct?: ProductToValueProductResolver<TParent>;
    benefitsProduct?: ProductToBenefitsProductResolver<TParent>;
    agentproducts?: ProductToAgentproductsResolver<TParent>;
  }

  export interface ProductToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToCategoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToSubcategoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToSkuResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToOffersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToDiscountResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToModelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToStockResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToStocktakingResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToModeldateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToAgenteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToPartnercodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToConditionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToPublicationdateResolver<
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

  export interface ProductToLengthResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToWidthResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToHeightResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToWeightResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToBox_sizeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToReviewResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToProductaddressResolver<
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

  export interface ProductToProductinattachmentResolver<
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

  export interface ProductToProductindpropertyResolver<
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

  export interface ProductToProductinversionResolver<
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

  export interface ProductToProductinconversationResolver<
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

  export interface ProductToProductinscheduleResolver<
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

  export interface ProductToValueProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductToBenefitsProductResolver<
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

  export interface ProductToAgentproductsResolver<
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

  export interface ICategoryTypeResolver<TParent = any> {
    id?: CategoryToIdResolver<TParent>;
    createdat?: CategoryToCreatedatResolver<TParent>;
    updatedat?: CategoryToUpdatedatResolver<TParent>;
    site?: CategoryToSiteResolver<TParent>;
    name?: CategoryToNameResolver<TParent>;
    description?: CategoryToDescriptionResolver<TParent>;
    image?: CategoryToImageResolver<TParent>;
    categoryinsubcategory?: CategoryToCategoryinsubcategoryResolver<TParent>;
  }

  export interface CategoryToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryToCategoryinsubcategoryResolver<
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

  export interface ISubcategoryTypeResolver<TParent = any> {
    id?: SubcategoryToIdResolver<TParent>;
    createdat?: SubcategoryToCreatedatResolver<TParent>;
    updatedat?: SubcategoryToUpdatedatResolver<TParent>;
    site?: SubcategoryToSiteResolver<TParent>;
    category?: SubcategoryToCategoryResolver<TParent>;
    name?: SubcategoryToNameResolver<TParent>;
    description?: SubcategoryToDescriptionResolver<TParent>;
    image?: SubcategoryToImageResolver<TParent>;
  }

  export interface SubcategoryToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SubcategoryToCreatedatResolver<
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

  export interface SubcategoryToUpdatedatResolver<
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

  export interface SubcategoryToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SubcategoryToCategoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SubcategoryToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SubcategoryToDescriptionResolver<
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

  export interface SubcategoryToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBrandTypeResolver<TParent = any> {
    id?: BrandToIdResolver<TParent>;
    name?: BrandToNameResolver<TParent>;
    createdAt?: BrandToCreatedAtResolver<TParent>;
    updatedAt?: BrandToUpdatedAtResolver<TParent>;
    site?: BrandToSiteResolver<TParent>;
  }

  export interface BrandToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BrandToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BrandToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BrandToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BrandToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAddressTypeResolver<TParent = any> {
    id?: AddressToIdResolver<TParent>;
    product?: AddressToProductResolver<TParent>;
    street?: AddressToStreetResolver<TParent>;
    suburb?: AddressToSuburbResolver<TParent>;
    town?: AddressToTownResolver<TParent>;
    state?: AddressToStateResolver<TParent>;
    country?: AddressToCountryResolver<TParent>;
    cp?: AddressToCpResolver<TParent>;
    numint?: AddressToNumintResolver<TParent>;
    numext?: AddressToNumextResolver<TParent>;
    longitude?: AddressToLongitudeResolver<TParent>;
    latitude?: AddressToLatitudeResolver<TParent>;
    constructionarea?: AddressToConstructionareaResolver<TParent>;
    totalarea?: AddressToTotalareaResolver<TParent>;
  }

  export interface AddressToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToStreetResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToSuburbResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToTownResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToCountryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToCpResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToNumintResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToNumextResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToLongitudeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToLatitudeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressToConstructionareaResolver<
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

  export interface AddressToTotalareaResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAttachmentTypeResolver<TParent = any> {
    id?: AttachmentToIdResolver<TParent>;
    product?: AttachmentToProductResolver<TParent>;
    version?: AttachmentToVersionResolver<TParent>;
    url?: AttachmentToUrlResolver<TParent>;
    type?: AttachmentToTypeResolver<TParent>;
    title?: AttachmentToTitleResolver<TParent>;
  }

  export interface AttachmentToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttachmentToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttachmentToVersionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttachmentToUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttachmentToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttachmentToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IVersionTypeResolver<TParent = any> {
    id?: VersionToIdResolver<TParent>;
    product?: VersionToProductResolver<TParent>;
    price?: VersionToPriceResolver<TParent>;
    offers?: VersionToOffersResolver<TParent>;
    productiondate?: VersionToProductiondateResolver<TParent>;
    version?: VersionToVersionResolver<TParent>;
    material?: VersionToMaterialResolver<TParent>;
    odometer?: VersionToOdometerResolver<TParent>;
    interiorcolor?: VersionToInteriorcolorResolver<TParent>;
    exteriorcolor?: VersionToExteriorcolorResolver<TParent>;
    stock?: VersionToStockResolver<TParent>;
    stocktaking?: VersionToStocktakingResolver<TParent>;
    active?: VersionToActiveResolver<TParent>;
    versionincolorext?: VersionToVersionincolorextResolver<TParent>;
    versionincolorint?: VersionToVersionincolorintResolver<TParent>;
    versioninattachment?: VersionToVersioninattachmentResolver<TParent>;
  }

  export interface VersionToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToOffersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToProductiondateResolver<
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

  export interface VersionToVersionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToMaterialResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToOdometerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToInteriorcolorResolver<
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

  export interface VersionToExteriorcolorResolver<
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

  export interface VersionToStockResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToStocktakingResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionToVersionincolorextResolver<
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

  export interface VersionToVersionincolorintResolver<
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

  export interface VersionToVersioninattachmentResolver<
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

  export interface IColorsTypeResolver<TParent = any> {
    id?: ColorsToIdResolver<TParent>;
    name?: ColorsToNameResolver<TParent>;
    image?: ColorsToImageResolver<TParent>;
  }

  export interface ColorsToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorsToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorsToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDetailPropertyTypeResolver<TParent = any> {
    id?: DetailPropertyToIdResolver<TParent>;
    product?: DetailPropertyToProductResolver<TParent>;
    transaction?: DetailPropertyToTransactionResolver<TParent>;
    offer?: DetailPropertyToOfferResolver<TParent>;
    modality?: DetailPropertyToModalityResolver<TParent>;
    environment?: DetailPropertyToEnvironmentResolver<TParent>;
    numparking?: DetailPropertyToNumparkingResolver<TParent>;
    numbathroom?: DetailPropertyToNumbathroomResolver<TParent>;
    numbedroom?: DetailPropertyToNumbedroomResolver<TParent>;
    maintenance?: DetailPropertyToMaintenanceResolver<TParent>;
    numbathroommed?: DetailPropertyToNumbathroommedResolver<TParent>;
    antiquity?: DetailPropertyToAntiquityResolver<TParent>;
    warehouse?: DetailPropertyToWarehouseResolver<TParent>;
    studio?: DetailPropertyToStudioResolver<TParent>;
    partyroom?: DetailPropertyToPartyroomResolver<TParent>;
    multipurposeroom?: DetailPropertyToMultipurposeroomResolver<TParent>;
    tvroom?: DetailPropertyToTvroomResolver<TParent>;
    lobby?: DetailPropertyToLobbyResolver<TParent>;
    gym?: DetailPropertyToGymResolver<TParent>;
    playarea?: DetailPropertyToPlayareaResolver<TParent>;
    furnished?: DetailPropertyToFurnishedResolver<TParent>;
    privatesecurity?: DetailPropertyToPrivatesecurityResolver<TParent>;
    cistern?: DetailPropertyToCisternResolver<TParent>;
    basicservices?: DetailPropertyToBasicservicesResolver<TParent>;
    gas?: DetailPropertyToGasResolver<TParent>;
    waterheater?: DetailPropertyToWaterheaterResolver<TParent>;
    elevator?: DetailPropertyToElevatorResolver<TParent>;
    roaster?: DetailPropertyToRoasterResolver<TParent>;
    tenniscourt?: DetailPropertyToTenniscourtResolver<TParent>;
    squashcourt?: DetailPropertyToSquashcourtResolver<TParent>;
    weighingmachine?: DetailPropertyToWeighingmachineResolver<TParent>;
    swimmingpool?: DetailPropertyToSwimmingpoolResolver<TParent>;
    utilityrooms?: DetailPropertyToUtilityroomsResolver<TParent>;
    nearbyschools?: DetailPropertyToNearbyschoolsResolver<TParent>;
    integralkitchen?: DetailPropertyToIntegralkitchenResolver<TParent>;
    disabledaccess?: DetailPropertyToDisabledaccessResolver<TParent>;
  }

  export interface DetailPropertyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailPropertyToProductResolver<
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

  export interface DetailPropertyToTransactionResolver<
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

  export interface DetailPropertyToOfferResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailPropertyToModalityResolver<
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

  export interface DetailPropertyToEnvironmentResolver<
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

  export interface DetailPropertyToNumparkingResolver<
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

  export interface DetailPropertyToNumbathroomResolver<
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

  export interface DetailPropertyToNumbedroomResolver<
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

  export interface DetailPropertyToMaintenanceResolver<
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

  export interface DetailPropertyToNumbathroommedResolver<
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

  export interface DetailPropertyToAntiquityResolver<
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

  export interface DetailPropertyToWarehouseResolver<
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

  export interface DetailPropertyToStudioResolver<
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

  export interface DetailPropertyToPartyroomResolver<
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

  export interface DetailPropertyToMultipurposeroomResolver<
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

  export interface DetailPropertyToTvroomResolver<
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

  export interface DetailPropertyToLobbyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailPropertyToGymResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailPropertyToPlayareaResolver<
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

  export interface DetailPropertyToFurnishedResolver<
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

  export interface DetailPropertyToPrivatesecurityResolver<
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

  export interface DetailPropertyToCisternResolver<
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

  export interface DetailPropertyToBasicservicesResolver<
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

  export interface DetailPropertyToGasResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailPropertyToWaterheaterResolver<
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

  export interface DetailPropertyToElevatorResolver<
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

  export interface DetailPropertyToRoasterResolver<
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

  export interface DetailPropertyToTenniscourtResolver<
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

  export interface DetailPropertyToSquashcourtResolver<
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

  export interface DetailPropertyToWeighingmachineResolver<
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

  export interface DetailPropertyToSwimmingpoolResolver<
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

  export interface DetailPropertyToUtilityroomsResolver<
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

  export interface DetailPropertyToNearbyschoolsResolver<
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

  export interface DetailPropertyToIntegralkitchenResolver<
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

  export interface DetailPropertyToDisabledaccessResolver<
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

  export interface IConversationTypeResolver<TParent = any> {
    id?: ConversationToIdResolver<TParent>;
    product?: ConversationToProductResolver<TParent>;
    code?: ConversationToCodeResolver<TParent>;
    user?: ConversationToUserResolver<TParent>;
    createdat?: ConversationToCreatedatResolver<TParent>;
    updatedat?: ConversationToUpdatedatResolver<TParent>;
    conversationintalk?: ConversationToConversationintalkResolver<TParent>;
    userconversation?: ConversationToUserconversationResolver<TParent>;
  }

  export interface ConversationToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ConversationToCreatedatResolver<
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

  export interface ConversationToUpdatedatResolver<
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

  export interface ConversationToConversationintalkResolver<
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

  export interface ConversationToUserconversationResolver<
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

  export interface ITalkTypeResolver<TParent = any> {
    id?: TalkToIdResolver<TParent>;
    conversation?: TalkToConversationResolver<TParent>;
    user?: TalkToUserResolver<TParent>;
    talk?: TalkToTalkResolver<TParent>;
    createdat?: TalkToCreatedatResolver<TParent>;
    updatedat?: TalkToUpdatedatResolver<TParent>;
    usertalk?: TalkToUsertalkResolver<TParent>;
  }

  export interface TalkToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkToConversationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkToTalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkToUsertalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IScheduleTypeResolver<TParent = any> {
    id?: ScheduleToIdResolver<TParent>;
    product?: ScheduleToProductResolver<TParent>;
    since?: ScheduleToSinceResolver<TParent>;
    until?: ScheduleToUntilResolver<TParent>;
    days?: ScheduleToDaysResolver<TParent>;
  }

  export interface ScheduleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ScheduleToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ScheduleToSinceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ScheduleToUntilResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ScheduleToDaysResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBenefitsOfProductTypeResolver<TParent = any> {
    id?: BenefitsOfProductToIdResolver<TParent>;
    product?: BenefitsOfProductToProductResolver<TParent>;
    title?: BenefitsOfProductToTitleResolver<TParent>;
    information?: BenefitsOfProductToInformationResolver<TParent>;
    bulletsBenefits?: BenefitsOfProductToBulletsBenefitsResolver<TParent>;
  }

  export interface BenefitsOfProductToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BenefitsOfProductToProductResolver<
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

  export interface BenefitsOfProductToTitleResolver<
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

  export interface BenefitsOfProductToInformationResolver<
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

  export interface BenefitsOfProductToBulletsBenefitsResolver<
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

  export interface IBulletsOfBenefitsTypeResolver<TParent = any> {
    id?: BulletsOfBenefitsToIdResolver<TParent>;
    description?: BulletsOfBenefitsToDescriptionResolver<TParent>;
  }

  export interface BulletsOfBenefitsToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BulletsOfBenefitsToDescriptionResolver<
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

  export interface ISitesTypeResolver<TParent = any> {
    id?: SitesToIdResolver<TParent>;
    metadata?: SitesToMetadataResolver<TParent>;
    pages?: SitesToPagesResolver<TParent>;
    directory?: SitesToDirectoryResolver<TParent>;
    styleSite?: SitesToStyleSiteResolver<TParent>;
    subCode?: SitesToSubCodeResolver<TParent>;
    partner?: SitesToPartnerResolver<TParent>;
  }

  export interface SitesToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesToMetadataResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesToPagesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesToDirectoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesToStyleSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesToSubCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesToPartnerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMetadataTypeResolver<TParent = any> {
    id?: MetadataToIdResolver<TParent>;
    title?: MetadataToTitleResolver<TParent>;
    description?: MetadataToDescriptionResolver<TParent>;
    keywords?: MetadataToKeywordsResolver<TParent>;
    analyticsCode?: MetadataToAnalyticsCodeResolver<TParent>;
    serchsConsoleCode?: MetadataToSerchsConsoleCodeResolver<TParent>;
    markdownJson?: MetadataToMarkdownJsonResolver<TParent>;
  }

  export interface MetadataToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataToKeywordsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataToAnalyticsCodeResolver<
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

  export interface MetadataToSerchsConsoleCodeResolver<
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

  export interface MetadataToMarkdownJsonResolver<
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

  export interface IKeywordsTypeResolver<TParent = any> {
    id?: KeywordsToIdResolver<TParent>;
    keyword?: KeywordsToKeywordResolver<TParent>;
  }

  export interface KeywordsToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeywordsToKeywordResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageTypeResolver<TParent = any> {
    id?: PageToIdResolver<TParent>;
    slugEs?: PageToSlugEsResolver<TParent>;
    slugEn?: PageToSlugEnResolver<TParent>;
    titleEs?: PageToTitleEsResolver<TParent>;
    titleEn?: PageToTitleEnResolver<TParent>;
    descriptionEs?: PageToDescriptionEsResolver<TParent>;
    descriptionEn?: PageToDescriptionEnResolver<TParent>;
    metaDescriptionEs?: PageToMetaDescriptionEsResolver<TParent>;
    metaDescriptionEn?: PageToMetaDescriptionEnResolver<TParent>;
    createdAt?: PageToCreatedAtResolver<TParent>;
    updatedAt?: PageToUpdatedAtResolver<TParent>;
    status?: PageToStatusResolver<TParent>;
    header?: PageToHeaderResolver<TParent>;
    sections?: PageToSectionsResolver<TParent>;
    intoPage?: PageToIntoPageResolver<TParent>;
    metadataPage?: PageToMetadataPageResolver<TParent>;
  }

  export interface PageToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToSlugEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToSlugEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToTitleEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToTitleEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToDescriptionEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToDescriptionEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToMetaDescriptionEsResolver<
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

  export interface PageToMetaDescriptionEnResolver<
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

  export interface PageToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToHeaderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToSectionsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToIntoPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageToMetadataPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageHeaderTypeResolver<TParent = any> {
    id?: PageHeaderToIdResolver<TParent>;
    title?: PageHeaderToTitleResolver<TParent>;
    description?: PageHeaderToDescriptionResolver<TParent>;
    banner?: PageHeaderToBannerResolver<TParent>;
  }

  export interface PageHeaderToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageHeaderToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageHeaderToDescriptionResolver<
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

  export interface PageHeaderToBannerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageSectionTypeResolver<TParent = any> {
    id?: PageSectionToIdResolver<TParent>;
    titleEs?: PageSectionToTitleEsResolver<TParent>;
    titleEn?: PageSectionToTitleEnResolver<TParent>;
    contentEs?: PageSectionToContentEsResolver<TParent>;
    contentEn?: PageSectionToContentEnResolver<TParent>;
    skuEs?: PageSectionToSkuEsResolver<TParent>;
    skuEn?: PageSectionToSkuEnResolver<TParent>;
    image?: PageSectionToImageResolver<TParent>;
    active?: PageSectionToActiveResolver<TParent>;
    subsections?: PageSectionToSubsectionsResolver<TParent>;
    intoSection?: PageSectionToIntoSectionResolver<TParent>;
    carouselSection?: PageSectionToCarouselSectionResolver<TParent>;
    carouselintoSection?: PageSectionToCarouselintoSectionResolver<TParent>;
  }

  export interface PageSectionToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToTitleEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToTitleEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToContentEsResolver<
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

  export interface PageSectionToContentEnResolver<
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

  export interface PageSectionToSkuEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToSkuEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSectionToSubsectionsResolver<
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

  export interface PageSectionToIntoSectionResolver<
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

  export interface PageSectionToCarouselSectionResolver<
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

  export interface PageSectionToCarouselintoSectionResolver<
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

  export interface IPageSubsectionTypeResolver<TParent = any> {
    id?: PageSubsectionToIdResolver<TParent>;
    titleEs?: PageSubsectionToTitleEsResolver<TParent>;
    titleEn?: PageSubsectionToTitleEnResolver<TParent>;
    contentEs?: PageSubsectionToContentEsResolver<TParent>;
    contentEn?: PageSubsectionToContentEnResolver<TParent>;
    image?: PageSubsectionToImageResolver<TParent>;
  }

  export interface PageSubsectionToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageSubsectionToTitleEsResolver<
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

  export interface PageSubsectionToTitleEnResolver<
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

  export interface PageSubsectionToContentEsResolver<
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

  export interface PageSubsectionToContentEnResolver<
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

  export interface PageSubsectionToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageSectionIntoPageTypeResolver<TParent = any> {
    id?: PageSectionIntoPageToIdResolver<TParent>;
    page?: PageSectionIntoPageToPageResolver<TParent>;
    pageSection?: PageSectionIntoPageToPageSectionResolver<TParent>;
    active?: PageSectionIntoPageToActiveResolver<TParent>;
    titleEs?: PageSectionIntoPageToTitleEsResolver<TParent>;
    titleEn?: PageSectionIntoPageToTitleEnResolver<TParent>;
  }

  export interface PageSectionIntoPageToIdResolver<
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

  export interface PageSectionIntoPageToPageResolver<
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

  export interface PageSectionIntoPageToPageSectionResolver<
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

  export interface PageSectionIntoPageToActiveResolver<
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

  export interface PageSectionIntoPageToTitleEsResolver<
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

  export interface PageSectionIntoPageToTitleEnResolver<
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

  export interface ICarouselTypeResolver<TParent = any> {
    id?: CarouselToIdResolver<TParent>;
    titleEs?: CarouselToTitleEsResolver<TParent>;
    titleEn?: CarouselToTitleEnResolver<TParent>;
    descriptionEs?: CarouselToDescriptionEsResolver<TParent>;
    descriptionEn?: CarouselToDescriptionEnResolver<TParent>;
    keyWordsEs?: CarouselToKeyWordsEsResolver<TParent>;
    keyWordsEn?: CarouselToKeyWordsEnResolver<TParent>;
    altEs?: CarouselToAltEsResolver<TParent>;
    altEn?: CarouselToAltEnResolver<TParent>;
    image?: CarouselToImageResolver<TParent>;
    order?: CarouselToOrderResolver<TParent>;
    carouselSection?: CarouselToCarouselSectionResolver<TParent>;
    carouselintoCarousel?: CarouselToCarouselintoCarouselResolver<TParent>;
  }

  export interface CarouselToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToTitleEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToTitleEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToDescriptionEsResolver<
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

  export interface CarouselToDescriptionEnResolver<
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

  export interface CarouselToKeyWordsEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToKeyWordsEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToAltEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToAltEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselToCarouselSectionResolver<
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

  export interface CarouselToCarouselintoCarouselResolver<
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

  export interface ICarouselIntoPageSectionTypeResolver<TParent = any> {
    id?: CarouselIntoPageSectionToIdResolver<TParent>;
    carousel?: CarouselIntoPageSectionToCarouselResolver<TParent>;
    pageSection?: CarouselIntoPageSectionToPageSectionResolver<TParent>;
  }

  export interface CarouselIntoPageSectionToIdResolver<
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

  export interface CarouselIntoPageSectionToCarouselResolver<
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

  export interface CarouselIntoPageSectionToPageSectionResolver<
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

  export interface IPageMetadataTypeResolver<TParent = any> {
    id?: PageMetadataToIdResolver<TParent>;
    page?: PageMetadataToPageResolver<TParent>;
    title?: PageMetadataToTitleResolver<TParent>;
    slug?: PageMetadataToSlugResolver<TParent>;
    description?: PageMetadataToDescriptionResolver<TParent>;
    keyWords?: PageMetadataToKeyWordsResolver<TParent>;
    structuredMarked?: PageMetadataToStructuredMarkedResolver<TParent>;
    altImage?: PageMetadataToAltImageResolver<TParent>;
  }

  export interface PageMetadataToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageMetadataToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageMetadataToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageMetadataToSlugResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageMetadataToDescriptionResolver<
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

  export interface PageMetadataToKeyWordsResolver<
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

  export interface PageMetadataToStructuredMarkedResolver<
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

  export interface PageMetadataToAltImageResolver<
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

  export interface IDirectoryTypeResolver<TParent = any> {
    id?: DirectoryToIdResolver<TParent>;
    site?: DirectoryToSiteResolver<TParent>;
    name?: DirectoryToNameResolver<TParent>;
    country?: DirectoryToCountryResolver<TParent>;
    latitude?: DirectoryToLatitudeResolver<TParent>;
    longitude?: DirectoryToLongitudeResolver<TParent>;
    phone?: DirectoryToPhoneResolver<TParent>;
    mobile?: DirectoryToMobileResolver<TParent>;
  }

  export interface DirectoryToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToCountryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToLatitudeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToLongitudeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryToMobileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStyleTypeResolver<TParent = any> {
    id?: StyleToIdResolver<TParent>;
    site?: StyleToSiteResolver<TParent>;
    order?: StyleToOrderResolver<TParent>;
    logoStyle?: StyleToLogoStyleResolver<TParent>;
    colorStyle?: StyleToColorStyleResolver<TParent>;
    fontStyle?: StyleToFontStyleResolver<TParent>;
  }

  export interface StyleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleToOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleToLogoStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleToColorStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleToFontStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ILogoTypeResolver<TParent = any> {
    id?: LogoToIdResolver<TParent>;
    style?: LogoToStyleResolver<TParent>;
    height?: LogoToHeightResolver<TParent>;
    length?: LogoToLengthResolver<TParent>;
    width?: LogoToWidthResolver<TParent>;
    url?: LogoToUrlResolver<TParent>;
  }

  export interface LogoToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoToStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoToHeightResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoToLengthResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoToWidthResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoToUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IColorTypeResolver<TParent = any> {
    id?: ColorToIdResolver<TParent>;
    style?: ColorToStyleResolver<TParent>;
    header?: ColorToHeaderResolver<TParent>;
    highlight?: ColorToHighlightResolver<TParent>;
    background?: ColorToBackgroundResolver<TParent>;
    backgroundSecondary?: ColorToBackgroundSecondaryResolver<TParent>;
    positive?: ColorToPositiveResolver<TParent>;
    negative?: ColorToNegativeResolver<TParent>;
  }

  export interface ColorToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorToStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorToHeaderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorToHighlightResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorToBackgroundResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorToBackgroundSecondaryResolver<
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

  export interface ColorToPositiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorToNegativeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IFontTypeResolver<TParent = any> {
    id?: FontToIdResolver<TParent>;
    style?: FontToStyleResolver<TParent>;
    titleFont?: FontToTitleFontResolver<TParent>;
    textFont?: FontToTextFontResolver<TParent>;
    align?: FontToAlignResolver<TParent>;
  }

  export interface FontToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontToStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontToTitleFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontToTextFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontToAlignResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDetailTypeResolver<TParent = any> {
    id?: DetailToIdResolver<TParent>;
    profile?: DetailToProfileResolver<TParent>;
    name?: DetailToNameResolver<TParent>;
    value?: DetailToValueResolver<TParent>;
  }

  export interface DetailToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailToProfileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DetailToValueResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMailingAddressTypeResolver<TParent = any> {
    id?: MailingAddressToIdResolver<TParent>;
    profile?: MailingAddressToProfileResolver<TParent>;
    name?: MailingAddressToNameResolver<TParent>;
    deliverto?: MailingAddressToDelivertoResolver<TParent>;
    phone?: MailingAddressToPhoneResolver<TParent>;
    email?: MailingAddressToEmailResolver<TParent>;
    street?: MailingAddressToStreetResolver<TParent>;
    numint?: MailingAddressToNumintResolver<TParent>;
    numext?: MailingAddressToNumextResolver<TParent>;
    suburb?: MailingAddressToSuburbResolver<TParent>;
    town?: MailingAddressToTownResolver<TParent>;
    state?: MailingAddressToStateResolver<TParent>;
    codeState?: MailingAddressToCodeStateResolver<TParent>;
    cp?: MailingAddressToCpResolver<TParent>;
    detail?: MailingAddressToDetailResolver<TParent>;
    principal?: MailingAddressToPrincipalResolver<TParent>;
  }

  export interface MailingAddressToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToProfileResolver<
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

  export interface MailingAddressToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToDelivertoResolver<
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

  export interface MailingAddressToPhoneResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToEmailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToStreetResolver<
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

  export interface MailingAddressToNumintResolver<
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

  export interface MailingAddressToNumextResolver<
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

  export interface MailingAddressToSuburbResolver<
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

  export interface MailingAddressToTownResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToCodeStateResolver<
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

  export interface MailingAddressToCpResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MailingAddressToDetailResolver<
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

  export interface MailingAddressToPrincipalResolver<
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

  export interface IRegionTypeResolver<TParent = any> {
    id?: RegionToIdResolver<TParent>;
    profile?: RegionToProfileResolver<TParent>;
    name?: RegionToNameResolver<TParent>;
    value?: RegionToValueResolver<TParent>;
  }

  export interface RegionToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RegionToProfileResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RegionToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RegionToValueResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IInvoiceAddressTypeResolver<TParent = any> {
    id?: InvoiceAddressToIdResolver<TParent>;
    profile?: InvoiceAddressToProfileResolver<TParent>;
    mailingAddress?: InvoiceAddressToMailingAddressResolver<TParent>;
    rfc?: InvoiceAddressToRfcResolver<TParent>;
    socialReason?: InvoiceAddressToSocialReasonResolver<TParent>;
    street?: InvoiceAddressToStreetResolver<TParent>;
    numint?: InvoiceAddressToNumintResolver<TParent>;
    numext?: InvoiceAddressToNumextResolver<TParent>;
    suburb?: InvoiceAddressToSuburbResolver<TParent>;
    town?: InvoiceAddressToTownResolver<TParent>;
    state?: InvoiceAddressToStateResolver<TParent>;
    cp?: InvoiceAddressToCpResolver<TParent>;
  }

  export interface InvoiceAddressToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface InvoiceAddressToProfileResolver<
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

  export interface InvoiceAddressToMailingAddressResolver<
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

  export interface InvoiceAddressToRfcResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface InvoiceAddressToSocialReasonResolver<
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

  export interface InvoiceAddressToStreetResolver<
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

  export interface InvoiceAddressToNumintResolver<
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

  export interface InvoiceAddressToNumextResolver<
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

  export interface InvoiceAddressToSuburbResolver<
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

  export interface InvoiceAddressToTownResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface InvoiceAddressToStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface InvoiceAddressToCpResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISaleOrderTypeResolver<TParent = any> {
    id?: SaleOrderToIdResolver<TParent>;
    createdat?: SaleOrderToCreatedatResolver<TParent>;
    updatedat?: SaleOrderToUpdatedatResolver<TParent>;
    site?: SaleOrderToSiteResolver<TParent>;
    user?: SaleOrderToUserResolver<TParent>;
    payment?: SaleOrderToPaymentResolver<TParent>;
    code?: SaleOrderToCodeResolver<TParent>;
    price?: SaleOrderToPriceResolver<TParent>;
    validityDate?: SaleOrderToValidityDateResolver<TParent>;
    number?: SaleOrderToNumberResolver<TParent>;
    paid?: SaleOrderToPaidResolver<TParent>;
    status?: SaleOrderToStatusResolver<TParent>;
    sendstatus?: SaleOrderToSendstatusResolver<TParent>;
    guidenumber?: SaleOrderToGuidenumberResolver<TParent>;
    mailingaddress?: SaleOrderToMailingaddressResolver<TParent>;
    storage?: SaleOrderToStorageResolver<TParent>;
    typeSale?: SaleOrderToTypeSaleResolver<TParent>;
    saleinporder?: SaleOrderToSaleinporderResolver<TParent>;
    shipload?: SaleOrderToShiploadResolver<TParent>;
    store?: SaleOrderToStoreResolver<TParent>;
    seller?: SaleOrderToSellerResolver<TParent>;
    users?: SaleOrderToUsersResolver<TParent>;
    sellers?: SaleOrderToSellersResolver<TParent>;
    payments?: SaleOrderToPaymentsResolver<TParent>;
  }

  export interface SaleOrderToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToPaymentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToCodeResolver<TParent = any, TResult = any> {
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

  export interface SaleOrderToValidityDateResolver<
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

  export interface SaleOrderToNumberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToPaidResolver<TParent = any, TResult = any> {
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

  export interface SaleOrderToSendstatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToGuidenumberResolver<
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

  export interface SaleOrderToMailingaddressResolver<
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

  export interface SaleOrderToStorageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToTypeSaleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToSaleinporderResolver<
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

  export interface SaleOrderToShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToSellerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToUsersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToSellersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderToPaymentsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProductOrderTypeResolver<TParent = any> {
    id?: ProductOrderToIdResolver<TParent>;
    product?: ProductOrderToProductResolver<TParent>;
    saleorder?: ProductOrderToSaleorderResolver<TParent>;
    quantity?: ProductOrderToQuantityResolver<TParent>;
    price?: ProductOrderToPriceResolver<TParent>;
    version?: ProductOrderToVersionResolver<TParent>;
    productexternal?: ProductOrderToProductexternalResolver<TParent>;
    material?: ProductOrderToMaterialResolver<TParent>;
    interiorcolor?: ProductOrderToInteriorcolorResolver<TParent>;
    exteriorcolor?: ProductOrderToExteriorcolorResolver<TParent>;
  }

  export interface ProductOrderToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductOrderToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductOrderToSaleorderResolver<
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

  export interface ProductOrderToQuantityResolver<
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

  export interface ProductOrderToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductOrderToVersionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductOrderToProductexternalResolver<
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

  export interface ProductOrderToMaterialResolver<
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

  export interface ProductOrderToInteriorcolorResolver<
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

  export interface ProductOrderToExteriorcolorResolver<
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

  export interface IShiploadTypeResolver<TParent = any> {
    id?: ShiploadToIdResolver<TParent>;
    status?: ShiploadToStatusResolver<TParent>;
    code?: ShiploadToCodeResolver<TParent>;
    sellerCar?: ShiploadToSellerCarResolver<TParent>;
    date?: ShiploadToDateResolver<TParent>;
    journey?: ShiploadToJourneyResolver<TParent>;
    total?: ShiploadToTotalResolver<TParent>;
    sellers?: ShiploadToSellersResolver<TParent>;
  }

  export interface ShiploadToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToSellerCarResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToJourneyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToTotalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadToSellersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IJourneyTypeResolver<TParent = any> {
    id?: JourneyToIdResolver<TParent>;
    code?: JourneyToCodeResolver<TParent>;
    name?: JourneyToNameResolver<TParent>;
    storejourney?: JourneyToStorejourneyResolver<TParent>;
    isActive?: JourneyToIsActiveResolver<TParent>;
  }

  export interface JourneyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyToStorejourneyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyToIsActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStoreTypeResolver<TParent = any> {
    id?: StoreToIdResolver<TParent>;
    storeName?: StoreToStoreNameResolver<TParent>;
    nameShort?: StoreToNameShortResolver<TParent>;
    image?: StoreToImageResolver<TParent>;
    addressLine?: StoreToAddressLineResolver<TParent>;
    personInCharge?: StoreToPersonInChargeResolver<TParent>;
    zipCode?: StoreToZipCodeResolver<TParent>;
    state?: StoreToStateResolver<TParent>;
    city?: StoreToCityResolver<TParent>;
    length?: StoreToLengthResolver<TParent>;
    latitude?: StoreToLatitudeResolver<TParent>;
    type?: StoreToTypeResolver<TParent>;
    storePhones?: StoreToStorePhonesResolver<TParent>;
    storeMails?: StoreToStoreMailsResolver<TParent>;
    journeyVisitStore?: StoreToJourneyVisitStoreResolver<TParent>;
    notes?: StoreToNotesResolver<TParent>;
    isActive?: StoreToIsActiveResolver<TParent>;
  }

  export interface StoreToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToStoreNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToNameShortResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToAddressLineResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToPersonInChargeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToZipCodeResolver<TParent = any, TResult = any> {
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

  export interface StoreToCityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToLengthResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToLatitudeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToStorePhonesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToStoreMailsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToJourneyVisitStoreResolver<
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

  export interface StoreToNotesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreToIsActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IstorephonesTypeResolver<TParent = any> {
    number?: storephonesToNumberResolver<TParent>;
  }

  export interface storephonesToNumberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IstoremailsTypeResolver<TParent = any> {
    mail?: storemailsToMailResolver<TParent>;
  }

  export interface storemailsToMailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IJourneyVisitStoreTypeResolver<TParent = any> {
    id?: JourneyVisitStoreToIdResolver<TParent>;
    createdat?: JourneyVisitStoreToCreatedatResolver<TParent>;
  }

  export interface JourneyVisitStoreToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyVisitStoreToCreatedatResolver<
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

  export interface ISellerUserTypeResolver<TParent = any> {
    id?: SellerUserToIdResolver<TParent>;
    user?: SellerUserToUserResolver<TParent>;
    licensePlates?: SellerUserToLicensePlatesResolver<TParent>;
    addressLine?: SellerUserToAddressLineResolver<TParent>;
    sellerphones?: SellerUserToSellerphonesResolver<TParent>;
    sellermails?: SellerUserToSellermailsResolver<TParent>;
    active?: SellerUserToActiveResolver<TParent>;
    shipload?: SellerUserToShiploadResolver<TParent>;
    saleOrder?: SellerUserToSaleOrderResolver<TParent>;
    goal?: SellerUserToGoalResolver<TParent>;
  }

  export interface SellerUserToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SellerUserToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SellerUserToLicensePlatesResolver<
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

  export interface SellerUserToAddressLineResolver<
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

  export interface SellerUserToSellerphonesResolver<
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

  export interface SellerUserToSellermailsResolver<
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

  export interface SellerUserToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SellerUserToShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SellerUserToSaleOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SellerUserToGoalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IsellerphonesTypeResolver<TParent = any> {
    id?: sellerphonesToIdResolver<TParent>;
    numberPhone?: sellerphonesToNumberPhoneResolver<TParent>;
  }

  export interface sellerphonesToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface sellerphonesToNumberPhoneResolver<
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

  export interface IsellermailsTypeResolver<TParent = any> {
    id?: sellermailsToIdResolver<TParent>;
    mail?: sellermailsToMailResolver<TParent>;
  }

  export interface sellermailsToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface sellermailsToMailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IGoalTypeResolver<TParent = any> {
    id?: GoalToIdResolver<TParent>;
    seller?: GoalToSellerResolver<TParent>;
    startDate?: GoalToStartDateResolver<TParent>;
    validityDate?: GoalToValidityDateResolver<TParent>;
    saleGoal?: GoalToSaleGoalResolver<TParent>;
    status?: GoalToStatusResolver<TParent>;
    isActive?: GoalToIsActiveResolver<TParent>;
    sellers?: GoalToSellersResolver<TParent>;
    sales?: GoalToSalesResolver<TParent>;
    totalSale?: GoalToTotalSaleResolver<TParent>;
  }

  export interface GoalToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToSellerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToStartDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToValidityDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToSaleGoalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToIsActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToSellersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToSalesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GoalToTotalSaleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPaymentTypeResolver<TParent = any> {
    id?: PaymentToIdResolver<TParent>;
    created_at?: PaymentToCreated_atResolver<TParent>;
    request?: PaymentToRequestResolver<TParent>;
    response?: PaymentToResponseResolver<TParent>;
    paid?: PaymentToPaidResolver<TParent>;
    status?: PaymentToStatusResolver<TParent>;
    token?: PaymentToTokenResolver<TParent>;
    name?: PaymentToNameResolver<TParent>;
    amount?: PaymentToAmountResolver<TParent>;
    quantity?: PaymentToQuantityResolver<TParent>;
    payment_type?: PaymentToPayment_typeResolver<TParent>;
    type?: PaymentToTypeResolver<TParent>;
    user?: PaymentToUserResolver<TParent>;
    sale_order?: PaymentToSale_orderResolver<TParent>;
    salesOrders?: PaymentToSalesOrdersResolver<TParent>;
  }

  export interface PaymentToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToCreated_atResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToRequestResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToResponseResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToPaidResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToTokenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToAmountResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToQuantityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToPayment_typeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToSale_orderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PaymentToSalesOrdersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISaleOrderIDTypeResolver<TParent = any> {
    id?: SaleOrderIDToIdResolver<TParent>;
    site?: SaleOrderIDToSiteResolver<TParent>;
    user?: SaleOrderIDToUserResolver<TParent>;
    payment?: SaleOrderIDToPaymentResolver<TParent>;
    code?: SaleOrderIDToCodeResolver<TParent>;
    validityDate?: SaleOrderIDToValidityDateResolver<TParent>;
    price?: SaleOrderIDToPriceResolver<TParent>;
    number?: SaleOrderIDToNumberResolver<TParent>;
    paid?: SaleOrderIDToPaidResolver<TParent>;
    status?: SaleOrderIDToStatusResolver<TParent>;
    sendstatus?: SaleOrderIDToSendstatusResolver<TParent>;
    guidenumber?: SaleOrderIDToGuidenumberResolver<TParent>;
    mailingaddress?: SaleOrderIDToMailingaddressResolver<TParent>;
    storage?: SaleOrderIDToStorageResolver<TParent>;
    typeSale?: SaleOrderIDToTypeSaleResolver<TParent>;
    productorder?: SaleOrderIDToProductorderResolver<TParent>;
    paymentss?: SaleOrderIDToPaymentssResolver<TParent>;
  }

  export interface SaleOrderIDToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToPaymentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToValidityDateResolver<
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

  export interface SaleOrderIDToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToNumberResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToPaidResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToSendstatusResolver<
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

  export interface SaleOrderIDToGuidenumberResolver<
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

  export interface SaleOrderIDToMailingaddressResolver<
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

  export interface SaleOrderIDToStorageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToTypeSaleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderIDToProductorderResolver<
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

  export interface SaleOrderIDToPaymentssResolver<
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

  export interface IAppointmentTypeResolver<TParent = any> {
    _id?: AppointmentTo_idResolver<TParent>;
    createdAt?: AppointmentToCreatedAtResolver<TParent>;
    updatedAt?: AppointmentToUpdatedAtResolver<TParent>;
    user?: AppointmentToUserResolver<TParent>;
    agent?: AppointmentToAgentResolver<TParent>;
    duration?: AppointmentToDurationResolver<TParent>;
    date?: AppointmentToDateResolver<TParent>;
    product?: AppointmentToProductResolver<TParent>;
    room?: AppointmentToRoomResolver<TParent>;
    userappointment?: AppointmentToUserappointmentResolver<TParent>;
    agentappointment?: AppointmentToAgentappointmentResolver<TParent>;
    appointmentproducts?: AppointmentToAppointmentproductsResolver<TParent>;
  }

  export interface AppointmentTo_idResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToCreatedAtResolver<
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

  export interface AppointmentToUpdatedAtResolver<
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

  export interface AppointmentToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToAgentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToDurationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToRoomResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppointmentToUserappointmentResolver<
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

  export interface AppointmentToAgentappointmentResolver<
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

  export interface AppointmentToAppointmentproductsResolver<
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

  export interface ILogTypeResolver<TParent = any> {
    id?: LogToIdResolver<TParent>;
    user_id?: LogToUser_idResolver<TParent>;
    service?: LogToServiceResolver<TParent>;
    created_at?: LogToCreated_atResolver<TParent>;
    action?: LogToActionResolver<TParent>;
    action_in_spanish?: LogToAction_in_spanishResolver<TParent>;
    userlogs?: LogToUserlogsResolver<TParent>;
  }

  export interface LogToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogToUser_idResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogToServiceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogToCreated_atResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogToActionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogToAction_in_spanishResolver<
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

  export interface LogToUserlogsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IEmailUserReturnTypeResolver<TParent = any> {
    docs?: EmailUserReturnToDocsResolver<TParent>;
    detailclientid?: EmailUserReturnToDetailclientidResolver<TParent>;
    detailinvoiceid?: EmailUserReturnToDetailinvoiceidResolver<TParent>;
  }

  export interface EmailUserReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EmailUserReturnToDetailclientidResolver<
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

  export interface EmailUserReturnToDetailinvoiceidResolver<
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

  export interface IPartnerReturnTypeResolver<TParent = any> {
    page?: PartnerReturnToPageResolver<TParent>;
    limit?: PartnerReturnToLimitResolver<TParent>;
    pagingcounter?: PartnerReturnToPagingcounterResolver<TParent>;
    totaldocs?: PartnerReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PartnerReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PartnerReturnToHasnextpageResolver<TParent>;
    docs?: PartnerReturnToDocsResolver<TParent>;
  }

  export interface PartnerReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerReturnToPagingcounterResolver<
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

  export interface PartnerReturnToTotaldocsResolver<
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

  export interface PartnerReturnToHasprevpageResolver<
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

  export interface PartnerReturnToHasnextpageResolver<
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

  export interface PartnerReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAccessReturnTypeResolver<TParent = any> {
    page?: AccessReturnToPageResolver<TParent>;
    limit?: AccessReturnToLimitResolver<TParent>;
    pagingcounter?: AccessReturnToPagingcounterResolver<TParent>;
    totaldocs?: AccessReturnToTotaldocsResolver<TParent>;
    hasprevpage?: AccessReturnToHasprevpageResolver<TParent>;
    hasnextpage?: AccessReturnToHasnextpageResolver<TParent>;
    docs?: AccessReturnToDocsResolver<TParent>;
  }

  export interface AccessReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessReturnToPagingcounterResolver<
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

  export interface AccessReturnToTotaldocsResolver<
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

  export interface AccessReturnToHasprevpageResolver<
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

  export interface AccessReturnToHasnextpageResolver<
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

  export interface AccessReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRuleReturnTypeResolver<TParent = any> {
    page?: RuleReturnToPageResolver<TParent>;
    limit?: RuleReturnToLimitResolver<TParent>;
    pagingcounter?: RuleReturnToPagingcounterResolver<TParent>;
    totaldocs?: RuleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: RuleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: RuleReturnToHasnextpageResolver<TParent>;
    docs?: RuleReturnToDocsResolver<TParent>;
  }

  export interface RuleReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleReturnToPagingcounterResolver<
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

  export interface RuleReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RuleReturnToHasprevpageResolver<
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

  export interface RuleReturnToHasnextpageResolver<
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

  export interface RuleReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStartupstatusTypeResolver<TParent = any> {
    status?: StartupstatusToStatusResolver<TParent>;
  }

  export interface StartupstatusToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISellerUserReturnTypeResolver<TParent = any> {
    page?: SellerUserReturnToPageResolver<TParent>;
    limit?: SellerUserReturnToLimitResolver<TParent>;
    pagingcounter?: SellerUserReturnToPagingcounterResolver<TParent>;
    totaldocs?: SellerUserReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SellerUserReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SellerUserReturnToHasnextpageResolver<TParent>;
    docs?: SellerUserReturnToDocsResolver<TParent>;
  }

  export interface SellerUserReturnToPageResolver<
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

  export interface SellerUserReturnToLimitResolver<
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

  export interface SellerUserReturnToPagingcounterResolver<
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

  export interface SellerUserReturnToTotaldocsResolver<
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

  export interface SellerUserReturnToHasprevpageResolver<
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

  export interface SellerUserReturnToHasnextpageResolver<
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

  export interface SellerUserReturnToDocsResolver<
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

  export interface ISectorReturnTypeResolver<TParent = any> {
    page?: SectorReturnToPageResolver<TParent>;
    limit?: SectorReturnToLimitResolver<TParent>;
    pagingcounter?: SectorReturnToPagingcounterResolver<TParent>;
    totaldocs?: SectorReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SectorReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SectorReturnToHasnextpageResolver<TParent>;
    docs?: SectorReturnToDocsResolver<TParent>;
  }

  export interface SectorReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SectorReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SectorReturnToPagingcounterResolver<
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

  export interface SectorReturnToTotaldocsResolver<
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

  export interface SectorReturnToHasprevpageResolver<
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

  export interface SectorReturnToHasnextpageResolver<
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

  export interface SectorReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IFeaturedReturnTypeResolver<TParent = any> {
    page?: FeaturedReturnToPageResolver<TParent>;
    limit?: FeaturedReturnToLimitResolver<TParent>;
    pagingcounter?: FeaturedReturnToPagingcounterResolver<TParent>;
    totaldocs?: FeaturedReturnToTotaldocsResolver<TParent>;
    hasprevpage?: FeaturedReturnToHasprevpageResolver<TParent>;
    hasnextpage?: FeaturedReturnToHasnextpageResolver<TParent>;
    docs?: FeaturedReturnToDocsResolver<TParent>;
  }

  export interface FeaturedReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FeaturedReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FeaturedReturnToPagingcounterResolver<
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

  export interface FeaturedReturnToTotaldocsResolver<
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

  export interface FeaturedReturnToHasprevpageResolver<
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

  export interface FeaturedReturnToHasnextpageResolver<
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

  export interface FeaturedReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICategoryReturnTypeResolver<TParent = any> {
    page?: CategoryReturnToPageResolver<TParent>;
    limit?: CategoryReturnToLimitResolver<TParent>;
    pagingcounter?: CategoryReturnToPagingcounterResolver<TParent>;
    totaldocs?: CategoryReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CategoryReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CategoryReturnToHasnextpageResolver<TParent>;
    docs?: CategoryReturnToDocsResolver<TParent>;
  }

  export interface CategoryReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryReturnToPagingcounterResolver<
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

  export interface CategoryReturnToTotaldocsResolver<
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

  export interface CategoryReturnToHasprevpageResolver<
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

  export interface CategoryReturnToHasnextpageResolver<
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

  export interface CategoryReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISubcategoryReturnTypeResolver<TParent = any> {
    page?: SubcategoryReturnToPageResolver<TParent>;
    limit?: SubcategoryReturnToLimitResolver<TParent>;
    pagingcounter?: SubcategoryReturnToPagingcounterResolver<TParent>;
    totaldocs?: SubcategoryReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SubcategoryReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SubcategoryReturnToHasnextpageResolver<TParent>;
    docs?: SubcategoryReturnToDocsResolver<TParent>;
  }

  export interface SubcategoryReturnToPageResolver<
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

  export interface SubcategoryReturnToLimitResolver<
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

  export interface SubcategoryReturnToPagingcounterResolver<
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

  export interface SubcategoryReturnToTotaldocsResolver<
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

  export interface SubcategoryReturnToHasprevpageResolver<
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

  export interface SubcategoryReturnToHasnextpageResolver<
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

  export interface SubcategoryReturnToDocsResolver<
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

  export interface IProductReturnTypeResolver<TParent = any> {
    page?: ProductReturnToPageResolver<TParent>;
    limit?: ProductReturnToLimitResolver<TParent>;
    pagingcounter?: ProductReturnToPagingcounterResolver<TParent>;
    totaldocs?: ProductReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ProductReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ProductReturnToHasnextpageResolver<TParent>;
    docs?: ProductReturnToDocsResolver<TParent>;
  }

  export interface ProductReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductReturnToPagingcounterResolver<
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

  export interface ProductReturnToTotaldocsResolver<
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

  export interface ProductReturnToHasprevpageResolver<
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

  export interface ProductReturnToHasnextpageResolver<
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

  export interface ProductReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProductSemiReturnTypeResolver<TParent = any> {
    page?: ProductSemiReturnToPageResolver<TParent>;
    limit?: ProductSemiReturnToLimitResolver<TParent>;
    pagingcounter?: ProductSemiReturnToPagingcounterResolver<TParent>;
    totaldocs?: ProductSemiReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ProductSemiReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ProductSemiReturnToHasnextpageResolver<TParent>;
    docs?: ProductSemiReturnToDocsResolver<TParent>;
    additional?: ProductSemiReturnToAdditionalResolver<TParent>;
  }

  export interface ProductSemiReturnToPageResolver<
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

  export interface ProductSemiReturnToLimitResolver<
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

  export interface ProductSemiReturnToPagingcounterResolver<
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

  export interface ProductSemiReturnToTotaldocsResolver<
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

  export interface ProductSemiReturnToHasprevpageResolver<
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

  export interface ProductSemiReturnToHasnextpageResolver<
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

  export interface ProductSemiReturnToDocsResolver<
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

  export interface ProductSemiReturnToAdditionalResolver<
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

  export interface IProductSemiTypeResolver<TParent = any> {
    id?: ProductSemiToIdResolver<TParent>;
    site?: ProductSemiToSiteResolver<TParent>;
    category?: ProductSemiToCategoryResolver<TParent>;
    subcategory?: ProductSemiToSubcategoryResolver<TParent>;
    brand?: ProductSemiToBrandResolver<TParent>;
    type?: ProductSemiToTypeResolver<TParent>;
    name?: ProductSemiToNameResolver<TParent>;
    sku?: ProductSemiToSkuResolver<TParent>;
    price?: ProductSemiToPriceResolver<TParent>;
    offers?: ProductSemiToOffersResolver<TParent>;
    discount?: ProductSemiToDiscountResolver<TParent>;
    model?: ProductSemiToModelResolver<TParent>;
    stock?: ProductSemiToStockResolver<TParent>;
    active?: ProductSemiToActiveResolver<TParent>;
    description?: ProductSemiToDescriptionResolver<TParent>;
    modeldate?: ProductSemiToModeldateResolver<TParent>;
    createdat?: ProductSemiToCreatedatResolver<TParent>;
    updatedat?: ProductSemiToUpdatedatResolver<TParent>;
    thumbnail?: ProductSemiToThumbnailResolver<TParent>;
    odometer?: ProductSemiToOdometerResolver<TParent>;
    tankCapacity?: ProductSemiToTankCapacityResolver<TParent>;
    power?: ProductSemiToPowerResolver<TParent>;
    torque?: ProductSemiToTorqueResolver<TParent>;
    dimensionsWeight?: ProductSemiToDimensionsWeightResolver<TParent>;
    dimensionsHeight?: ProductSemiToDimensionsHeightResolver<TParent>;
    dimensionsWidth?: ProductSemiToDimensionsWidthResolver<TParent>;
    dimensionsLength?: ProductSemiToDimensionsLengthResolver<TParent>;
    consumptionCity?: ProductSemiToConsumptionCityResolver<TParent>;
    diameterWheels?: ProductSemiToDiameterWheelsResolver<TParent>;
    consumptionCombined?: ProductSemiToConsumptionCombinedResolver<TParent>;
    consumptionRoad?: ProductSemiToConsumptionRoadResolver<TParent>;
    doors?: ProductSemiToDoorsResolver<TParent>;
    cylinders?: ProductSemiToCylindersResolver<TParent>;
    valves?: ProductSemiToValvesResolver<TParent>;
    passengers?: ProductSemiToPassengersResolver<TParent>;
    speeds?: ProductSemiToSpeedsResolver<TParent>;
    direction?: ProductSemiToDirectionResolver<TParent>;
    transmission?: ProductSemiToTransmissionResolver<TParent>;
    traction?: ProductSemiToTractionResolver<TParent>;
    energy?: ProductSemiToEnergyResolver<TParent>;
    armour?: ProductSemiToArmourResolver<TParent>;
    condition?: ProductSemiToConditionResolver<TParent>;
    climate?: ProductSemiToClimateResolver<TParent>;
    finantial?: ProductSemiToFinantialResolver<TParent>;
    productinattachment?: ProductSemiToProductinattachmentResolver<TParent>;
    productinversion?: ProductSemiToProductinversionResolver<TParent>;
  }

  export interface ProductSemiToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToCategoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToSubcategoryResolver<
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

  export interface ProductSemiToBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToSkuResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToOffersResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToDiscountResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToModelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToStockResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToDescriptionResolver<
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

  export interface ProductSemiToModeldateResolver<
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

  export interface ProductSemiToCreatedatResolver<
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

  export interface ProductSemiToUpdatedatResolver<
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

  export interface ProductSemiToThumbnailResolver<
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

  export interface ProductSemiToOdometerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToTankCapacityResolver<
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

  export interface ProductSemiToPowerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToTorqueResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToDimensionsWeightResolver<
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

  export interface ProductSemiToDimensionsHeightResolver<
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

  export interface ProductSemiToDimensionsWidthResolver<
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

  export interface ProductSemiToDimensionsLengthResolver<
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

  export interface ProductSemiToConsumptionCityResolver<
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

  export interface ProductSemiToDiameterWheelsResolver<
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

  export interface ProductSemiToConsumptionCombinedResolver<
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

  export interface ProductSemiToConsumptionRoadResolver<
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

  export interface ProductSemiToDoorsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToCylindersResolver<
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

  export interface ProductSemiToValvesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToPassengersResolver<
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

  export interface ProductSemiToSpeedsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToDirectionResolver<
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

  export interface ProductSemiToTransmissionResolver<
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

  export interface ProductSemiToTractionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToEnergyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToArmourResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToConditionResolver<
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

  export interface ProductSemiToClimateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSemiToFinantialResolver<
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

  export interface ProductSemiToProductinattachmentResolver<
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

  export interface ProductSemiToProductinversionResolver<
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

  export interface ISemiFiltersTypeResolver<TParent = any> {
    brand?: SemiFiltersToBrandResolver<TParent>;
    model?: SemiFiltersToModelResolver<TParent>;
    year?: SemiFiltersToYearResolver<TParent>;
    price?: SemiFiltersToPriceResolver<TParent>;
    odometer?: SemiFiltersToOdometerResolver<TParent>;
  }

  export interface SemiFiltersToBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SemiFiltersToModelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SemiFiltersToYearResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SemiFiltersToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SemiFiltersToOdometerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMaxMinTypeResolver<TParent = any> {
    max?: MaxMinToMaxResolver<TParent>;
    min?: MaxMinToMinResolver<TParent>;
  }

  export interface MaxMinToMaxResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MaxMinToMinResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICatalogSemiReturnTypeResolver<TParent = any> {
    page?: CatalogSemiReturnToPageResolver<TParent>;
    limit?: CatalogSemiReturnToLimitResolver<TParent>;
    pagingcounter?: CatalogSemiReturnToPagingcounterResolver<TParent>;
    totaldocs?: CatalogSemiReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CatalogSemiReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CatalogSemiReturnToHasnextpageResolver<TParent>;
    docs?: CatalogSemiReturnToDocsResolver<TParent>;
  }

  export interface CatalogSemiReturnToPageResolver<
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

  export interface CatalogSemiReturnToLimitResolver<
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

  export interface CatalogSemiReturnToPagingcounterResolver<
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

  export interface CatalogSemiReturnToTotaldocsResolver<
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

  export interface CatalogSemiReturnToHasprevpageResolver<
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

  export interface CatalogSemiReturnToHasnextpageResolver<
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

  export interface CatalogSemiReturnToDocsResolver<
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

  export interface ICatalogSemiTypeResolver<TParent = any> {
    id?: CatalogSemiToIdResolver<TParent>;
    name?: CatalogSemiToNameResolver<TParent>;
    level?: CatalogSemiToLevelResolver<TParent>;
    label?: CatalogSemiToLabelResolver<TParent>;
    labelId?: CatalogSemiToLabelIdResolver<TParent>;
    labelChildren?: CatalogSemiToLabelChildrenResolver<TParent>;
    labelChildrenId?: CatalogSemiToLabelChildrenIdResolver<TParent>;
    parents?: CatalogSemiToParentsResolver<TParent>;
    children?: CatalogSemiToChildrenResolver<TParent>;
  }

  export interface CatalogSemiToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CatalogSemiToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CatalogSemiToLevelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CatalogSemiToLabelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CatalogSemiToLabelIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CatalogSemiToLabelChildrenResolver<
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

  export interface CatalogSemiToLabelChildrenIdResolver<
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

  export interface CatalogSemiToParentsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CatalogSemiToChildrenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IparentsSemiTypeResolver<TParent = any> {
    id?: parentsSemiToIdResolver<TParent>;
    name?: parentsSemiToNameResolver<TParent>;
    labelId?: parentsSemiToLabelIdResolver<TParent>;
    label?: parentsSemiToLabelResolver<TParent>;
  }

  export interface parentsSemiToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface parentsSemiToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface parentsSemiToLabelIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface parentsSemiToLabelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IchildrenSemiTypeResolver<TParent = any> {
    id?: childrenSemiToIdResolver<TParent>;
    name?: childrenSemiToNameResolver<TParent>;
    action?: childrenSemiToActionResolver<TParent>;
  }

  export interface childrenSemiToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface childrenSemiToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface childrenSemiToActionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ILocationsSemiReturnTypeResolver<TParent = any> {
    page?: LocationsSemiReturnToPageResolver<TParent>;
    limit?: LocationsSemiReturnToLimitResolver<TParent>;
    pagingcounter?: LocationsSemiReturnToPagingcounterResolver<TParent>;
    totaldocs?: LocationsSemiReturnToTotaldocsResolver<TParent>;
    hasprevpage?: LocationsSemiReturnToHasprevpageResolver<TParent>;
    hasnextpage?: LocationsSemiReturnToHasnextpageResolver<TParent>;
    docs?: LocationsSemiReturnToDocsResolver<TParent>;
  }

  export interface LocationsSemiReturnToPageResolver<
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

  export interface LocationsSemiReturnToLimitResolver<
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

  export interface LocationsSemiReturnToPagingcounterResolver<
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

  export interface LocationsSemiReturnToTotaldocsResolver<
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

  export interface LocationsSemiReturnToHasprevpageResolver<
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

  export interface LocationsSemiReturnToHasnextpageResolver<
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

  export interface LocationsSemiReturnToDocsResolver<
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

  export interface ILocationsSemiTypeResolver<TParent = any> {
    id?: LocationsSemiToIdResolver<TParent>;
    name?: LocationsSemiToNameResolver<TParent>;
    childrenLocations?: LocationsSemiToChildrenLocationsResolver<TParent>;
  }

  export interface LocationsSemiToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LocationsSemiToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LocationsSemiToChildrenLocationsResolver<
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

  export interface IchildrenLocationSemiTypeResolver<TParent = any> {
    locationId?: childrenLocationSemiToLocationIdResolver<TParent>;
    name?: childrenLocationSemiToNameResolver<TParent>;
  }

  export interface childrenLocationSemiToLocationIdResolver<
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

  export interface childrenLocationSemiToNameResolver<
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

  export interface IAttributesSemiReturnTypeResolver<TParent = any> {
    page?: AttributesSemiReturnToPageResolver<TParent>;
    limit?: AttributesSemiReturnToLimitResolver<TParent>;
    pagingcounter?: AttributesSemiReturnToPagingcounterResolver<TParent>;
    totaldocs?: AttributesSemiReturnToTotaldocsResolver<TParent>;
    hasprevpage?: AttributesSemiReturnToHasprevpageResolver<TParent>;
    hasnextpage?: AttributesSemiReturnToHasnextpageResolver<TParent>;
    docs?: AttributesSemiReturnToDocsResolver<TParent>;
  }

  export interface AttributesSemiReturnToPageResolver<
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

  export interface AttributesSemiReturnToLimitResolver<
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

  export interface AttributesSemiReturnToPagingcounterResolver<
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

  export interface AttributesSemiReturnToTotaldocsResolver<
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

  export interface AttributesSemiReturnToHasprevpageResolver<
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

  export interface AttributesSemiReturnToHasnextpageResolver<
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

  export interface AttributesSemiReturnToDocsResolver<
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

  export interface IAttributesSemiTypeResolver<TParent = any> {
    id?: AttributesSemiToIdResolver<TParent>;
    label?: AttributesSemiToLabelResolver<TParent>;
    type?: AttributesSemiToTypeResolver<TParent>;
    help?: AttributesSemiToHelpResolver<TParent>;
    alert?: AttributesSemiToAlertResolver<TParent>;
    placeholder?: AttributesSemiToPlaceholderResolver<TParent>;
    inputType?: AttributesSemiToInputTypeResolver<TParent>;
    valueType?: AttributesSemiToValueTypeResolver<TParent>;
    required?: AttributesSemiToRequiredResolver<TParent>;
    groupId?: AttributesSemiToGroupIdResolver<TParent>;
    groupName?: AttributesSemiToGroupNameResolver<TParent>;
    allowEdit?: AttributesSemiToAllowEditResolver<TParent>;
    order?: AttributesSemiToOrderResolver<TParent>;
    valueId?: AttributesSemiToValueIdResolver<TParent>;
    value?: AttributesSemiToValueResolver<TParent>;
  }

  export interface AttributesSemiToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttributesSemiToLabelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttributesSemiToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttributesSemiToHelpResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttributesSemiToAlertResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttributesSemiToPlaceholderResolver<
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

  export interface AttributesSemiToInputTypeResolver<
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

  export interface AttributesSemiToValueTypeResolver<
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

  export interface AttributesSemiToRequiredResolver<
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

  export interface AttributesSemiToGroupIdResolver<
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

  export interface AttributesSemiToGroupNameResolver<
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

  export interface AttributesSemiToAllowEditResolver<
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

  export interface AttributesSemiToOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AttributesSemiToValueIdResolver<
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

  export interface AttributesSemiToValueResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAppraisalPayloadTypeResolver<TParent = any> {
    statusCode?: AppraisalPayloadToStatusCodeResolver<TParent>;
    id?: AppraisalPayloadToIdResolver<TParent>;
    amount?: AppraisalPayloadToAmountResolver<TParent>;
    purchasePrice?: AppraisalPayloadToPurchasePriceResolver<TParent>;
    odometer?: AppraisalPayloadToOdometerResolver<TParent>;
    sellerId?: AppraisalPayloadToSellerIdResolver<TParent>;
    status?: AppraisalPayloadToStatusResolver<TParent>;
    type?: AppraisalPayloadToTypeResolver<TParent>;
    validity?: AppraisalPayloadToValidityResolver<TParent>;
    observations?: AppraisalPayloadToObservationsResolver<TParent>;
    car?: AppraisalPayloadToCarResolver<TParent>;
    owner?: AppraisalPayloadToOwnerResolver<TParent>;
    address?: AppraisalPayloadToAddressResolver<TParent>;
    images?: AppraisalPayloadToImagesResolver<TParent>;
    commercialName?: AppraisalPayloadToCommercialNameResolver<TParent>;
    valueOffered?: AppraisalPayloadToValueOfferedResolver<TParent>;
    saleValueOffered?: AppraisalPayloadToSaleValueOfferedResolver<TParent>;
  }

  export interface AppraisalPayloadToStatusCodeResolver<
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

  export interface AppraisalPayloadToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppraisalPayloadToAmountResolver<
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

  export interface AppraisalPayloadToPurchasePriceResolver<
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

  export interface AppraisalPayloadToOdometerResolver<
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

  export interface AppraisalPayloadToSellerIdResolver<
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

  export interface AppraisalPayloadToStatusResolver<
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

  export interface AppraisalPayloadToTypeResolver<
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

  export interface AppraisalPayloadToValidityResolver<
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

  export interface AppraisalPayloadToObservationsResolver<
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

  export interface AppraisalPayloadToCarResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppraisalPayloadToOwnerResolver<
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

  export interface AppraisalPayloadToAddressResolver<
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

  export interface AppraisalPayloadToImagesResolver<
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

  export interface AppraisalPayloadToCommercialNameResolver<
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

  export interface AppraisalPayloadToValueOfferedResolver<
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

  export interface AppraisalPayloadToSaleValueOfferedResolver<
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

  export interface ICardealersSemiReturnTypeResolver<TParent = any> {
    page?: CardealersSemiReturnToPageResolver<TParent>;
    limit?: CardealersSemiReturnToLimitResolver<TParent>;
    pagingcounter?: CardealersSemiReturnToPagingcounterResolver<TParent>;
    totaldocs?: CardealersSemiReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CardealersSemiReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CardealersSemiReturnToHasnextpageResolver<TParent>;
    docs?: CardealersSemiReturnToDocsResolver<TParent>;
  }

  export interface CardealersSemiReturnToPageResolver<
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

  export interface CardealersSemiReturnToLimitResolver<
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

  export interface CardealersSemiReturnToPagingcounterResolver<
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

  export interface CardealersSemiReturnToTotaldocsResolver<
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

  export interface CardealersSemiReturnToHasprevpageResolver<
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

  export interface CardealersSemiReturnToHasnextpageResolver<
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

  export interface CardealersSemiReturnToDocsResolver<
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

  export interface ICardealersSemiTypeResolver<TParent = any> {
    commercialName?: CardealersSemiToCommercialNameResolver<TParent>;
    sellerId?: CardealersSemiToSellerIdResolver<TParent>;
    location?: CardealersSemiToLocationResolver<TParent>;
    geoReference?: CardealersSemiToGeoReferenceResolver<TParent>;
    zipCode?: CardealersSemiToZipCodeResolver<TParent>;
  }

  export interface CardealersSemiToCommercialNameResolver<
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

  export interface CardealersSemiToSellerIdResolver<
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

  export interface CardealersSemiToLocationResolver<
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

  export interface CardealersSemiToGeoReferenceResolver<
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

  export interface CardealersSemiToZipCodeResolver<
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

  export interface IlocationSemiTypeResolver<TParent = any> {
    neighborhood?: locationSemiToNeighborhoodResolver<TParent>;
    city?: locationSemiToCityResolver<TParent>;
    state?: locationSemiToStateResolver<TParent>;
    country?: locationSemiToCountryResolver<TParent>;
  }

  export interface locationSemiToNeighborhoodResolver<
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

  export interface locationSemiToCityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface locationSemiToStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface locationSemiToCountryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IlocationDataTypeResolver<TParent = any> {
    id?: locationDataToIdResolver<TParent>;
    name?: locationDataToNameResolver<TParent>;
  }

  export interface locationDataToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface locationDataToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICatalogSemiNewReturnTypeResolver<TParent = any> {
    data?: CatalogSemiNewReturnToDataResolver<TParent>;
  }

  export interface CatalogSemiNewReturnToDataResolver<
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

  export interface IAddressReturnTypeResolver<TParent = any> {
    page?: AddressReturnToPageResolver<TParent>;
    limit?: AddressReturnToLimitResolver<TParent>;
    pagingcounter?: AddressReturnToPagingcounterResolver<TParent>;
    totaldocs?: AddressReturnToTotaldocsResolver<TParent>;
    hasprevpage?: AddressReturnToHasprevpageResolver<TParent>;
    hasnextpage?: AddressReturnToHasnextpageResolver<TParent>;
    docs?: AddressReturnToDocsResolver<TParent>;
  }

  export interface AddressReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AddressReturnToPagingcounterResolver<
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

  export interface AddressReturnToTotaldocsResolver<
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

  export interface AddressReturnToHasprevpageResolver<
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

  export interface AddressReturnToHasnextpageResolver<
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

  export interface AddressReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAttachmentReturnTypeResolver<TParent = any> {
    page?: AttachmentReturnToPageResolver<TParent>;
    limit?: AttachmentReturnToLimitResolver<TParent>;
    pagingcounter?: AttachmentReturnToPagingcounterResolver<TParent>;
    totaldocs?: AttachmentReturnToTotaldocsResolver<TParent>;
    hasprevpage?: AttachmentReturnToHasprevpageResolver<TParent>;
    hasnextpage?: AttachmentReturnToHasnextpageResolver<TParent>;
    docs?: AttachmentReturnToDocsResolver<TParent>;
  }

  export interface AttachmentReturnToPageResolver<
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

  export interface AttachmentReturnToLimitResolver<
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

  export interface AttachmentReturnToPagingcounterResolver<
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

  export interface AttachmentReturnToTotaldocsResolver<
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

  export interface AttachmentReturnToHasprevpageResolver<
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

  export interface AttachmentReturnToHasnextpageResolver<
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

  export interface AttachmentReturnToDocsResolver<
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

  export interface IDetailPropertyReturnTypeResolver<TParent = any> {
    page?: DetailPropertyReturnToPageResolver<TParent>;
    limit?: DetailPropertyReturnToLimitResolver<TParent>;
    pagingcounter?: DetailPropertyReturnToPagingcounterResolver<TParent>;
    totaldocs?: DetailPropertyReturnToTotaldocsResolver<TParent>;
    hasprevpage?: DetailPropertyReturnToHasprevpageResolver<TParent>;
    hasnextpage?: DetailPropertyReturnToHasnextpageResolver<TParent>;
    docs?: DetailPropertyReturnToDocsResolver<TParent>;
  }

  export interface DetailPropertyReturnToPageResolver<
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

  export interface DetailPropertyReturnToLimitResolver<
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

  export interface DetailPropertyReturnToPagingcounterResolver<
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

  export interface DetailPropertyReturnToTotaldocsResolver<
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

  export interface DetailPropertyReturnToHasprevpageResolver<
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

  export interface DetailPropertyReturnToHasnextpageResolver<
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

  export interface DetailPropertyReturnToDocsResolver<
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

  export interface IVersionReturnTypeResolver<TParent = any> {
    page?: VersionReturnToPageResolver<TParent>;
    limit?: VersionReturnToLimitResolver<TParent>;
    pagingcounter?: VersionReturnToPagingcounterResolver<TParent>;
    totaldocs?: VersionReturnToTotaldocsResolver<TParent>;
    hasprevpage?: VersionReturnToHasprevpageResolver<TParent>;
    hasnextpage?: VersionReturnToHasnextpageResolver<TParent>;
    docs?: VersionReturnToDocsResolver<TParent>;
  }

  export interface VersionReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VersionReturnToPagingcounterResolver<
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

  export interface VersionReturnToTotaldocsResolver<
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

  export interface VersionReturnToHasprevpageResolver<
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

  export interface VersionReturnToHasnextpageResolver<
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

  export interface VersionReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISaleOrderReturnTypeResolver<TParent = any> {
    page?: SaleOrderReturnToPageResolver<TParent>;
    limit?: SaleOrderReturnToLimitResolver<TParent>;
    pagingcounter?: SaleOrderReturnToPagingcounterResolver<TParent>;
    totaldocs?: SaleOrderReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SaleOrderReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SaleOrderReturnToHasnextpageResolver<TParent>;
    docs?: SaleOrderReturnToDocsResolver<TParent>;
  }

  export interface SaleOrderReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SaleOrderReturnToLimitResolver<
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

  export interface SaleOrderReturnToPagingcounterResolver<
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

  export interface SaleOrderReturnToTotaldocsResolver<
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

  export interface SaleOrderReturnToHasprevpageResolver<
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

  export interface SaleOrderReturnToHasnextpageResolver<
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

  export interface SaleOrderReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProductOrderReturnTypeResolver<TParent = any> {
    page?: ProductOrderReturnToPageResolver<TParent>;
    limit?: ProductOrderReturnToLimitResolver<TParent>;
    pagingcounter?: ProductOrderReturnToPagingcounterResolver<TParent>;
    totaldocs?: ProductOrderReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ProductOrderReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ProductOrderReturnToHasnextpageResolver<TParent>;
    docs?: ProductOrderReturnToDocsResolver<TParent>;
  }

  export interface ProductOrderReturnToPageResolver<
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

  export interface ProductOrderReturnToLimitResolver<
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

  export interface ProductOrderReturnToPagingcounterResolver<
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

  export interface ProductOrderReturnToTotaldocsResolver<
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

  export interface ProductOrderReturnToHasprevpageResolver<
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

  export interface ProductOrderReturnToHasnextpageResolver<
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

  export interface ProductOrderReturnToDocsResolver<
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

  export interface IReviewReturnTypeResolver<TParent = any> {
    page?: ReviewReturnToPageResolver<TParent>;
    limit?: ReviewReturnToLimitResolver<TParent>;
    pagingcounter?: ReviewReturnToPagingcounterResolver<TParent>;
    totaldocs?: ReviewReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ReviewReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ReviewReturnToHasnextpageResolver<TParent>;
    docs?: ReviewReturnToDocsResolver<TParent>;
  }

  export interface ReviewReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewReturnToPagingcounterResolver<
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

  export interface ReviewReturnToTotaldocsResolver<
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

  export interface ReviewReturnToHasprevpageResolver<
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

  export interface ReviewReturnToHasnextpageResolver<
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

  export interface ReviewReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IReviewTypeResolver<TParent = any> {
    id?: ReviewToIdResolver<TParent>;
    productOrder?: ReviewToProductOrderResolver<TParent>;
    point?: ReviewToPointResolver<TParent>;
    detail?: ReviewToDetailResolver<TParent>;
  }

  export interface ReviewToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewToProductOrderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewToPointResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewToDetailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IConversationReturnTypeResolver<TParent = any> {
    page?: ConversationReturnToPageResolver<TParent>;
    limit?: ConversationReturnToLimitResolver<TParent>;
    pagingcounter?: ConversationReturnToPagingcounterResolver<TParent>;
    totaldocs?: ConversationReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ConversationReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ConversationReturnToHasnextpageResolver<TParent>;
    docs?: ConversationReturnToDocsResolver<TParent>;
  }

  export interface ConversationReturnToPageResolver<
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

  export interface ConversationReturnToLimitResolver<
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

  export interface ConversationReturnToPagingcounterResolver<
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

  export interface ConversationReturnToTotaldocsResolver<
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

  export interface ConversationReturnToHasprevpageResolver<
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

  export interface ConversationReturnToHasnextpageResolver<
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

  export interface ConversationReturnToDocsResolver<
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

  export interface IZipCodeReturnTypeResolver<TParent = any> {
    page?: ZipCodeReturnToPageResolver<TParent>;
    limit?: ZipCodeReturnToLimitResolver<TParent>;
    pagingcounter?: ZipCodeReturnToPagingcounterResolver<TParent>;
    totaldocs?: ZipCodeReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ZipCodeReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ZipCodeReturnToHasnextpageResolver<TParent>;
    docs?: ZipCodeReturnToDocsResolver<TParent>;
  }

  export interface ZipCodeReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeReturnToPagingcounterResolver<
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

  export interface ZipCodeReturnToTotaldocsResolver<
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

  export interface ZipCodeReturnToHasprevpageResolver<
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

  export interface ZipCodeReturnToHasnextpageResolver<
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

  export interface ZipCodeReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IZipCodeTypeResolver<TParent = any> {
    id?: ZipCodeToIdResolver<TParent>;
    cp?: ZipCodeToCpResolver<TParent>;
    suburb?: ZipCodeToSuburbResolver<TParent>;
    town?: ZipCodeToTownResolver<TParent>;
    state?: ZipCodeToStateResolver<TParent>;
    codeTown?: ZipCodeToCodeTownResolver<TParent>;
    codeState?: ZipCodeToCodeStateResolver<TParent>;
    txtState?: ZipCodeToTxtStateResolver<TParent>;
  }

  export interface ZipCodeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToCpResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToSuburbResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToTownResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToCodeTownResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToCodeStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ZipCodeToTxtStateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStoreReturnTypeResolver<TParent = any> {
    page?: StoreReturnToPageResolver<TParent>;
    limit?: StoreReturnToLimitResolver<TParent>;
    pagingcounter?: StoreReturnToPagingcounterResolver<TParent>;
    totaldocs?: StoreReturnToTotaldocsResolver<TParent>;
    hasprevpage?: StoreReturnToHasprevpageResolver<TParent>;
    hasnextpage?: StoreReturnToHasnextpageResolver<TParent>;
    docs?: StoreReturnToDocsResolver<TParent>;
  }

  export interface StoreReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StoreReturnToPagingcounterResolver<
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

  export interface StoreReturnToTotaldocsResolver<
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

  export interface StoreReturnToHasprevpageResolver<
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

  export interface StoreReturnToHasnextpageResolver<
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

  export interface StoreReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IJourneyReturnTypeResolver<TParent = any> {
    page?: JourneyReturnToPageResolver<TParent>;
    limit?: JourneyReturnToLimitResolver<TParent>;
    pagingcounter?: JourneyReturnToPagingcounterResolver<TParent>;
    totaldocs?: JourneyReturnToTotaldocsResolver<TParent>;
    hasprevpage?: JourneyReturnToHasprevpageResolver<TParent>;
    hasnextpage?: JourneyReturnToHasnextpageResolver<TParent>;
    docs?: JourneyReturnToDocsResolver<TParent>;
  }

  export interface JourneyReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface JourneyReturnToPagingcounterResolver<
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

  export interface JourneyReturnToTotaldocsResolver<
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

  export interface JourneyReturnToHasprevpageResolver<
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

  export interface JourneyReturnToHasnextpageResolver<
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

  export interface JourneyReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IShiploadReturnTypeResolver<TParent = any> {
    page?: ShiploadReturnToPageResolver<TParent>;
    limit?: ShiploadReturnToLimitResolver<TParent>;
    pagingcounter?: ShiploadReturnToPagingcounterResolver<TParent>;
    totaldocs?: ShiploadReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ShiploadReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ShiploadReturnToHasnextpageResolver<TParent>;
    docs?: ShiploadReturnToDocsResolver<TParent>;
  }

  export interface ShiploadReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShiploadReturnToPagingcounterResolver<
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

  export interface ShiploadReturnToTotaldocsResolver<
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

  export interface ShiploadReturnToHasprevpageResolver<
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

  export interface ShiploadReturnToHasnextpageResolver<
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

  export interface ShiploadReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IShipProdTypeResolver<TParent = any> {
    shipload?: ShipProdToShiploadResolver<TParent>;
    product?: ShipProdToProductResolver<TParent>;
  }

  export interface ShipProdToShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShipProdToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProdOfShipTypeResolver<TParent = any> {
    product?: ProdOfShipToProductResolver<TParent>;
    quantity?: ProdOfShipToQuantityResolver<TParent>;
  }

  export interface ProdOfShipToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProdOfShipToQuantityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IShiploadProductReturnTypeResolver<TParent = any> {
    page?: ShiploadProductReturnToPageResolver<TParent>;
    limit?: ShiploadProductReturnToLimitResolver<TParent>;
    pagingcounter?: ShiploadProductReturnToPagingcounterResolver<TParent>;
    totaldocs?: ShiploadProductReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ShiploadProductReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ShiploadProductReturnToHasnextpageResolver<TParent>;
    docs?: ShiploadProductReturnToDocsResolver<TParent>;
  }

  export interface ShiploadProductReturnToPageResolver<
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

  export interface ShiploadProductReturnToLimitResolver<
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

  export interface ShiploadProductReturnToPagingcounterResolver<
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

  export interface ShiploadProductReturnToTotaldocsResolver<
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

  export interface ShiploadProductReturnToHasprevpageResolver<
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

  export interface ShiploadProductReturnToHasnextpageResolver<
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

  export interface ShiploadProductReturnToDocsResolver<
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

  export interface IShiploadProductTypeResolver<TParent = any> {
    product?: ShiploadProductToProductResolver<TParent>;
    quantity?: ShiploadProductToQuantityResolver<TParent>;
  }

  export interface ShiploadProductToProductResolver<
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

  export interface ShiploadProductToQuantityResolver<
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

  export interface IWishListReturnTypeResolver<TParent = any> {
    page?: WishListReturnToPageResolver<TParent>;
    limit?: WishListReturnToLimitResolver<TParent>;
    pagingcounter?: WishListReturnToPagingcounterResolver<TParent>;
    totaldocs?: WishListReturnToTotaldocsResolver<TParent>;
    hasprevpage?: WishListReturnToHasprevpageResolver<TParent>;
    hasnextpage?: WishListReturnToHasnextpageResolver<TParent>;
    docs?: WishListReturnToDocsResolver<TParent>;
  }

  export interface WishListReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface WishListReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface WishListReturnToPagingcounterResolver<
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

  export interface WishListReturnToTotaldocsResolver<
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

  export interface WishListReturnToHasprevpageResolver<
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

  export interface WishListReturnToHasnextpageResolver<
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

  export interface WishListReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IWishListTypeResolver<TParent = any> {
    id?: WishListToIdResolver<TParent>;
    name?: WishListToNameResolver<TParent>;
  }

  export interface WishListToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface WishListToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IWishedProductReturnTypeResolver<TParent = any> {
    page?: WishedProductReturnToPageResolver<TParent>;
    limit?: WishedProductReturnToLimitResolver<TParent>;
    pagingcounter?: WishedProductReturnToPagingcounterResolver<TParent>;
    totaldocs?: WishedProductReturnToTotaldocsResolver<TParent>;
    hasprevpage?: WishedProductReturnToHasprevpageResolver<TParent>;
    hasnextpage?: WishedProductReturnToHasnextpageResolver<TParent>;
    docs?: WishedProductReturnToDocsResolver<TParent>;
  }

  export interface WishedProductReturnToPageResolver<
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

  export interface WishedProductReturnToLimitResolver<
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

  export interface WishedProductReturnToPagingcounterResolver<
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

  export interface WishedProductReturnToTotaldocsResolver<
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

  export interface WishedProductReturnToHasprevpageResolver<
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

  export interface WishedProductReturnToHasnextpageResolver<
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

  export interface WishedProductReturnToDocsResolver<
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

  export interface IWishedProductTypeResolver<TParent = any> {
    id?: WishedProductToIdResolver<TParent>;
    list?: WishedProductToListResolver<TParent>;
    product?: WishedProductToProductResolver<TParent>;
    customOrder?: WishedProductToCustomOrderResolver<TParent>;
  }

  export interface WishedProductToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface WishedProductToListResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface WishedProductToProductResolver<
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

  export interface WishedProductToCustomOrderResolver<
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

  export interface ISectionOfProductReturnTypeResolver<TParent = any> {
    page?: SectionOfProductReturnToPageResolver<TParent>;
    limit?: SectionOfProductReturnToLimitResolver<TParent>;
    pagingcounter?: SectionOfProductReturnToPagingcounterResolver<TParent>;
    totaldocs?: SectionOfProductReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SectionOfProductReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SectionOfProductReturnToHasnextpageResolver<TParent>;
    docs?: SectionOfProductReturnToDocsResolver<TParent>;
  }

  export interface SectionOfProductReturnToPageResolver<
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

  export interface SectionOfProductReturnToLimitResolver<
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

  export interface SectionOfProductReturnToPagingcounterResolver<
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

  export interface SectionOfProductReturnToTotaldocsResolver<
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

  export interface SectionOfProductReturnToHasprevpageResolver<
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

  export interface SectionOfProductReturnToHasnextpageResolver<
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

  export interface SectionOfProductReturnToDocsResolver<
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

  export interface ITemplateInfoReturnTypeResolver<TParent = any> {
    page?: TemplateInfoReturnToPageResolver<TParent>;
    limit?: TemplateInfoReturnToLimitResolver<TParent>;
    pagingcounter?: TemplateInfoReturnToPagingcounterResolver<TParent>;
    totaldocs?: TemplateInfoReturnToTotaldocsResolver<TParent>;
    hasprevpage?: TemplateInfoReturnToHasprevpageResolver<TParent>;
    hasnextpage?: TemplateInfoReturnToHasnextpageResolver<TParent>;
    docs?: TemplateInfoReturnToDocsResolver<TParent>;
  }

  export interface TemplateInfoReturnToPageResolver<
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

  export interface TemplateInfoReturnToLimitResolver<
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

  export interface TemplateInfoReturnToPagingcounterResolver<
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

  export interface TemplateInfoReturnToTotaldocsResolver<
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

  export interface TemplateInfoReturnToHasprevpageResolver<
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

  export interface TemplateInfoReturnToHasnextpageResolver<
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

  export interface TemplateInfoReturnToDocsResolver<
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

  export interface IValuesOfTemplateReturnTypeResolver<TParent = any> {
    page?: ValuesOfTemplateReturnToPageResolver<TParent>;
    limit?: ValuesOfTemplateReturnToLimitResolver<TParent>;
    pagingcounter?: ValuesOfTemplateReturnToPagingcounterResolver<TParent>;
    totaldocs?: ValuesOfTemplateReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ValuesOfTemplateReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ValuesOfTemplateReturnToHasnextpageResolver<TParent>;
    docs?: ValuesOfTemplateReturnToDocsResolver<TParent>;
  }

  export interface ValuesOfTemplateReturnToPageResolver<
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

  export interface ValuesOfTemplateReturnToLimitResolver<
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

  export interface ValuesOfTemplateReturnToPagingcounterResolver<
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

  export interface ValuesOfTemplateReturnToTotaldocsResolver<
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

  export interface ValuesOfTemplateReturnToHasprevpageResolver<
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

  export interface ValuesOfTemplateReturnToHasnextpageResolver<
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

  export interface ValuesOfTemplateReturnToDocsResolver<
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

  export interface IqueryDepartmentTypeResolver<TParent = any> {
    id?: queryDepartmentToIdResolver<TParent>;
    name?: queryDepartmentToNameResolver<TParent>;
  }

  export interface queryDepartmentToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryDepartmentToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRecordReturnTypeResolver<TParent = any> {
    page?: RecordReturnToPageResolver<TParent>;
    limit?: RecordReturnToLimitResolver<TParent>;
    pagingcounter?: RecordReturnToPagingcounterResolver<TParent>;
    totaldocs?: RecordReturnToTotaldocsResolver<TParent>;
    hasprevpage?: RecordReturnToHasprevpageResolver<TParent>;
    hasnextpage?: RecordReturnToHasnextpageResolver<TParent>;
    docs?: RecordReturnToDocsResolver<TParent>;
  }

  export interface RecordReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordReturnToPagingcounterResolver<
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

  export interface RecordReturnToTotaldocsResolver<
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

  export interface RecordReturnToHasprevpageResolver<
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

  export interface RecordReturnToHasnextpageResolver<
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

  export interface RecordReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IqueryRecordTypeResolver<TParent = any> {
    id?: queryRecordToIdResolver<TParent>;
    action?: queryRecordToActionResolver<TParent>;
    activity?: queryRecordToActivityResolver<TParent>;
    price?: queryRecordToPriceResolver<TParent>;
    quantity?: queryRecordToQuantityResolver<TParent>;
    product?: queryRecordToProductResolver<TParent>;
    shipload?: queryRecordToShiploadResolver<TParent>;
    date?: queryRecordToDateResolver<TParent>;
  }

  export interface queryRecordToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToActionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToActivityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToQuantityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryRecordToDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IqueryInvoiceTypeResolver<TParent = any> {
    id?: queryInvoiceToIdResolver<TParent>;
    path?: queryInvoiceToPathResolver<TParent>;
    sale_order?: queryInvoiceToSale_orderResolver<TParent>;
  }

  export interface queryInvoiceToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryInvoiceToPathResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface queryInvoiceToSale_orderResolver<
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

  export interface IDebtsReturnTypeResolver<TParent = any> {
    page?: DebtsReturnToPageResolver<TParent>;
    limit?: DebtsReturnToLimitResolver<TParent>;
    pagingcounter?: DebtsReturnToPagingcounterResolver<TParent>;
    totaldocs?: DebtsReturnToTotaldocsResolver<TParent>;
    hasprevpage?: DebtsReturnToHasprevpageResolver<TParent>;
    hasnextpage?: DebtsReturnToHasnextpageResolver<TParent>;
    docs?: DebtsReturnToDocsResolver<TParent>;
  }

  export interface DebtsReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsReturnToPagingcounterResolver<
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

  export interface DebtsReturnToTotaldocsResolver<
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

  export interface DebtsReturnToHasprevpageResolver<
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

  export interface DebtsReturnToHasnextpageResolver<
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

  export interface DebtsReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDebtsTypeResolver<TParent = any> {
    store?: DebtsToStoreResolver<TParent>;
    seller?: DebtsToSellerResolver<TParent>;
    total?: DebtsToTotalResolver<TParent>;
    datesale?: DebtsToDatesaleResolver<TParent>;
    duedate?: DebtsToDuedateResolver<TParent>;
    status?: DebtsToStatusResolver<TParent>;
  }

  export interface DebtsToStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsToSellerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsToTotalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsToDatesaleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsToDuedateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DebtsToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISellerSaleOrderReturnTypeResolver<TParent = any> {
    page?: SellerSaleOrderReturnToPageResolver<TParent>;
    limit?: SellerSaleOrderReturnToLimitResolver<TParent>;
    pagingcounter?: SellerSaleOrderReturnToPagingcounterResolver<TParent>;
    totaldocs?: SellerSaleOrderReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SellerSaleOrderReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SellerSaleOrderReturnToHasnextpageResolver<TParent>;
    docs?: SellerSaleOrderReturnToDocsResolver<TParent>;
  }

  export interface SellerSaleOrderReturnToPageResolver<
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

  export interface SellerSaleOrderReturnToLimitResolver<
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

  export interface SellerSaleOrderReturnToPagingcounterResolver<
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

  export interface SellerSaleOrderReturnToTotaldocsResolver<
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

  export interface SellerSaleOrderReturnToHasprevpageResolver<
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

  export interface SellerSaleOrderReturnToHasnextpageResolver<
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

  export interface SellerSaleOrderReturnToDocsResolver<
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

  export interface ISellerSaleOrderTypeResolver<TParent = any> {
    price?: SellerSaleOrderToPriceResolver<TParent>;
    seller?: SellerSaleOrderToSellerResolver<TParent>;
  }

  export interface SellerSaleOrderToPriceResolver<
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

  export interface SellerSaleOrderToSellerResolver<
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

  export interface IProductSaleOrderReturnTypeResolver<TParent = any> {
    page?: ProductSaleOrderReturnToPageResolver<TParent>;
    limit?: ProductSaleOrderReturnToLimitResolver<TParent>;
    pagingcounter?: ProductSaleOrderReturnToPagingcounterResolver<TParent>;
    totaldocs?: ProductSaleOrderReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ProductSaleOrderReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ProductSaleOrderReturnToHasnextpageResolver<TParent>;
    docs?: ProductSaleOrderReturnToDocsResolver<TParent>;
  }

  export interface ProductSaleOrderReturnToPageResolver<
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

  export interface ProductSaleOrderReturnToLimitResolver<
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

  export interface ProductSaleOrderReturnToPagingcounterResolver<
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

  export interface ProductSaleOrderReturnToTotaldocsResolver<
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

  export interface ProductSaleOrderReturnToHasprevpageResolver<
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

  export interface ProductSaleOrderReturnToHasnextpageResolver<
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

  export interface ProductSaleOrderReturnToDocsResolver<
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

  export interface IProductSaleOrderTypeResolver<TParent = any> {
    id?: ProductSaleOrderToIdResolver<TParent>;
    name?: ProductSaleOrderToNameResolver<TParent>;
    stock?: ProductSaleOrderToStockResolver<TParent>;
  }

  export interface ProductSaleOrderToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProductSaleOrderToNameResolver<
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

  export interface ProductSaleOrderToStockResolver<
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

  export interface IPromotionReturnTypeResolver<TParent = any> {
    page?: PromotionReturnToPageResolver<TParent>;
    limit?: PromotionReturnToLimitResolver<TParent>;
    pagingcounter?: PromotionReturnToPagingcounterResolver<TParent>;
    totaldocs?: PromotionReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PromotionReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PromotionReturnToHasnextpageResolver<TParent>;
    docs?: PromotionReturnToDocsResolver<TParent>;
  }

  export interface PromotionReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PromotionReturnToLimitResolver<
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

  export interface PromotionReturnToPagingcounterResolver<
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

  export interface PromotionReturnToTotaldocsResolver<
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

  export interface PromotionReturnToHasprevpageResolver<
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

  export interface PromotionReturnToHasnextpageResolver<
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

  export interface PromotionReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPromotionTypeResolver<TParent = any> {
    id?: PromotionToIdResolver<TParent>;
    site?: PromotionToSiteResolver<TParent>;
    url?: PromotionToUrlResolver<TParent>;
    url1?: PromotionToUrl1Resolver<TParent>;
    descripcion?: PromotionToDescripcionResolver<TParent>;
    type?: PromotionToTypeResolver<TParent>;
  }

  export interface PromotionToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PromotionToSiteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PromotionToUrlResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PromotionToUrl1Resolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PromotionToDescripcionResolver<
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

  export interface PromotionToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IKeyTypeResolver<TParent = any> {
    id?: KeyToIdResolver<TParent>;
    sub_name?: KeyToSub_nameResolver<TParent>;
    sub_id?: KeyToSub_idResolver<TParent>;
    sub_code?: KeyToSub_codeResolver<TParent>;
    creator_name?: KeyToCreator_nameResolver<TParent>;
    creator_id?: KeyToCreator_idResolver<TParent>;
    org_code?: KeyToOrg_codeResolver<TParent>;
    key_private?: KeyToKey_privateResolver<TParent>;
    key_public?: KeyToKey_publicResolver<TParent>;
    type?: KeyToTypeResolver<TParent>;
  }

  export interface KeyToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToSub_nameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToSub_idResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToSub_codeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToCreator_nameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToCreator_idResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToOrg_codeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToKey_privateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToKey_publicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyToTypeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IArticleReturnTypeResolver<TParent = any> {
    page?: ArticleReturnToPageResolver<TParent>;
    limit?: ArticleReturnToLimitResolver<TParent>;
    pagingcounter?: ArticleReturnToPagingcounterResolver<TParent>;
    totaldocs?: ArticleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ArticleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ArticleReturnToHasnextpageResolver<TParent>;
    docs?: ArticleReturnToDocsResolver<TParent>;
  }

  export interface ArticleReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleReturnToPagingcounterResolver<
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

  export interface ArticleReturnToTotaldocsResolver<
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

  export interface ArticleReturnToHasprevpageResolver<
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

  export interface ArticleReturnToHasnextpageResolver<
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

  export interface ArticleReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IArticleTypeResolver<TParent = any> {
    id?: ArticleToIdResolver<TParent>;
    titleEs?: ArticleToTitleEsResolver<TParent>;
    titleEn?: ArticleToTitleEnResolver<TParent>;
    subtitleEs?: ArticleToSubtitleEsResolver<TParent>;
    subtitleEn?: ArticleToSubtitleEnResolver<TParent>;
    contentEs?: ArticleToContentEsResolver<TParent>;
    contentEn?: ArticleToContentEnResolver<TParent>;
    banner0?: ArticleToBanner0Resolver<TParent>;
    banner1?: ArticleToBanner1Resolver<TParent>;
    active?: ArticleToActiveResolver<TParent>;
    views?: ArticleToViewsResolver<TParent>;
    callToActionEs?: ArticleToCallToActionEsResolver<TParent>;
    callToActionEn?: ArticleToCallToActionEnResolver<TParent>;
    abstractEs?: ArticleToAbstractEsResolver<TParent>;
    abstractEn?: ArticleToAbstractEnResolver<TParent>;
    iframe?: ArticleToIframeResolver<TParent>;
    releaseDate?: ArticleToReleaseDateResolver<TParent>;
    status?: ArticleToStatusResolver<TParent>;
    author?: ArticleToAuthorResolver<TParent>;
    categoryonArticle?: ArticleToCategoryonArticleResolver<TParent>;
    metadataonArticle?: ArticleToMetadataonArticleResolver<TParent>;
    createdat?: ArticleToCreatedatResolver<TParent>;
    updatedat?: ArticleToUpdatedatResolver<TParent>;
    creatorid?: ArticleToCreatoridResolver<TParent>;
    orgcode?: ArticleToOrgcodeResolver<TParent>;
    partnercode?: ArticleToPartnercodeResolver<TParent>;
    articleinattachment?: ArticleToArticleinattachmentResolver<TParent>;
    articleintags?: ArticleToArticleintagsResolver<TParent>;
    articleincategory?: ArticleToArticleincategoryResolver<TParent>;
    articleinmetadata?: ArticleToArticleinmetadataResolver<TParent>;
    cardArticle?: ArticleToCardArticleResolver<TParent>;
    commentArticle?: ArticleToCommentArticleResolver<TParent>;
    topic?: ArticleToTopicResolver<TParent>;
  }

  export interface ArticleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToTitleEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToTitleEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToSubtitleEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToSubtitleEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToContentEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToContentEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToBanner0Resolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToBanner1Resolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToViewsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToCallToActionEsResolver<
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

  export interface ArticleToCallToActionEnResolver<
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

  export interface ArticleToAbstractEsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToAbstractEnResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToIframeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToReleaseDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToAuthorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToCategoryonArticleResolver<
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

  export interface ArticleToMetadataonArticleResolver<
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

  export interface ArticleToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToCreatoridResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToOrgcodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToPartnercodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToArticleinattachmentResolver<
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

  export interface ArticleToArticleintagsResolver<
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

  export interface ArticleToArticleincategoryResolver<
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

  export interface ArticleToArticleinmetadataResolver<
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

  export interface ArticleToCardArticleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ArticleToCommentArticleResolver<
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

  export interface ArticleToTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICategoryForArticleTypeResolver<TParent = any> {
    id?: CategoryForArticleToIdResolver<TParent>;
    article?: CategoryForArticleToArticleResolver<TParent>;
    categoryForEntertaiment?: CategoryForArticleToCategoryForEntertaimentResolver<TParent>;
  }

  export interface CategoryForArticleToIdResolver<
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

  export interface CategoryForArticleToArticleResolver<
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

  export interface CategoryForArticleToCategoryForEntertaimentResolver<
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

  export interface ICategoryForEntertaimentTypeResolver<TParent = any> {
    id?: CategoryForEntertaimentToIdResolver<TParent>;
    nameEs?: CategoryForEntertaimentToNameEsResolver<TParent>;
    nameEn?: CategoryForEntertaimentToNameEnResolver<TParent>;
    descriptionEs?: CategoryForEntertaimentToDescriptionEsResolver<TParent>;
    descriptionEn?: CategoryForEntertaimentToDescriptionEnResolver<TParent>;
    createdat?: CategoryForEntertaimentToCreatedatResolver<TParent>;
    updatedat?: CategoryForEntertaimentToUpdatedatResolver<TParent>;
    creatorid?: CategoryForEntertaimentToCreatoridResolver<TParent>;
    orgcode?: CategoryForEntertaimentToOrgcodeResolver<TParent>;
    partnercode?: CategoryForEntertaimentToPartnercodeResolver<TParent>;
  }

  export interface CategoryForEntertaimentToIdResolver<
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

  export interface CategoryForEntertaimentToNameEsResolver<
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

  export interface CategoryForEntertaimentToNameEnResolver<
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

  export interface CategoryForEntertaimentToDescriptionEsResolver<
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

  export interface CategoryForEntertaimentToDescriptionEnResolver<
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

  export interface CategoryForEntertaimentToCreatedatResolver<
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

  export interface CategoryForEntertaimentToUpdatedatResolver<
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

  export interface CategoryForEntertaimentToCreatoridResolver<
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

  export interface CategoryForEntertaimentToOrgcodeResolver<
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

  export interface CategoryForEntertaimentToPartnercodeResolver<
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

  export interface IMetadataForArticleTypeResolver<TParent = any> {
    id?: MetadataForArticleToIdResolver<TParent>;
    article?: MetadataForArticleToArticleResolver<TParent>;
    metadataForEntertaiment?: MetadataForArticleToMetadataForEntertaimentResolver<TParent>;
  }

  export interface MetadataForArticleToIdResolver<
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

  export interface MetadataForArticleToArticleResolver<
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

  export interface MetadataForArticleToMetadataForEntertaimentResolver<
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

  export interface IMetadataForEntertaimentTypeResolver<TParent = any> {
    id?: MetadataForEntertaimentToIdResolver<TParent>;
    title?: MetadataForEntertaimentToTitleResolver<TParent>;
    description?: MetadataForEntertaimentToDescriptionResolver<TParent>;
    slug?: MetadataForEntertaimentToSlugResolver<TParent>;
    analyticsCode?: MetadataForEntertaimentToAnalyticsCodeResolver<TParent>;
    serchsConsoleCode?: MetadataForEntertaimentToSerchsConsoleCodeResolver<TParent>;
    markdownJson?: MetadataForEntertaimentToMarkdownJsonResolver<TParent>;
  }

  export interface MetadataForEntertaimentToIdResolver<
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

  export interface MetadataForEntertaimentToTitleResolver<
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

  export interface MetadataForEntertaimentToDescriptionResolver<
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

  export interface MetadataForEntertaimentToSlugResolver<
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

  export interface MetadataForEntertaimentToAnalyticsCodeResolver<
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

  export interface MetadataForEntertaimentToSerchsConsoleCodeResolver<
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

  export interface MetadataForEntertaimentToMarkdownJsonResolver<
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

  export interface IAttachmentOfArticleTypeResolver<TParent = any> {
    id?: AttachmentOfArticleToIdResolver<TParent>;
    article?: AttachmentOfArticleToArticleResolver<TParent>;
    url?: AttachmentOfArticleToUrlResolver<TParent>;
    type?: AttachmentOfArticleToTypeResolver<TParent>;
    title?: AttachmentOfArticleToTitleResolver<TParent>;
    createdat?: AttachmentOfArticleToCreatedatResolver<TParent>;
    updatedat?: AttachmentOfArticleToUpdatedatResolver<TParent>;
    creatorid?: AttachmentOfArticleToCreatoridResolver<TParent>;
    orgcode?: AttachmentOfArticleToOrgcodeResolver<TParent>;
    partnercode?: AttachmentOfArticleToPartnercodeResolver<TParent>;
  }

  export interface AttachmentOfArticleToIdResolver<
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

  export interface AttachmentOfArticleToArticleResolver<
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

  export interface AttachmentOfArticleToUrlResolver<
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

  export interface AttachmentOfArticleToTypeResolver<
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

  export interface AttachmentOfArticleToTitleResolver<
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

  export interface AttachmentOfArticleToCreatedatResolver<
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

  export interface AttachmentOfArticleToUpdatedatResolver<
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

  export interface AttachmentOfArticleToCreatoridResolver<
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

  export interface AttachmentOfArticleToOrgcodeResolver<
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

  export interface AttachmentOfArticleToPartnercodeResolver<
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

  export interface ITagsOfArticleTypeResolver<TParent = any> {
    id?: TagsOfArticleToIdResolver<TParent>;
    article?: TagsOfArticleToArticleResolver<TParent>;
    name?: TagsOfArticleToNameResolver<TParent>;
    description?: TagsOfArticleToDescriptionResolver<TParent>;
    createdat?: TagsOfArticleToCreatedatResolver<TParent>;
    updatedat?: TagsOfArticleToUpdatedatResolver<TParent>;
    creatorid?: TagsOfArticleToCreatoridResolver<TParent>;
    orgcode?: TagsOfArticleToOrgcodeResolver<TParent>;
    partnercode?: TagsOfArticleToPartnercodeResolver<TParent>;
  }

  export interface TagsOfArticleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TagsOfArticleToArticleResolver<
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

  export interface TagsOfArticleToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TagsOfArticleToDescriptionResolver<
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

  export interface TagsOfArticleToCreatedatResolver<
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

  export interface TagsOfArticleToUpdatedatResolver<
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

  export interface TagsOfArticleToCreatoridResolver<
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

  export interface TagsOfArticleToOrgcodeResolver<
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

  export interface TagsOfArticleToPartnercodeResolver<
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

  export interface ICategoryOfArticleTypeResolver<TParent = any> {
    id?: CategoryOfArticleToIdResolver<TParent>;
    article?: CategoryOfArticleToArticleResolver<TParent>;
    name?: CategoryOfArticleToNameResolver<TParent>;
    description?: CategoryOfArticleToDescriptionResolver<TParent>;
    createdat?: CategoryOfArticleToCreatedatResolver<TParent>;
    updatedat?: CategoryOfArticleToUpdatedatResolver<TParent>;
    creatorid?: CategoryOfArticleToCreatoridResolver<TParent>;
    orgcode?: CategoryOfArticleToOrgcodeResolver<TParent>;
    partnercode?: CategoryOfArticleToPartnercodeResolver<TParent>;
  }

  export interface CategoryOfArticleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CategoryOfArticleToArticleResolver<
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

  export interface CategoryOfArticleToNameResolver<
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

  export interface CategoryOfArticleToDescriptionResolver<
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

  export interface CategoryOfArticleToCreatedatResolver<
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

  export interface CategoryOfArticleToUpdatedatResolver<
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

  export interface CategoryOfArticleToCreatoridResolver<
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

  export interface CategoryOfArticleToOrgcodeResolver<
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

  export interface CategoryOfArticleToPartnercodeResolver<
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

  export interface IMetadataOfArticleTypeResolver<TParent = any> {
    id?: MetadataOfArticleToIdResolver<TParent>;
    article?: MetadataOfArticleToArticleResolver<TParent>;
    title?: MetadataOfArticleToTitleResolver<TParent>;
    description?: MetadataOfArticleToDescriptionResolver<TParent>;
    slug?: MetadataOfArticleToSlugResolver<TParent>;
    analyticsCode?: MetadataOfArticleToAnalyticsCodeResolver<TParent>;
    serchsConsoleCode?: MetadataOfArticleToSerchsConsoleCodeResolver<TParent>;
    markdownJson?: MetadataOfArticleToMarkdownJsonResolver<TParent>;
  }

  export interface MetadataOfArticleToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataOfArticleToArticleResolver<
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

  export interface MetadataOfArticleToTitleResolver<
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

  export interface MetadataOfArticleToDescriptionResolver<
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

  export interface MetadataOfArticleToSlugResolver<
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

  export interface MetadataOfArticleToAnalyticsCodeResolver<
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

  export interface MetadataOfArticleToSerchsConsoleCodeResolver<
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

  export interface MetadataOfArticleToMarkdownJsonResolver<
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

  export interface ICardTypeResolver<TParent = any> {
    content?: CardToContentResolver<TParent>;
  }

  export interface CardToContentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICommentTypeResolver<TParent = any> {
    id?: CommentToIdResolver<TParent>;
    createat?: CommentToCreateatResolver<TParent>;
    article?: CommentToArticleResolver<TParent>;
    content?: CommentToContentResolver<TParent>;
    creatorid?: CommentToCreatoridResolver<TParent>;
    orgcode?: CommentToOrgcodeResolver<TParent>;
    partnercode?: CommentToPartnercodeResolver<TParent>;
    voteComment?: CommentToVoteCommentResolver<TParent>;
  }

  export interface CommentToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToCreateatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToArticleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToContentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToCreatoridResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToOrgcodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToPartnercodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentToVoteCommentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IVoteOnCommentTypeResolver<TParent = any> {
    id?: VoteOnCommentToIdResolver<TParent>;
    comment?: VoteOnCommentToCommentResolver<TParent>;
    vote?: VoteOnCommentToVoteResolver<TParent>;
  }

  export interface VoteOnCommentToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface VoteOnCommentToCommentResolver<
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

  export interface VoteOnCommentToVoteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ITopicTypeResolver<TParent = any> {
    id?: TopicToIdResolver<TParent>;
    name?: TopicToNameResolver<TParent>;
    creatorid?: TopicToCreatoridResolver<TParent>;
    orgcode?: TopicToOrgcodeResolver<TParent>;
    partnercode?: TopicToPartnercodeResolver<TParent>;
  }

  export interface TopicToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TopicToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TopicToCreatoridResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TopicToOrgcodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TopicToPartnercodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAttachmentOfArticleReturnTypeResolver<TParent = any> {
    page?: AttachmentOfArticleReturnToPageResolver<TParent>;
    limit?: AttachmentOfArticleReturnToLimitResolver<TParent>;
    pagingcounter?: AttachmentOfArticleReturnToPagingcounterResolver<TParent>;
    totaldocs?: AttachmentOfArticleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: AttachmentOfArticleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: AttachmentOfArticleReturnToHasnextpageResolver<TParent>;
    docs?: AttachmentOfArticleReturnToDocsResolver<TParent>;
  }

  export interface AttachmentOfArticleReturnToPageResolver<
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

  export interface AttachmentOfArticleReturnToLimitResolver<
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

  export interface AttachmentOfArticleReturnToPagingcounterResolver<
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

  export interface AttachmentOfArticleReturnToTotaldocsResolver<
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

  export interface AttachmentOfArticleReturnToHasprevpageResolver<
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

  export interface AttachmentOfArticleReturnToHasnextpageResolver<
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

  export interface AttachmentOfArticleReturnToDocsResolver<
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

  export interface ITagsOfArticleReturnTypeResolver<TParent = any> {
    page?: TagsOfArticleReturnToPageResolver<TParent>;
    limit?: TagsOfArticleReturnToLimitResolver<TParent>;
    pagingcounter?: TagsOfArticleReturnToPagingcounterResolver<TParent>;
    totaldocs?: TagsOfArticleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: TagsOfArticleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: TagsOfArticleReturnToHasnextpageResolver<TParent>;
    docs?: TagsOfArticleReturnToDocsResolver<TParent>;
  }

  export interface TagsOfArticleReturnToPageResolver<
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

  export interface TagsOfArticleReturnToLimitResolver<
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

  export interface TagsOfArticleReturnToPagingcounterResolver<
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

  export interface TagsOfArticleReturnToTotaldocsResolver<
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

  export interface TagsOfArticleReturnToHasprevpageResolver<
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

  export interface TagsOfArticleReturnToHasnextpageResolver<
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

  export interface TagsOfArticleReturnToDocsResolver<
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

  export interface ICategoryOfArticleReturnTypeResolver<TParent = any> {
    page?: CategoryOfArticleReturnToPageResolver<TParent>;
    limit?: CategoryOfArticleReturnToLimitResolver<TParent>;
    pagingcounter?: CategoryOfArticleReturnToPagingcounterResolver<TParent>;
    totaldocs?: CategoryOfArticleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CategoryOfArticleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CategoryOfArticleReturnToHasnextpageResolver<TParent>;
    docs?: CategoryOfArticleReturnToDocsResolver<TParent>;
  }

  export interface CategoryOfArticleReturnToPageResolver<
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

  export interface CategoryOfArticleReturnToLimitResolver<
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

  export interface CategoryOfArticleReturnToPagingcounterResolver<
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

  export interface CategoryOfArticleReturnToTotaldocsResolver<
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

  export interface CategoryOfArticleReturnToHasprevpageResolver<
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

  export interface CategoryOfArticleReturnToHasnextpageResolver<
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

  export interface CategoryOfArticleReturnToDocsResolver<
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

  export interface ICommentReturnTypeResolver<TParent = any> {
    page?: CommentReturnToPageResolver<TParent>;
    limit?: CommentReturnToLimitResolver<TParent>;
    pagingcounter?: CommentReturnToPagingcounterResolver<TParent>;
    totaldocs?: CommentReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CommentReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CommentReturnToHasnextpageResolver<TParent>;
    docs?: CommentReturnToDocsResolver<TParent>;
  }

  export interface CommentReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CommentReturnToPagingcounterResolver<
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

  export interface CommentReturnToTotaldocsResolver<
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

  export interface CommentReturnToHasprevpageResolver<
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

  export interface CommentReturnToHasnextpageResolver<
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

  export interface CommentReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IVoteOnCommentReturnTypeResolver<TParent = any> {
    page?: VoteOnCommentReturnToPageResolver<TParent>;
    limit?: VoteOnCommentReturnToLimitResolver<TParent>;
    pagingcounter?: VoteOnCommentReturnToPagingcounterResolver<TParent>;
    totaldocs?: VoteOnCommentReturnToTotaldocsResolver<TParent>;
    hasprevpage?: VoteOnCommentReturnToHasprevpageResolver<TParent>;
    hasnextpage?: VoteOnCommentReturnToHasnextpageResolver<TParent>;
    docs?: VoteOnCommentReturnToDocsResolver<TParent>;
  }

  export interface VoteOnCommentReturnToPageResolver<
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

  export interface VoteOnCommentReturnToLimitResolver<
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

  export interface VoteOnCommentReturnToPagingcounterResolver<
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

  export interface VoteOnCommentReturnToTotaldocsResolver<
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

  export interface VoteOnCommentReturnToHasprevpageResolver<
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

  export interface VoteOnCommentReturnToHasnextpageResolver<
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

  export interface VoteOnCommentReturnToDocsResolver<
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

  export interface ITopicReturnTypeResolver<TParent = any> {
    page?: TopicReturnToPageResolver<TParent>;
    limit?: TopicReturnToLimitResolver<TParent>;
    pagingcounter?: TopicReturnToPagingcounterResolver<TParent>;
    totaldocs?: TopicReturnToTotaldocsResolver<TParent>;
    hasprevpage?: TopicReturnToHasprevpageResolver<TParent>;
    hasnextpage?: TopicReturnToHasnextpageResolver<TParent>;
    docs?: TopicReturnToDocsResolver<TParent>;
  }

  export interface TopicReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TopicReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TopicReturnToPagingcounterResolver<
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

  export interface TopicReturnToTotaldocsResolver<
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

  export interface TopicReturnToHasprevpageResolver<
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

  export interface TopicReturnToHasnextpageResolver<
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

  export interface TopicReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProgramReturnTypeResolver<TParent = any> {
    page?: ProgramReturnToPageResolver<TParent>;
    limit?: ProgramReturnToLimitResolver<TParent>;
    pagingcounter?: ProgramReturnToPagingcounterResolver<TParent>;
    totaldocs?: ProgramReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ProgramReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ProgramReturnToHasnextpageResolver<TParent>;
    docs?: ProgramReturnToDocsResolver<TParent>;
  }

  export interface ProgramReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramReturnToPagingcounterResolver<
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

  export interface ProgramReturnToTotaldocsResolver<
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

  export interface ProgramReturnToHasprevpageResolver<
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

  export interface ProgramReturnToHasnextpageResolver<
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

  export interface ProgramReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProgramTypeResolver<TParent = any> {
    id?: ProgramToIdResolver<TParent>;
    description?: ProgramToDescriptionResolver<TParent>;
    category?: ProgramToCategoryResolver<TParent>;
    banner?: ProgramToBannerResolver<TParent>;
    status?: ProgramToStatusResolver<TParent>;
    podcastProgram?: ProgramToPodcastProgramResolver<TParent>;
    categoryonProgram?: ProgramToCategoryonProgramResolver<TParent>;
    metadataonProgram?: ProgramToMetadataonProgramResolver<TParent>;
    totalDuration?: ProgramToTotalDurationResolver<TParent>;
    totalListened?: ProgramToTotalListenedResolver<TParent>;
    createdat?: ProgramToCreatedatResolver<TParent>;
    updatedat?: ProgramToUpdatedatResolver<TParent>;
    creatorid?: ProgramToCreatoridResolver<TParent>;
    orgcode?: ProgramToOrgcodeResolver<TParent>;
    partnercode?: ProgramToPartnercodeResolver<TParent>;
  }

  export interface ProgramToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToCategoryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToBannerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToPodcastProgramResolver<
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

  export interface ProgramToCategoryonProgramResolver<
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

  export interface ProgramToMetadataonProgramResolver<
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

  export interface ProgramToTotalDurationResolver<
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

  export interface ProgramToTotalListenedResolver<
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

  export interface ProgramToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToCreatoridResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToOrgcodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ProgramToPartnercodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPodcastTypeResolver<TParent = any> {
    id?: PodcastToIdResolver<TParent>;
    title?: PodcastToTitleResolver<TParent>;
    subtitle?: PodcastToSubtitleResolver<TParent>;
    banner?: PodcastToBannerResolver<TParent>;
    transcription?: PodcastToTranscriptionResolver<TParent>;
    abstact?: PodcastToAbstactResolver<TParent>;
    active?: PodcastToActiveResolver<TParent>;
    duration?: PodcastToDurationResolver<TParent>;
    content?: PodcastToContentResolver<TParent>;
    views?: PodcastToViewsResolver<TParent>;
    status?: PodcastToStatusResolver<TParent>;
    iframe?: PodcastToIframeResolver<TParent>;
    release_date?: PodcastToRelease_dateResolver<TParent>;
    program?: PodcastToProgramResolver<TParent>;
    topic?: PodcastToTopicResolver<TParent>;
    author?: PodcastToAuthorResolver<TParent>;
    categoryonPodcast?: PodcastToCategoryonPodcastResolver<TParent>;
    metadataonPodcast?: PodcastToMetadataonPodcastResolver<TParent>;
    createdat?: PodcastToCreatedatResolver<TParent>;
    updatedat?: PodcastToUpdatedatResolver<TParent>;
    creatorid?: PodcastToCreatoridResolver<TParent>;
    orgcode?: PodcastToOrgcodeResolver<TParent>;
    partnercode?: PodcastToPartnercodeResolver<TParent>;
  }

  export interface PodcastToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToSubtitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToBannerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToTranscriptionResolver<
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

  export interface PodcastToAbstactResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToActiveResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToDurationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToContentResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToViewsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToIframeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToRelease_dateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToProgramResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToAuthorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToCategoryonPodcastResolver<
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

  export interface PodcastToMetadataonPodcastResolver<
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

  export interface PodcastToCreatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToUpdatedatResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToCreatoridResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToOrgcodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastToPartnercodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICategoryForPodcastTypeResolver<TParent = any> {
    id?: CategoryForPodcastToIdResolver<TParent>;
    podcast?: CategoryForPodcastToPodcastResolver<TParent>;
    categoryForEntertaiment?: CategoryForPodcastToCategoryForEntertaimentResolver<TParent>;
  }

  export interface CategoryForPodcastToIdResolver<
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

  export interface CategoryForPodcastToPodcastResolver<
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

  export interface CategoryForPodcastToCategoryForEntertaimentResolver<
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

  export interface IMetadataForPodcastTypeResolver<TParent = any> {
    id?: MetadataForPodcastToIdResolver<TParent>;
    article?: MetadataForPodcastToArticleResolver<TParent>;
    metadataForEntertaiment?: MetadataForPodcastToMetadataForEntertaimentResolver<TParent>;
  }

  export interface MetadataForPodcastToIdResolver<
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

  export interface MetadataForPodcastToArticleResolver<
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

  export interface MetadataForPodcastToMetadataForEntertaimentResolver<
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

  export interface ICategoryForProgramTypeResolver<TParent = any> {
    id?: CategoryForProgramToIdResolver<TParent>;
    program?: CategoryForProgramToProgramResolver<TParent>;
    categoryForEntertaiment?: CategoryForProgramToCategoryForEntertaimentResolver<TParent>;
  }

  export interface CategoryForProgramToIdResolver<
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

  export interface CategoryForProgramToProgramResolver<
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

  export interface CategoryForProgramToCategoryForEntertaimentResolver<
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

  export interface IMetadataForProgramTypeResolver<TParent = any> {
    program?: MetadataForProgramToProgramResolver<TParent>;
    metadataForEntertaiment?: MetadataForProgramToMetadataForEntertaimentResolver<TParent>;
  }

  export interface MetadataForProgramToProgramResolver<
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

  export interface MetadataForProgramToMetadataForEntertaimentResolver<
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

  export interface IPodcastReturnTypeResolver<TParent = any> {
    page?: PodcastReturnToPageResolver<TParent>;
    limit?: PodcastReturnToLimitResolver<TParent>;
    pagingcounter?: PodcastReturnToPagingcounterResolver<TParent>;
    totaldocs?: PodcastReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PodcastReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PodcastReturnToHasnextpageResolver<TParent>;
    docs?: PodcastReturnToDocsResolver<TParent>;
  }

  export interface PodcastReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PodcastReturnToPagingcounterResolver<
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

  export interface PodcastReturnToTotaldocsResolver<
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

  export interface PodcastReturnToHasprevpageResolver<
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

  export interface PodcastReturnToHasnextpageResolver<
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

  export interface PodcastReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICategoryForEntertaimentReturnTypeResolver<TParent = any> {
    page?: CategoryForEntertaimentReturnToPageResolver<TParent>;
    limit?: CategoryForEntertaimentReturnToLimitResolver<TParent>;
    pagingcounter?: CategoryForEntertaimentReturnToPagingcounterResolver<TParent>;
    totaldocs?: CategoryForEntertaimentReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CategoryForEntertaimentReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CategoryForEntertaimentReturnToHasnextpageResolver<TParent>;
    docs?: CategoryForEntertaimentReturnToDocsResolver<TParent>;
  }

  export interface CategoryForEntertaimentReturnToPageResolver<
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

  export interface CategoryForEntertaimentReturnToLimitResolver<
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

  export interface CategoryForEntertaimentReturnToPagingcounterResolver<
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

  export interface CategoryForEntertaimentReturnToTotaldocsResolver<
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

  export interface CategoryForEntertaimentReturnToHasprevpageResolver<
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

  export interface CategoryForEntertaimentReturnToHasnextpageResolver<
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

  export interface CategoryForEntertaimentReturnToDocsResolver<
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

  export interface IMetadataForEntertaimentReturnTypeResolver<TParent = any> {
    page?: MetadataForEntertaimentReturnToPageResolver<TParent>;
    limit?: MetadataForEntertaimentReturnToLimitResolver<TParent>;
    pagingcounter?: MetadataForEntertaimentReturnToPagingcounterResolver<TParent>;
    totaldocs?: MetadataForEntertaimentReturnToTotaldocsResolver<TParent>;
    hasprevpage?: MetadataForEntertaimentReturnToHasprevpageResolver<TParent>;
    hasnextpage?: MetadataForEntertaimentReturnToHasnextpageResolver<TParent>;
    docs?: MetadataForEntertaimentReturnToDocsResolver<TParent>;
  }

  export interface MetadataForEntertaimentReturnToPageResolver<
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

  export interface MetadataForEntertaimentReturnToLimitResolver<
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

  export interface MetadataForEntertaimentReturnToPagingcounterResolver<
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

  export interface MetadataForEntertaimentReturnToTotaldocsResolver<
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

  export interface MetadataForEntertaimentReturnToHasprevpageResolver<
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

  export interface MetadataForEntertaimentReturnToHasnextpageResolver<
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

  export interface MetadataForEntertaimentReturnToDocsResolver<
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

  export interface IMemeReturnTypeResolver<TParent = any> {
    page?: MemeReturnToPageResolver<TParent>;
    limit?: MemeReturnToLimitResolver<TParent>;
    pagingcounter?: MemeReturnToPagingcounterResolver<TParent>;
    totaldocs?: MemeReturnToTotaldocsResolver<TParent>;
    hasprevpage?: MemeReturnToHasprevpageResolver<TParent>;
    hasnextpage?: MemeReturnToHasnextpageResolver<TParent>;
    docs?: MemeReturnToDocsResolver<TParent>;
  }

  export interface MemeReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemeReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemeReturnToPagingcounterResolver<
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

  export interface MemeReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemeReturnToHasprevpageResolver<
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

  export interface MemeReturnToHasnextpageResolver<
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

  export interface MemeReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMemeTypeResolver<TParent = any> {
    id?: MemeToIdResolver<TParent>;
    description?: MemeToDescriptionResolver<TParent>;
    name?: MemeToNameResolver<TParent>;
    image?: MemeToImageResolver<TParent>;
  }

  export interface MemeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemeToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemeToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MemeToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IChatBotResultTypeResolver<TParent = any> {
    docs?: ChatBotResultToDocsResolver<TParent>;
    totalDocs?: ChatBotResultToTotalDocsResolver<TParent>;
    limit?: ChatBotResultToLimitResolver<TParent>;
    page?: ChatBotResultToPageResolver<TParent>;
    totalPages?: ChatBotResultToTotalPagesResolver<TParent>;
    hasNextPage?: ChatBotResultToHasNextPageResolver<TParent>;
    nextPage?: ChatBotResultToNextPageResolver<TParent>;
    hasPrevPage?: ChatBotResultToHasPrevPageResolver<TParent>;
    pagingCounter?: ChatBotResultToPagingCounterResolver<TParent>;
    prevPage?: ChatBotResultToPrevPageResolver<TParent>;
  }

  export interface ChatBotResultToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotResultToTotalDocsResolver<
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

  export interface ChatBotResultToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotResultToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotResultToTotalPagesResolver<
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

  export interface ChatBotResultToHasNextPageResolver<
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

  export interface ChatBotResultToNextPageResolver<
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

  export interface ChatBotResultToHasPrevPageResolver<
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

  export interface ChatBotResultToPagingCounterResolver<
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

  export interface ChatBotResultToPrevPageResolver<
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

  export interface IChatBotTypeResolver<TParent = any> {
    _id?: ChatBotTo_idResolver<TParent>;
    createdAt?: ChatBotToCreatedAtResolver<TParent>;
    updatedAt?: ChatBotToUpdatedAtResolver<TParent>;
    appId?: ChatBotToAppIdResolver<TParent>;
    sender?: ChatBotToSenderResolver<TParent>;
    messages?: ChatBotToMessagesResolver<TParent>;
    products?: ChatBotToProductsResolver<TParent>;
    actions?: ChatBotToActionsResolver<TParent>;
    chatbotproducts?: ChatBotToChatbotproductsResolver<TParent>;
  }

  export interface ChatBotTo_idResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToAppIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToSenderResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToMessagesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToProductsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToActionsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotToChatbotproductsResolver<
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

  export interface IChatBotMessageTypeResolver<TParent = any> {
    sender?: ChatBotMessageToSenderResolver<TParent>;
    text?: ChatBotMessageToTextResolver<TParent>;
    date?: ChatBotMessageToDateResolver<TParent>;
  }

  export interface ChatBotMessageToSenderResolver<
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

  export interface ChatBotMessageToTextResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ChatBotMessageToDateResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDomiMetricsTypeResolver<TParent = any> {
    positions?: DomiMetricsToPositionsResolver<TParent>;
    rankings?: DomiMetricsToRankingsResolver<TParent>;
  }

  export interface DomiMetricsToPositionsResolver<
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

  export interface DomiMetricsToRankingsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDomiMetricsPositionsTypeResolver<TParent = any> {
    conversationsCount?: DomiMetricsPositionsToConversationsCountResolver<TParent>;
    actionsPercentages?: DomiMetricsPositionsToActionsPercentagesResolver<TParent>;
    appointmentsCounter?: DomiMetricsPositionsToAppointmentsCounterResolver<TParent>;
    appointmentsCanceled?: DomiMetricsPositionsToAppointmentsCanceledResolver<TParent>;
    appointmentsAccomplished?: DomiMetricsPositionsToAppointmentsAccomplishedResolver<TParent>;
  }

  export interface DomiMetricsPositionsToConversationsCountResolver<
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

  export interface DomiMetricsPositionsToActionsPercentagesResolver<
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

  export interface DomiMetricsPositionsToAppointmentsCounterResolver<
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

  export interface DomiMetricsPositionsToAppointmentsCanceledResolver<
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

  export interface DomiMetricsPositionsToAppointmentsAccomplishedResolver<
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

  export interface IActionPercentageTypeResolver<TParent = any> {
    name?: ActionPercentageToNameResolver<TParent>;
    value?: ActionPercentageToValueResolver<TParent>;
  }

  export interface ActionPercentageToNameResolver<
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

  export interface ActionPercentageToValueResolver<
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

  export interface IDomiMetricsRankingsTypeResolver<TParent = any> {
    conversations?: DomiMetricsRankingsToConversationsResolver<TParent>;
    contactedAgents?: DomiMetricsRankingsToContactedAgentsResolver<TParent>;
    appointmentsAccomplished?: DomiMetricsRankingsToAppointmentsAccomplishedResolver<TParent>;
  }

  export interface DomiMetricsRankingsToConversationsResolver<
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

  export interface DomiMetricsRankingsToContactedAgentsResolver<
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

  export interface DomiMetricsRankingsToAppointmentsAccomplishedResolver<
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

  export interface IDomiMetricsRankingTypeResolver<TParent = any> {
    _id?: DomiMetricsRankingTo_idResolver<TParent>;
    property?: DomiMetricsRankingToPropertyResolver<TParent>;
    value?: DomiMetricsRankingToValueResolver<TParent>;
    product?: DomiMetricsRankingToProductResolver<TParent>;
  }

  export interface DomiMetricsRankingTo_idResolver<
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

  export interface DomiMetricsRankingToPropertyResolver<
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

  export interface DomiMetricsRankingToValueResolver<
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

  export interface DomiMetricsRankingToProductResolver<
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

  export interface IAppointmentResultTypeResolver<TParent = any> {
    docs?: AppointmentResultToDocsResolver<TParent>;
    totalDocs?: AppointmentResultToTotalDocsResolver<TParent>;
    limit?: AppointmentResultToLimitResolver<TParent>;
    page?: AppointmentResultToPageResolver<TParent>;
    totalPages?: AppointmentResultToTotalPagesResolver<TParent>;
    HasNextPage?: AppointmentResultToHasNextPageResolver<TParent>;
    nextPage?: AppointmentResultToNextPageResolver<TParent>;
    hasPrevPage?: AppointmentResultToHasPrevPageResolver<TParent>;
    pagingCounter?: AppointmentResultToPagingCounterResolver<TParent>;
    prevPage?: AppointmentResultToPrevPageResolver<TParent>;
  }

  export interface AppointmentResultToDocsResolver<
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

  export interface AppointmentResultToTotalDocsResolver<
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

  export interface AppointmentResultToLimitResolver<
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

  export interface AppointmentResultToPageResolver<
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

  export interface AppointmentResultToTotalPagesResolver<
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

  export interface AppointmentResultToHasNextPageResolver<
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

  export interface AppointmentResultToNextPageResolver<
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

  export interface AppointmentResultToHasPrevPageResolver<
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

  export interface AppointmentResultToPagingCounterResolver<
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

  export interface AppointmentResultToPrevPageResolver<
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

  export interface IAvailableScheduleTypeResolver<TParent = any> {
    start?: AvailableScheduleToStartResolver<TParent>;
    end?: AvailableScheduleToEndResolver<TParent>;
  }

  export interface AvailableScheduleToStartResolver<
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

  export interface AvailableScheduleToEndResolver<
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

  export interface ILogsByPageTypeResolver<TParent = any> {
    page?: LogsByPageToPageResolver<TParent>;
    limit?: LogsByPageToLimitResolver<TParent>;
    pagingcounter?: LogsByPageToPagingcounterResolver<TParent>;
    totaldocs?: LogsByPageToTotaldocsResolver<TParent>;
    hasprevpage?: LogsByPageToHasprevpageResolver<TParent>;
    hasnextpage?: LogsByPageToHasnextpageResolver<TParent>;
    docs?: LogsByPageToDocsResolver<TParent>;
  }

  export interface LogsByPageToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogsByPageToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogsByPageToPagingcounterResolver<
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

  export interface LogsByPageToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogsByPageToHasprevpageResolver<
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

  export interface LogsByPageToHasnextpageResolver<
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

  export interface LogsByPageToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStatusReturnTypeResolver<TParent = any> {
    status?: StatusReturnToStatusResolver<TParent>;
    detail?: StatusReturnToDetailResolver<TParent>;
  }

  export interface StatusReturnToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StatusReturnToDetailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ITimeInTransitTypeResolver<TParent = any> {
    status?: TimeInTransitToStatusResolver<TParent>;
    detail?: TimeInTransitToDetailResolver<TParent>;
    arrival?: TimeInTransitToArrivalResolver<TParent>;
    pickup?: TimeInTransitToPickupResolver<TParent>;
    day?: TimeInTransitToDayResolver<TParent>;
    daysintransit?: TimeInTransitToDaysintransitResolver<TParent>;
    servicedays?: TimeInTransitToServicedaysResolver<TParent>;
  }

  export interface TimeInTransitToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TimeInTransitToDetailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TimeInTransitToArrivalResolver<
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

  export interface TimeInTransitToPickupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TimeInTransitToDayResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TimeInTransitToDaysintransitResolver<
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

  export interface TimeInTransitToServicedaysResolver<
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

  export interface IEstimatedArrivalTypeResolver<TParent = any> {
    date?: EstimatedArrivalToDateResolver<TParent>;
    time?: EstimatedArrivalToTimeResolver<TParent>;
  }

  export interface EstimatedArrivalToDateResolver<
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

  export interface EstimatedArrivalToTimeResolver<
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

  export interface IgoalReturnTypeResolver<TParent = any> {
    page?: goalReturnToPageResolver<TParent>;
    limit?: goalReturnToLimitResolver<TParent>;
    pagingcounter?: goalReturnToPagingcounterResolver<TParent>;
    totaldocs?: goalReturnToTotaldocsResolver<TParent>;
    hasprevpage?: goalReturnToHasprevpageResolver<TParent>;
    hasnextpage?: goalReturnToHasnextpageResolver<TParent>;
    docs?: goalReturnToDocsResolver<TParent>;
  }

  export interface goalReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface goalReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface goalReturnToPagingcounterResolver<
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

  export interface goalReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface goalReturnToHasprevpageResolver<
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

  export interface goalReturnToHasnextpageResolver<
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

  export interface goalReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageReturnTypeResolver<TParent = any> {
    page?: PageReturnToPageResolver<TParent>;
    limit?: PageReturnToLimitResolver<TParent>;
    pagingcounter?: PageReturnToPagingcounterResolver<TParent>;
    totaldocs?: PageReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PageReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PageReturnToHasnextpageResolver<TParent>;
    docs?: PageReturnToDocsResolver<TParent>;
  }

  export interface PageReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageReturnToPagingcounterResolver<
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

  export interface PageReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PageReturnToHasprevpageResolver<
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

  export interface PageReturnToHasnextpageResolver<
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

  export interface PageReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageSectionReturnTypeResolver<TParent = any> {
    page?: PageSectionReturnToPageResolver<TParent>;
    limit?: PageSectionReturnToLimitResolver<TParent>;
    pagingcounter?: PageSectionReturnToPagingcounterResolver<TParent>;
    totaldocs?: PageSectionReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PageSectionReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PageSectionReturnToHasnextpageResolver<TParent>;
    docs?: PageSectionReturnToDocsResolver<TParent>;
  }

  export interface PageSectionReturnToPageResolver<
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

  export interface PageSectionReturnToLimitResolver<
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

  export interface PageSectionReturnToPagingcounterResolver<
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

  export interface PageSectionReturnToTotaldocsResolver<
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

  export interface PageSectionReturnToHasprevpageResolver<
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

  export interface PageSectionReturnToHasnextpageResolver<
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

  export interface PageSectionReturnToDocsResolver<
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

  export interface IPageSubsectionReturnTypeResolver<TParent = any> {
    page?: PageSubsectionReturnToPageResolver<TParent>;
    limit?: PageSubsectionReturnToLimitResolver<TParent>;
    pagingcounter?: PageSubsectionReturnToPagingcounterResolver<TParent>;
    totaldocs?: PageSubsectionReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PageSubsectionReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PageSubsectionReturnToHasnextpageResolver<TParent>;
    docs?: PageSubsectionReturnToDocsResolver<TParent>;
  }

  export interface PageSubsectionReturnToPageResolver<
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

  export interface PageSubsectionReturnToLimitResolver<
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

  export interface PageSubsectionReturnToPagingcounterResolver<
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

  export interface PageSubsectionReturnToTotaldocsResolver<
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

  export interface PageSubsectionReturnToHasprevpageResolver<
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

  export interface PageSubsectionReturnToHasnextpageResolver<
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

  export interface PageSubsectionReturnToDocsResolver<
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

  export interface IPageHeaderReturnTypeResolver<TParent = any> {
    page?: PageHeaderReturnToPageResolver<TParent>;
    limit?: PageHeaderReturnToLimitResolver<TParent>;
    pagingcounter?: PageHeaderReturnToPagingcounterResolver<TParent>;
    totaldocs?: PageHeaderReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PageHeaderReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PageHeaderReturnToHasnextpageResolver<TParent>;
    docs?: PageHeaderReturnToDocsResolver<TParent>;
  }

  export interface PageHeaderReturnToPageResolver<
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

  export interface PageHeaderReturnToLimitResolver<
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

  export interface PageHeaderReturnToPagingcounterResolver<
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

  export interface PageHeaderReturnToTotaldocsResolver<
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

  export interface PageHeaderReturnToHasprevpageResolver<
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

  export interface PageHeaderReturnToHasnextpageResolver<
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

  export interface PageHeaderReturnToDocsResolver<
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

  export interface IMetadataReturnTypeResolver<TParent = any> {
    page?: MetadataReturnToPageResolver<TParent>;
    limit?: MetadataReturnToLimitResolver<TParent>;
    pagingcounter?: MetadataReturnToPagingcounterResolver<TParent>;
    totaldocs?: MetadataReturnToTotaldocsResolver<TParent>;
    hasprevpage?: MetadataReturnToHasprevpageResolver<TParent>;
    hasnextpage?: MetadataReturnToHasnextpageResolver<TParent>;
    docs?: MetadataReturnToDocsResolver<TParent>;
  }

  export interface MetadataReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MetadataReturnToPagingcounterResolver<
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

  export interface MetadataReturnToTotaldocsResolver<
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

  export interface MetadataReturnToHasprevpageResolver<
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

  export interface MetadataReturnToHasnextpageResolver<
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

  export interface MetadataReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IKeywordsReturnTypeResolver<TParent = any> {
    page?: KeywordsReturnToPageResolver<TParent>;
    limit?: KeywordsReturnToLimitResolver<TParent>;
    pagingcounter?: KeywordsReturnToPagingcounterResolver<TParent>;
    totaldocs?: KeywordsReturnToTotaldocsResolver<TParent>;
    hasprevpage?: KeywordsReturnToHasprevpageResolver<TParent>;
    hasnextpage?: KeywordsReturnToHasnextpageResolver<TParent>;
    docs?: KeywordsReturnToDocsResolver<TParent>;
  }

  export interface KeywordsReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeywordsReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeywordsReturnToPagingcounterResolver<
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

  export interface KeywordsReturnToTotaldocsResolver<
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

  export interface KeywordsReturnToHasprevpageResolver<
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

  export interface KeywordsReturnToHasnextpageResolver<
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

  export interface KeywordsReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDirectoryReturnTypeResolver<TParent = any> {
    page?: DirectoryReturnToPageResolver<TParent>;
    limit?: DirectoryReturnToLimitResolver<TParent>;
    pagingcounter?: DirectoryReturnToPagingcounterResolver<TParent>;
    totaldocs?: DirectoryReturnToTotaldocsResolver<TParent>;
    hasprevpage?: DirectoryReturnToHasprevpageResolver<TParent>;
    hasnextpage?: DirectoryReturnToHasnextpageResolver<TParent>;
    docs?: DirectoryReturnToDocsResolver<TParent>;
  }

  export interface DirectoryReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface DirectoryReturnToLimitResolver<
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

  export interface DirectoryReturnToPagingcounterResolver<
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

  export interface DirectoryReturnToTotaldocsResolver<
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

  export interface DirectoryReturnToHasprevpageResolver<
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

  export interface DirectoryReturnToHasnextpageResolver<
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

  export interface DirectoryReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISitesReturnTypeResolver<TParent = any> {
    page?: SitesReturnToPageResolver<TParent>;
    limit?: SitesReturnToLimitResolver<TParent>;
    pagingcounter?: SitesReturnToPagingcounterResolver<TParent>;
    totaldocs?: SitesReturnToTotaldocsResolver<TParent>;
    hasprevpage?: SitesReturnToHasprevpageResolver<TParent>;
    hasnextpage?: SitesReturnToHasnextpageResolver<TParent>;
    docs?: SitesReturnToDocsResolver<TParent>;
  }

  export interface SitesReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SitesReturnToPagingcounterResolver<
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

  export interface SitesReturnToTotaldocsResolver<
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

  export interface SitesReturnToHasprevpageResolver<
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

  export interface SitesReturnToHasnextpageResolver<
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

  export interface SitesReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStyleReturnTypeResolver<TParent = any> {
    page?: StyleReturnToPageResolver<TParent>;
    limit?: StyleReturnToLimitResolver<TParent>;
    pagingcounter?: StyleReturnToPagingcounterResolver<TParent>;
    totaldocs?: StyleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: StyleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: StyleReturnToHasnextpageResolver<TParent>;
    docs?: StyleReturnToDocsResolver<TParent>;
  }

  export interface StyleReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StyleReturnToPagingcounterResolver<
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

  export interface StyleReturnToTotaldocsResolver<
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

  export interface StyleReturnToHasprevpageResolver<
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

  export interface StyleReturnToHasnextpageResolver<
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

  export interface StyleReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IFontReturnTypeResolver<TParent = any> {
    page?: FontReturnToPageResolver<TParent>;
    limit?: FontReturnToLimitResolver<TParent>;
    pagingcounter?: FontReturnToPagingcounterResolver<TParent>;
    totaldocs?: FontReturnToTotaldocsResolver<TParent>;
    hasprevpage?: FontReturnToHasprevpageResolver<TParent>;
    hasnextpage?: FontReturnToHasnextpageResolver<TParent>;
    docs?: FontReturnToDocsResolver<TParent>;
  }

  export interface FontReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontReturnToPagingcounterResolver<
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

  export interface FontReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface FontReturnToHasprevpageResolver<
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

  export interface FontReturnToHasnextpageResolver<
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

  export interface FontReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IColorReturnTypeResolver<TParent = any> {
    page?: ColorReturnToPageResolver<TParent>;
    limit?: ColorReturnToLimitResolver<TParent>;
    pagingcounter?: ColorReturnToPagingcounterResolver<TParent>;
    totaldocs?: ColorReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ColorReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ColorReturnToHasnextpageResolver<TParent>;
    docs?: ColorReturnToDocsResolver<TParent>;
  }

  export interface ColorReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorReturnToPagingcounterResolver<
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

  export interface ColorReturnToTotaldocsResolver<
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

  export interface ColorReturnToHasprevpageResolver<
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

  export interface ColorReturnToHasnextpageResolver<
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

  export interface ColorReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ILogoReturnTypeResolver<TParent = any> {
    page?: LogoReturnToPageResolver<TParent>;
    limit?: LogoReturnToLimitResolver<TParent>;
    pagingcounter?: LogoReturnToPagingcounterResolver<TParent>;
    totaldocs?: LogoReturnToTotaldocsResolver<TParent>;
    hasprevpage?: LogoReturnToHasprevpageResolver<TParent>;
    hasnextpage?: LogoReturnToHasnextpageResolver<TParent>;
    docs?: LogoReturnToDocsResolver<TParent>;
  }

  export interface LogoReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoReturnToPagingcounterResolver<
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

  export interface LogoReturnToTotaldocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LogoReturnToHasprevpageResolver<
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

  export interface LogoReturnToHasnextpageResolver<
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

  export interface LogoReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICarouselReturnTypeResolver<TParent = any> {
    page?: CarouselReturnToPageResolver<TParent>;
    limit?: CarouselReturnToLimitResolver<TParent>;
    pagingcounter?: CarouselReturnToPagingcounterResolver<TParent>;
    totaldocs?: CarouselReturnToTotaldocsResolver<TParent>;
    hasprevpage?: CarouselReturnToHasprevpageResolver<TParent>;
    hasnextpage?: CarouselReturnToHasnextpageResolver<TParent>;
    docs?: CarouselReturnToDocsResolver<TParent>;
  }

  export interface CarouselReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface CarouselReturnToPagingcounterResolver<
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

  export interface CarouselReturnToTotaldocsResolver<
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

  export interface CarouselReturnToHasprevpageResolver<
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

  export interface CarouselReturnToHasnextpageResolver<
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

  export interface CarouselReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IMutationTypeResolver<TParent = any> {
    updateUser?: MutationToUpdateUserResolver<TParent>;
    createProfile?: MutationToCreateProfileResolver<TParent>;
    updateProfile?: MutationToUpdateProfileResolver<TParent>;
    createDetail?: MutationToCreateDetailResolver<TParent>;
    updateDetail?: MutationToUpdateDetailResolver<TParent>;
    createRegion?: MutationToCreateRegionResolver<TParent>;
    updateRegion?: MutationToUpdateRegionResolver<TParent>;
    deleteRegion?: MutationToDeleteRegionResolver<TParent>;
    createDetailMassive?: MutationToCreateDetailMassiveResolver<TParent>;
    createMailingAddress?: MutationToCreateMailingAddressResolver<TParent>;
    updateMailingAddress?: MutationToUpdateMailingAddressResolver<TParent>;
    deleteMailingAddress?: MutationToDeleteMailingAddressResolver<TParent>;
    createInvoiceAddress?: MutationToCreateInvoiceAddressResolver<TParent>;
    updateInvoiceAddress?: MutationToUpdateInvoiceAddressResolver<TParent>;
    deleteInvoiceAddress?: MutationToDeleteInvoiceAddressResolver<TParent>;
    createUserProfile?: MutationToCreateUserProfileResolver<TParent>;
    updateUserProfile?: MutationToUpdateUserProfileResolver<TParent>;
    login?: MutationToLoginResolver<TParent>;
    sendResetPasswordLink?: MutationToSendResetPasswordLinkResolver<TParent>;
    getBearer?: MutationToGetBearerResolver<TParent>;
    getBearerValidate?: MutationToGetBearerValidateResolver<TParent>;
    createOrganization?: MutationToCreateOrganizationResolver<TParent>;
    updateOrganization?: MutationToUpdateOrganizationResolver<TParent>;
    createPartner?: MutationToCreatePartnerResolver<TParent>;
    updatePartner?: MutationToUpdatePartnerResolver<TParent>;
    deletePartner?: MutationToDeletePartnerResolver<TParent>;
    createApp?: MutationToCreateAppResolver<TParent>;
    updateApp?: MutationToUpdateAppResolver<TParent>;
    createOrgApp?: MutationToCreateOrgAppResolver<TParent>;
    updateOrgApp?: MutationToUpdateOrgAppResolver<TParent>;
    createSocialMedia?: MutationToCreateSocialMediaResolver<TParent>;
    updateSocialMedia?: MutationToUpdateSocialMediaResolver<TParent>;
    deleteSocialMedia?: MutationToDeleteSocialMediaResolver<TParent>;
    createDataContact?: MutationToCreateDataContactResolver<TParent>;
    updateDataContact?: MutationToUpdateDataContactResolver<TParent>;
    deleteDataContact?: MutationToDeleteDataContactResolver<TParent>;
    createAccess?: MutationToCreateAccessResolver<TParent>;
    updateAccess?: MutationToUpdateAccessResolver<TParent>;
    createGroup?: MutationToCreateGroupResolver<TParent>;
    updateGroup?: MutationToUpdateGroupResolver<TParent>;
    createRule?: MutationToCreateRuleResolver<TParent>;
    updateRule?: MutationToUpdateRuleResolver<TParent>;
    createRol?: MutationToCreateRolResolver<TParent>;
    updateRol?: MutationToUpdateRolResolver<TParent>;
    createSeller?: MutationToCreateSellerResolver<TParent>;
    updateSeller?: MutationToUpdateSellerResolver<TParent>;
    deleteSeller?: MutationToDeleteSellerResolver<TParent>;
    createSector?: MutationToCreateSectorResolver<TParent>;
    updateSector?: MutationToUpdateSectorResolver<TParent>;
    deleteSector?: MutationToDeleteSectorResolver<TParent>;
    createFeatured?: MutationToCreateFeaturedResolver<TParent>;
    updateFeatured?: MutationToUpdateFeaturedResolver<TParent>;
    deleteFeatured?: MutationToDeleteFeaturedResolver<TParent>;
    createCategory?: MutationToCreateCategoryResolver<TParent>;
    updateCategory?: MutationToUpdateCategoryResolver<TParent>;
    deleteCategory?: MutationToDeleteCategoryResolver<TParent>;
    createSubcategory?: MutationToCreateSubcategoryResolver<TParent>;
    updateSubcategory?: MutationToUpdateSubcategoryResolver<TParent>;
    deleteSubcategory?: MutationToDeleteSubcategoryResolver<TParent>;
    createBrand?: MutationToCreateBrandResolver<TParent>;
    updateBrand?: MutationToUpdateBrandResolver<TParent>;
    deleteBrand?: MutationToDeleteBrandResolver<TParent>;
    createProduct?: MutationToCreateProductResolver<TParent>;
    updateProduct?: MutationToUpdateProductResolver<TParent>;
    deleteProduct?: MutationToDeleteProductResolver<TParent>;
    deleteProductMassive?: MutationToDeleteProductMassiveResolver<TParent>;
    createProductMassive?: MutationToCreateProductMassiveResolver<TParent>;
    createSectionOfProduct?: MutationToCreateSectionOfProductResolver<TParent>;
    updateSectionOfProduct?: MutationToUpdateSectionOfProductResolver<TParent>;
    deleteSectionOfProduct?: MutationToDeleteSectionOfProductResolver<TParent>;
    createStructuredSectionOfProduct?: MutationToCreateStructuredSectionOfProductResolver<TParent>;
    createTemplateInfo?: MutationToCreateTemplateInfoResolver<TParent>;
    updateTemplateInfo?: MutationToUpdateTemplateInfoResolver<TParent>;
    deleteTemplateInfo?: MutationToDeleteTemplateInfoResolver<TParent>;
    updateMassiveTemplateInfo?: MutationToUpdateMassiveTemplateInfoResolver<TParent>;
    createValuesOfTemplate?: MutationToCreateValuesOfTemplateResolver<TParent>;
    updateValuesOfTemplate?: MutationToUpdateValuesOfTemplateResolver<TParent>;
    deleteValuesOfTemplate?: MutationToDeleteValuesOfTemplateResolver<TParent>;
    updateMassiveValuesOfTemplate?: MutationToUpdateMassiveValuesOfTemplateResolver<TParent>;
    createAddress?: MutationToCreateAddressResolver<TParent>;
    updateAddress?: MutationToUpdateAddressResolver<TParent>;
    deleteAddress?: MutationToDeleteAddressResolver<TParent>;
    createAttachment?: MutationToCreateAttachmentResolver<TParent>;
    updateAttachment?: MutationToUpdateAttachmentResolver<TParent>;
    deleteAttachment?: MutationToDeleteAttachmentResolver<TParent>;
    createDetailProperty?: MutationToCreateDetailPropertyResolver<TParent>;
    updateDetailProperty?: MutationToUpdateDetailPropertyResolver<TParent>;
    deleteDetailProperty?: MutationToDeleteDetailPropertyResolver<TParent>;
    createSchedule?: MutationToCreateScheduleResolver<TParent>;
    updateSchedule?: MutationToUpdateScheduleResolver<TParent>;
    deleteSchedule?: MutationToDeleteScheduleResolver<TParent>;
    createVersion?: MutationToCreateVersionResolver<TParent>;
    updateVersion?: MutationToUpdateVersionResolver<TParent>;
    deleteVersion?: MutationToDeleteVersionResolver<TParent>;
    createColorInt?: MutationToCreateColorIntResolver<TParent>;
    updateColorInt?: MutationToUpdateColorIntResolver<TParent>;
    deleteColorInt?: MutationToDeleteColorIntResolver<TParent>;
    createColorExt?: MutationToCreateColorExtResolver<TParent>;
    updateColorExt?: MutationToUpdateColorExtResolver<TParent>;
    deleteColorExt?: MutationToDeleteColorExtResolver<TParent>;
    createSaleOrder?: MutationToCreateSaleOrderResolver<TParent>;
    updateSaleOrder?: MutationToUpdateSaleOrderResolver<TParent>;
    deleteSaleOrder?: MutationToDeleteSaleOrderResolver<TParent>;
    createProductOrder?: MutationToCreateProductOrderResolver<TParent>;
    updateProductOrder?: MutationToUpdateProductOrderResolver<TParent>;
    deleteProductOrder?: MutationToDeleteProductOrderResolver<TParent>;
    createReview?: MutationToCreateReviewResolver<TParent>;
    updateReview?: MutationToUpdateReviewResolver<TParent>;
    deleteReview?: MutationToDeleteReviewResolver<TParent>;
    createConversation?: MutationToCreateConversationResolver<TParent>;
    updateConversation?: MutationToUpdateConversationResolver<TParent>;
    deleteConversation?: MutationToDeleteConversationResolver<TParent>;
    createTalk?: MutationToCreateTalkResolver<TParent>;
    updateTalk?: MutationToUpdateTalkResolver<TParent>;
    deleteTalk?: MutationToDeleteTalkResolver<TParent>;
    createDepartment?: MutationToCreateDepartmentResolver<TParent>;
    updateDepartment?: MutationToUpdateDepartmentResolver<TParent>;
    deleteDepartment?: MutationToDeleteDepartmentResolver<TParent>;
    createWaste?: MutationToCreateWasteResolver<TParent>;
    updateWaste?: MutationToUpdateWasteResolver<TParent>;
    deleteWaste?: MutationToDeleteWasteResolver<TParent>;
    upFileInvoice?: MutationToUpFileInvoiceResolver<TParent>;
    createInvoice?: MutationToCreateInvoiceResolver<TParent>;
    updateInvoice?: MutationToUpdateInvoiceResolver<TParent>;
    deleteInvoice?: MutationToDeleteInvoiceResolver<TParent>;
    createStore?: MutationToCreateStoreResolver<TParent>;
    updateStore?: MutationToUpdateStoreResolver<TParent>;
    deleteStore?: MutationToDeleteStoreResolver<TParent>;
    createJourney?: MutationToCreateJourneyResolver<TParent>;
    updateJourney?: MutationToUpdateJourneyResolver<TParent>;
    deleteJourney?: MutationToDeleteJourneyResolver<TParent>;
    updateJourneyVisit?: MutationToUpdateJourneyVisitResolver<TParent>;
    createShipload?: MutationToCreateShiploadResolver<TParent>;
    updateShipload?: MutationToUpdateShiploadResolver<TParent>;
    deleteShipload?: MutationToDeleteShiploadResolver<TParent>;
    createShiploadProduct?: MutationToCreateShiploadProductResolver<TParent>;
    updateShiploadProduct?: MutationToUpdateShiploadProductResolver<TParent>;
    deleteShiploadProduct?: MutationToDeleteShiploadProductResolver<TParent>;
    createWishList?: MutationToCreateWishListResolver<TParent>;
    updateWishList?: MutationToUpdateWishListResolver<TParent>;
    deleteWishList?: MutationToDeleteWishListResolver<TParent>;
    createWishedProduct?: MutationToCreateWishedProductResolver<TParent>;
    updateWishedProduct?: MutationToUpdateWishedProductResolver<TParent>;
    deleteWishedProduct?: MutationToDeleteWishedProductResolver<TParent>;
    createAppraisal?: MutationToCreateAppraisalResolver<TParent>;
    createPromotion?: MutationToCreatePromotionResolver<TParent>;
    updatePromotion?: MutationToUpdatePromotionResolver<TParent>;
    deletePromotion?: MutationToDeletePromotionResolver<TParent>;
    createKey?: MutationToCreateKeyResolver<TParent>;
    updateKey?: MutationToUpdateKeyResolver<TParent>;
    createPaymentConekta?: MutationToCreatePaymentConektaResolver<TParent>;
    createPaymentStripe?: MutationToCreatePaymentStripeResolver<TParent>;
    createSubscriptionStripe?: MutationToCreateSubscriptionStripeResolver<TParent>;
    createPaymentPaypal?: MutationToCreatePaymentPaypalResolver<TParent>;
    updatePayment?: MutationToUpdatePaymentResolver<TParent>;
    createArticle?: MutationToCreateArticleResolver<TParent>;
    updateArticle?: MutationToUpdateArticleResolver<TParent>;
    deleteArticle?: MutationToDeleteArticleResolver<TParent>;
    createAttachmentOfArticle?: MutationToCreateAttachmentOfArticleResolver<TParent>;
    updateAttachmentOfArticle?: MutationToUpdateAttachmentOfArticleResolver<TParent>;
    deleteAttachmentOfArticle?: MutationToDeleteAttachmentOfArticleResolver<TParent>;
    createTagsOfArticle?: MutationToCreateTagsOfArticleResolver<TParent>;
    updateTagsOfArticle?: MutationToUpdateTagsOfArticleResolver<TParent>;
    deleteTagsOfArticle?: MutationToDeleteTagsOfArticleResolver<TParent>;
    createCategoryOfArticle?: MutationToCreateCategoryOfArticleResolver<TParent>;
    updateCategoryOfArticle?: MutationToUpdateCategoryOfArticleResolver<TParent>;
    deleteCategoryOfArticle?: MutationToDeleteCategoryOfArticleResolver<TParent>;
    createMassiveCategoryOfArticle?: MutationToCreateMassiveCategoryOfArticleResolver<TParent>;
    deleteMassiveCategoryOfArticle?: MutationToDeleteMassiveCategoryOfArticleResolver<TParent>;
    createMetadataOfArticle?: MutationToCreateMetadataOfArticleResolver<TParent>;
    updateMetadataOfArticle?: MutationToUpdateMetadataOfArticleResolver<TParent>;
    deleteMetadataOfArticle?: MutationToDeleteMetadataOfArticleResolver<TParent>;
    createComment?: MutationToCreateCommentResolver<TParent>;
    updateComment?: MutationToUpdateCommentResolver<TParent>;
    deleteComment?: MutationToDeleteCommentResolver<TParent>;
    createVoteOnComment?: MutationToCreateVoteOnCommentResolver<TParent>;
    updateVoteOnComment?: MutationToUpdateVoteOnCommentResolver<TParent>;
    deleteVoteOnComment?: MutationToDeleteVoteOnCommentResolver<TParent>;
    createTopic?: MutationToCreateTopicResolver<TParent>;
    updateTopic?: MutationToUpdateTopicResolver<TParent>;
    deleteTopic?: MutationToDeleteTopicResolver<TParent>;
    createProgram?: MutationToCreateProgramResolver<TParent>;
    updateProgram?: MutationToUpdateProgramResolver<TParent>;
    deleteProgram?: MutationToDeleteProgramResolver<TParent>;
    createPodcast?: MutationToCreatePodcastResolver<TParent>;
    updatePodcast?: MutationToUpdatePodcastResolver<TParent>;
    deletePodcast?: MutationToDeletePodcastResolver<TParent>;
    createCategoryForEntertaiment?: MutationToCreateCategoryForEntertaimentResolver<TParent>;
    updateCategoryForEntertaiment?: MutationToUpdateCategoryForEntertaimentResolver<TParent>;
    deleteCategoryForEntertaiment?: MutationToDeleteCategoryForEntertaimentResolver<TParent>;
    createCategoryForPodcast?: MutationToCreateCategoryForPodcastResolver<TParent>;
    updateCategoryForPodcast?: MutationToUpdateCategoryForPodcastResolver<TParent>;
    deleteCategoryForPodcast?: MutationToDeleteCategoryForPodcastResolver<TParent>;
    createCategoryForProgram?: MutationToCreateCategoryForProgramResolver<TParent>;
    updateCategoryForProgram?: MutationToUpdateCategoryForProgramResolver<TParent>;
    deleteCategoryForProgram?: MutationToDeleteCategoryForProgramResolver<TParent>;
    createCategoryForArticle?: MutationToCreateCategoryForArticleResolver<TParent>;
    updateCategoryForArticle?: MutationToUpdateCategoryForArticleResolver<TParent>;
    deleteCategoryForArticle?: MutationToDeleteCategoryForArticleResolver<TParent>;
    createMetadataForEntertaiment?: MutationToCreateMetadataForEntertaimentResolver<TParent>;
    updateMetadataForEntertaiment?: MutationToUpdateMetadataForEntertaimentResolver<TParent>;
    deleteMetadataForEntertaiment?: MutationToDeleteMetadataForEntertaimentResolver<TParent>;
    createMetadataForPodcast?: MutationToCreateMetadataForPodcastResolver<TParent>;
    updateMetadataForPodcast?: MutationToUpdateMetadataForPodcastResolver<TParent>;
    deleteMetadataForPodcast?: MutationToDeleteMetadataForPodcastResolver<TParent>;
    createMetadataForProgram?: MutationToCreateMetadataForProgramResolver<TParent>;
    updateMetadataForProgram?: MutationToUpdateMetadataForProgramResolver<TParent>;
    deleteMetadataForProgram?: MutationToDeleteMetadataForProgramResolver<TParent>;
    createMetadataForArticle?: MutationToCreateMetadataForArticleResolver<TParent>;
    updateMetadataForArticle?: MutationToUpdateMetadataForArticleResolver<TParent>;
    deleteMetadataForArticle?: MutationToDeleteMetadataForArticleResolver<TParent>;
    createMeme?: MutationToCreateMemeResolver<TParent>;
    updateMeme?: MutationToUpdateMemeResolver<TParent>;
    deleteMeme?: MutationToDeleteMemeResolver<TParent>;
    test?: MutationToTestResolver<TParent>;
    createAppointment?: MutationToCreateAppointmentResolver<TParent>;
    updateAppointment?: MutationToUpdateAppointmentResolver<TParent>;
    deleteAppointments?: MutationToDeleteAppointmentsResolver<TParent>;
    createLog?: MutationToCreateLogResolver<TParent>;
    createSingleShipment?: MutationToCreateSingleShipmentResolver<TParent>;
    createMultiShipment?: MutationToCreateMultiShipmentResolver<TParent>;
    cancelShipment?: MutationToCancelShipmentResolver<TParent>;
    createPickUp?: MutationToCreatePickUpResolver<TParent>;
    createGoalToSeller?: MutationToCreateGoalToSellerResolver<TParent>;
    updateGoal?: MutationToUpdateGoalResolver<TParent>;
    deleteGoal?: MutationToDeleteGoalResolver<TParent>;
    createPage?: MutationToCreatePageResolver<TParent>;
    updatePage?: MutationToUpdatePageResolver<TParent>;
    deletePage?: MutationToDeletePageResolver<TParent>;
    createPageMetadata?: MutationToCreatePageMetadataResolver<TParent>;
    updatePageMetadata?: MutationToUpdatePageMetadataResolver<TParent>;
    deletePageMetadata?: MutationToDeletePageMetadataResolver<TParent>;
    createPageSection?: MutationToCreatePageSectionResolver<TParent>;
    updatePageSection?: MutationToUpdatePageSectionResolver<TParent>;
    deletePageSection?: MutationToDeletePageSectionResolver<TParent>;
    updateMassivePageSection?: MutationToUpdateMassivePageSectionResolver<TParent>;
    createPageSectionIntoPage?: MutationToCreatePageSectionIntoPageResolver<TParent>;
    updatePageSectionIntoPage?: MutationToUpdatePageSectionIntoPageResolver<TParent>;
    deletePageSectionIntoPage?: MutationToDeletePageSectionIntoPageResolver<TParent>;
    createPageSubsection?: MutationToCreatePageSubsectionResolver<TParent>;
    updatePageSubsection?: MutationToUpdatePageSubsectionResolver<TParent>;
    deletePageSubsection?: MutationToDeletePageSubsectionResolver<TParent>;
    updateMassivePageSubsection?: MutationToUpdateMassivePageSubsectionResolver<TParent>;
    createPageHeader?: MutationToCreatePageHeaderResolver<TParent>;
    updatePageHeader?: MutationToUpdatePageHeaderResolver<TParent>;
    deletePageHeader?: MutationToDeletePageHeaderResolver<TParent>;
    createMetadata?: MutationToCreateMetadataResolver<TParent>;
    updateMetadata?: MutationToUpdateMetadataResolver<TParent>;
    deleteMetadata?: MutationToDeleteMetadataResolver<TParent>;
    createKeywords?: MutationToCreateKeywordsResolver<TParent>;
    updateKeywords?: MutationToUpdateKeywordsResolver<TParent>;
    deleteKeywords?: MutationToDeleteKeywordsResolver<TParent>;
    createDirectory?: MutationToCreateDirectoryResolver<TParent>;
    updateDirectory?: MutationToUpdateDirectoryResolver<TParent>;
    deleteDirectory?: MutationToDeleteDirectoryResolver<TParent>;
    createSites?: MutationToCreateSitesResolver<TParent>;
    deleteSites?: MutationToDeleteSitesResolver<TParent>;
    createStyle?: MutationToCreateStyleResolver<TParent>;
    updateStyle?: MutationToUpdateStyleResolver<TParent>;
    deleteStyle?: MutationToDeleteStyleResolver<TParent>;
    createFont?: MutationToCreateFontResolver<TParent>;
    updateFont?: MutationToUpdateFontResolver<TParent>;
    deleteFont?: MutationToDeleteFontResolver<TParent>;
    createColor?: MutationToCreateColorResolver<TParent>;
    updateColor?: MutationToUpdateColorResolver<TParent>;
    deleteColor?: MutationToDeleteColorResolver<TParent>;
    createLogo?: MutationToCreateLogoResolver<TParent>;
    updateLogo?: MutationToUpdateLogoResolver<TParent>;
    deleteLogo?: MutationToDeleteLogoResolver<TParent>;
    createCarousel?: MutationToCreateCarouselResolver<TParent>;
    updateCarousel?: MutationToUpdateCarouselResolver<TParent>;
    deleteCarousel?: MutationToDeleteCarouselResolver<TParent>;
    createMassiveCarousel?: MutationToCreateMassiveCarouselResolver<TParent>;
    updateMassiveCarousel?: MutationToUpdateMassiveCarouselResolver<TParent>;
    createCarouselIntoPageSection?: MutationToCreateCarouselIntoPageSectionResolver<TParent>;
    updateCarouselIntoPageSection?: MutationToUpdateCarouselIntoPageSectionResolver<TParent>;
    deleteCarouselIntoPageSection?: MutationToDeleteCarouselIntoPageSectionResolver<TParent>;
  }

  export interface MutationToUpdateUserArgs {
    id: string;
    input?: IUserInput;
  }
  export interface MutationToUpdateUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateProfileArgs {
    input?: IProfileInput;
  }
  export interface MutationToCreateProfileResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateProfileArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateProfileArgs {
    id: string;
    input?: IProfileInput;
  }
  export interface MutationToUpdateProfileResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateProfileArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateDetailArgs {
    input?: IDetailInput;
  }
  export interface MutationToCreateDetailResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateDetailArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateDetailArgs {
    id: string;
    input?: IDetailInput;
  }
  export interface MutationToUpdateDetailResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateDetailArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateRegionArgs {
    input?: IRegionInput;
  }
  export interface MutationToCreateRegionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateRegionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateRegionArgs {
    id: string;
    input?: IRegionInput;
  }
  export interface MutationToUpdateRegionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateRegionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteRegionArgs {
    id?: Array<string>;
  }
  export interface MutationToDeleteRegionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteRegionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateDetailMassiveArgs {
    input?: IDetailMassiveInput;
  }
  export interface MutationToCreateDetailMassiveResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateDetailMassiveArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMailingAddressArgs {
    input?: IMailingAddressInput;
  }
  export interface MutationToCreateMailingAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMailingAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMailingAddressArgs {
    id: string;
    input?: IMailingAddressInput;
  }
  export interface MutationToUpdateMailingAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMailingAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMailingAddressArgs {
    id: string;
  }
  export interface MutationToDeleteMailingAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMailingAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateInvoiceAddressArgs {
    input?: IInvoiceAddressInput;
  }
  export interface MutationToCreateInvoiceAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateInvoiceAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateInvoiceAddressArgs {
    id: string;
    input?: IInvoiceAddressInput;
  }
  export interface MutationToUpdateInvoiceAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateInvoiceAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteInvoiceAddressArgs {
    id: string;
  }
  export interface MutationToDeleteInvoiceAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteInvoiceAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateUserProfileArgs {
    input?: IUserProfileInput;
  }
  export interface MutationToCreateUserProfileResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateUserProfileArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateUserProfileArgs {
    id: string;
    input?: IUserProfileUpdatingInput;
  }
  export interface MutationToUpdateUserProfileResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateUserProfileArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToLoginArgs {
    input?: ILoginInput;
  }
  export interface MutationToLoginResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToLoginArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToSendResetPasswordLinkArgs {
    input?: ISendResetPasswordLinkInput;
  }
  export interface MutationToSendResetPasswordLinkResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToSendResetPasswordLinkArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToGetBearerArgs {
    input?: IBearerInput;
  }
  export interface MutationToGetBearerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToGetBearerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToGetBearerValidateArgs {
    input?: IBearerValidateInput;
  }
  export interface MutationToGetBearerValidateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToGetBearerValidateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateOrganizationArgs {
    input?: IOrganizationInput;
  }
  export interface MutationToCreateOrganizationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateOrganizationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateOrganizationArgs {
    id: string;
    input?: IOrganizationInput;
  }
  export interface MutationToUpdateOrganizationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateOrganizationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePartnerArgs {
    input?: IPartnerInput;
  }
  export interface MutationToCreatePartnerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePartnerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePartnerArgs {
    id: string;
    input?: IPartnerInput;
  }
  export interface MutationToUpdatePartnerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePartnerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePartnerArgs {
    id: string;
  }
  export interface MutationToDeletePartnerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePartnerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAppArgs {
    input?: IAppInput;
  }
  export interface MutationToCreateAppResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateAppArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateAppArgs {
    id: string;
    input?: IAppInput;
  }
  export interface MutationToUpdateAppResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateAppArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateOrgAppArgs {
    input?: IOrgAppInput;
  }
  export interface MutationToCreateOrgAppResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateOrgAppArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateOrgAppArgs {
    id: string;
    input?: IOrgAppInput;
  }
  export interface MutationToUpdateOrgAppResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateOrgAppArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSocialMediaArgs {
    input?: ISocialMediaInput;
  }
  export interface MutationToCreateSocialMediaResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSocialMediaArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSocialMediaArgs {
    id: string;
    input?: ISocialMediaInput;
  }
  export interface MutationToUpdateSocialMediaResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateSocialMediaArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteSocialMediaArgs {
    id: string;
  }
  export interface MutationToDeleteSocialMediaResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteSocialMediaArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateDataContactArgs {
    input?: IDataContactInput;
  }
  export interface MutationToCreateDataContactResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateDataContactArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateDataContactArgs {
    id: string;
    input?: IDataContactInput;
  }
  export interface MutationToUpdateDataContactResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateDataContactArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteDataContactArgs {
    id: string;
  }
  export interface MutationToDeleteDataContactResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteDataContactArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAccessArgs {
    input?: IAccessInput;
  }
  export interface MutationToCreateAccessResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateAccessArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateAccessArgs {
    id: string;
    input?: IAccessInput;
  }
  export interface MutationToUpdateAccessResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateAccessArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateGroupArgs {
    input?: IGroupInput;
  }
  export interface MutationToCreateGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateGroupArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateGroupArgs {
    id: string;
    input?: IGroupInput;
  }
  export interface MutationToUpdateGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateGroupArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateRuleArgs {
    input?: IRuleInput;
  }
  export interface MutationToCreateRuleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateRuleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateRuleArgs {
    id: string;
    input?: IRuleInput;
  }
  export interface MutationToUpdateRuleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateRuleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateRolArgs {
    input?: IRolInput;
  }
  export interface MutationToCreateRolResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateRolArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateRolArgs {
    id: string;
    input?: IRolInput;
  }
  export interface MutationToUpdateRolResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateRolArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSellerArgs {
    input: ISellerUserInput;
  }
  export interface MutationToCreateSellerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSellerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSellerArgs {
    input: ISellerUserInput;
  }
  export interface MutationToUpdateSellerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateSellerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteSellerArgs {
    id: string;
  }
  export interface MutationToDeleteSellerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteSellerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSectorArgs {
    input: ISectorInput;
  }
  export interface MutationToCreateSectorResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSectorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSectorArgs {
    id: string;
    input: ISectorInput;
  }
  export interface MutationToUpdateSectorResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateSectorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteSectorArgs {
    id: string;
  }
  export interface MutationToDeleteSectorResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteSectorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateFeaturedArgs {
    input: IFeaturedInput;
  }
  export interface MutationToCreateFeaturedResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateFeaturedArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateFeaturedArgs {
    id: string;
    input: IFeaturedInput;
  }
  export interface MutationToUpdateFeaturedResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateFeaturedArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteFeaturedArgs {
    id: string;
  }
  export interface MutationToDeleteFeaturedResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteFeaturedArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCategoryArgs {
    input?: ICategoryInput;
  }
  export interface MutationToCreateCategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCategoryArgs {
    id: string;
    input?: ICategoryInput;
  }
  export interface MutationToUpdateCategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCategoryArgs {
    id: string;
  }
  export interface MutationToDeleteCategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSubcategoryArgs {
    input?: ISubcategoryInput;
  }
  export interface MutationToCreateSubcategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSubcategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSubcategoryArgs {
    id: string;
    input?: ISubcategoryInput;
  }
  export interface MutationToUpdateSubcategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateSubcategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteSubcategoryArgs {
    id: string;
  }
  export interface MutationToDeleteSubcategoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteSubcategoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateBrandArgs {
    input?: IBrandInput;
  }
  export interface MutationToCreateBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateBrandArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateBrandArgs {
    id: string;
    input?: IBrandInput;
  }
  export interface MutationToUpdateBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateBrandArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteBrandArgs {
    id: string;
  }
  export interface MutationToDeleteBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteBrandArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateProductArgs {
    input?: IProductInput;
  }
  export interface MutationToCreateProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateProductArgs {
    id: string;
    input?: IProductInput;
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

  export interface MutationToDeleteProductArgs {
    id: string;
  }
  export interface MutationToDeleteProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteProductMassiveArgs {
    ids?: Array<string>;
  }
  export interface MutationToDeleteProductMassiveResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteProductMassiveArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateProductMassiveArgs {
    input?: IProductMassiveInput;
  }
  export interface MutationToCreateProductMassiveResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateProductMassiveArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSectionOfProductArgs {
    input: ISectionOfProductInput;
  }
  export interface MutationToCreateSectionOfProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSectionOfProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSectionOfProductArgs {
    id: string;
    input: ISectionOfProductInput;
  }
  export interface MutationToUpdateSectionOfProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateSectionOfProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteSectionOfProductArgs {
    id: string;
  }
  export interface MutationToDeleteSectionOfProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteSectionOfProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateStructuredSectionOfProductArgs {
    input: ISectionofProductStructuredInput;
  }
  export interface MutationToCreateStructuredSectionOfProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateStructuredSectionOfProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateTemplateInfoArgs {
    input: ITemplateInfoInput;
  }
  export interface MutationToCreateTemplateInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateTemplateInfoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateTemplateInfoArgs {
    id: string;
    input: ITemplateInfoInput;
  }
  export interface MutationToUpdateTemplateInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateTemplateInfoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteTemplateInfoArgs {
    id: string;
  }
  export interface MutationToDeleteTemplateInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteTemplateInfoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMassiveTemplateInfoArgs {
    input: ITemplateInfoMassiveInput;
  }
  export interface MutationToUpdateMassiveTemplateInfoResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMassiveTemplateInfoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateValuesOfTemplateArgs {
    input: IValuesOfTemplateInput;
  }
  export interface MutationToCreateValuesOfTemplateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateValuesOfTemplateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateValuesOfTemplateArgs {
    id: string;
    input: IValuesOfTemplateInput;
  }
  export interface MutationToUpdateValuesOfTemplateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateValuesOfTemplateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteValuesOfTemplateArgs {
    id: string;
  }
  export interface MutationToDeleteValuesOfTemplateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteValuesOfTemplateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMassiveValuesOfTemplateArgs {
    input: IValuesOfTemplateMassiveInput;
  }
  export interface MutationToUpdateMassiveValuesOfTemplateResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMassiveValuesOfTemplateArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAddressArgs {
    input?: IAddressInput;
  }
  export interface MutationToCreateAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateAddressArgs {
    id: string;
    input?: IAddressInput;
  }
  export interface MutationToUpdateAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteAddressArgs {
    id: string;
  }
  export interface MutationToDeleteAddressResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteAddressArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAttachmentArgs {
    input?: IAttachmentInput;
  }
  export interface MutationToCreateAttachmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateAttachmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateAttachmentArgs {
    id: string;
    input?: IAttachmentInput;
  }
  export interface MutationToUpdateAttachmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateAttachmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteAttachmentArgs {
    id: string;
  }
  export interface MutationToDeleteAttachmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteAttachmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateDetailPropertyArgs {
    input?: IDetailPropertyInput;
  }
  export interface MutationToCreateDetailPropertyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateDetailPropertyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateDetailPropertyArgs {
    id: string;
    input?: IDetailPropertyInput;
  }
  export interface MutationToUpdateDetailPropertyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateDetailPropertyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteDetailPropertyArgs {
    id: string;
  }
  export interface MutationToDeleteDetailPropertyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteDetailPropertyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateScheduleArgs {
    input?: IScheduleInput;
  }
  export interface MutationToCreateScheduleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateScheduleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateScheduleArgs {
    id: string;
    input?: IScheduleInput;
  }
  export interface MutationToUpdateScheduleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateScheduleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteScheduleArgs {
    id: string;
  }
  export interface MutationToDeleteScheduleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteScheduleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateVersionArgs {
    input?: IVersionInput;
  }
  export interface MutationToCreateVersionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateVersionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateVersionArgs {
    id: string;
    input?: IVersionInput;
  }
  export interface MutationToUpdateVersionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateVersionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteVersionArgs {
    id: string;
  }
  export interface MutationToDeleteVersionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteVersionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateColorIntArgs {
    input?: IColorsInput;
  }
  export interface MutationToCreateColorIntResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateColorIntArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateColorIntArgs {
    id: string;
    input?: IColorsInput;
  }
  export interface MutationToUpdateColorIntResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateColorIntArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteColorIntArgs {
    id: string;
  }
  export interface MutationToDeleteColorIntResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteColorIntArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateColorExtArgs {
    input?: IColorsInput;
  }
  export interface MutationToCreateColorExtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateColorExtArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateColorExtArgs {
    id: string;
    input?: IColorsInput;
  }
  export interface MutationToUpdateColorExtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateColorExtArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteColorExtArgs {
    id: string;
  }
  export interface MutationToDeleteColorExtResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteColorExtArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSaleOrderArgs {
    input?: ISaleOrderInput;
  }
  export interface MutationToCreateSaleOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSaleOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateSaleOrderArgs {
    id: string;
    input?: ISaleOrderInput;
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

  export interface MutationToDeleteSaleOrderArgs {
    id: string;
  }
  export interface MutationToDeleteSaleOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteSaleOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateProductOrderArgs {
    input?: IProductOrderInput;
  }
  export interface MutationToCreateProductOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateProductOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateProductOrderArgs {
    id: string;
    input?: IProductOrderInput;
  }
  export interface MutationToUpdateProductOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateProductOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteProductOrderArgs {
    id: string;
  }
  export interface MutationToDeleteProductOrderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteProductOrderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateReviewArgs {
    input?: IReviewInput;
  }
  export interface MutationToCreateReviewResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateReviewArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateReviewArgs {
    id: string;
    input?: IupdateReviewInput;
  }
  export interface MutationToUpdateReviewResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateReviewArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteReviewArgs {
    id: string;
  }
  export interface MutationToDeleteReviewResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteReviewArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateConversationArgs {
    input?: IConversationInput;
  }
  export interface MutationToCreateConversationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateConversationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateConversationArgs {
    id: string;
    input?: IConversationInput;
  }
  export interface MutationToUpdateConversationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateConversationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteConversationArgs {
    id: string;
  }
  export interface MutationToDeleteConversationResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteConversationArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateTalkArgs {
    input?: ITalkInput;
  }
  export interface MutationToCreateTalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateTalkArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateTalkArgs {
    id: string;
    input?: IupdateTalkInput;
  }
  export interface MutationToUpdateTalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateTalkArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteTalkArgs {
    id: string;
  }
  export interface MutationToDeleteTalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteTalkArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateDepartmentArgs {
    input?: IdepartmentInput;
  }
  export interface MutationToCreateDepartmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateDepartmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateDepartmentArgs {
    id: string;
    input?: IupdateDepartment;
  }
  export interface MutationToUpdateDepartmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateDepartmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteDepartmentArgs {
    id: string;
  }
  export interface MutationToDeleteDepartmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteDepartmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateWasteArgs {
    input?: Array<IwasteInput | null>;
  }
  export interface MutationToCreateWasteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateWasteArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateWasteArgs {
    id: string;
    input?: IupdateWaste;
  }
  export interface MutationToUpdateWasteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateWasteArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteWasteArgs {
    id: string;
  }
  export interface MutationToDeleteWasteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteWasteArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpFileInvoiceArgs {
    input: IInvoiceInput;
  }
  export interface MutationToUpFileInvoiceResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpFileInvoiceArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateInvoiceArgs {
    input: IInvoiceInput;
  }
  export interface MutationToCreateInvoiceResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateInvoiceArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateInvoiceArgs {
    id: string;
    input: IupdateInvoice;
  }
  export interface MutationToUpdateInvoiceResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateInvoiceArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteInvoiceArgs {
    id: string;
  }
  export interface MutationToDeleteInvoiceResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteInvoiceArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateStoreArgs {
    input: IStoreInput;
  }
  export interface MutationToCreateStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateStoreArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateStoreArgs {
    input: IStoreInput;
  }
  export interface MutationToUpdateStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateStoreArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteStoreArgs {
    input?: IStoreInput;
  }
  export interface MutationToDeleteStoreResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteStoreArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateJourneyArgs {
    input?: IJourneyInput;
  }
  export interface MutationToCreateJourneyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateJourneyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateJourneyArgs {
    input?: IJourneyInput;
  }
  export interface MutationToUpdateJourneyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateJourneyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteJourneyArgs {
    input?: IJourneyInput;
  }
  export interface MutationToDeleteJourneyResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteJourneyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateJourneyVisitArgs {
    id?: string;
    input?: IJourneyVisitInput;
  }
  export interface MutationToUpdateJourneyVisitResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateJourneyVisitArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateShiploadArgs {
    input?: IShiploadInput;
  }
  export interface MutationToCreateShiploadResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateShiploadArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateShiploadArgs {
    input?: IShiploadInput;
  }
  export interface MutationToUpdateShiploadResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateShiploadArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteShiploadArgs {
    input?: IShiploadInput;
  }
  export interface MutationToDeleteShiploadResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteShiploadArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateShiploadProductArgs {
    input?: IShiploadProductInput;
  }
  export interface MutationToCreateShiploadProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateShiploadProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateShiploadProductArgs {
    input?: IShiploadProductInput;
  }
  export interface MutationToUpdateShiploadProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateShiploadProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteShiploadProductArgs {
    input?: IShiploadProductInput;
  }
  export interface MutationToDeleteShiploadProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteShiploadProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateWishListArgs {
    input?: IWishListInput;
  }
  export interface MutationToCreateWishListResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateWishListArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateWishListArgs {
    id: string;
    input?: IWishListInput;
  }
  export interface MutationToUpdateWishListResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateWishListArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteWishListArgs {
    id: string;
  }
  export interface MutationToDeleteWishListResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteWishListArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateWishedProductArgs {
    input?: IWishedProductInput;
  }
  export interface MutationToCreateWishedProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateWishedProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateWishedProductArgs {
    id: string;
    input?: IWishedProductInput;
  }
  export interface MutationToUpdateWishedProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateWishedProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteWishedProductArgs {
    id: string;
  }
  export interface MutationToDeleteWishedProductResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteWishedProductArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAppraisalArgs {
    input?: IAppraisalInput;
  }
  export interface MutationToCreateAppraisalResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateAppraisalArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePromotionArgs {
    input?: IPromotionInput;
  }
  export interface MutationToCreatePromotionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePromotionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePromotionArgs {
    id: string;
    input?: IPromotionInput;
  }
  export interface MutationToUpdatePromotionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePromotionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePromotionArgs {
    id: string;
  }
  export interface MutationToDeletePromotionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePromotionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateKeyArgs {
    input?: IKeyInput;
  }
  export interface MutationToCreateKeyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateKeyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateKeyArgs {
    id: string;
    input?: IKeyInput;
  }
  export interface MutationToUpdateKeyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateKeyArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePaymentConektaArgs {
    input?: IPaymentConektaInput;
  }
  export interface MutationToCreatePaymentConektaResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePaymentConektaArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePaymentStripeArgs {
    input?: IPaymentStripeInput;
  }
  export interface MutationToCreatePaymentStripeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePaymentStripeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSubscriptionStripeArgs {
    input?: IPaymentPaypalInput;
  }
  export interface MutationToCreateSubscriptionStripeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSubscriptionStripeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePaymentPaypalArgs {
    input?: IPaymentPaypalInput;
  }
  export interface MutationToCreatePaymentPaypalResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePaymentPaypalArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePaymentArgs {
    id: string;
    input: IPaymentInput;
  }
  export interface MutationToUpdatePaymentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePaymentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateArticleArgs {
    input?: IArticleInput;
  }
  export interface MutationToCreateArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateArticleArgs {
    id: string;
    input?: IArticleInput;
  }
  export interface MutationToUpdateArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteArticleArgs {
    id: string;
  }
  export interface MutationToDeleteArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAttachmentOfArticleArgs {
    input?: IAttachmentOfArticleInput;
  }
  export interface MutationToCreateAttachmentOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateAttachmentOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateAttachmentOfArticleArgs {
    id: string;
    input?: IAttachmentOfArticleInput;
  }
  export interface MutationToUpdateAttachmentOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateAttachmentOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteAttachmentOfArticleArgs {
    id: string;
  }
  export interface MutationToDeleteAttachmentOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteAttachmentOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateTagsOfArticleArgs {
    input?: ITagsOfArticleInput;
  }
  export interface MutationToCreateTagsOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateTagsOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateTagsOfArticleArgs {
    id: string;
    input?: ITagsOfArticleInput;
  }
  export interface MutationToUpdateTagsOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateTagsOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteTagsOfArticleArgs {
    id: string;
  }
  export interface MutationToDeleteTagsOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteTagsOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCategoryOfArticleArgs {
    input?: ICategoryOfArticleInput;
  }
  export interface MutationToCreateCategoryOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCategoryOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCategoryOfArticleArgs {
    id: string;
    input?: ICategoryOfArticleInput;
  }
  export interface MutationToUpdateCategoryOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCategoryOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCategoryOfArticleArgs {
    id: string;
  }
  export interface MutationToDeleteCategoryOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCategoryOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMassiveCategoryOfArticleArgs {
    article: string;
    categories?: Array<string>;
  }
  export interface MutationToCreateMassiveCategoryOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMassiveCategoryOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMassiveCategoryOfArticleArgs {
    article: string;
    categories?: Array<string>;
  }
  export interface MutationToDeleteMassiveCategoryOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMassiveCategoryOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMetadataOfArticleArgs {
    input?: IMetadataOfArticleInput;
  }
  export interface MutationToCreateMetadataOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMetadataOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMetadataOfArticleArgs {
    id: string;
    input?: IMetadataOfArticleInput;
  }
  export interface MutationToUpdateMetadataOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMetadataOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMetadataOfArticleArgs {
    id: string;
  }
  export interface MutationToDeleteMetadataOfArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMetadataOfArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCommentArgs {
    input: ICommentInput;
  }
  export interface MutationToCreateCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCommentArgs {
    id: string;
    input: ICommentInput;
  }
  export interface MutationToUpdateCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCommentArgs {
    id: string;
  }
  export interface MutationToDeleteCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateVoteOnCommentArgs {
    input: IVoteOnCommentInput;
  }
  export interface MutationToCreateVoteOnCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateVoteOnCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateVoteOnCommentArgs {
    id: string;
    input: IVoteOnCommentInput;
  }
  export interface MutationToUpdateVoteOnCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateVoteOnCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteVoteOnCommentArgs {
    id: string;
  }
  export interface MutationToDeleteVoteOnCommentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteVoteOnCommentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateTopicArgs {
    input: ITopicInput;
  }
  export interface MutationToCreateTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateTopicArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateTopicArgs {
    id: string;
    input: ITopicInput;
  }
  export interface MutationToUpdateTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateTopicArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteTopicArgs {
    id: string;
  }
  export interface MutationToDeleteTopicResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteTopicArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateProgramArgs {
    input: IProgramInput;
  }
  export interface MutationToCreateProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateProgramArgs {
    id: string;
    input: IProgramInput;
  }
  export interface MutationToUpdateProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteProgramArgs {
    id: string;
  }
  export interface MutationToDeleteProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePodcastArgs {
    input: IPodcastInput;
  }
  export interface MutationToCreatePodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePodcastArgs {
    id: string;
    input: IPodcastInput;
  }
  export interface MutationToUpdatePodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePodcastArgs {
    id: string;
  }
  export interface MutationToDeletePodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCategoryForEntertaimentArgs {
    input: ICategoryForEntertaimentInput;
  }
  export interface MutationToCreateCategoryForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCategoryForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCategoryForEntertaimentArgs {
    id: string;
    input: ICategoryForEntertaimentInput;
  }
  export interface MutationToUpdateCategoryForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCategoryForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCategoryForEntertaimentArgs {
    id: string;
  }
  export interface MutationToDeleteCategoryForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCategoryForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCategoryForPodcastArgs {
    input: ICategoryForPodcastInput;
  }
  export interface MutationToCreateCategoryForPodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCategoryForPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCategoryForPodcastArgs {
    id: string;
    input: ICategoryForPodcastInput;
  }
  export interface MutationToUpdateCategoryForPodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCategoryForPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCategoryForPodcastArgs {
    id: string;
  }
  export interface MutationToDeleteCategoryForPodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCategoryForPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCategoryForProgramArgs {
    input: ICategoryForProgramInput;
  }
  export interface MutationToCreateCategoryForProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCategoryForProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCategoryForProgramArgs {
    id: string;
    input: ICategoryForProgramInput;
  }
  export interface MutationToUpdateCategoryForProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCategoryForProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCategoryForProgramArgs {
    id: string;
  }
  export interface MutationToDeleteCategoryForProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCategoryForProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCategoryForArticleArgs {
    input: ICategoryForArticleInput;
  }
  export interface MutationToCreateCategoryForArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCategoryForArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCategoryForArticleArgs {
    id: string;
    input: ICategoryForArticleInput;
  }
  export interface MutationToUpdateCategoryForArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCategoryForArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCategoryForArticleArgs {
    id: string;
  }
  export interface MutationToDeleteCategoryForArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCategoryForArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMetadataForEntertaimentArgs {
    input: IMetadataForEntertaimentInput;
  }
  export interface MutationToCreateMetadataForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMetadataForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMetadataForEntertaimentArgs {
    id: string;
    input: IMetadataForEntertaimentInput;
  }
  export interface MutationToUpdateMetadataForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMetadataForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMetadataForEntertaimentArgs {
    id: string;
  }
  export interface MutationToDeleteMetadataForEntertaimentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMetadataForEntertaimentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMetadataForPodcastArgs {
    input: IMetadataForPodcastInput;
  }
  export interface MutationToCreateMetadataForPodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMetadataForPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMetadataForPodcastArgs {
    id: string;
    input: IMetadataForPodcastInput;
  }
  export interface MutationToUpdateMetadataForPodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMetadataForPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMetadataForPodcastArgs {
    id: string;
  }
  export interface MutationToDeleteMetadataForPodcastResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMetadataForPodcastArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMetadataForProgramArgs {
    input: IMetadataForProgramInput;
  }
  export interface MutationToCreateMetadataForProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMetadataForProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMetadataForProgramArgs {
    id: string;
    input: IMetadataForProgramInput;
  }
  export interface MutationToUpdateMetadataForProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMetadataForProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMetadataForProgramArgs {
    id: string;
  }
  export interface MutationToDeleteMetadataForProgramResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMetadataForProgramArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMetadataForArticleArgs {
    input: IMetadataForArticleInput;
  }
  export interface MutationToCreateMetadataForArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMetadataForArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMetadataForArticleArgs {
    id: string;
    input: IMetadataForArticleInput;
  }
  export interface MutationToUpdateMetadataForArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMetadataForArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMetadataForArticleArgs {
    id: string;
  }
  export interface MutationToDeleteMetadataForArticleResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMetadataForArticleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMemeArgs {
    input?: IMemeInput;
  }
  export interface MutationToCreateMemeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateMemeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMemeArgs {
    id: string;
    input?: IMemeInput;
  }
  export interface MutationToUpdateMemeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateMemeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMemeArgs {
    id: string;
  }
  export interface MutationToDeleteMemeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteMemeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToTestResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateAppointmentArgs {
    input: IInputAppointment;
  }
  export interface MutationToCreateAppointmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateAppointmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateAppointmentArgs {
    input: IInputAppointment;
  }
  export interface MutationToUpdateAppointmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateAppointmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteAppointmentsArgs {
    input: Array<string | null>;
  }
  export interface MutationToDeleteAppointmentsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteAppointmentsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateLogArgs {
    input: ILogCreateInput;
  }
  export interface MutationToCreateLogResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateLogArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSingleShipmentArgs {
    input: ISingleShipmentInput;
  }
  export interface MutationToCreateSingleShipmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateSingleShipmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMultiShipmentArgs {
    input: IMultiShipmentInput;
  }
  export interface MutationToCreateMultiShipmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMultiShipmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCancelShipmentArgs {
    input: ICancelShipmentInput;
  }
  export interface MutationToCancelShipmentResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCancelShipmentArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePickUpArgs {
    input: ISingleShipmentInput;
  }
  export interface MutationToCreatePickUpResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePickUpArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateGoalToSellerArgs {
    input: IgoalInput;
  }
  export interface MutationToCreateGoalToSellerResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateGoalToSellerArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateGoalArgs {
    id: string;
    input: IgoalInput;
  }
  export interface MutationToUpdateGoalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateGoalArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteGoalArgs {
    id: string;
  }
  export interface MutationToDeleteGoalResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteGoalArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePageArgs {
    input?: IPageInput;
  }
  export interface MutationToCreatePageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreatePageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePageArgs {
    id: string;
    input?: IPageInput;
  }
  export interface MutationToUpdatePageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdatePageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePageArgs {
    id: string;
  }
  export interface MutationToDeletePageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeletePageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePageMetadataArgs {
    input?: IPageMetadataInput;
  }
  export interface MutationToCreatePageMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePageMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePageMetadataArgs {
    id: string;
    input?: IPageMetadataInput;
  }
  export interface MutationToUpdatePageMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePageMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePageMetadataArgs {
    id: string;
  }
  export interface MutationToDeletePageMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePageMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePageSectionArgs {
    input?: IPageSectionInput;
  }
  export interface MutationToCreatePageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePageSectionArgs {
    id: string;
    input?: IPageSectionInput;
  }
  export interface MutationToUpdatePageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePageSectionArgs {
    id: string;
  }
  export interface MutationToDeletePageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMassivePageSectionArgs {
    input?: Array<IPageSectionZippedInput | null>;
  }
  export interface MutationToUpdateMassivePageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMassivePageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePageSectionIntoPageArgs {
    input: IPageSectionIntoPageInput;
  }
  export interface MutationToCreatePageSectionIntoPageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePageSectionIntoPageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePageSectionIntoPageArgs {
    id: string;
    input: IPageSectionIntoPageInput;
  }
  export interface MutationToUpdatePageSectionIntoPageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePageSectionIntoPageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePageSectionIntoPageArgs {
    id: string;
  }
  export interface MutationToDeletePageSectionIntoPageResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePageSectionIntoPageArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePageSubsectionArgs {
    input?: IPageSubsectionInput;
  }
  export interface MutationToCreatePageSubsectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePageSubsectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePageSubsectionArgs {
    id: string;
    input?: IPageSubsectionInput;
  }
  export interface MutationToUpdatePageSubsectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePageSubsectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePageSubsectionArgs {
    id: string;
  }
  export interface MutationToDeletePageSubsectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePageSubsectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMassivePageSubsectionArgs {
    input?: Array<IPageSubsectionZippedInput | null>;
  }
  export interface MutationToUpdateMassivePageSubsectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMassivePageSubsectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreatePageHeaderArgs {
    input?: IPageHeaderInput;
  }
  export interface MutationToCreatePageHeaderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreatePageHeaderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdatePageHeaderArgs {
    id: string;
    input?: IPageHeaderInput;
  }
  export interface MutationToUpdatePageHeaderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdatePageHeaderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeletePageHeaderArgs {
    id: string;
  }
  export interface MutationToDeletePageHeaderResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeletePageHeaderArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMetadataArgs {
    input?: IMetadataInput;
  }
  export interface MutationToCreateMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMetadataArgs {
    id: string;
    input?: IMetadataInput;
  }
  export interface MutationToUpdateMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteMetadataArgs {
    id: string;
  }
  export interface MutationToDeleteMetadataResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteMetadataArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateKeywordsArgs {
    input?: IKeywordsInput;
  }
  export interface MutationToCreateKeywordsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateKeywordsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateKeywordsArgs {
    id: string;
    input?: IKeywordsInput;
  }
  export interface MutationToUpdateKeywordsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateKeywordsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteKeywordsArgs {
    id: string;
  }
  export interface MutationToDeleteKeywordsResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteKeywordsArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateDirectoryArgs {
    input?: IDirectoryInput;
  }
  export interface MutationToCreateDirectoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateDirectoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateDirectoryArgs {
    id: string;
    input?: IDirectoryInput;
  }
  export interface MutationToUpdateDirectoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateDirectoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteDirectoryArgs {
    id: string;
  }
  export interface MutationToDeleteDirectoryResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteDirectoryArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateSitesArgs {
    input?: ISitesInput;
  }
  export interface MutationToCreateSitesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateSitesArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteSitesArgs {
    id: string;
  }
  export interface MutationToDeleteSitesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteSitesArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateStyleArgs {
    input: IStyleInput;
  }
  export interface MutationToCreateStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateStyleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateStyleArgs {
    id: string;
    input: IStyleInput;
  }
  export interface MutationToUpdateStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateStyleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteStyleArgs {
    id: string;
  }
  export interface MutationToDeleteStyleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteStyleArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateFontArgs {
    input: IFontInput;
  }
  export interface MutationToCreateFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateFontArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateFontArgs {
    id: string;
    input: IFontInput;
  }
  export interface MutationToUpdateFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateFontArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteFontArgs {
    id: string;
  }
  export interface MutationToDeleteFontResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteFontArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateColorArgs {
    input: IColorInput;
  }
  export interface MutationToCreateColorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateColorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateColorArgs {
    id: string;
    input: IColorInput;
  }
  export interface MutationToUpdateColorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateColorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteColorArgs {
    id: string;
  }
  export interface MutationToDeleteColorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteColorArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateLogoArgs {
    input: ILogoInput;
  }
  export interface MutationToCreateLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToCreateLogoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateLogoArgs {
    id: string;
    input: ILogoInput;
  }
  export interface MutationToUpdateLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateLogoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteLogoArgs {
    id: string;
  }
  export interface MutationToDeleteLogoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteLogoArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCarouselArgs {
    input: ICarouselInput;
  }
  export interface MutationToCreateCarouselResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCarouselArgs {
    id: string;
    input: ICarouselInput;
  }
  export interface MutationToUpdateCarouselResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCarouselArgs {
    id: string;
  }
  export interface MutationToDeleteCarouselResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateMassiveCarouselArgs {
    input?: Array<ICarouselInput>;
  }
  export interface MutationToCreateMassiveCarouselResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateMassiveCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateMassiveCarouselArgs {
    pageSection: number;
    input?: Array<ICarouselInput | null>;
  }
  export interface MutationToUpdateMassiveCarouselResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateMassiveCarouselArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToCreateCarouselIntoPageSectionArgs {
    input: ICarouselIntoPageSectionInput;
  }
  export interface MutationToCreateCarouselIntoPageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToCreateCarouselIntoPageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToUpdateCarouselIntoPageSectionArgs {
    id: string;
    input: ICarouselIntoPageSectionInput;
  }
  export interface MutationToUpdateCarouselIntoPageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToUpdateCarouselIntoPageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface MutationToDeleteCarouselIntoPageSectionArgs {
    id: string;
  }
  export interface MutationToDeleteCarouselIntoPageSectionResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToDeleteCarouselIntoPageSectionArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IUserPayloadTypeResolver<TParent = any> {
    user?: UserPayloadToUserResolver<TParent>;
  }

  export interface UserPayloadToUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProfilePayloadTypeResolver<TParent = any> {
    profile?: ProfilePayloadToProfileResolver<TParent>;
  }

  export interface ProfilePayloadToProfileResolver<
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

  export interface IDetailPayloadTypeResolver<TParent = any> {
    detail?: DetailPayloadToDetailResolver<TParent>;
  }

  export interface DetailPayloadToDetailResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRegionPayloadTypeResolver<TParent = any> {
    region?: RegionPayloadToRegionResolver<TParent>;
  }

  export interface RegionPayloadToRegionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDetailMassivePayloadTypeResolver<TParent = any> {
    detail?: DetailMassivePayloadToDetailResolver<TParent>;
  }

  export interface DetailMassivePayloadToDetailResolver<
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

  export interface IMailingAddressPayloadTypeResolver<TParent = any> {
    status?: MailingAddressPayloadToStatusResolver<TParent>;
    error?: MailingAddressPayloadToErrorResolver<TParent>;
    mailingaddress?: MailingAddressPayloadToMailingaddressResolver<TParent>;
  }

  export interface MailingAddressPayloadToStatusResolver<
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

  export interface MailingAddressPayloadToErrorResolver<
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

  export interface MailingAddressPayloadToMailingaddressResolver<
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

  export interface IInvoiceAddressPayloadTypeResolver<TParent = any> {
    invoiceaddress?: InvoiceAddressPayloadToInvoiceaddressResolver<TParent>;
  }

  export interface InvoiceAddressPayloadToInvoiceaddressResolver<
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

  export interface IUserProfilePayloadTypeResolver<TParent = any> {
    status?: UserProfilePayloadToStatusResolver<TParent>;
    error?: UserProfilePayloadToErrorResolver<TParent>;
    user?: UserProfilePayloadToUserResolver<TParent>;
  }

  export interface UserProfilePayloadToStatusResolver<
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

  export interface UserProfilePayloadToErrorResolver<
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

  export interface UserProfilePayloadToUserResolver<
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

  export interface ILoginPayloadTypeResolver<TParent = any> {
    status?: LoginPayloadToStatusResolver<TParent>;
    error?: LoginPayloadToErrorResolver<TParent>;
    token?: LoginPayloadToTokenResolver<TParent>;
    bearer?: LoginPayloadToBearerResolver<TParent>;
    me?: LoginPayloadToMeResolver<TParent>;
    seller?: LoginPayloadToSellerResolver<TParent>;
  }

  export interface LoginPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LoginPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LoginPayloadToTokenResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LoginPayloadToBearerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LoginPayloadToMeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LoginPayloadToSellerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISendResetPasswordLinkPayloadTypeResolver<TParent = any> {
    status?: SendResetPasswordLinkPayloadToStatusResolver<TParent>;
    error?: SendResetPasswordLinkPayloadToErrorResolver<TParent>;
    success?: SendResetPasswordLinkPayloadToSuccessResolver<TParent>;
    email_status?: SendResetPasswordLinkPayloadToEmail_statusResolver<TParent>;
  }

  export interface SendResetPasswordLinkPayloadToStatusResolver<
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

  export interface SendResetPasswordLinkPayloadToErrorResolver<
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

  export interface SendResetPasswordLinkPayloadToSuccessResolver<
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

  export interface SendResetPasswordLinkPayloadToEmail_statusResolver<
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

  export interface IBearerPayloadTypeResolver<TParent = any> {
    status?: BearerPayloadToStatusResolver<TParent>;
    error?: BearerPayloadToErrorResolver<TParent>;
    bearer?: BearerPayloadToBearerResolver<TParent>;
  }

  export interface BearerPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BearerPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface BearerPayloadToBearerResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IBearerValidatePayloadTypeResolver<TParent = any> {
    status?: BearerValidatePayloadToStatusResolver<TParent>;
    error?: BearerValidatePayloadToErrorResolver<TParent>;
    valid?: BearerValidatePayloadToValidResolver<TParent>;
  }

  export interface BearerValidatePayloadToStatusResolver<
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

  export interface BearerValidatePayloadToErrorResolver<
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

  export interface BearerValidatePayloadToValidResolver<
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

  export interface IOrganizationPayloadTypeResolver<TParent = any> {
    status?: OrganizationPayloadToStatusResolver<TParent>;
    error?: OrganizationPayloadToErrorResolver<TParent>;
    organization?: OrganizationPayloadToOrganizationResolver<TParent>;
  }

  export interface OrganizationPayloadToStatusResolver<
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

  export interface OrganizationPayloadToErrorResolver<
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

  export interface OrganizationPayloadToOrganizationResolver<
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

  export interface IPartnerPayloadTypeResolver<TParent = any> {
    status?: PartnerPayloadToStatusResolver<TParent>;
    error?: PartnerPayloadToErrorResolver<TParent>;
    partner?: PartnerPayloadToPartnerResolver<TParent>;
  }

  export interface PartnerPayloadToStatusResolver<
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

  export interface PartnerPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface PartnerPayloadToPartnerResolver<
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

  export interface IAppPayloadTypeResolver<TParent = any> {
    status?: AppPayloadToStatusResolver<TParent>;
    error?: AppPayloadToErrorResolver<TParent>;
    app?: AppPayloadToAppResolver<TParent>;
  }

  export interface AppPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AppPayloadToAppResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IOrgAppPayloadTypeResolver<TParent = any> {
    status?: OrgAppPayloadToStatusResolver<TParent>;
    error?: OrgAppPayloadToErrorResolver<TParent>;
    orgapp?: OrgAppPayloadToOrgappResolver<TParent>;
  }

  export interface OrgAppPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrgAppPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface OrgAppPayloadToOrgappResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISocialMediaPayloadTypeResolver<TParent = any> {
    socialmedia?: SocialMediaPayloadToSocialmediaResolver<TParent>;
  }

  export interface SocialMediaPayloadToSocialmediaResolver<
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

  export interface IDataContactPayloadTypeResolver<TParent = any> {
    datacontact?: DataContactPayloadToDatacontactResolver<TParent>;
  }

  export interface DataContactPayloadToDatacontactResolver<
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

  export interface IAccessPayloadTypeResolver<TParent = any> {
    status?: AccessPayloadToStatusResolver<TParent>;
    error?: AccessPayloadToErrorResolver<TParent>;
    access?: AccessPayloadToAccessResolver<TParent>;
  }

  export interface AccessPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface AccessPayloadToAccessResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IGroupPayloadTypeResolver<TParent = any> {
    status?: GroupPayloadToStatusResolver<TParent>;
    error?: GroupPayloadToErrorResolver<TParent>;
    group?: GroupPayloadToGroupResolver<TParent>;
  }

  export interface GroupPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GroupPayloadToGroupResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRulePayloadTypeResolver<TParent = any> {
    status?: RulePayloadToStatusResolver<TParent>;
    error?: RulePayloadToErrorResolver<TParent>;
    rule?: RulePayloadToRuleResolver<TParent>;
  }

  export interface RulePayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RulePayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RulePayloadToRuleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRolPayloadTypeResolver<TParent = any> {
    status?: RolPayloadToStatusResolver<TParent>;
    error?: RolPayloadToErrorResolver<TParent>;
    rol?: RolPayloadToRolResolver<TParent>;
  }

  export interface RolPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RolPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RolPayloadToRolResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ICategoryPayloadTypeResolver<TParent = any> {
    category?: CategoryPayloadToCategoryResolver<TParent>;
  }

  export interface CategoryPayloadToCategoryResolver<
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

  export interface ISubcategoryPayloadTypeResolver<TParent = any> {
    subcategory?: SubcategoryPayloadToSubcategoryResolver<TParent>;
  }

  export interface SubcategoryPayloadToSubcategoryResolver<
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

  export interface IBrandPayloadTypeResolver<TParent = any> {
    brand?: BrandPayloadToBrandResolver<TParent>;
  }

  export interface BrandPayloadToBrandResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IProductPayloadTypeResolver<TParent = any> {
    product?: ProductPayloadToProductResolver<TParent>;
  }

  export interface ProductPayloadToProductResolver<
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

  export interface IStatusPayloadTypeResolver<TParent = any> {
    status?: StatusPayloadToStatusResolver<TParent>;
  }

  export interface StatusPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IAddressPayloadTypeResolver<TParent = any> {
    address?: AddressPayloadToAddressResolver<TParent>;
  }

  export interface AddressPayloadToAddressResolver<
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

  export interface IAttachmentPayloadTypeResolver<TParent = any> {
    attachment?: AttachmentPayloadToAttachmentResolver<TParent>;
  }

  export interface AttachmentPayloadToAttachmentResolver<
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

  export interface IDetailPropertyPayloadTypeResolver<TParent = any> {
    detailproperty?: DetailPropertyPayloadToDetailpropertyResolver<TParent>;
  }

  export interface DetailPropertyPayloadToDetailpropertyResolver<
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

  export interface ISchedulePayloadTypeResolver<TParent = any> {
    schedule?: SchedulePayloadToScheduleResolver<TParent>;
  }

  export interface SchedulePayloadToScheduleResolver<
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

  export interface IVersionPayloadTypeResolver<TParent = any> {
    version?: VersionPayloadToVersionResolver<TParent>;
  }

  export interface VersionPayloadToVersionResolver<
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

  export interface IColorsPayloadTypeResolver<TParent = any> {
    color?: ColorsPayloadToColorResolver<TParent>;
  }

  export interface ColorsPayloadToColorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISaleOrderPayloadTypeResolver<TParent = any> {
    saleorder?: SaleOrderPayloadToSaleorderResolver<TParent>;
  }

  export interface SaleOrderPayloadToSaleorderResolver<
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

  export interface IProductOrderPayloadTypeResolver<TParent = any> {
    productorder?: ProductOrderPayloadToProductorderResolver<TParent>;
  }

  export interface ProductOrderPayloadToProductorderResolver<
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

  export interface IReviewPayloadTypeResolver<TParent = any> {
    status?: ReviewPayloadToStatusResolver<TParent>;
    error?: ReviewPayloadToErrorResolver<TParent>;
    review?: ReviewPayloadToReviewResolver<TParent>;
  }

  export interface ReviewPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ReviewPayloadToReviewResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IConversationPayloadTypeResolver<TParent = any> {
    status?: ConversationPayloadToStatusResolver<TParent>;
    error?: ConversationPayloadToErrorResolver<TParent>;
    conversation?: ConversationPayloadToConversationResolver<TParent>;
  }

  export interface ConversationPayloadToStatusResolver<
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

  export interface ConversationPayloadToErrorResolver<
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

  export interface ConversationPayloadToConversationResolver<
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

  export interface ITalkPayloadTypeResolver<TParent = any> {
    status?: TalkPayloadToStatusResolver<TParent>;
    error?: TalkPayloadToErrorResolver<TParent>;
    talk?: TalkPayloadToTalkResolver<TParent>;
  }

  export interface TalkPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface TalkPayloadToTalkResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IDepartmentPayloadTypeResolver<TParent = any> {
    department?: DepartmentPayloadToDepartmentResolver<TParent>;
  }

  export interface DepartmentPayloadToDepartmentResolver<
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

  export interface IWastePayloadTypeResolver<TParent = any> {
    waste?: WastePayloadToWasteResolver<TParent>;
  }

  export interface WastePayloadToWasteResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IInvoicePayloadTypeResolver<TParent = any> {
    invoice?: InvoicePayloadToInvoiceResolver<TParent>;
  }

  export interface InvoicePayloadToInvoiceResolver<
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

  export interface IPromotionPayloadTypeResolver<TParent = any> {
    promotion?: PromotionPayloadToPromotionResolver<TParent>;
  }

  export interface PromotionPayloadToPromotionResolver<
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

  export interface IKeyPayloadTypeResolver<TParent = any> {
    status?: KeyPayloadToStatusResolver<TParent>;
    error?: KeyPayloadToErrorResolver<TParent>;
    key?: KeyPayloadToKeyResolver<TParent>;
  }

  export interface KeyPayloadToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyPayloadToErrorResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface KeyPayloadToKeyResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPaymentConektaPayloadTypeResolver<TParent = any> {
    status?: PaymentConektaPayloadToStatusResolver<TParent>;
    error?: PaymentConektaPayloadToErrorResolver<TParent>;
    payment?: PaymentConektaPayloadToPaymentResolver<TParent>;
  }

  export interface PaymentConektaPayloadToStatusResolver<
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

  export interface PaymentConektaPayloadToErrorResolver<
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

  export interface PaymentConektaPayloadToPaymentResolver<
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

  export interface ILinksOrderPaypalTypeResolver<TParent = any> {
    href?: LinksOrderPaypalToHrefResolver<TParent>;
    rel?: LinksOrderPaypalToRelResolver<TParent>;
    method?: LinksOrderPaypalToMethodResolver<TParent>;
  }

  export interface LinksOrderPaypalToHrefResolver<
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

  export interface LinksOrderPaypalToRelResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LinksOrderPaypalToMethodResolver<
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

  export interface IArticlePayloadTypeResolver<TParent = any> {
    article?: ArticlePayloadToArticleResolver<TParent>;
  }

  export interface ArticlePayloadToArticleResolver<
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

  export interface IAttachmentOfArticlePayloadTypeResolver<TParent = any> {
    attachment?: AttachmentOfArticlePayloadToAttachmentResolver<TParent>;
  }

  export interface AttachmentOfArticlePayloadToAttachmentResolver<
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

  export interface ITagsOfArticlePayloadTypeResolver<TParent = any> {
    tags?: TagsOfArticlePayloadToTagsResolver<TParent>;
  }

  export interface TagsOfArticlePayloadToTagsResolver<
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

  export interface ICategoryOfArticlePayloadTypeResolver<TParent = any> {
    category?: CategoryOfArticlePayloadToCategoryResolver<TParent>;
  }

  export interface CategoryOfArticlePayloadToCategoryResolver<
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

  export interface IMetadataOfArticlePayloadTypeResolver<TParent = any> {
    metadata?: MetadataOfArticlePayloadToMetadataResolver<TParent>;
  }

  export interface MetadataOfArticlePayloadToMetadataResolver<
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

  export interface IShipmentTypeResolver<TParent = any> {
    status?: ShipmentToStatusResolver<TParent>;
    shipmentnumber?: ShipmentToShipmentnumberResolver<TParent>;
    trackingnumber?: ShipmentToTrackingnumberResolver<TParent>;
    totalcharges?: ShipmentToTotalchargesResolver<TParent>;
    htmlimage?: ShipmentToHtmlimageResolver<TParent>;
    graphicimage?: ShipmentToGraphicimageResolver<TParent>;
  }

  export interface ShipmentToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShipmentToShipmentnumberResolver<
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

  export interface ShipmentToTrackingnumberResolver<
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

  export interface ShipmentToTotalchargesResolver<
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

  export interface ShipmentToHtmlimageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ShipmentToGraphicimageResolver<
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

  export interface IPagePayloadTypeResolver<TParent = any> {
    page?: PagePayloadToPageResolver<TParent>;
  }

  export interface PagePayloadToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPageSectionPayloadTypeResolver<TParent = any> {
    pagesection?: PageSectionPayloadToPagesectionResolver<TParent>;
  }

  export interface PageSectionPayloadToPagesectionResolver<
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

  export interface IPageSubsectionPayloadTypeResolver<TParent = any> {
    pagesubsection?: PageSubsectionPayloadToPagesubsectionResolver<TParent>;
  }

  export interface PageSubsectionPayloadToPagesubsectionResolver<
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

  export interface IPageHeaderPayloadTypeResolver<TParent = any> {
    pageheader?: PageHeaderPayloadToPageheaderResolver<TParent>;
  }

  export interface PageHeaderPayloadToPageheaderResolver<
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

  export interface IMetadataPayloadTypeResolver<TParent = any> {
    metadata?: MetadataPayloadToMetadataResolver<TParent>;
  }

  export interface MetadataPayloadToMetadataResolver<
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

  export interface IKeywordsPayloadTypeResolver<TParent = any> {
    keywords?: KeywordsPayloadToKeywordsResolver<TParent>;
  }

  export interface KeywordsPayloadToKeywordsResolver<
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

  export interface IDirectoryPayloadTypeResolver<TParent = any> {
    directory?: DirectoryPayloadToDirectoryResolver<TParent>;
  }

  export interface DirectoryPayloadToDirectoryResolver<
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

  export interface ISitesPayloadTypeResolver<TParent = any> {
    sites?: SitesPayloadToSitesResolver<TParent>;
  }

  export interface SitesPayloadToSitesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISubcategory0TypeResolver<TParent = any> {
    id?: Subcategory0ToIdResolver<TParent>;
    name?: Subcategory0ToNameResolver<TParent>;
    description?: Subcategory0ToDescriptionResolver<TParent>;
  }

  export interface Subcategory0ToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface Subcategory0ToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface Subcategory0ToDescriptionResolver<
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

  export interface IvalueSemiTypeResolver<TParent = any> {
    locationId?: valueSemiToLocationIdResolver<TParent>;
    name?: valueSemiToNameResolver<TParent>;
  }

  export interface valueSemiToLocationIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface valueSemiToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IScheduleReturnTypeResolver<TParent = any> {
    page?: ScheduleReturnToPageResolver<TParent>;
    limit?: ScheduleReturnToLimitResolver<TParent>;
    pagingcounter?: ScheduleReturnToPagingcounterResolver<TParent>;
    totaldocs?: ScheduleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ScheduleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ScheduleReturnToHasnextpageResolver<TParent>;
    docs?: ScheduleReturnToDocsResolver<TParent>;
  }

  export interface ScheduleReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ScheduleReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ScheduleReturnToPagingcounterResolver<
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

  export interface ScheduleReturnToTotaldocsResolver<
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

  export interface ScheduleReturnToHasprevpageResolver<
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

  export interface ScheduleReturnToHasnextpageResolver<
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

  export interface ScheduleReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IColorsReturnTypeResolver<TParent = any> {
    page?: ColorsReturnToPageResolver<TParent>;
    limit?: ColorsReturnToLimitResolver<TParent>;
    pagingcounter?: ColorsReturnToPagingcounterResolver<TParent>;
    totaldocs?: ColorsReturnToTotaldocsResolver<TParent>;
    hasprevpage?: ColorsReturnToHasprevpageResolver<TParent>;
    hasnextpage?: ColorsReturnToHasnextpageResolver<TParent>;
    docs?: ColorsReturnToDocsResolver<TParent>;
  }

  export interface ColorsReturnToPageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorsReturnToLimitResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ColorsReturnToPagingcounterResolver<
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

  export interface ColorsReturnToTotaldocsResolver<
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

  export interface ColorsReturnToHasprevpageResolver<
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

  export interface ColorsReturnToHasnextpageResolver<
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

  export interface ColorsReturnToDocsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IRecordTypeResolver<TParent = any> {
    action?: RecordToActionResolver<TParent>;
    activity?: RecordToActivityResolver<TParent>;
    product?: RecordToProductResolver<TParent>;
    price?: RecordToPriceResolver<TParent>;
    quantity?: RecordToQuantityResolver<TParent>;
    shipload?: RecordToShiploadResolver<TParent>;
  }

  export interface RecordToActionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordToActivityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordToProductResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordToPriceResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordToQuantityResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface RecordToShiploadResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IPaymentPaypalPayloadTypeResolver<TParent = any> {
    status?: PaymentPaypalPayloadToStatusResolver<TParent>;
    error?: PaymentPaypalPayloadToErrorResolver<TParent>;
    payment?: PaymentPaypalPayloadToPaymentResolver<TParent>;
  }

  export interface PaymentPaypalPayloadToStatusResolver<
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

  export interface PaymentPaypalPayloadToErrorResolver<
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

  export interface PaymentPaypalPayloadToPaymentResolver<
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

  export interface IResponseOrderPaypalTypeResolver<TParent = any> {
    id?: ResponseOrderPaypalToIdResolver<TParent>;
    status?: ResponseOrderPaypalToStatusResolver<TParent>;
    links?: ResponseOrderPaypalToLinksResolver<TParent>;
    error?: ResponseOrderPaypalToErrorResolver<TParent>;
  }

  export interface ResponseOrderPaypalToIdResolver<
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

  export interface ResponseOrderPaypalToStatusResolver<
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

  export interface ResponseOrderPaypalToLinksResolver<
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

  export interface ResponseOrderPaypalToErrorResolver<
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

  export interface IMetadataOfArticleReturnTypeResolver<TParent = any> {
    page?: MetadataOfArticleReturnToPageResolver<TParent>;
    limit?: MetadataOfArticleReturnToLimitResolver<TParent>;
    pagingcounter?: MetadataOfArticleReturnToPagingcounterResolver<TParent>;
    totaldocs?: MetadataOfArticleReturnToTotaldocsResolver<TParent>;
    hasprevpage?: MetadataOfArticleReturnToHasprevpageResolver<TParent>;
    hasnextpage?: MetadataOfArticleReturnToHasnextpageResolver<TParent>;
    docs?: MetadataOfArticleReturnToDocsResolver<TParent>;
  }

  export interface MetadataOfArticleReturnToPageResolver<
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

  export interface MetadataOfArticleReturnToLimitResolver<
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

  export interface MetadataOfArticleReturnToPagingcounterResolver<
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

  export interface MetadataOfArticleReturnToTotaldocsResolver<
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

  export interface MetadataOfArticleReturnToHasprevpageResolver<
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

  export interface MetadataOfArticleReturnToHasnextpageResolver<
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

  export interface MetadataOfArticleReturnToDocsResolver<
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

  export interface IPageMetadataReturnTypeResolver<TParent = any> {
    page?: PageMetadataReturnToPageResolver<TParent>;
    limit?: PageMetadataReturnToLimitResolver<TParent>;
    pagingcounter?: PageMetadataReturnToPagingcounterResolver<TParent>;
    totaldocs?: PageMetadataReturnToTotaldocsResolver<TParent>;
    hasprevpage?: PageMetadataReturnToHasprevpageResolver<TParent>;
    hasnextpage?: PageMetadataReturnToHasnextpageResolver<TParent>;
    docs?: PageMetadataReturnToDocsResolver<TParent>;
  }

  export interface PageMetadataReturnToPageResolver<
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

  export interface PageMetadataReturnToLimitResolver<
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

  export interface PageMetadataReturnToPagingcounterResolver<
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

  export interface PageMetadataReturnToTotaldocsResolver<
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

  export interface PageMetadataReturnToHasprevpageResolver<
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

  export interface PageMetadataReturnToHasnextpageResolver<
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

  export interface PageMetadataReturnToDocsResolver<
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
}
