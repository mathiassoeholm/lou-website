export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DatoCmsAllLocalesForDatoCmsArticleContent = {
  locale?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueNode?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsAllLocalesForDatoCmsArticleContentFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  valueNode?: Maybe<DatoCmsTextNodeFilterInput>;
};

export type DatoCmsAllLocalesForDatoCmsArticleContentFilterListInput = {
  elemMatch?: Maybe<DatoCmsAllLocalesForDatoCmsArticleContentFilterInput>;
};

export type DatoCmsArticle = Node & {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsFileField>;
  content?: Maybe<Scalars['String']>;
  contentNode?: Maybe<DatoCmsTextNode>;
  _allContentLocales?: Maybe<Array<Maybe<DatoCmsAllLocalesForDatoCmsArticleContent>>>;
  seo?: Maybe<DatoCmsSeoField>;
  meta?: Maybe<DatoCmsMetaField>;
  originalId?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  model?: Maybe<DatoCmsModel>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsArticleEdge>;
  nodes: Array<DatoCmsArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsArticleGroupConnection>;
};


export type DatoCmsArticleConnectionDistinctArgs = {
  field: DatoCmsArticleFieldsEnum;
};


export type DatoCmsArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsArticleFieldsEnum;
};

export type DatoCmsArticleEdge = {
  next?: Maybe<DatoCmsArticle>;
  node: DatoCmsArticle;
  previous?: Maybe<DatoCmsArticle>;
};

