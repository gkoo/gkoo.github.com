// ====
// BLOG
// ====

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
      console.log(this);
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
      this.trigger('goHome');
    }
  };
  return view.initialize();
},

NavView = Backbone.View.extend({
  el: document.getElementById('sectionBtnWrapper'),

  initialize: function() {
    var el = this.el;
    _.extend(Backbone.Events);

    this.goToSection = this.goToSection.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);

    this.id = el.getAttribute('id');
    this.el.addEventListener('click', this.goToSection);

    // Prevent CSS3 transitions until page is loaded. Sort of hacky.
    setTimeout(function() {
      addClass(el, 'loaded');
    }, 100);
  },

  goToSection: function(evt) {
    var target = evt.target,
        parent;
    if (!hasClass(target, 'title')) {
      parent = target.parentElement;
      if (hasClass(parent, 'title')) {
        target = parent;
      }
    }
    evt.preventDefault();
    page = target.getAttribute('data-section');
    this.trigger('section:navigate', page);
  },

  show: function () {
    console.log('removing faded');
    removeClass(this.el, 'faded');
    this.fadingTimeout = window.setTimeout((function() {
      console.log('removing fading');
      removeClass(this.el, 'fading');
    }).bind(this), 20);
  },

  hide: function (anim_duration) {
    addClass(this.el, 'fading');
    this.fadingTimeout = window.setTimeout((function() {
      addClass(this.el, 'faded');
    }).bind(this), anim_duration);
  }
}),

HomepageRouter = Backbone.Router.extend({
  initialize: function() {
    _.extend(Backbone.Events);
  },
  routes: {
    '': 'home',
    home: 'home',
    about: 'about',
    blog: 'blog',
    projects: 'projects',
    misc: 'misc'
  },
  home: function() {
    this.trigger('route', '');
  },
  about: function() {
    this.trigger('route', 'about');
  },
  blog: function() {
    this.trigger('route', 'blog');
  },
  projects: function() {
    this.trigger('route', 'projects');
  },
  misc: function() {
    this.trigger('route', 'misc');
  }
}),

Homepage = function(initialPage) {
  this.sectionBtnWrapper = document.getElementById('sectionBtnWrapper');

  this.changeSection = (function(section) {
    var ANIM_DURATION = 400;
    if (section) {
      this.navView.hide(ANIM_DURATION);
      setTimeout((function() {
        console.log('showsection: ' + section);
        this.contentView.showSection(section);
      }).bind(this), ANIM_DURATION);
    }
    else {
      // show nav view
      this.contentView.hide();
      this.navView.show();
    }

    this.router.navigate(section);
  }).bind(this);

  this.setupEvents = function() {
    this.navView.on('section:navigate', this.changeSection);
    this.contentView.on('goHome', this.changeSection);
    this.router.on('route', this.changeSection);
  };

  this.init = function() {
    this.router = new HomepageRouter();
    // only show navView if user didn't navigate directly to a section
    this.navView = new NavView();
    this.contentView = new ContentView();
    //this.blog = new Blog(initialPage === 'blog');
    this.setupEvents();

    Backbone.history.start();
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
  var homepage = new Homepage('home');
};
