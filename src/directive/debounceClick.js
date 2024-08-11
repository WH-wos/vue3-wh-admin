// 按钮防抖
const debounceClick = {
    // 在组件被挂载时执行的生命周期函数
    mounted(el, binding) {
        const { value, arg = 500 } = binding;
        let timer;

        el.addEventListener('click', () => {
            if (timer) {
                clearTimeout(timer);
            }

            if (!timer) {
                value();
            }

            timer = setTimeout(() => {
                timer = null;
            }, arg);
        });
    },
};

export default debounceClick;