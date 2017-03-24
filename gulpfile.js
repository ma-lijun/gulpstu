/**
 * Created by DELL on 2017/3/24.
 */
//导入工具包 require('node_modules里对应模块')


var gulp = require('gulp'), //本地安装gulp所用到的地方
    contect= require('gulp-concat'),//多文件合并成一个文件
    autoprefixer = require('gulp-autoprefixer'),//自动增加前缀，解决浏览器兼容问题
    less = require('gulp-less');


//定义一个testLess任务（自定义任务名称）
gulp.task('css', function () {
    gulp.src('build/less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dist/css')); //将会在src/css下生成index.css
});
//自动增加前缀解决浏览器兼容
gulp.task('autofix', function () {
    gulp.src('build/less/*.less')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest('dist/css'));
});
//合并js
gulp.task('js', function () {
    gulp.src('build/js/*.js') //该任务针对的文件
        .pipe(contect('all.js')) //该任务调用的模块
        .pipe(gulp.dest('dist/js')); //将会在src/css下生成index.css
});


gulp.task('default',['css','js','autofix']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务


