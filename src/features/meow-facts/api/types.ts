export type MeowFactsParams = { lang: string, count: number }

export type MeowFact = {
  status: {
    verified: null | string | boolean;
    sentCount: number;
  }
  _id: string,
  user: string,
  text: string,
  type: string,
  deleted: false,
  createdAt: string,
  updatedAt: string,
  __v: number;
}

export type DetailMeowFact = {
  status: {
    verified: null | string | boolean,
    sentCount: 0
  },
  _id: string,
  user: {
    name: {
      first: string,
      last: string
    },
    _id: string,
    photo: string,
  },
  text: string,
  type: boolean,
  deleted: false,
  createdAt: string,
  updatedAt: string,
  __v: 0
}
