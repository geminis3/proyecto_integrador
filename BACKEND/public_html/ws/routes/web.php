<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
   return 'Web Service SMCAR OK!';
});

$router->group(['middleware' => []], function () use ($router) {
   $router->post('/login', ['uses' => 'AuthController@login']);
   $router->post('/register', ['uses' => 'AuthController@register']);
   $router->post('/password_recovery_request', ['uses' => 'AuthController@passwordRecoveryRequest']);
   $router->get('/password_recovery', ['uses' => 'AuthController@passwordRecovery']);
});

$router->group(['middleware' => ['auth']], function () use ($router) {
   $router->post('/user/password_change', ['uses' => 'AuthController@passwordChange']);


   //SMCAR

   //CRUD ProfilePicture
   $router->post('/prueba', ['uses' => 'Profile\ProfilePictureController@prueba']);
   $router->post('/profilepicture', ['uses' => 'Profile\ProfilePictureController@post']);
   $router->get('/profilepicture', ['uses' => 'Profile\ProfilePictureController@get']);
   $router->get('/profilepicture/paginate', ['uses' => 'Profile\ProfilePictureController@paginate']);
   $router->put('/profilepicture', ['uses' => 'Profile\ProfilePictureController@put']);
   $router->delete('/profilepicture', ['uses' => 'Profile\ProfilePictureController@delete']);

   //CRUD User
   $router->post('/user', ['uses' => 'Profile\UserController@post']);
   $router->get('/user', ['uses' => 'Profile\UserController@get']);
   $router->get('/user/paginate', ['uses' => 'Profile\UserController@paginate']);
   $router->put('/user', ['uses' => 'Profile\UserController@put']);
   $router->delete('/user', ['uses' => 'Profile\UserController@delete']);

   // CRUD User <-> Role
   $router->post('/user/role', ['uses' => 'Profile\UserController@create_user_role']);
   $router->get('/user/role', ['uses' => 'Profile\UserController@get_user_role']);
   $router->put('/user/role', ['uses' => 'Profile\UserController@update_user_role']);
   $router->delete('/user/role', ['uses' => 'Profile\UserController@delete_user_role']);

   //CRUD Subject
   $router->post('/subject', ['uses' => 'CRUD\SubjectController@post']);
   $router->get('/subject', ['uses' => 'CRUD\SubjectController@get']);
   $router->get('/subject/paginate', ['uses' => 'CRUD\SubjectController@paginate']);
   $router->get('/subject/backup', ['uses' => 'CRUD\SubjectController@backup']);
   $router->put('/subject', ['uses' => 'CRUD\SubjectController@put']);
   $router->delete('/subject', ['uses' => 'CRUD\SubjectController@delete']);
   $router->post('/subject/masive_load', ['uses' => 'CRUD\SubjectController@masiveLoad']);

   //CRUD Carreer
   $router->post('/carreer', ['uses' => 'CRUD\CarreerController@post']);
   $router->get('/carreer', ['uses' => 'CRUD\CarreerController@get']);
   $router->get('/carreer/paginate', ['uses' => 'CRUD\CarreerController@paginate']);
   $router->get('/carreer/backup', ['uses' => 'CRUD\CarreerController@backup']);
   $router->put('/carreer', ['uses' => 'CRUD\CarreerController@put']);
   $router->delete('/carreer', ['uses' => 'CRUD\CarreerController@delete']);
   $router->post('/carreer/masive_load', ['uses' => 'CRUD\CarreerController@masiveLoad']);

   //CRUD Petition
   $router->post('/petition', ['uses' => 'CRUD\PetitionController@post']);
   $router->get('/petition', ['uses' => 'CRUD\PetitionController@get']);
   $router->get('/petition/paginate', ['uses' => 'CRUD\PetitionController@paginate']);
   $router->get('/petition/backup', ['uses' => 'CRUD\PetitionController@backup']);
   $router->put('/petition', ['uses' => 'CRUD\PetitionController@put']);
   $router->delete('/petition', ['uses' => 'CRUD\PetitionController@delete']);
   $router->post('/petition/masive_load', ['uses' => 'CRUD\PetitionController@masiveLoad']);

   //CRUD Faculty
   $router->post('/faculty', ['uses' => 'CRUD\FacultyController@post']);
   $router->get('/faculty', ['uses' => 'CRUD\FacultyController@get']);
   $router->get('/faculty/paginate', ['uses' => 'CRUD\FacultyController@paginate']);
   $router->get('/faculty/backup', ['uses' => 'CRUD\FacultyController@backup']);
   $router->put('/faculty', ['uses' => 'CRUD\FacultyController@put']);
   $router->delete('/faculty', ['uses' => 'CRUD\FacultyController@delete']);
   $router->post('/faculty/masive_load', ['uses' => 'CRUD\FacultyController@masiveLoad']);

   //CRUD Director
   $router->post('/director', ['uses' => 'CRUD\DirectorController@post']);
   $router->get('/director', ['uses' => 'CRUD\DirectorController@get']);
   $router->get('/director/paginate', ['uses' => 'CRUD\DirectorController@paginate']);
   $router->get('/director/backup', ['uses' => 'CRUD\DirectorController@backup']);
   $router->put('/director', ['uses' => 'CRUD\DirectorController@put']);
   $router->delete('/director', ['uses' => 'CRUD\DirectorController@delete']);
   $router->post('/director/masive_load', ['uses' => 'CRUD\DirectorController@masiveLoad']);

   //CRUD Dean
   $router->post('/dean', ['uses' => 'CRUD\DeanController@post']);
   $router->get('/dean', ['uses' => 'CRUD\DeanController@get']);
   $router->get('/dean/paginate', ['uses' => 'CRUD\DeanController@paginate']);
   $router->get('/dean/backup', ['uses' => 'CRUD\DeanController@backup']);
   $router->put('/dean', ['uses' => 'CRUD\DeanController@put']);
   $router->delete('/dean', ['uses' => 'CRUD\DeanController@delete']);
   $router->post('/dean/masive_load', ['uses' => 'CRUD\DeanController@masiveLoad']);

   //CRUD Rol
   $router->post('/rol', ['uses' => 'CRUD\RolController@post']);
   $router->get('/rol', ['uses' => 'CRUD\RolController@get']);
   $router->get('/rol/paginate', ['uses' => 'CRUD\RolController@paginate']);
   $router->get('/rol/backup', ['uses' => 'CRUD\RolController@backup']);
   $router->put('/rol', ['uses' => 'CRUD\RolController@put']);
   $router->delete('/rol', ['uses' => 'CRUD\RolController@delete']);
   $router->post('/rol/masive_load', ['uses' => 'CRUD\RolController@masiveLoad']);

   //CRUD PetitionType
   $router->post('/petitiontype', ['uses' => 'CRUD\PetitionTypeController@post']);
   $router->get('/petitiontype', ['uses' => 'CRUD\PetitionTypeController@get']);
   $router->get('/petitiontype/paginate', ['uses' => 'CRUD\PetitionTypeController@paginate']);
   $router->get('/petitiontype/backup', ['uses' => 'CRUD\PetitionTypeController@backup']);
   $router->put('/petitiontype', ['uses' => 'CRUD\PetitionTypeController@put']);
   $router->delete('/petitiontype', ['uses' => 'CRUD\PetitionTypeController@delete']);
   $router->post('/petitiontype/masive_load', ['uses' => 'CRUD\PetitionTypeController@masiveLoad']);

   //CRUD PetitionAttachment
   $router->post('/petitionattachment', ['uses' => 'CRUD\PetitionAttachmentController@post']);
   $router->get('/petitionattachment', ['uses' => 'CRUD\PetitionAttachmentController@get']);
   $router->get('/petitionattachment/paginate', ['uses' => 'CRUD\PetitionAttachmentController@paginate']);
   $router->get('/petitionattachment/backup', ['uses' => 'CRUD\PetitionAttachmentController@backup']);
   $router->put('/petitionattachment', ['uses' => 'CRUD\PetitionAttachmentController@put']);
   $router->delete('/petitionattachment', ['uses' => 'CRUD\PetitionAttachmentController@delete']);
   $router->post('/petitionattachment/masive_load', ['uses' => 'CRUD\PetitionAttachmentController@masiveLoad']);
});
