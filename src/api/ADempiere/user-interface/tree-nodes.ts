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

// Get Instance for connection
import { request } from '@/utils/ADempiere/request'

/**
 * List Tree Tab
 * @param {string} tableName
 * @param {number} id node identifier
 * @param {string} uuid node universally unique identifier
 * @param {number} elementId element identifier
 * @returns {promise}
 */
export function requestListTreeNodes({
  tableName,
  // dsl query
  id,
  uuid,
  elementId
}) {
  return request({
    url: `/user-interface/tree-nodes/${tableName}`,
    method: 'get',
    params: {
      id,
      uuid,
      element_id: elementId
    }
  })
}
