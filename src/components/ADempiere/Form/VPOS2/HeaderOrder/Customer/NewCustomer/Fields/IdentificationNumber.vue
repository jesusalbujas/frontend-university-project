<!--
  ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
  Copyright (C) 2018-Present E.R.P. Consultores y Asociados, C.A.
  Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com https://github.com/elsiosanchez
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <https:www.gnu.org/licenses/>.
-->

<template>
  <el-form-item
    class="field-standard"
    style="margin: 0px;width: 100%;"
  >
    <template slot="label">
      <span class="field-title-name">
        {{ $t('form.pointOfSales.customer.fieldCutomer.identificationNumber') }}
      </span>
      <span style="color: #f34b4b"> * </span>
    </template>
    <el-input
      v-model="identificationNumber"
      size="medium"
    />
  </el-form-item>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api'

import store from '@/store'
// import { isEmptyValue } from '@/utils/ADempiere'

export default defineComponent({
  name: 'IdentificationNumber',

  setup() {
    const identificationNumber = computed({
      get() {
        return store.getters.getAttributeFieldCustomer({
          attribute: 'identificationNumber'
        })
      },
      // setter
      set(value) {
        store.commit('setAttributeFieldCustomer', {
          attribute: 'identificationNumber',
          value
        })
      }
    })

    return {
      // Computed
      identificationNumber
    }
  }
})
</script>
