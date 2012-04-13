// =======
// HELPERS
// =======

var addClass = function (el, newClass) {
  if (el.className.indexOf(newClass) < 0) {
    if (el.className.length > 0) {
      el.className += ' ';
    }
    el.className += newClass;
  }
},

removeClass = function (el, classToRemove) {
  var classes = el.className.split(' '),
      i, len;
  for (i = 0, len = classes.length; i < len; ++i) {
    if (classes[i] === classToRemove) {
      classes.splice(i, 1);
      break;
    }
  }
  el.className = classes.join(' ');
},

hasClass = function (el, className) {
  // TODO: fix this function
  return (el.className.indexOf(className) != -1);
},

// ========
// HOMEPAGE
// ========

ContentView = function () {
  var view = {
    el: document.getElementById('content'),

    initialize: function() {
      _.extend(this, Backbone.Events);
      this.showSection = this.showSection.bind(this);
      this.hide = this.hide.bind(this);
      this.goHome = this.goHome.bind(this);
      this.id = this.el.getAttribute('id');

      this.homeBtn = document.querySelector('.homeBtn');
      this.homeBtn.addEventListener('click', this.goHome);

      return this;
    },

    showSection: function(section) {
      var sectionEl = document.querySelector('#' + this.id + ' .' + section);
      this.el.style.display = 'block';
      addClass(sectionEl, 'show');
      addClass(this.homeBtn, 'show');
    },

    hide: function() {
      var showingSection = document.querySelector('.section.show'),
          i, len;

      if (showingSection) {
        removeClass(showingSection, 'show');
      }
      removeClass(this.el, 'show');
      this.el.style.display = 'none';
      removeClass(this.homeBtn, 'show');
    },

    goHome: function(evt) {
      evt.preventDefault();
      eventManager.trigger('navigate', { section: '', push: true });
    }
  };
  return view.initialize();
},

NavView = function () {
  var view = {
    el: document.getElementById('sectionBtnWrapper'),

    initialize: function() {
      var el = this.el;
      _.extend(this, Backbone.Events);

      this.goToSection = this.goToSection.bind(this);
      this.hide = this.hide.bind(this);
      this.show = this.show.bind(this);

      this.id = el.getAttribute('id');
      this.el.addEventListener('click', this.goToSection);

      // Prevent CSS3 transitions until page is loaded. Sort of hacky.
      setTimeout(function() {
        addClass(el, 'loaded');
      }, 100);

      return this;
    },

    goToSection: function(evt) {
      var target = evt.target,
          parent, page;
      if (!hasClass(target, 'title')) {
        parent = target.parentElement;
        if (hasClass(parent, 'title')) {
          target = parent;
        }
      }
      evt.preventDefault();
      page = target.getAttribute('data-section');
      eventManager.trigger('navigate', { section: page, push: true });
    },

    show: function () {
      removeClass(this.el, 'faded');
      this.fadingTimeout = window.setTimeout((function() {
        removeClass(this.el, 'fading');
      }).bind(this), 20);
    },

    hide: function (anim_duration) {
      addClass(this.el, 'fading');
      this.fadingTimeout = window.setTimeout((function() {
        addClass(this.el, 'faded');
      }).bind(this), anim_duration);
    }
  };

  return view.initialize()
},

eventManager = (function () {
  _.extend(this, Backbone.Events);
  return this;
})(),

historyManager = (function () {
  _.extend(this, Backbone.Events);
  window.addEventListener('popstate', function (evt) {
    var section;
    if (evt && evt.state && evt.state.section) {
      section = evt.state.section === 'home' ? '' : evt.state.section;
      eventManager.trigger('navigate', { section: section, push: false });
    }
  });
  this.initialize = function (initialPage, path) {
    history.replaceState({ section: initialPage }, 'gordon koo', path);
  };
  this.navigateTo = function (section) {
    var path = section ? section + '.html' : '/';
    section = section || 'home';
    history.pushState({ section: section }, "gordon koo", path);
  };
  this.hasPushState = typeof history.pushState !== 'undefined';
  return this;
})(),

Homepage = function(initialPage) {
  this.sectionBtnWrapper = document.getElementById('sectionBtnWrapper');

  // This function does the actual changing of the view
  this.changeSection = (function(data) {
    var ANIM_DURATION = 400,
        section = data.section,
        doPush = data.push,
        path;

    if (!historyManager.hasPushState) {
      window.location = section ? section + '.html' : '/';
      return;
    }
    if (section) {
      // Show content
      this.navView.hide(ANIM_DURATION);
      setTimeout((function() {
        this.contentView.showSection(section);
      }).bind(this), ANIM_DURATION);
    }
    else {
      // Show nav view
      this.contentView.hide();
      this.navView.show();
    }

    if (doPush) { historyManager.navigateTo(section); }
  }).bind(this);

  this.init = function() {
    var path = initialPage === 'home' ? '/' : '/' + initialPage + '.html';
    this.navView = new NavView();
    this.contentView = new ContentView();
    historyManager.initialize(initialPage, path);
    eventManager.bind('navigate', this.changeSection);
  };

  this.init();
};

// Define bind for Safari
if (typeof Function.bind === 'undefined') {
  Function.prototype.bind = function (bind) {
    var self = this;
    return function () {
      var args = Array.prototype.slice.call(arguments);
      return self.apply(bind || null, args);
    };
  };
}

document.body.onload = function () {
  var homepage;
  if (typeof currPage === 'undefined') {
    currPage = 'home';
  }
  homepage = new Homepage(currPage);
};
