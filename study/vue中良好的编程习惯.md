[原文地址](https://cn.vuejs.org/v2/style-guide/)

使用vue中的良好编程习惯：

- 必要的：

  这些规则会帮你规避错误，所以学习并接受他们带来的全部代价吧

- 强烈推荐

  这些规则能够在绝大多数工程中改善可读性和开发体验

- 推荐

  当存在多个同样好的选项，选任意一个都可以确保一致性

- 谨慎使用

  有些vue特性的存在是为了照顾极端情况或者帮助老代码的平稳迁移，不能够被过度使用





1. 组件名为多个单词---`必要`

2. 组件的`data`必须为一个函数---`必要`

   当`data`是一个对象的时候，它会在这个组件的所有实例之间共享

3. 组件中的`prop`定义应该尽量详细，至少需要定义其类型---`必要`

   细致的`prop`定义有两个好处：

   - 它们写明了组件的API，所以很容易看懂组件的用法
   - 在开发环境下，如果向一个组件提供格式不正确的prop，Vue会报警告，以帮助你捕获潜在的错误来源

4. 为`v-for`设置键值---`必要`

   不然在数组变动更新DOM的时候Vue将会优化渲染吧可能的DOM变更降到最低

5. 避免`v-if`和`v-for`用在一起---`必要`

   `v-for`比`v-if`具有更高的优先级，所以我们可以将数据先进行筛选再渲染

6. 为组件样式设置作用域---`必要`

   - scoped
   - CSS Modules
   - BEM

7. 私有`property`名---`必要`

   Vue使用`_`前缀来定义自身的私有`property`，所以使用相同的前缀有覆写实例`property`的风险



1. 组件文件

2. 单文件组件文件的大小写

   文件名最好始终是单词大写开头，因为对于代码编辑器的自动补全最为友好

3. 基础组件名

   这些组件只包括`HTM元素、其他基础组件、第三方UI组件库`

   这样做的好处是：

   1. 同样性质的组件会排列在一起方便识别
   2. 避免在包裹简单组件时随意选择前缀
   3. 可以放在全局文件夹下，然后使用webpack等工具统一导入

4. 单例组件名

   在某一页面只使用一次的组件，而且不接受`prop`,应该以`The`前缀命名

5. 紧密耦合的组件名

   和父组件紧密耦合的组件应该以父组件名作为前缀

6. 组件中的单词顺序

   组件名应该以高级别的单词开头，以描述性的修饰词结尾

   例如`SearchButtonClear.vue   SettingsCheckboxLaunchOnStartup.vue`

7. 自闭合组件

   在单文件组件、字符串模板和JSX中没有内容的组件应该是自闭合的

   在DOM模板里要写全

8. 模板中的组件名的大小写

   在单文件组件中使用`PascalCase`，在`DOM`模板中使用`kebab-case`

9. JS/JSX中的组件名大小写

   组件名应始终是`PascalCase `

10. 完整单词的组件名

11. `Prop`名大小写

    在`JavaScript `中更自然的是`camelCase`,在HTML中更自然的是`kebab-case`

12. 多个`attribute`的元素：分行写

13. 模板中简单的表达式

    组件模板中只包含简单的表达式，复杂的表达式应该重构为计算属性或者方法

14. 简单的计算属性

    将复杂的计算属性分割为尽可能多的更简单的计算属性

15. 带引号的`attribute`值

    非空的`HTML attribute`值应该始终带引号，例如`<AppSidebar :style="{ width: sidebarWidth + 'px' }">`

16. 指令缩写







1. 组件/实例的选项的顺序
   1. el
   2. name\parent
   3. functional
   4. delimiters\comments
   5. components\directives\filters
   6. extends\mixins
   7. inheriAttrs\model\props(propsData)
   8. data\computed
   9. watch\生命周期钩子
   10. methods
   11. template(render)\renderError
2. 元素`attribute`的顺序
   1. is
   2. v-for
   3. v-if\v-else-if\v-else\v-show\v-cloak
   4. v-pre\v-once
   5. id
   6. ref\key
   7. v-model
   8. v-on
   9. v-html\v-text
3. 组件/实例选项中的空行
4. 单文件组件的顶级元素的顺序







1. 没有在`v-if/v-else-if/v-else`中使用key

   如果元素类型相同，最好使用key

2. `scoped`中的元素选择器

   元素选择器应避免出现在`scoped`里（速度慢）

3. 隐性的父子组件通信

   优先使用`prop`和事件进行父子间通信，而不是`this.$parent`或者变更`prop`

4. 非`flux`的全局状态管理

   应优先通过`Vuex`管理全局状态，而不是通过`this.$root`或者一个全局事件总线

