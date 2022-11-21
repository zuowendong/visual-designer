'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello world';
  }

  async user() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
}

module.exports = HomeController;
