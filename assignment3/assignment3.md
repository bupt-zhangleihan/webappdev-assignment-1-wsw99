># DOM元素使用例子及功能分析
>## 我选取的DOM元素为`document.documentElement`
>## 以下是我选取的代码，来源为github网站：
```
<script id="allow-copy_script">
(function agent() {
    let unlock = false
    document.addEventListener('allow_copy', (event) => {
        unlock = event.detail.unlock
    })

    const copyEvents = [
        'copy',
        'cut',
        'contextmenu',
        'selectstart',
        'mousedown',
        'mouseup',
        'mousemove',
        'keydown',
        'keypress',
        'keyup',
    ]

    const rejectOtherHandlers = (e) => {
        if (unlock) {
            e.stopPropagation()
            if (e.stopImmediatePropagation) e.stopImmediatePropagation()
        }
    }

    copyEvents.forEach((evt) => {
        document.documentElement.addEventListener(evt, rejectOtherHandlers, {
            capture: true,
        })
    })
})()
</script>
```
> 这段代码是为了控制页面的复制操作，通过监听特定事件来阻止默认的复制行为。具体来说，它定义了一个名为 `copyEvents` 的事件列表，其中包括 `'copy'`、`'cut'`、`'contextmenu'` 等事件，这些事件通常与复制和剪切操作、右键菜单等相关。
> 
> 代码的行为如下：
> - 它在文档加载时创建了一个名为 `unlock` 的变量，初始值为 `false`。
> - 代码通过监听自定义事件 `'allow_copy'` 来设置 `unlock` 变量的值。当 `'allow_copy'` 事件被触发时，`unlock` 的值会根据事件的 `detail.unlock` 设置为 `true` 或 `false`。这意味着，如果 `unlock` 被设置为 `true`，则允许复制，如果设置为 `false`，则禁止复制。
> - 接下来，代码通过 `copyEvents.forEach((evt) => { ... })` 循环遍历 `copyEvents` 数组中的事件名称，并为每个事件名称添加事件处理程序 `rejectOtherHandlers`。事件处理程序会检查 `unlock` 的值，如果 `unlock` 为 `true`，则取消事件的传播，以阻止默认复制行为。
> - 在这段代码中，通过将事件处理程序 `rejectOtherHandlers` 添加到 `document.documentElement` 上，事件处理程序会在捕获阶段执行，从而确保在特定事件发生之前拦截事件并取消其默认行为。这样，事件处理程序可以防止用户执行复制、剪切、右键菜单等操作，以实现禁止这些操作的目的。`document.documentElement` 在这里作为全局范围的事件监听器，允许捕获和处理整个文档范围内的特定事件，从而实现对用户行为的全局控制。
> - 因此，该代码的行为是动态的，根据 `unlock` 变量的值来控制是否允许复制。如果 `unlock` 被设置为 `true`，则复制操作将被允许；如果 `unlock` 被设置为 `false`，则复制操作将被阻止。
> - 在页面中触发名为 `'allow_copy'` 事件后，并在事件的 `detail.unlock` 参数中设置相应的值（`true` 或 `false`）。这将决定是否禁止或允许复制操作。