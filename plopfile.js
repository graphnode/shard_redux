module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{name}}/',
        templateFiles: 'tools/plop-templates/component/**/*',
        base: 'tools/plop-templates/component',
      },
    ],
  });
};
