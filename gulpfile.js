var gulp = require('gulp')
var browserSync = require('browser-sync')
var sourcemaps = require('gulp-sourcemaps')

var server = browserSync.create()
gulp.task('server', () => 
  server.init({
    ui: false,
    server: {
      baseDir: ['./docs/'],
      index: 'blog.html'
    }
  })
)

gulp.task('serverBrowserSync', () =>
  server.reload()
)

gulp.task('server:watch', () => 
  gulp
    .watch([
      './docs/css/*',
      './docs/favicons/*',
      './docs/fonts/*',
      './docs/images/*',
      './docs/img/*',
      './docs/js/*',
      './docs/*',
    ], ['serverBrowserSync'])
)

gulp.task('default', ['server', 'server:watch'])