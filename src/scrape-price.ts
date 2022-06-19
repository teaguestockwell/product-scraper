import { amazon } from './retailers';
import { scrapeMeta } from './common';
import { ScrapeMeta, getNullScrapeMeta } from './types';
import { merge } from 'lodash';

const importantFields: (keyof ScrapeMeta)[] = ['price', 'title', 'url'];

const hasImportantFields = (meta: ScrapeMeta): boolean => {
  return importantFields.every(field => !!meta[field]);
};

const getNullishMeta = (url: string) => {
  const { meta, ...rest } = getNullScrapeMeta(url);
  return rest;
};

const getExpo = (backOffCoefficient: number) => {
  let backOff = 1;
  return {
    wait: async () => {
      backOff **= backOffCoefficient;
      await new Promise(resolve => setTimeout(resolve, backOff));
    },
  };
};

export type DispatchOptions = {
  url: string;
  backOffCoefficient: number;
};

export const scrapePrice = async (options: DispatchOptions) => {
  const { url, backOffCoefficient } = options;
  const hostName = new URL(url).hostname;

  if (hostName.includes('amazon')) {
    return amazon(options.url);
  }

  let merged = getNullishMeta(url);
  const expo = getExpo(backOffCoefficient);

  merged = merge(
    merged,
    await scrapeMeta({
      url,
      type: 'cli',
      wait: 0,
    }).catch()
  );

  if (hasImportantFields(merged)) {
    return merged;
  }

  await expo.wait()

  merged = merge(
    merged,
    await scrapeMeta({
      url,
      type: 'headless',
      wait: 100,
    }).catch()
  );

  if (hasImportantFields(merged)) {
    return merged;
  }

  await expo.wait()

  merged = merge(
    merged,
    await scrapeMeta({
      url,
      type: 'headed',
      wait: 300,
    }).catch()
  );

  if (hasImportantFields(merged)) {
    return merged;
  }

  await expo.wait()

  merged = merge(
    merged,
    await scrapeMeta({
      url,
      type: 'headed',
      wait: 1000,
    }).catch()
  );

  return merged;
};
