<!--
ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
Copyright (C) 2017-Present E.R.P. Consultores y Asociados, C.A.
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
  <el-input-number
    ref="fieldAmount"
    v-model="valueAmount"
    controls-position="right"
    :precision="precision"
    autofocus
    style="text-align-last: end !important;width: 100%;"
    @change="handleChange"
  />
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'fieldAmount',
  props: {
    value: {
      type: Number,
      required: true
    },
    precision: {
      type: Number,
      default: 2
    },
    handleChange: {
      type: Function,
      default: (changeValue) => {
        console.info('Triggers when input value changes (value: string | number)', changeValue)
      }
    }
  },
  setup(props) {
    // Ref
    const fieldAmount = ref(null)
    const valueAmount = ref(props.value)

    setTimeout(() => {
      fieldAmount.value.select
      fieldAmount.value.select()
    }, 200)
    return {
      // Ref
      valueAmount,
      fieldAmount
    }
  }
})
</script>
