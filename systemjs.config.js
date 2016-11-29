System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
     map : {
    'app':                        'built/app', 
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
    },
    packages : {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    '@angular/core'                    : {main: 'bundles/core.umd.min.js'},
    '@angular/common'                  : {main: 'bundles/common.umd.min.js'},
    '@angular/compiler'                : {main: 'bundles/compiler.umd.min.js'},
    '@angular/platform-browser'        : {main: 'bundles/platform-browser.umd.min.js'},
    '@angular/platform-browser-dynamic': {main: 'bundles/platform-browser-dynamic.umd.min.js'},
    '@angular/forms'                   : {main: 'bundles/forms.umd.min.js'}
    }         
});