export type DatoCmsArticleFieldsEnum = 
  'title' |
  'slug' |
  'image___size' |
  'image___width' |
  'image___height' |
  'image___path' |
  'image___format' |
  'image___isImage' |
  'image___createdAt' |
  'image___url' |
  'image___notes' |
  'image___author' |
  'image___copyright' |
  'image___originalId' |
  'image___tags' |
  'image___smartTags' |
  'image___filename' |
  'image___basename' |
  'image___exifInfo' |
  'image___mimeType' |
  'image___colors' |
  'image___colors___red' |
  'image___colors___green' |
  'image___colors___blue' |
  'image___colors___alpha' |
  'image___colors___rgb' |
  'image___colors___hex' |
  'image___blurhash' |
  'image___video___muxPlaybackId' |
  'image___video___frameRate' |
  'image___video___duration' |
  'image___video___streamingUrl' |
  'image___video___thumbnailUrl' |
  'image___video___mp4Url' |
  'image___fluid___base64' |
  'image___fluid___tracedSVG' |
  'image___fluid___aspectRatio' |
  'image___fluid___width' |
  'image___fluid___height' |
  'image___fluid___src' |
  'image___fluid___srcSet' |
  'image___fluid___sizes' |
  'image___sizes___base64' |
  'image___sizes___tracedSVG' |
  'image___sizes___aspectRatio' |
  'image___sizes___width' |
  'image___sizes___height' |
  'image___sizes___src' |
  'image___sizes___srcSet' |
  'image___sizes___sizes' |
  'image___fixed___base64' |
  'image___fixed___tracedSVG' |
  'image___fixed___aspectRatio' |
  'image___fixed___width' |
  'image___fixed___height' |
  'image___fixed___src' |
  'image___fixed___srcSet' |
  'image___fixed___sizes' |
  'image___resolutions___base64' |
  'image___resolutions___tracedSVG' |
  'image___resolutions___aspectRatio' |
  'image___resolutions___width' |
  'image___resolutions___height' |
  'image___resolutions___src' |
  'image___resolutions___srcSet' |
  'image___resolutions___sizes' |
  'image___alt' |
  'image___title' |
  'image___customData' |
  'content' |
  'contentNode___id' |
  'contentNode___parent___id' |
  'contentNode___parent___parent___id' |
  'contentNode___parent___parent___children' |
  'contentNode___parent___children' |
  'contentNode___parent___children___id' |
  'contentNode___parent___children___children' |
  'contentNode___parent___internal___content' |
  'contentNode___parent___internal___contentDigest' |
  'contentNode___parent___internal___description' |
  'contentNode___parent___internal___fieldOwners' |
  'contentNode___parent___internal___ignoreType' |
  'contentNode___parent___internal___mediaType' |
  'contentNode___parent___internal___owner' |
  'contentNode___parent___internal___type' |
  'contentNode___children' |
  'contentNode___children___id' |
  'contentNode___children___parent___id' |
  'contentNode___children___parent___children' |
  'contentNode___children___children' |
  'contentNode___children___children___id' |
  'contentNode___children___children___children' |
  'contentNode___children___internal___content' |
  'contentNode___children___internal___contentDigest' |
  'contentNode___children___internal___description' |
  'contentNode___children___internal___fieldOwners' |
  'contentNode___children___internal___ignoreType' |
  'contentNode___children___internal___mediaType' |
  'contentNode___children___internal___owner' |
  'contentNode___children___internal___type' |
  'contentNode___internal___content' |
  'contentNode___internal___contentDigest' |
  'contentNode___internal___description' |
  'contentNode___internal___fieldOwners' |
  'contentNode___internal___ignoreType' |
  'contentNode___internal___mediaType' |
  'contentNode___internal___owner' |
  'contentNode___internal___type' |
  'contentNode___childMarkdownRemark___id' |
  'contentNode___childMarkdownRemark___frontmatter___title' |
  'contentNode___childMarkdownRemark___excerpt' |
  'contentNode___childMarkdownRemark___rawMarkdownBody' |
  'contentNode___childMarkdownRemark___html' |
  'contentNode___childMarkdownRemark___htmlAst' |
  'contentNode___childMarkdownRemark___excerptAst' |
  'contentNode___childMarkdownRemark___headings' |
  'contentNode___childMarkdownRemark___headings___value' |
  'contentNode___childMarkdownRemark___headings___depth' |
  'contentNode___childMarkdownRemark___timeToRead' |
  'contentNode___childMarkdownRemark___tableOfContents' |
  'contentNode___childMarkdownRemark___wordCount___paragraphs' |
  'contentNode___childMarkdownRemark___wordCount___sentences' |
  'contentNode___childMarkdownRemark___wordCount___words' |
  'contentNode___childMarkdownRemark___parent___id' |
  'contentNode___childMarkdownRemark___parent___children' |
  'contentNode___childMarkdownRemark___children' |
  'contentNode___childMarkdownRemark___children___id' |
  'contentNode___childMarkdownRemark___children___children' |
  'contentNode___childMarkdownRemark___internal___content' |
  'contentNode___childMarkdownRemark___internal___contentDigest' |
  'contentNode___childMarkdownRemark___internal___description' |
  'contentNode___childMarkdownRemark___internal___fieldOwners' |
  'contentNode___childMarkdownRemark___internal___ignoreType' |
  'contentNode___childMarkdownRemark___internal___mediaType' |
  'contentNode___childMarkdownRemark___internal___owner' |
  'contentNode___childMarkdownRemark___internal___type' |
  '_allContentLocales' |
  '_allContentLocales___locale' |
  '_allContentLocales___value' |
  '_allContentLocales___valueNode___id' |
  '_allContentLocales___valueNode___parent___id' |
  '_allContentLocales___valueNode___parent___children' |
  '_allContentLocales___valueNode___children' |
  '_allContentLocales___valueNode___children___id' |
  '_allContentLocales___valueNode___children___children' |
  '_allContentLocales___valueNode___internal___content' |
  '_allContentLocales___valueNode___internal___contentDigest' |
  '_allContentLocales___valueNode___internal___description' |
  '_allContentLocales___valueNode___internal___fieldOwners' |
  '_allContentLocales___valueNode___internal___ignoreType' |
  '_allContentLocales___valueNode___internal___mediaType' |
  '_allContentLocales___valueNode___internal___owner' |
  '_allContentLocales___valueNode___internal___type' |
  '_allContentLocales___valueNode___childMarkdownRemark___id' |
  '_allContentLocales___valueNode___childMarkdownRemark___excerpt' |
  '_allContentLocales___valueNode___childMarkdownRemark___rawMarkdownBody' |
  '_allContentLocales___valueNode___childMarkdownRemark___html' |
  '_allContentLocales___valueNode___childMarkdownRemark___htmlAst' |
  '_allContentLocales___valueNode___childMarkdownRemark___excerptAst' |
  '_allContentLocales___valueNode___childMarkdownRemark___headings' |
  '_allContentLocales___valueNode___childMarkdownRemark___timeToRead' |
  '_allContentLocales___valueNode___childMarkdownRemark___tableOfContents' |
  '_allContentLocales___valueNode___childMarkdownRemark___children' |
  'seo___title' |
  'seo___description' |
  'seo___twitterCard' |
  'seo___image___size' |
  'seo___image___width' |
  'seo___image___height' |
  'seo___image___path' |
  'seo___image___format' |
  'seo___image___isImage' |
  'seo___image___createdAt' |
  'seo___image___url' |
  'seo___image___notes' |
  'seo___image___author' |
  'seo___image___copyright' |
  'seo___image___originalId' |
  'seo___image___tags' |
  'seo___image___smartTags' |
  'seo___image___filename' |
  'seo___image___basename' |
  'seo___image___exifInfo' |
  'seo___image___mimeType' |
  'seo___image___colors' |
  'seo___image___colors___red' |
  'seo___image___colors___green' |
  'seo___image___colors___blue' |
  'seo___image___colors___alpha' |
  'seo___image___colors___rgb' |
  'seo___image___colors___hex' |
  'seo___image___blurhash' |
  'seo___image___video___muxPlaybackId' |
  'seo___image___video___frameRate' |
  'seo___image___video___duration' |
  'seo___image___video___streamingUrl' |
  'seo___image___video___thumbnailUrl' |
  'seo___image___video___mp4Url' |
  'seo___image___fluid___base64' |
  'seo___image___fluid___tracedSVG' |
  'seo___image___fluid___aspectRatio' |
  'seo___image___fluid___width' |
  'seo___image___fluid___height' |
  'seo___image___fluid___src' |
  'seo___image___fluid___srcSet' |
  'seo___image___fluid___sizes' |
  'seo___image___sizes___base64' |
  'seo___image___sizes___tracedSVG' |
  'seo___image___sizes___aspectRatio' |
  'seo___image___sizes___width' |
  'seo___image___sizes___height' |
  'seo___image___sizes___src' |
  'seo___image___sizes___srcSet' |
  'seo___image___sizes___sizes' |
  'seo___image___fixed___base64' |
  'seo___image___fixed___tracedSVG' |
  'seo___image___fixed___aspectRatio' |
  'seo___image___fixed___width' |
  'seo___image___fixed___height' |
  'seo___image___fixed___src' |
  'seo___image___fixed___srcSet' |
  'seo___image___fixed___sizes' |
  'seo___image___resolutions___base64' |
  'seo___image___resolutions___tracedSVG' |
  'seo___image___resolutions___aspectRatio' |
  'seo___image___resolutions___width' |
  'seo___image___resolutions___height' |
  'seo___image___resolutions___src' |
  'seo___image___resolutions___srcSet' |
  'seo___image___resolutions___sizes' |
  'seo___image___id' |
  'seo___image___parent___id' |
  'seo___image___parent___children' |
  'seo___image___children' |
  'seo___image___children___id' |
  'seo___image___children___children' |
  'seo___image___internal___content' |
  'seo___image___internal___contentDigest' |
  'seo___image___internal___description' |
  'seo___image___internal___fieldOwners' |
  'seo___image___internal___ignoreType' |
  'seo___image___internal___mediaType' |
  'seo___image___internal___owner' |
  'seo___image___internal___type' |
  'meta___createdAt' |
  'meta___updatedAt' |
  'meta___publishedAt' |
  'meta___firstPublishedAt' |
  'meta___isValid' |
  'meta___status' |
  'originalId' |
  'locale' |
  'seoMetaTags___tags' |
  'seoMetaTags___id' |
  'seoMetaTags___parent___id' |
  'seoMetaTags___parent___parent___id' |
  'seoMetaTags___parent___parent___children' |
  'seoMetaTags___parent___children' |
  'seoMetaTags___parent___children___id' |
  'seoMetaTags___parent___children___children' |
  'seoMetaTags___parent___internal___content' |
  'seoMetaTags___parent___internal___contentDigest' |
  'seoMetaTags___parent___internal___description' |
  'seoMetaTags___parent___internal___fieldOwners' |
  'seoMetaTags___parent___internal___ignoreType' |
  'seoMetaTags___parent___internal___mediaType' |
  'seoMetaTags___parent___internal___owner' |
  'seoMetaTags___parent___internal___type' |
  'seoMetaTags___children' |
  'seoMetaTags___children___id' |
  'seoMetaTags___children___parent___id' |
  'seoMetaTags___children___parent___children' |
  'seoMetaTags___children___children' |
  'seoMetaTags___children___children___id' |
  'seoMetaTags___children___children___children' |
  'seoMetaTags___children___internal___content' |
  'seoMetaTags___children___internal___contentDigest' |
  'seoMetaTags___children___internal___description' |
  'seoMetaTags___children___internal___fieldOwners' |
  'seoMetaTags___children___internal___ignoreType' |
  'seoMetaTags___children___internal___mediaType' |
  'seoMetaTags___children___internal___owner' |
  'seoMetaTags___children___internal___type' |
  'seoMetaTags___internal___content' |
  'seoMetaTags___internal___contentDigest' |
  'seoMetaTags___internal___description' |
  'seoMetaTags___internal___fieldOwners' |
  'seoMetaTags___internal___ignoreType' |
  'seoMetaTags___internal___mediaType' |
  'seoMetaTags___internal___owner' |
  'seoMetaTags___internal___type' |
  'model___name' |
  'model___singleton' |
  'model___sortable' |
  'model___apiKey' |
  'model___orderingDirection' |
  'model___tree' |
  'model___modularBlock' |
  'model___draftModeActive' |
  'model___allLocalesRequired' |
  'model___collectionAppeareance' |
  'model___hasSingletonItem' |
  'model___originalId' |
  'model___fields___tags' |
  'model___fields___id' |
  'model___fields___parent___id' |
  'model___fields___parent___children' |
  'model___fields___children' |
  'model___fields___children___id' |
  'model___fields___children___children' |
  'model___fields___internal___content' |
  'model___fields___internal___contentDigest' |
  'model___fields___internal___description' |
  'model___fields___internal___fieldOwners' |
  'model___fields___internal___ignoreType' |
  'model___fields___internal___mediaType' |
  'model___fields___internal___owner' |
  'model___fields___internal___type' |
  'model___id' |
  'model___parent___id' |
  'model___parent___parent___id' |
  'model___parent___parent___children' |
  'model___parent___children' |
  'model___parent___children___id' |
  'model___parent___children___children' |
  'model___parent___internal___content' |
  'model___parent___internal___contentDigest' |
  'model___parent___internal___description' |
  'model___parent___internal___fieldOwners' |
  'model___parent___internal___ignoreType' |
  'model___parent___internal___mediaType' |
  'model___parent___internal___owner' |
  'model___parent___internal___type' |
  'model___children' |
  'model___children___id' |
  'model___children___parent___id' |
  'model___children___parent___children' |
  'model___children___children' |
  'model___children___children___id' |
  'model___children___children___children' |
  'model___children___internal___content' |
  'model___children___internal___contentDigest' |
  'model___children___internal___description' |
  'model___children___internal___fieldOwners' |
  'model___children___internal___ignoreType' |
  'model___children___internal___mediaType' |
  'model___children___internal___owner' |
  'model___children___internal___type' |
  'model___internal___content' |
  'model___internal___contentDigest' |
  'model___internal___description' |
  'model___internal___fieldOwners' |
  'model___internal___ignoreType' |
  'model___internal___mediaType' |
  'model___internal___owner' |
  'model___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsArticleFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsFileFieldFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentNode?: Maybe<DatoCmsTextNodeFilterInput>;
  _allContentLocales?: Maybe<DatoCmsAllLocalesForDatoCmsArticleContentFilterListInput>;
  seo?: Maybe<DatoCmsSeoFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsArticleEdge>;
  nodes: Array<DatoCmsArticle>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsArticleSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAsset = Node & {
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DatoCmsAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsAssetGroupConnection>;
};


