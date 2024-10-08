<!--
  ADempiere-Vue (Frontend) for ADempiere ERP & CRM Smart Business Solution
  Copyright (C) 2018-Present E.R.P. Consultores y Asociados, C.A. www.erpya.com
  Contributor(s): Elsio Sanchez esanchez@erpya.com https://github.com/elsiosanchez
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
  <el-card class="field-option-card context-info">
    <div slot="header">
      <span style="word-break: break-word;">
        {{ $t('field.field') }}
        <b>{{ fieldAttributes.name }}</b>
        ({{ fieldAttributes.id }}, {{ fieldAttributes.columnName }}{{ !fieldAttributes.isSameColumnElement ? ', ' + fieldAttributes.elementName : '' }})
      </span>
    </div>

    <el-scrollbar wrap-class="scroll-child">
      <el-form
        ref="form"
        class="form-context-info"
        label-position="top"
        label-width="120px"
        style="overflow: auto;"
        @submit.native.prevent="notSubmitForm"
      >
        <el-form-item
          v-if="!isEmptyValue(messageText)"
          :label="$t('field.contextInfo')"
          class="justify-text"
        >
          {{ messageText }}
        </el-form-item>

        <el-form-item
          :label="$t('field.container.description')"
          class="justify-text"
        >
          {{ fieldAttributes.description }}
        </el-form-item>

        <el-form-item
          v-if="!isEmptyValue(fieldAttributes.help)"
          :label="$t('field.container.help')"
          class="justify-text"
        >
          {{ fieldAttributes.help }}
        </el-form-item>

        <el-form-item
          v-if="!isEmptyValue(fieldAttributes.defaultValue)"
          :label="$t('fieldOptions.info.defaultValue')"
          class="justify-text"
        >
          <pre>{{ fieldAttributes.defaultValue }}</pre>
        </el-form-item>

        <el-form-item
          v-if="!isEmptyValue(fieldAttributes.displayLogic)"
          :label="$t('fieldOptions.info.displayLogic')"
          class="justify-text"
        >
          <pre>{{ fieldAttributes.displayLogic }}</pre>
        </el-form-item>

        <el-form-item
          v-if="!isEmptyValue(fieldAttributes.readOnlyLogic)"
          :label="$t('fieldOptions.info.readOnlyLogic')"
          class="justify-text"
        >
          <pre>{{ fieldAttributes.defaultValue }}</pre>
        </el-form-item>

        <el-form-item
          v-if="!isEmptyValue(fieldAttributes.mandatoryLogic)"
          :label="$t('fieldOptions.info.mandatoryLogic')"
          class="justify-text"
        >
          <pre>{{ fieldAttributes.mandatoryLogic }}</pre>
        </el-form-item>
      </el-form>
    </el-scrollbar>

    <span v-for="(zoomItem, index) in fieldAttributes.reference.zoomWindows" :key="index">
      <el-button
        :key="index"
        type="text"
        @click="redirect({ window: zoomItem })"
      >
        <i class="el-icon-zoom-in" />
        {{ $t('page.processActivity.zoomIn') }}
        {{ zoomItem.name }}
      </el-button>
    </span>
  </el-card>
</template>

<script>
import { defineComponent, computed, onMounted } from '@vue/composition-api'

import store from '@/store'

// Utils and Helper Methods
import { isEmptyValue } from '@/utils/ADempiere/valueUtils'
import { parseContext } from '@/utils/ADempiere/contextUtils'
import { zoomInOptionItem } from '@/components/ADempiere/FieldDefinition/FieldOptions/fieldOptionsList'

export default defineComponent({
  name: 'ContextInfo',

  props: {
    fieldAttributes: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const fieldValue = computed(() => {
      const { parentUuid, containerUuid, columnName } = props.fieldAttributes
      return store.getters.getValueOfFieldOnContainer({
        parentUuid,
        containerUuid,
        columnName
      })
    })

    const messageText = computed(() => {
      const { contextInfo } = props.fieldAttributes
      if (!isEmptyValue(contextInfo.sqlStatement)) {
        const storedContextInfo = store.getters.getContextInfoField(
          contextInfo.uuid,
          contextInfo.sqlStatement
        )
        if (!isEmptyValue(storedContextInfo)) {
          return storedContextInfo.messageText || ''
        }
      }
      return ''
    })

    function redirect({ window }) {
      // panel in mobile mode
      store.commit('changeShowRigthPanel', false)

      zoomInOptionItem.executeMethod({
        window,
        fieldAttributes: props.fieldAttributes,
        value: fieldValue.value
      })
    }

    onMounted(() => {
      if (!isEmptyValue(props.fieldAttributes.contextInfo.sqlStatement)) {
        const sqlParse = parseContext({
          parentUuid: props.fieldAttributes.parentUuid,
          containerUuid: props.fieldAttributes.containerUuid,
          value: props.fieldAttributes.contextInfo.sqlStatement,
          isSQL: true,
          isBooleanToString: true
        })

        store.dispatch('getContextInfoValueFromServer', {
          id: props.fieldAttributes.contextInfo.id,
          uuid: props.fieldAttributes.contextInfo.uuid,
          query: sqlParse.query
        })
      }
    })

    return {
      // Computeds
      messageText,
      // Methods
      redirect
    }
  }
})
</script>

<style lang="scss" src="../common-style.scss">
</style>
<style lang="scss">
.context-info {
  &.el-card {
    max-width: 300px;

    .form-context-info {
      .el-form-item {
        // spacing between form items
        padding-bottom: 10px;

        .el-form-item__content {
          // text content interline
          line-height: 20px;

          pre {
            margin: 0px;
          }
        }
      }
    }
  }
}
</style>
