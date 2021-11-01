import React from 'react'

export default function App() {
  /* 
    面试题：
      1 react/vue 中的 key 有什么作用？（key 的内部原理是什么？）
      2 为什么遍历列表时，key 最好不要用 index

    1 虚拟 DOM 中 key 的作用：
         1 简单的说：key 是虚拟 DOM 对象的标识，在更新显示时 key 起着重要作用
         2 详细的说：当状态中的数据发生变化时，react 会根据新数据生成新的虚拟 DOM，
                   随后 React 进行新虚拟 DOM 与旧虚拟 DOM 的 diff 比较，比较规则如下：
              a. 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key：
                     1 若虚拟 DOM 中内容没变，直接使用之前的真实 DOM
                     2 若虚拟 DOM 中内容变了，则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM
              b. 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key
                     根据数据创建新的真实 DOM，随后渲染到页面

    2 用 index 作为 key 可能引发的问题：
         1 若对数据进行：逆序添加、逆序删除等破坏顺序操作：
              会产生没有必要的真实 DOM 更新 ==> 界面效果没问题，但效率低
         2 如果结构中还包含输入类的 DOM：
              会产生错误 DOM 更新 ==> 界面有问题
    
  */
  return <div>app</div>
}