export type DatoCmsAssetConnectionDistinctArgs = {
  field: DatoCmsAssetFieldsEnum;
};


export type DatoCmsAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsAssetFieldsEnum;
};

export type DatoCmsAssetEdge = {
  next?: Maybe<DatoCmsAsset>;
  node: DatoCmsAsset;
  previous?: Maybe<DatoCmsAsset>;
};

export type DatoCmsAssetFieldsEnum = 
  'size' |
  'width' |
  'height' |
  'path' |
  'format' |
  'isImage' |
  'createdAt' |
  'url' |
  'notes' |
  'author' |
  'copyright' |
  'originalId' |
  'tags' |
  'smartTags' |
  'filename' |
  'basename' |
  'exifInfo' |
  'mimeType' |
  'colors' |
  'colors___red' |
  'colors___green' |
  'colors___blue' |
  'colors___alpha' |
  'colors___rgb' |
  'colors___hex' |
  'blurhash' |
  'video___muxPlaybackId' |
  'video___frameRate' |
  'video___duration' |
  'video___streamingUrl' |
  'video___thumbnailUrl' |
  'video___mp4Url' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___width' |
  'fluid___height' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___width' |
  'sizes___height' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___sizes' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___sizes' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___sizes' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsAssetFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsAssetEdge>;
  nodes: Array<DatoCmsAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsAssetSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsAssetVideo = {
  muxPlaybackId?: Maybe<Scalars['String']>;
  frameRate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  streamingUrl?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  mp4Url?: Maybe<Scalars['String']>;
};


export type DatoCmsAssetVideoThumbnailUrlArgs = {
  format?: Maybe<DatoCmsAssetVideoThumbnailFormat>;
};


export type DatoCmsAssetVideoMp4UrlArgs = {
  res?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
  exactRes?: Maybe<DatoCmsAssetVideoMp4ResolutionQuality>;
};

