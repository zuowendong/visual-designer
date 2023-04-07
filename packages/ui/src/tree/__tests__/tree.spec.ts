import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import WdTree from '../src/tree'

describe('tree组件', () => {
  it('应该正常的渲染tree结构', () => {
    const wrapper = mount({
      template: '<wd-tree :data="treeData"></wd-tree>',
      components: { WdTree },
      setup() {
        const treeData = ref([
          {
            label: '一级1',
            level: 1,
            children: [{ label: '二级1-1', level: 2, children: [{ label: '三级1-1-1', level: 3 }] }]
          },
          {
            label: '一级2',
            level: 1,
            children: [
              { label: '二级2-1', level: 2 },
              { label: '二级2-2', level: 2, children: [{ label: '三级级2-2-1', level: 3 }] }
            ]
          }
        ])
        return {
          treeData
        }
      }
    })
    expect(wrapper.classes()).toContain('d-tree')
    expect(wrapper.element.childElementCount).toBe(7)
  })
})
