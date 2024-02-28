import MD5 from 'crypto-js/md5'

const secretKey = "meow";

const getKey = (str: string): string => {
  return MD5(`${str}${secretKey}`).toString();
}

export { getKey };