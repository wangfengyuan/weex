const utilFunc = {
    initIconFont () {
        const domModule = weex.requireModule('dom')
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        })
    }  
};

export default utilFunc;
