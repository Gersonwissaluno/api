'use strict';

/**
 * tokoonline service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tokoonline.tokoonline');