export type DatoCmsAssetVideoFilterInput = {
  muxPlaybackId?: Maybe<StringQueryOperatorInput>;
  frameRate?: Maybe<IntQueryOperatorInput>;
  duration?: Maybe<IntQueryOperatorInput>;
  streamingUrl?: Maybe<StringQueryOperatorInput>;
  thumbnailUrl?: Maybe<StringQueryOperatorInput>;
  mp4Url?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsAssetVideoMp4ResolutionQuality = 
  'low' |
  'medium' |
  'high';

export type DatoCmsAssetVideoThumbnailFormat = 
  'jpg' |
  'png' |
  'gif';

export type DatoCmsColorField = {
  red?: Maybe<Scalars['Int']>;
  green?: Maybe<Scalars['Int']>;
  blue?: Maybe<Scalars['Int']>;
  alpha?: Maybe<Scalars['Int']>;
  rgb?: Maybe<Scalars['String']>;
  hex?: Maybe<Scalars['String']>;
};

export type DatoCmsColorFieldFilterInput = {
  red?: Maybe<IntQueryOperatorInput>;
  green?: Maybe<IntQueryOperatorInput>;
  blue?: Maybe<IntQueryOperatorInput>;
  alpha?: Maybe<IntQueryOperatorInput>;
  rgb?: Maybe<StringQueryOperatorInput>;
  hex?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsColorFieldFilterListInput = {
  elemMatch?: Maybe<DatoCmsColorFieldFilterInput>;
};

export type DatoCmsFaviconMetaTags = Node & {
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFaviconMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsFaviconMetaTagsGroupConnection>;
};


export type DatoCmsFaviconMetaTagsConnectionDistinctArgs = {
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};


export type DatoCmsFaviconMetaTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsFaviconMetaTagsFieldsEnum;
};

export type DatoCmsFaviconMetaTagsEdge = {
  next?: Maybe<DatoCmsFaviconMetaTags>;
  node: DatoCmsFaviconMetaTags;
  previous?: Maybe<DatoCmsFaviconMetaTags>;
};

export type DatoCmsFaviconMetaTagsFieldsEnum = 
  'tags' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsFaviconMetaTagsFilterInput = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsFaviconMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFaviconMetaTagsEdge>;
  nodes: Array<DatoCmsFaviconMetaTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsFaviconMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFaviconMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsField = Node & {
  label?: Maybe<Scalars['String']>;
  fieldType?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  localized?: Maybe<Scalars['Boolean']>;
  validators?: Maybe<Scalars['JSON']>;
  position?: Maybe<Scalars['Int']>;
  appeareance?: Maybe<Scalars['JSON']>;
  defaultValue?: Maybe<Scalars['JSON']>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsFieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsFieldGroupConnection>;
};


export type DatoCmsFieldConnectionDistinctArgs = {
  field: DatoCmsFieldFieldsEnum;
};


export type DatoCmsFieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsFieldFieldsEnum;
};

export type DatoCmsFieldEdge = {
  next?: Maybe<DatoCmsField>;
  node: DatoCmsField;
  previous?: Maybe<DatoCmsField>;
};

export type DatoCmsFieldFieldsEnum = 
  'label' |
  'fieldType' |
  'apiKey' |
  'localized' |
  'validators' |
  'position' |
  'appeareance' |
  'defaultValue' |
  'originalId' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsFieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsFieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsFieldEdge>;
  nodes: Array<DatoCmsField>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsFieldSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsFieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsFileField = {
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  isImage?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  originalId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  smartTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  filename?: Maybe<Scalars['String']>;
  basename?: Maybe<Scalars['String']>;
  exifInfo?: Maybe<Scalars['JSON']>;
  mimeType?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<DatoCmsColorField>>>;
  blurhash?: Maybe<Scalars['String']>;
  video?: Maybe<DatoCmsAssetVideo>;
  fluid?: Maybe<DatoCmsFluid>;
  sizes?: Maybe<DatoCmsFluid>;
  fixed?: Maybe<DatoCmsFixed>;
  resolutions?: Maybe<DatoCmsFixed>;
  alt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['JSON']>;
};


export type DatoCmsFileFieldCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsFileFieldFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  sizes?: Maybe<Scalars['String']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};


export type DatoCmsFileFieldResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<DatoCmsImgixParams>;
};

export type DatoCmsFileFieldFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  customData?: Maybe<JsonQueryOperatorInput>;
};

export type DatoCmsFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Int'];
  height: Scalars['Int'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes?: Maybe<Scalars['String']>;
};

export type DatoCmsFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  sizes: Scalars['String'];
};

export type DatoCmsFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsGlobalSeo = {
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<DatoCmsSeoField>;
};

export type DatoCmsGlobalSeoFilterInput = {
  siteName?: Maybe<StringQueryOperatorInput>;
  titleSuffix?: Maybe<StringQueryOperatorInput>;
  twitterAccount?: Maybe<StringQueryOperatorInput>;
  facebookPageUrl?: Maybe<StringQueryOperatorInput>;
  fallbackSeo?: Maybe<DatoCmsSeoFieldFilterInput>;
};

