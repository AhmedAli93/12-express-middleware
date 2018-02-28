'use strit';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const debug = require('debug')('note:note-router');
const Note = require('../model/note.js');

const noteRouter = new Router();

noteRouter.post('/api/note', jsonParser, function(req, res, next){
  debug('Post: /api/note');

  Note.createNote(req.body)
    .then(note => res.json(note))
    .catch(err => next(err));
});

noteRouter.get('/api/note/:id', function(req, res, next){
  debug('Get: /api/note/:id');

  Note.fetchNote(req.params.id)
    .then(note => res.json(note))
    .catch(err => next(err));
});

noteRouter.get('/api/note', function(req, res, next){
  debug('GET: /api/note');

  Note.fetchIds()
    .then( ids => res.json(ids))
    .catch(err => next(err));
});

noteRouter.put('/api/note/:id', jsonParser, function(req, res, next){
  debug('PUT: /api.note/:id');

  Note.updateNote(req.params.id, req.body)
    .then( note => res.json(note))
    .catch(err => next(err));
});

module.exports; 