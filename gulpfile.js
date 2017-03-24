/**
 * Created by DELL on 2017/3/24.
 */
//导入工具包 require('node_modules里对应模块')


var gulp = require('gulp'), //本地安装gulp所用到的地方
    contect= require('gulp-concat'),
    less = require('gulp-less');


//定义一个testLess任务（自定义任务名称）
gulp.task('css', function () {
    gulp.src('build/less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dist/css')); //将会在src/css下生成index.css
});
gulp.task('js', function () {
    gulp.src('build/js/*.js') //该任务针对的文件
        .pipe(contect('all.js')) //该任务调用的模块
        .pipe(gulp.dest('dist/js')); //将会在src/css下生成index.css
});
gulp.task('default',['css','js']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务


