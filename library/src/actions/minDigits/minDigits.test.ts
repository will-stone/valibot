import { describe, expect, test } from 'vitest';
import type { StringIssue } from '../../schemas/index.ts';
import { _getDigitCount } from '../../utils/index.ts';
import { expectActionIssue, expectNoActionIssue } from '../../vitest/index.ts';
import {
  minDigits,
  type MinDigitsAction,
  type MinDigitsIssue,
} from './minDigits.ts';

describe('minDigits', () => {
  describe('should return action object', () => {
    const baseAction: Omit<MinDigitsAction<string, 5, never>, 'message'> = {
      kind: 'validation',
      type: 'min_digits',
      reference: minDigits,
      expects: '>=5',
      requirement: 5,
      async: false,
      '~run': expect.any(Function),
    };

    test('with undefined message', () => {
      const action: MinDigitsAction<string, 5, undefined> = {
        ...baseAction,
        message: undefined,
      };
      expect(minDigits(5)).toStrictEqual(action);
      expect(minDigits(5, undefined)).toStrictEqual(action);
    });

    test('with string message', () => {
      expect(minDigits(5, 'message')).toStrictEqual({
        ...baseAction,
        message: 'message',
      } satisfies MinDigitsAction<string, 5, string>);
    });

    test('with function message', () => {
      const message = () => 'message';
      expect(minDigits(5, message)).toStrictEqual({
        ...baseAction,
        message,
      } satisfies MinDigitsAction<string, 5, typeof message>);
    });
  });

  describe('should return dataset without issues', () => {
    const action = minDigits(5);

    test('for untyped inputs', () => {
      const issues: [StringIssue] = [
        {
          kind: 'schema',
          type: 'string',
          input: null,
          expected: 'string',
          received: 'null',
          message: 'message',
        },
      ];
      expect(
        action['~run']({ typed: false, value: null, issues }, {})
      ).toStrictEqual({
        typed: false,
        value: null,
        issues,
      });
    });

    test('for valid strings', () => {
      expectNoActionIssue(action, ['12345', '123456', '45foobarbaz123']);
    });
  });

  describe('should return dataset with issues', () => {
    const action = minDigits(5, 'message');
    const baseIssue: Omit<MinDigitsIssue<string, 5>, 'input' | 'received'> = {
      kind: 'validation',
      type: 'min_digits',
      expected: '>=5',
      message: 'message',
      requirement: 5,
    };

    test('for invalid strings', () => {
      expectActionIssue(
        action,
        baseIssue,
        ['', 'foo', 'abc1234'],
        (value) => `${_getDigitCount(value)}`
      );
    });
  });
});
