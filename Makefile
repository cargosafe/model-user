
COMPONENT=node_modules/.bin/component
MOCHA=node_modules/.bin/mocha


build: components model.js
	@$(COMPONENT) build

components: component.json
	@$(COMPONENT) install

test:
	@NODE_ENV=test $(MOCHA) \
		--require should \
		--reporter spec \
		--harmony \
		--bail \
		test.js


clean:
	rm -fr build components


.PHONY: clean

