/**
 * Unit test for the <%= dasherizedModuleName %> adapter
 */

import {expect} from 'chai'
import {module} from 'ember-test-utils/test-support/setup-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

// To specify the other units that are required for this test:
// const test = module('adapter:<%= dasherizedModuleName %>', ['model:foo'])
const test = module('adapter:<%= dasherizedModuleName %>')
describe(test.label, function () {
  test.setup()

  let sandbox, adapter

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    adapter = this.subject()
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('should exist', function () {
    expect(adapter).not.to.equal(undefined)
  })

  it('should have real tests', function () {
    expect(true).to.equal(false)
  })
})
