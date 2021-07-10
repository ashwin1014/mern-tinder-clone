/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
// code adapted from https://themeteorchef.com/tutorials/reusable-seo-with-react-helmet

import React, { memo } from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { getUrlPathName } from '@utils/common';

const absoluteUrl = (path) => `https://mysite.com${path}`;

const getMetaTags = ({ title, description, url, contentType, published, updated, category, tags, twitter, image, amount, pincode, phonenumber, address, region }) => {
  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },
    { name: 'twitter:site', content: '@Bosqydotcom' },
    { name: 'twitter:title', content: 'Bosqy - Nursery Online. Buy and sell all types of gardening products all over India' },
    {
      name: 'twitter:description',
      content:
        'This one is for the plant loving community. Shop your favorite plants, buy those perfect planters, some fertilizer to nourish your plant babies. There is so much more once you deep dive in. Serving all across India'
    },
    { name: 'twitter:creator', content: twitter || '@Bosqydotcom' },
    { name: 'og:title', content: `${title} | bosqy.com` },
    { name: 'og:type', content: contentType },
    { name: 'og:url', content: url },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: 'bosqy.com' },
    { name: 'og:locale', content: 'en_EN' }
    // { name: 'fb:app_id', content: '<FB App ID>' },
  ];

  if (published) metaTags.push({ name: 'article:published_time', content: published });
  if (updated) metaTags.push({ name: 'article:modified_time', content: updated });
  if (category) metaTags.push({ name: 'article:section', content: category });
  if (tags) metaTags.push({ name: 'article:tag', content: tags });
  if (image) {
    metaTags.push({ itemprop: 'image', content: image });
    metaTags.push({ name: 'twitter:image:src', content: image });
    metaTags.push({ name: 'og:image', content: image });
    metaTags.push({ name: 'twitter:card', content: 'summary_large_image' });
  } else {
    metaTags.push({ name: 'twitter:card', content: 'summary' });
  }
  if (amount) {
    metaTags.push({ name: 'og:price:currency', content: 'INR' });
    metaTags.push({ name: 'og:price:amount', content: amount });
  }
  if (pincode) {
    metaTags.push({ name: 'og:postal-code', content: pincode });
  }

  if (phonenumber) {
    metaTags.push({ name: 'og:phonenumber', content: phonenumber });
  }

  if (address) {
    metaTags.push({ name: 'og:street-address', content: address });
  }

  if (region) {
    metaTags.push({ name: 'og:region', content: region });
    metaTags.push({ name: 'geo.region', content: region });
    // metaTags.push({ name: 'geo.placename', content: region });
  }

  return metaTags;
};

const getHtmlAttributes = ({ schema }) => {
  let result = {
    lang: 'en'
  };
  if (schema) {
    result = {
      ...result,
      itemscope: undefined,
      itemtype: `http://schema.org/${schema}`
    };
  }
  return result;
};

getHtmlAttributes.propTypes = {
  schema: PropTypes.string
};

const Seo = ({ schema, title, description, path, contentType, published, updated, category, tags, twitter, image, amount, pincode, phonenumber, address, region }) => (
  <Helmet
    htmlAttributes={getHtmlAttributes({
      schema
    })}
    title={title}
    defaultTitle='Bosqy'
    link={[{ rel: 'canonical', href: absoluteUrl(path) }]}
    meta={getMetaTags({
      title,
      description,
      contentType,
      url: absoluteUrl(path || getUrlPathName()),
      published,
      updated,
      category,
      tags,
      twitter,
      image,
      amount,
      phonenumber,
      pincode,
      address,
      region
    })}
  />
);

Seo.propTypes = {
  schema: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  contentType: PropTypes.string,
  published: PropTypes.string,
  updated: PropTypes.string,
  category: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  tags: PropTypes.array,
  twitter: PropTypes.string,
  address: PropTypes.string,
  region: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  phonenumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pincode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default memo(Seo);
