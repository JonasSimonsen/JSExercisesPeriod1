/**
 * Created by jonassimonsen on 15/02/2016.
 */
/** In JavaScript, the thing called this, is the object that "owns" the JavaScript
  code. The value of this, when used in a function, is the object that "owns" the
  function. The value of this, when used in an object, is the object itself.
  The this keyword in an object constructor does not have a value. It is only a
  substitute for the new object.     The value of this will become the new object
  when the constructor is used to create an object.
  binding er explicit

  JAVA og this
  binding er implicit
  Within an instance method or a constructor, this is a reference to the current object
  — the object whose method or constructor is being called. You can refer to any member
  of the current object from within an instance method or a constructor by using this.

  why we uset var self = this; in third semester<.
  self is being used to maintain a reference to the original this even as the context is
  changing. It's a technique often used in event handlers (especially in closures).

  purpose of methods call(), apply(), bind()
  apply (der tager en et array af argumenter) og call (der tager en liste af argumenter) er metoder til explicit binding **/

