<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "DataList",
  props: {
    items: {
      type: Array,
      default: () => [],
      description: "List of items to show",
    },
    tHeader: {
      type: Array,
      default: undefined,
      description: "Header of data list",
    },
    loading: {
      type: Boolean,
      default: true,
      description: "Loading state",
    },
    customSizes: {
      type: Boolean,
      default: false,
      description: "Loading state",
    },
    emptyText: {
      type: String,
      default: "No items found",
      description: "Text to show where data are empty",
    },
  },
})
</script>

<template>
  <div class="ss_dtb">
    <header class="tbl--header">
      <div
        v-for="elt in tHeader"
        :key="(elt as any).id"
        class="elt--header"
        :style="`width: calc(100% / ${tHeader!.length})`"
      >
        <span class="th--label">{{ (elt as any).label }}</span>
      </div>
    </header>
    <div v-loading="loading" class="tbl--body">
      <template v-if="items.length > 0">
        <slot name="content" />
      </template>
      <template v-else>
        <div class="tblb--row">
          {{ emptyText }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
$color: #5e72e4;

.ss_dtb {
  margin: 1.5rem 0;

  .tbl--header {
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding: 1.25rem 1rem;
    margin-bottom: 0.75rem;
    background: $color;
    box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.45);
    border-radius: 0.5rem;
    position: relative;
    color: #ffffff;
    overflow: hidden;

    .elt--header {
      font-size: 0.81rem;
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 800;

      .tblh--filterable {
        cursor: pointer;
      }
    }
  }
}

.tbl--body {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tblb--row {
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding: 1.25rem 1rem;
    margin-bottom: 0.5rem;
    background: #ffffff;
    box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
    border-radius: 0.5rem;
    position: relative;
    overflow: hidden;

    &:hover {
      box-shadow: 0 0 30px -5px rgba(#111, 0.25);
      transition: all 0.25s ease-in;
    }

    &.tblb--processing {
      .tblb--inner {
        filter: blur(2px);
      }
    }

    .tblb--inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .elt-row {
        padding: 1.4rem 0.8rem;
        font-size: 0.81rem;
        display: inline-block;
        overflow: hidden;

        &.flex--elt {
          display: flex;
        }

        .el-alert {
          display: inline;
          text-align: center;
          &.no--close {
            padding: 0.25rem 0.35rem;
            .el-alert__closebtn {
              display: none;
            }
          }
        }

        .elt--value {
          font-weight: 700;
        }

        .elt--txt {
          font-size: 0.7rem;
        }

        .elt--banner_img {
          border-radius: 0.35rem;
          overflow: hidden;
          width: 100%;

          img {
            display: inline-block;
            width: 100%;
          }
        }
      }
    }

    .tblb--over {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background-color: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 999;

      .tblbo--img {
        height: 100%;
        width: 100%;
        border-radius: 0.25rem;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
      .s--icon {
        font-size: 2.5rem;
        font-weight: 700;
        color: #108050;

        i {
          font-weight: 900;
        }
      }

      .tblo--step {
        .s--txt {
          color: #108050;
          font-size: 0.8rem;
          font-weight: 800;
        }
      }
    }
  }
}
</style>
