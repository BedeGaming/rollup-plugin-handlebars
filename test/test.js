
import { rollup } from 'rollup';
import assert from 'assert';
import handlebarsPlugin from '../src';
import babelPlugin from 'rollup-plugin-babel';

describe('rollup-plugin-handlebars',()=>{
  it('compiles hbs templates',()=>{
		return rollup({
			entry: __dirname + '/fixtures/view.js',
			plugins: [ handlebarsPlugin(), babelPlugin() ]
		}).then( bundle => {
      const result = bundle.generate({
            format: 'cjs'
        });
        const View = eval(result.code);

			  assert.ok( new View().render().match(/Hello world/) );
		});
  });
})