export type DatoCmsImgixParams = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image (undefined) */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. (https://docs.imgix.com/apis/url/auto) */
  auto?: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. (https://docs.imgix.com/apis/url/bg) */
  bg?: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. (https://docs.imgix.com/apis/url/blending/blend-align) */
  blendAlign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. (https://docs.imgix.com/apis/url/blending/blend-alpha) */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Specifies the type of crop for blend images. (https://docs.imgix.com/apis/url/blending/blend-crop) */
  blendCrop?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. (https://docs.imgix.com/apis/url/blending/blend-fit) */
  blendFit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. (https://docs.imgix.com/apis/url/blending/blend-h) */
  blendH?: Maybe<Scalars['String']>;
  /** Sets the blend mode for a blend image. (https://docs.imgix.com/apis/url/blending/blend-mode) */
  blendMode?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. (https://docs.imgix.com/apis/url/blending/blend-pad) */
  blendPad?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. (https://docs.imgix.com/apis/url/blending/blend-size) */
  blendSize?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. (https://docs.imgix.com/apis/url/blending/blend-w) */
  blendW?: Maybe<Scalars['String']>;
  /** Adjusts the x-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-x) */
  blendX?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. (https://docs.imgix.com/apis/url/blending/blend-y) */
  blendY?: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. (https://docs.imgix.com/apis/url/blending/blend) */
  blend?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. (https://docs.imgix.com/apis/url/stylize/blur) */
  blur?: Maybe<Scalars['Int']>;
  /**
   * Sets the inner radius of the image's border in pixels.
   * (https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. (https://docs.imgix.com/apis/url/border-and-padding/border-radius) */
  borderRadius?: Maybe<Scalars['String']>;
  /** Applies a border to an image. (https://docs.imgix.com/apis/url/border-and-padding/border) */
  border?: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. (https://docs.imgix.com/apis/url/adjustment/bri) */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers (https://docs.imgix.com/apis/url/format/ch) */
  ch?: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. (https://docs.imgix.com/apis/url/format/chromasub) */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. (https://docs.imgix.com/apis/url/format/colorquant) */
  colorquant?: Maybe<Scalars['Int']>;
  /**
   * Specifies how many colors to include in a palette-extraction response.
   * (https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. (https://docs.imgix.com/apis/url/adjustment/con) */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. (https://docs.imgix.com/apis/url/mask/corner-radius) */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. (https://docs.imgix.com/apis/url/size/crop) */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. (https://docs.imgix.com/apis/url/format/cs) */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. (https://docs.imgix.com/apis/url/format/dl) */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. (https://docs.imgix.com/apis/url/format/dpi) */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. (https://docs.imgix.com/apis/url/dpr) */
  dpr?: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. (https://docs.imgix.com/apis/url/stylize/duotone-alpha) */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. (https://docs.imgix.com/apis/url/stylize/duotone) */
  duotone?: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. (https://docs.imgix.com/apis/url/adjustment/exp) */
  exp?: Maybe<Scalars['Int']>;
  /**
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that
   * time will output a 404 status code. (https://docs.imgix.com/apis/url/expires)
   */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. (https://docs.imgix.com/apis/url/face-detection/faceindex) */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. (https://docs.imgix.com/apis/url/face-detection/facepad) */
  facepad?: Maybe<Scalars['Float']>;
  /**
   * Specifies that face data should be included in output when combined with
   * `fm=json`. (https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: Maybe<Scalars['Int']>;
  /**
   * Sets the fill color for images with additional space created by the fit
   * setting (https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting (https://docs.imgix.com/apis/url/fill/fill) */
  fill?: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. (https://docs.imgix.com/apis/url/size/fit) */
  fit?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. (https://docs.imgix.com/apis/url/rotation/flip) */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. (https://docs.imgix.com/apis/url/format/fm) */
  fm?: Maybe<Scalars['String']>;
  /**
   * Displays crosshairs identifying the location of the set focal point
   * (https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-x) */
  fpX?: Maybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-y) */
  fpY?: Maybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image (https://docs.imgix.com/apis/url/focalpoint-crop/fp-z) */
  fpZ?: Maybe<Scalars['Int']>;
  /** Adjusts the gamma of the source image. (https://docs.imgix.com/apis/url/adjustment/gam) */
  gam?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. (https://docs.imgix.com/apis/url/size/h) */
  h?: Maybe<Scalars['String']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/high) */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. (https://docs.imgix.com/apis/url/stylize/htn) */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. (https://docs.imgix.com/apis/url/adjustment/hue) */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. (https://docs.imgix.com/apis/url/adjustment/invert) */
  invert?: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. (https://docs.imgix.com/apis/url/format/lossless) */
  lossless?: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. (https://docs.imgix.com/apis/url/watermark/mark-align) */
  markAlign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-alpha) */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-base) */
  markBase?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. (https://docs.imgix.com/apis/url/watermark/mark-fit) */
  markFit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-h) */
  markH?: Maybe<Scalars['String']>;
  /** Applies padding to the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-pad) */
  markPad?: Maybe<Scalars['Int']>;
  /** Adjusts the scale of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-scale) */
  markScale?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark-w) */
  markW?: Maybe<Scalars['String']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-x) */
  markX?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. (https://docs.imgix.com/apis/url/watermark/mark-y) */
  markY?: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. (https://docs.imgix.com/apis/url/watermark/mark) */
  mark?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. (https://docs.imgix.com/apis/url/mask) */
  mask?: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images (https://docs.imgix.com/apis/url/mask/mask-bg) */
  maskbg?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-height) */
  maxH?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/max-width) */
  maxW?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-height) */
  minH?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. (https://docs.imgix.com/apis/url/size/min-width) */
  minW?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. (https://docs.imgix.com/apis/url/stylize/monochrome) */
  monochrome?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. (https://docs.imgix.com/apis/url/noise-reduction/nr) */
  nr?: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. (https://docs.imgix.com/apis/url/noise-reduction/nrs) */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. (https://docs.imgix.com/apis/url/rotation/orient) */
  orient?: Maybe<Scalars['Int']>;
  /** Pads an image. (https://docs.imgix.com/apis/url/border-and-padding/pad) */
  pad?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. (https://docs.imgix.com/apis/url/pdf-page-number) */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. (https://docs.imgix.com/apis/url/color-palette/palette) */
  palette?: Maybe<Scalars['String']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. (https://docs.imgix.com/apis/url/color-palette/prefix) */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. (https://docs.imgix.com/apis/url/stylize/px) */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. (https://docs.imgix.com/apis/url/format/q) */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. (https://docs.imgix.com/apis/url/size/rect) */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. (https://docs.imgix.com/apis/url/rotation/rot) */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. (https://docs.imgix.com/apis/url/adjustment/sat) */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. (https://docs.imgix.com/apis/url/stylize/sepia) */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. (https://docs.imgix.com/apis/url/adjustment/shad) */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. (https://docs.imgix.com/apis/url/adjustment/sharp) */
  sharp?: Maybe<Scalars['Float']>;
  /** Specifies a trim color on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-color) */
  trimColor?: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-md) */
  trimMd?: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. (https://docs.imgix.com/apis/url/trim/trim-pad) */
  trimPad?: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-sd) */
  trimSd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. (https://docs.imgix.com/apis/url/trim/trim-tol) */
  trimTol?: Maybe<Scalars['Float']>;
  /** Trims the source image. (https://docs.imgix.com/apis/url/trim/trim) */
  trim?: Maybe<Scalars['String']>;
  /**
   * Sets the vertical and horizontal alignment of rendered text relative to the
   * base image. (https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. (https://docs.imgix.com/apis/url/text/txt-clip) */
  txtClip?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. (https://docs.imgix.com/apis/url/text/txt-color) */
  txtColor?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. (https://docs.imgix.com/apis/url/text/txt-fit) */
  txtFit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. (https://docs.imgix.com/apis/url/text/txt-font) */
  txtFont?: Maybe<Scalars['String']>;
  /**
   * Sets the leading (line spacing) for rendered text. Only works on the
   * multi-line text endpoint.
   * (https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution (https://docs.imgix.com/apis/url/text/txt-lig) */
  txtLig?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. (https://docs.imgix.com/apis/url/text/txt-line-color) */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. (https://docs.imgix.com/apis/url/text/txt-line) */
  txtLine?: Maybe<Scalars['Int']>;
  /**
   * Specifies the padding (in device-independent pixels) between a textbox and the
   * edges of the base image. (https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. (https://docs.imgix.com/apis/url/text/txt-shad) */
  txtShad?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. (https://docs.imgix.com/apis/url/text/txt-size) */
  txtSize?: Maybe<Scalars['Int']>;
  /**
   * Sets the tracking (letter spacing) for rendered text. Only works on the
   * multi-line text endpoint.
   * (https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. (https://docs.imgix.com/apis/url/text/txt-width) */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Sets the text string to render. (https://docs.imgix.com/apis/url/text/txt) */
  txt?: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. (https://docs.imgix.com/apis/url/adjustment/usm) */
  usm?: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. (https://docs.imgix.com/apis/url/adjustment/usmrad) */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. (https://docs.imgix.com/apis/url/adjustment/vib) */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. (https://docs.imgix.com/apis/url/size/w) */
  w?: Maybe<Scalars['String']>;
};

export type DatoCmsLatLonField = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type DatoCmsMetaField = {
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  publishedAt?: Maybe<Scalars['Date']>;
  firstPublishedAt?: Maybe<Scalars['Date']>;
  isValid?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DatoCmsMetaFieldFirstPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DatoCmsMetaFieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  firstPublishedAt?: Maybe<DateQueryOperatorInput>;
  isValid?: Maybe<BooleanQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
};

export type DatoCmsModel = Node & {
  name?: Maybe<Scalars['String']>;
  singleton?: Maybe<Scalars['Boolean']>;
  sortable?: Maybe<Scalars['Boolean']>;
  apiKey?: Maybe<Scalars['String']>;
  orderingDirection?: Maybe<Scalars['String']>;
  tree?: Maybe<Scalars['Boolean']>;
  modularBlock?: Maybe<Scalars['Boolean']>;
  draftModeActive?: Maybe<Scalars['Boolean']>;
  allLocalesRequired?: Maybe<Scalars['Boolean']>;
  collectionAppeareance?: Maybe<Scalars['String']>;
  hasSingletonItem?: Maybe<Scalars['Boolean']>;
  originalId?: Maybe<Scalars['String']>;
  fields?: Maybe<DatoCmsFaviconMetaTags>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsModelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsModelGroupConnection>;
};


export type DatoCmsModelConnectionDistinctArgs = {
  field: DatoCmsModelFieldsEnum;
};


export type DatoCmsModelConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsModelFieldsEnum;
};

export type DatoCmsModelEdge = {
  next?: Maybe<DatoCmsModel>;
  node: DatoCmsModel;
  previous?: Maybe<DatoCmsModel>;
};

export type DatoCmsModelFieldsEnum = 
  'name' |
  'singleton' |
  'sortable' |
  'apiKey' |
  'orderingDirection' |
  'tree' |
  'modularBlock' |
  'draftModeActive' |
  'allLocalesRequired' |
  'collectionAppeareance' |
  'hasSingletonItem' |
  'originalId' |
  'fields___tags' |
  'fields___id' |
  'fields___parent___id' |
  'fields___parent___parent___id' |
  'fields___parent___parent___children' |
  'fields___parent___children' |
  'fields___parent___children___id' |
  'fields___parent___children___children' |
  'fields___parent___internal___content' |
  'fields___parent___internal___contentDigest' |
  'fields___parent___internal___description' |
  'fields___parent___internal___fieldOwners' |
  'fields___parent___internal___ignoreType' |
  'fields___parent___internal___mediaType' |
  'fields___parent___internal___owner' |
  'fields___parent___internal___type' |
  'fields___children' |
  'fields___children___id' |
  'fields___children___parent___id' |
  'fields___children___parent___children' |
  'fields___children___children' |
  'fields___children___children___id' |
  'fields___children___children___children' |
  'fields___children___internal___content' |
  'fields___children___internal___contentDigest' |
  'fields___children___internal___description' |
  'fields___children___internal___fieldOwners' |
  'fields___children___internal___ignoreType' |
  'fields___children___internal___mediaType' |
  'fields___children___internal___owner' |
  'fields___children___internal___type' |
  'fields___internal___content' |
  'fields___internal___contentDigest' |
  'fields___internal___description' |
  'fields___internal___fieldOwners' |
  'fields___internal___ignoreType' |
  'fields___internal___mediaType' |
  'fields___internal___owner' |
  'fields___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsModelFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsModelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsModelEdge>;
  nodes: Array<DatoCmsModel>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsModelSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsModelFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSeoField = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
  image?: Maybe<DatoCmsAsset>;
};

export type DatoCmsSeoFieldFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  twitterCard?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsAssetFilterInput>;
};

export type DatoCmsSeoMetaTags = Node & {
  tags?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSeoMetaTagsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsSeoMetaTagsGroupConnection>;
};


export type DatoCmsSeoMetaTagsConnectionDistinctArgs = {
  field: DatoCmsSeoMetaTagsFieldsEnum;
};


export type DatoCmsSeoMetaTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSeoMetaTagsFieldsEnum;
};

export type DatoCmsSeoMetaTagsEdge = {
  next?: Maybe<DatoCmsSeoMetaTags>;
  node: DatoCmsSeoMetaTags;
  previous?: Maybe<DatoCmsSeoMetaTags>;
};

export type DatoCmsSeoMetaTagsFieldsEnum = 
  'tags' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsSeoMetaTagsFilterInput = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSeoMetaTagsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSeoMetaTagsEdge>;
  nodes: Array<DatoCmsSeoMetaTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsSeoMetaTagsSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSeoMetaTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsSite = Node & {
  name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  domain?: Maybe<Scalars['String']>;
  internalDomain?: Maybe<Scalars['String']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  globalSeo?: Maybe<DatoCmsGlobalSeo>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  originalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DatoCmsSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsSiteGroupConnection>;
};


export type DatoCmsSiteConnectionDistinctArgs = {
  field: DatoCmsSiteFieldsEnum;
};


export type DatoCmsSiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsSiteFieldsEnum;
};

export type DatoCmsSiteEdge = {
  next?: Maybe<DatoCmsSite>;
  node: DatoCmsSite;
  previous?: Maybe<DatoCmsSite>;
};

export type DatoCmsSiteFieldsEnum = 
  'name' |
  'locale' |
  'locales' |
  'domain' |
  'internalDomain' |
  'noIndex' |
  'globalSeo___siteName' |
  'globalSeo___titleSuffix' |
  'globalSeo___twitterAccount' |
  'globalSeo___facebookPageUrl' |
  'globalSeo___fallbackSeo___title' |
  'globalSeo___fallbackSeo___description' |
  'globalSeo___fallbackSeo___twitterCard' |
  'globalSeo___fallbackSeo___image___size' |
  'globalSeo___fallbackSeo___image___width' |
  'globalSeo___fallbackSeo___image___height' |
  'globalSeo___fallbackSeo___image___path' |
  'globalSeo___fallbackSeo___image___format' |
  'globalSeo___fallbackSeo___image___isImage' |
  'globalSeo___fallbackSeo___image___createdAt' |
  'globalSeo___fallbackSeo___image___url' |
  'globalSeo___fallbackSeo___image___notes' |
  'globalSeo___fallbackSeo___image___author' |
  'globalSeo___fallbackSeo___image___copyright' |
  'globalSeo___fallbackSeo___image___originalId' |
  'globalSeo___fallbackSeo___image___tags' |
  'globalSeo___fallbackSeo___image___smartTags' |
  'globalSeo___fallbackSeo___image___filename' |
  'globalSeo___fallbackSeo___image___basename' |
  'globalSeo___fallbackSeo___image___exifInfo' |
  'globalSeo___fallbackSeo___image___mimeType' |
  'globalSeo___fallbackSeo___image___colors' |
  'globalSeo___fallbackSeo___image___blurhash' |
  'globalSeo___fallbackSeo___image___id' |
  'globalSeo___fallbackSeo___image___children' |
  'faviconMetaTags___tags' |
  'faviconMetaTags___id' |
  'faviconMetaTags___parent___id' |
  'faviconMetaTags___parent___parent___id' |
  'faviconMetaTags___parent___parent___children' |
  'faviconMetaTags___parent___children' |
  'faviconMetaTags___parent___children___id' |
  'faviconMetaTags___parent___children___children' |
  'faviconMetaTags___parent___internal___content' |
  'faviconMetaTags___parent___internal___contentDigest' |
  'faviconMetaTags___parent___internal___description' |
  'faviconMetaTags___parent___internal___fieldOwners' |
  'faviconMetaTags___parent___internal___ignoreType' |
  'faviconMetaTags___parent___internal___mediaType' |
  'faviconMetaTags___parent___internal___owner' |
  'faviconMetaTags___parent___internal___type' |
  'faviconMetaTags___children' |
  'faviconMetaTags___children___id' |
  'faviconMetaTags___children___parent___id' |
  'faviconMetaTags___children___parent___children' |
  'faviconMetaTags___children___children' |
  'faviconMetaTags___children___children___id' |
  'faviconMetaTags___children___children___children' |
  'faviconMetaTags___children___internal___content' |
  'faviconMetaTags___children___internal___contentDigest' |
  'faviconMetaTags___children___internal___description' |
  'faviconMetaTags___children___internal___fieldOwners' |
  'faviconMetaTags___children___internal___ignoreType' |
  'faviconMetaTags___children___internal___mediaType' |
  'faviconMetaTags___children___internal___owner' |
  'faviconMetaTags___children___internal___type' |
  'faviconMetaTags___internal___content' |
  'faviconMetaTags___internal___contentDigest' |
  'faviconMetaTags___internal___description' |
  'faviconMetaTags___internal___fieldOwners' |
  'faviconMetaTags___internal___ignoreType' |
  'faviconMetaTags___internal___mediaType' |
  'faviconMetaTags___internal___owner' |
  'faviconMetaTags___internal___type' |
  'originalId' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DatoCmsSiteFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DatoCmsSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsSiteEdge>;
  nodes: Array<DatoCmsSite>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsSiteSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsSiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type DatoCmsTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DatoCmsTextNodeGroupConnection>;
};


export type DatoCmsTextNodeConnectionDistinctArgs = {
  field: DatoCmsTextNodeFieldsEnum;
};


export type DatoCmsTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DatoCmsTextNodeFieldsEnum;
};

export type DatoCmsTextNodeEdge = {
  next?: Maybe<DatoCmsTextNode>;
  node: DatoCmsTextNode;
  previous?: Maybe<DatoCmsTextNode>;
};

export type DatoCmsTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type DatoCmsTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type DatoCmsTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DatoCmsTextNodeEdge>;
  nodes: Array<DatoCmsTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DatoCmsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<DatoCmsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DatoCmsVideoField = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerUid?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'excerpt' |
  'rawMarkdownBody' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  datoCmsSeoMetaTags?: Maybe<DatoCmsSeoMetaTags>;
  allDatoCmsSeoMetaTags: DatoCmsSeoMetaTagsConnection;
  datoCmsTextNode?: Maybe<DatoCmsTextNode>;
  allDatoCmsTextNode: DatoCmsTextNodeConnection;
  datoCmsArticle?: Maybe<DatoCmsArticle>;
  allDatoCmsArticle: DatoCmsArticleConnection;
  datoCmsAsset?: Maybe<DatoCmsAsset>;
  allDatoCmsAsset: DatoCmsAssetConnection;
  datoCmsSite?: Maybe<DatoCmsSite>;
  allDatoCmsSite: DatoCmsSiteConnection;
  datoCmsFaviconMetaTags?: Maybe<DatoCmsFaviconMetaTags>;
  allDatoCmsFaviconMetaTags: DatoCmsFaviconMetaTagsConnection;
  datoCmsField?: Maybe<DatoCmsField>;
  allDatoCmsField: DatoCmsFieldConnection;
  datoCmsModel?: Maybe<DatoCmsModel>;
  allDatoCmsModel: DatoCmsModelConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsSeoMetaTagsArgs = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSeoMetaTagsArgs = {
  filter?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  sort?: Maybe<DatoCmsSeoMetaTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllDatoCmsTextNodeArgs = {
  filter?: Maybe<DatoCmsTextNodeFilterInput>;
  sort?: Maybe<DatoCmsTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsArticleArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<DatoCmsFileFieldFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  contentNode?: Maybe<DatoCmsTextNodeFilterInput>;
  _allContentLocales?: Maybe<DatoCmsAllLocalesForDatoCmsArticleContentFilterListInput>;
  seo?: Maybe<DatoCmsSeoFieldFilterInput>;
  meta?: Maybe<DatoCmsMetaFieldFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  seoMetaTags?: Maybe<DatoCmsSeoMetaTagsFilterInput>;
  model?: Maybe<DatoCmsModelFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsArticleArgs = {
  filter?: Maybe<DatoCmsArticleFilterInput>;
  sort?: Maybe<DatoCmsArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsAssetArgs = {
  size?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  isImage?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  notes?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  smartTags?: Maybe<StringQueryOperatorInput>;
  filename?: Maybe<StringQueryOperatorInput>;
  basename?: Maybe<StringQueryOperatorInput>;
  exifInfo?: Maybe<JsonQueryOperatorInput>;
  mimeType?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<DatoCmsColorFieldFilterListInput>;
  blurhash?: Maybe<StringQueryOperatorInput>;
  video?: Maybe<DatoCmsAssetVideoFilterInput>;
  fluid?: Maybe<DatoCmsFluidFilterInput>;
  sizes?: Maybe<DatoCmsFluidFilterInput>;
  fixed?: Maybe<DatoCmsFixedFilterInput>;
  resolutions?: Maybe<DatoCmsFixedFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsAssetArgs = {
  filter?: Maybe<DatoCmsAssetFilterInput>;
  sort?: Maybe<DatoCmsAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsSiteArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  locales?: Maybe<StringQueryOperatorInput>;
  domain?: Maybe<StringQueryOperatorInput>;
  internalDomain?: Maybe<StringQueryOperatorInput>;
  noIndex?: Maybe<BooleanQueryOperatorInput>;
  globalSeo?: Maybe<DatoCmsGlobalSeoFilterInput>;
  faviconMetaTags?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsSiteArgs = {
  filter?: Maybe<DatoCmsSiteFilterInput>;
  sort?: Maybe<DatoCmsSiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsFaviconMetaTagsArgs = {
  tags?: Maybe<JsonQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFaviconMetaTagsArgs = {
  filter?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  sort?: Maybe<DatoCmsFaviconMetaTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsFieldArgs = {
  label?: Maybe<StringQueryOperatorInput>;
  fieldType?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  localized?: Maybe<BooleanQueryOperatorInput>;
  validators?: Maybe<JsonQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  appeareance?: Maybe<JsonQueryOperatorInput>;
  defaultValue?: Maybe<JsonQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsFieldArgs = {
  filter?: Maybe<DatoCmsFieldFilterInput>;
  sort?: Maybe<DatoCmsFieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDatoCmsModelArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  singleton?: Maybe<BooleanQueryOperatorInput>;
  sortable?: Maybe<BooleanQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  orderingDirection?: Maybe<StringQueryOperatorInput>;
  tree?: Maybe<BooleanQueryOperatorInput>;
  modularBlock?: Maybe<BooleanQueryOperatorInput>;
  draftModeActive?: Maybe<BooleanQueryOperatorInput>;
  allLocalesRequired?: Maybe<BooleanQueryOperatorInput>;
  collectionAppeareance?: Maybe<StringQueryOperatorInput>;
  hasSingletonItem?: Maybe<BooleanQueryOperatorInput>;
  originalId?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<DatoCmsFaviconMetaTagsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDatoCmsModelArgs = {
  filter?: Maybe<DatoCmsModelFilterInput>;
  sort?: Maybe<DatoCmsModelSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___title' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___apiToken' |
  'pluginCreator___pluginOptions___previewMode' |
  'pluginCreator___pluginOptions___localeFallbacks___da' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___apiToken' |
  'pluginOptions___previewMode' |
  'pluginOptions___localeFallbacks___da' |
  'pluginOptions___path' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  apiToken?: Maybe<Scalars['String']>;
  previewMode?: Maybe<Scalars['Boolean']>;
  localeFallbacks?: Maybe<SitePluginPluginOptionsLocaleFallbacks>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  apiToken?: Maybe<StringQueryOperatorInput>;
  previewMode?: Maybe<BooleanQueryOperatorInput>;
  localeFallbacks?: Maybe<SitePluginPluginOptionsLocaleFallbacksFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsLocaleFallbacks = {
  da?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsLocaleFallbacksFilterInput = {
  da?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type LayoutQueryVariables = {};


export type LayoutQuery = { datoCmsSite?: Maybe<{ globalSeo?: Maybe<Pick<DatoCmsGlobalSeo, 'siteName'>>, faviconMetaTags?: Maybe<GatsbyDatoCmsFaviconMetaTagsFragment> }> };

export type IndexPageQueryVariables = {};


export type IndexPageQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type ArticleQueryVariables = {
  slug: Scalars['String'];
};


export type ArticleQuery = { datoCmsArticle?: Maybe<(
    Pick<DatoCmsArticle, 'title'>
    & { seoMetaTags?: Maybe<GatsbyDatoCmsSeoMetaTagsFragment>, contentNode?: Maybe<{ childMarkdownRemark?: Maybe<Pick<MarkdownRemark, 'html'>> }> }
  )> };

export type GatsbyDatoCmsResolutionsFragment = Pick<DatoCmsFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyDatoCmsResolutions_TracedSvgFragment = Pick<DatoCmsFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyDatoCmsResolutions_NoBase64Fragment = Pick<DatoCmsFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyDatoCmsSizesFragment = Pick<DatoCmsFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyDatoCmsSizes_TracedSvgFragment = Pick<DatoCmsFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyDatoCmsSizes_NoBase64Fragment = Pick<DatoCmsFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyDatoCmsFixedFragment = Pick<DatoCmsFixed, 'base64' | 'width' | 'height' | 'aspectRatio' | 'src' | 'srcSet'>;

export type GatsbyDatoCmsFixed_TracedSvgFragment = Pick<DatoCmsFixed, 'tracedSVG' | 'width' | 'height' | 'aspectRatio' | 'src' | 'srcSet'>;

export type GatsbyDatoCmsFixed_NoBase64Fragment = Pick<DatoCmsFixed, 'width' | 'height' | 'src' | 'srcSet' | 'aspectRatio'>;

export type GatsbyDatoCmsFluidFragment = Pick<DatoCmsFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyDatoCmsFluid_TracedSvgFragment = Pick<DatoCmsFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyDatoCmsFluid_NoBase64Fragment = Pick<DatoCmsFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyDatoCmsFaviconMetaTagsFragment = Pick<DatoCmsFaviconMetaTags, 'tags'>;

export type GatsbyDatoCmsSeoMetaTagsFragment = Pick<DatoCmsSeoMetaTags, 'tags'>;
