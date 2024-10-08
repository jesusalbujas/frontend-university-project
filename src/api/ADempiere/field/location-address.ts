/**
 * ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
 * Copyright (C) 2018-Present E.R.P. Consultores y Asociados, C.A. www.erpya.com
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com https://github.com/EdwinBetanc0urt
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { request } from '@/utils/ADempiere/request'

// Utils and Helpers Methods
import { isEmptyValue } from '@/utils/ADempiere/valueUtils'

/**
 * List Countries
 */
export function listCountriesRequest({
  sortBy,
  filters,
  searchValue,
  groupColumns,
  selectColumns
}) {
  return request({
    url: '/location-address/countries',
    method: 'get',
    params: {
      filters,
      sort_by: sortBy,
      search_value: searchValue,
      group_columns: groupColumns,
      select_columns: selectColumns
    }
  })
}

/**
 * Get Country
 */
export function getCountryRequest({
  id,
  filters,
  searchValue,
  groupColumns,
  selectColumns
}) {
  return request({
    url: `/location-address/countries/${id}`,
    method: 'get',
    params: {
      filters,
      search_value: searchValue,
      group_columns: groupColumns,
      select_columns: selectColumns
    }
  })
}

/**
 * List Regions
 */
export function listRegionsRequest({
  countryId,
  searchValue
}) {
  return request({
    url: `/location-address/countries/${countryId}/regions`,
    method: 'get',
    params: {
      search_value: searchValue
    }
  })
}

/**
 * List Cities
 */
export function listCitiesRequest({
  countryId,
  regionId
}) {
  let url
  switch (true) {
    case isEmptyValue(regionId):
      url = `/location-address/countries/${countryId}/cities`
      break
    case (!isEmptyValue(countryId) && !isEmptyValue(regionId)):
      url = `/location-address/countries/${countryId}/${regionId}/cities`
      break
  }
  return request({
    url,
    method: 'get'
  })
}

/**
 * Get Location (Address)
 */
export function getLocationAddressRequest({
  id
}) {
  return request({
    url: `/location-address/addresses/${id}`,
    method: 'get'
  })
}

/**
 * Create Location (Address)
 */
export function createAddressRequest({
  countryId,
  regionId,
  cityId,
  cityLabel,
  address1,
  address2,
  address3,
  address4,
  postalCode,
  posalCodeAdditional,
  latitude,
  longitude,
  altitude,
  reference
}) {
  return request({
    url: `/location-address/addresses`,
    method: 'post',
    data: {
      country_id: countryId,
      region_id: regionId,
      city_id: cityId,
      city: cityLabel,
      address1,
      address2,
      address3,
      address4,
      postal_code: postalCode,
      posal_code_additional: posalCodeAdditional,
      latitude,
      longitude,
      altitude,
      reference
    }
  })
}

/**
 * Update Location (Address)
 */
export function updateAddressRequest({
  id,
  countryId,
  regionId,
  cityId,
  cityLabel,
  address1,
  address2,
  address3,
  address4,
  postalCode,
  posalCodeAdditional,
  latitude,
  longitude,
  altitude,
  reference
}) {
  return request({
    url: `/location-address/addresses/${id}`,
    method: 'patch',
    data: {
      country_id: countryId,
      region_id: regionId,
      city_id: cityId,
      city: cityLabel,
      address1,
      address2,
      address3,
      address4,
      postal_code: postalCode,
      posal_code_additional: posalCodeAdditional,
      latitude,
      longitude,
      altitude,
      reference
    }
  })
}
