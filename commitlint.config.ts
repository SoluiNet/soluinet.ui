import type {UserConfig} from '@commitlint/types';
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)\(?(\w*)?\)? - \[(,?\s?\\?\w*[#&]\d*)+\]\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'reference', 'subject'],
      issuePrefixes: ['#']
    },
  },
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  formatter: '@commitlint/format',
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'references-empty': [RuleConfigSeverity.Warning, 'never'],
    'scope-enum': [RuleConfigSeverity.Error, 'always', ['repository', 'react', 'maui']],
    'type-case': [RuleConfigSeverity.Error, 'always', 'lowerCase'],
    'type-enum': [RuleConfigSeverity.Error, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'ui', 'wip']],
  },
  /*
   * Functions that return true if commitlint should ignore the given message.
   */
  ignores: [(commit) => commit === ''],
  /*
   * Whether commitlint uses the default ignore rules.
   */
  defaultIgnores: true,
  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  /*
   * Custom prompt configs
   */
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'please input type:',
      },
    },
  },
};

module.exports = Configuration;