# django-vue-template

> A Vue.js and Django example

This repo goes along with the first part series of a blogpost I wrote some time ago on how to effectively [setup a project that's easy to develop and deploy using Django, Vue and webpack](https://ariera.github.io/2017/09/26/django-webpack-vue-js-setting-up-a-new-project-that-s-easy-to-develop-and-deploy-part-1.html).

## Installation

```bash
yarn install
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Development

* On one terminal run your webpack dev server

```bash
npm run dev
```

* On another terminal launch the Django application

```bash
python manage.py runserver
```

And point your browser to [http://localhost:8000](), but test that you can also access the pure Django world, for example by going to the admin panel [http://localhost:8000/admin]()

## Tests

``` bash
# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
