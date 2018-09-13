学习Flux框架思想，配合React形成良好的MVC框架。

React本身只涉及UI层，如果搭建大型应用，必须搭配一个前端框架。也就是说，至少要学会两样东西，才能基本满足需求：React+前端框架。
Facebook官方使用的是Flux框架。如何在React的基础上，使用Flux组织代码和安排内部逻辑，使得应用更易于开发和维护。

首先，Flux将一个应用分为四部分
1.View ：视图层
2.Action（动作）：视图发出的信息（比如mouseClick）
3.Dispatcher（派发器）：接收Action，执行回调函数
4.Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面



 Sequence:  View -> Action -> Dispatcher -> Store ->View 



Flux的特点：单向数据流动。
1.用户访问View
2.View发出用户的Action
3.Dispatcher收到Action，要求Store进行相应的更新
4.Store更新后，发送一个'change'事件
5.View收到'change'事件后，更新页面