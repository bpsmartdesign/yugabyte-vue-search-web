<script lang="ts">
import { defineComponent } from "vue"
import DataList from "./components/data-list.vue"

export default defineComponent({
  name: "Home",
  components: { DataList },
  data() {
    return {
      toggleShowFilters: true,
      filterLoading: false,
      loading: false,
      items: [],
      tHeader: [
        {
          label: "Product name",
          key: "id",
          sortable: false,
        },
        {
          label: "Supplier",
          key: "sup",
          sortable: false,
        },
        {
          label: "Category",
          key: "cat",
          sortable: false,
        },
        {
          label: "Quantity Per Unit",
          key: "qty",
          sortable: false,
        },
        {
          label: "Unit price",
          key: "u-price",
          sortable: false,
        },
        {
          label: "Units in stock",
          key: "stock",
          sortable: false,
        },
        {
          label: "Units on order",
          key: "order",
          sortable: false,
        },
        {
          label: "Reorder level",
          key: "level",
          sortable: false,
        },
        {
          label: "Discontinued",
          key: "disc",
          sortable: false,
        },
        { label: "", key: "", sortable: false },
      ],
      editedFilter: {
        product: undefined,
        supplier: undefined,
        category: undefined,
        qty: 0,
        price: 0,
        stock: 0,
        order: 0,
        reorder: 0,
        discontinued: false,
      },
      newFilter: {
        product: undefined,
        supplier: undefined,
        category: undefined,
        qty: 0,
        price: 0,
        stock: 0,
        order: 0,
        reorder: 0,
        discontinued: false,
      },
    }
  },
  methods: {
    processFilter() {
      console.log("test")
    },
  },
})
</script>

<template>
  <section class="ss--app_container">
    <h1>Search page</h1>

    <div v-show="toggleShowFilters" class="mp--filter_container">
      <div class="mod--content">
        <el-form
          v-loading="filterLoading"
          label-position="top"
          class="small-spaces"
          @submit.prevent="processFilter"
        >
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="Product">
                <el-select
                  v-model="editedFilter.product"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                >
                  <el-option
                    v-for="item in items"
                    :key="(item as any).id"
                    :label="(item as any).name"
                    :value="(item as any).id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Supplier">
                <el-select
                  v-model="editedFilter.supplier"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                >
                  <el-option
                    v-for="item in items"
                    :key="(item as any).id"
                    :label="(item as any).name"
                    :value="(item as any).id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Category">
                <el-select
                  v-model="editedFilter.category"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                >
                  <el-option
                    v-for="item in items"
                    :key="(item as any).id"
                    :label="(item as any).name ?? ''"
                    :value="(item as any).id"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Quantity Per Unit">
                <el-input
                  v-model="editedFilter.qty"
                  placeholder="Quantity Per Unit"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Unit Price">
                <el-input
                  v-model="editedFilter.price"
                  placeholder="Unit Price"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Units in stock">
                <el-input
                  v-model="editedFilter.stock"
                  placeholder="Units in stock"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Units on order">
                <el-input
                  v-model="editedFilter.order"
                  placeholder="Units on order"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Reorder Level">
                <el-input
                  v-model="editedFilter.reorder"
                  placeholder="Reorder Level"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Discontinued ?">
                <el-radio-group
                  v-model="editedFilter.discontinued"
                  size="default"
                >
                  <el-radio-button label="Yes" />
                  <el-radio-button label="No" />
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider />
          <div class="action--btn">
            <el-button plain >Clear</el-button>
            <el-button type="primary" plain>Search</el-button>
          </div>
        </el-form>
      </div>
    </div>
    <DataList :t-header="tHeader" :loading="loading" :items="items">
      <template #content>
        <div v-for="(elt, id) in items" :key="id" class="tblb--row">
          <div class="elt-row" :style="`width: calc(100% / ${tHeader.length})`">
            <span class="elt--txt">
              {{ (elt as any).name }}
            </span>
          </div>
        </div>
      </template>
    </DataList>
  </section>
</template>

<style lang="scss">
$txtColor: #4b4b71;
.mp--filter_container {
  margin-top: 2rem;
  width: 100%;
  background: #ffffff;
  -webkit-box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  padding: 1.5rem 1rem;

  .mod--content {
    .el-form-item {
      label {
        margin: 0 !important;
        color: rgba($txtColor, 0.7);
        font-weight: 700;
      }

      .el-select {
        width: 100%;
      }

      .el-radio-button__inner {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
      }

      .el-input {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;

        input {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          padding-top: 12px;
          padding-bottom: 12px;
          border-color: $txtColor;
        }
      }
    }
  }
}
</style>
