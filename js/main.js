!(function(e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var r = (t[a] = { i: a, l: !1, exports: {} });
        return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function(e, t, a) {
            n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (n.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.t = function(e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if (
                (n.r(a),
                Object.defineProperty(a, 'default', {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && 'string' != typeof e)
            )
                for (var r in e)
                    n.d(
                        a,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return a;
        }),
        (n.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 2));
})([
    function(e, t, n) {
        'use strict';
        t.a = (function() {
            const e = document.createElement('div'),
                t = document.createElement('div'),
                n = document.createElement('div'),
                a = document.createElement('div'),
                r = document.createElement('div'),
                o = document.createElement('div'),
                c = document.createElement('button'),
                l = document.createElement('button'),
                i = {
                    year: 'numeric',
                    month: 'long',
                    timezone: 'UTC',
                    day: 'numeric',
                };
            let u = new Date().getFullYear(),
                d = new Date().getMonth() + 1,
                s = 0,
                m = 0,
                f = 2;
            function y() {
                let t = document.querySelector('table');
                e.removeChild(t);
            }
            function g(e) {
                y(),
                    e.currentTarget.className.includes('Right') && ++d,
                    e.currentTarget.className.includes('Left') && --d,
                    13 === d && (++u, (d = 1)),
                    0 === d && (--u, (d = 12)),
                    S(u, d);
            }
            function p({ target: e }) {
                let t = +e.innerHTML;
                if ((console.log(e), t)) {
                    let n = +new Date(u, d - 1, t);
                    e.dataset.mSecCurrentDay
                        ? e.dataset.mSecCurrentDay &&
                          (delete e.dataset.mSecCurrentDay, ++f > 2 && (f = 2))
                        : ((e.dataset.mSecCurrentDay = n), --f < 0 && (f = 0)),
                        s && s === n
                            ? ((s = 0), e.classList.remove('in-day'))
                            : m && m === n
                            ? ((m = 0), e.classList.remove('out-day'))
                            : s || m || !e.dataset.mSecCurrentDay
                            ? !s && m && e.dataset.mSecCurrentDay < m
                                ? ((s = +e.dataset.mSecCurrentDay),
                                  e.classList.add('in-day'))
                                : s &&
                                  !m &&
                                  s < n &&
                                  e.dataset.mSecCurrentDay &&
                                  ((m = +e.dataset.mSecCurrentDay),
                                  e.classList.add('out-day'))
                            : ((s = +e.dataset.mSecCurrentDay),
                              e.classList.add('in-day'));
                }
                y(),
                    S(u, d),
                    console.log(
                        'rangeIn :',
                        new Date(+s).toLocaleString('ru', i),
                        'rangeOut :',
                        new Date(+m).toLocaleString('ru', i)
                    );
            }
            function h(e, t, n) {
                const a = new Date().getMonth() + 1,
                    r = new Date().getDate(),
                    o = new Date().getFullYear();
                return e === r && a === n && o === t;
            }
            function v() {
                return s > 0 && m > 0;
            }
            function S(t, n) {
                const r = new Date(t, n - 1, 1),
                    c = r.getDay(),
                    l = new Date(t, n, 0).getDate(),
                    i = document.createElement('table');
                let u = [...new Array(c).fill('')],
                    d = 7 * Math.ceil((u.length - 1) / 7) - (u.length - 1);
                for (var f = 1; f <= l; f++) u.push(f);
                (u = [...u, ...new Array(d).fill('')]),
                    (a.textContent = r.toLocaleString('en', {
                        year: 'numeric',
                        month: 'long',
                        timezone: 'UTC',
                    })),
                    e.insertBefore(i, o),
                    i.appendChild(document.createElement('tr')),
                    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].forEach(
                        e => {
                            const t = document.createElement('th');
                            i.lastChild.appendChild(t), (t.textContent = e);
                        }
                    ),
                    i.appendChild(document.createElement('tr'));
                for (f = 1; f < u.length; f++) {
                    const e = document.createElement('td');
                    (e.textContent = u[f]), i.lastChild.appendChild(e);
                    let a = new Date(t, n - 1, u[f]);
                    if (
                        (h(u[f], t, n) && (e.className = 'markDay'),
                        u[f] && +a === s && e.classList.add('in-day'),
                        u[f] && +a === m && e.classList.add('out-day'),
                        u[f] &&
                            v() &&
                            +a > s &&
                            +a < m &&
                            e.classList.add('incoming-day'),
                        f === u.length - 1)
                    )
                        break;
                    f % 7 == 0 && i.appendChild(document.createElement('tr'));
                }
                i.addEventListener('click', p);
            }
            return (
                (e.className = 'calendar'),
                (t.className = 'arrowMonthLeft'),
                (a.className = 'calendarMonthName'),
                (n.className = 'calendarMonth'),
                (r.className = 'arrowMonthRight'),
                (c.className = 'closedCalendarButton'),
                (l.className = 'confirmChoiseButton'),
                (o.className = 'calendarButtons'),
                (c.className = 'closedCalendarButton'),
                (l.className = 'confirmChoiseButton'),
                e.appendChild(n),
                n.appendChild(t),
                n.appendChild(r),
                n.insertBefore(a, r),
                e.appendChild(o),
                o.appendChild(l),
                o.appendChild(c),
                (l.innerHTML = '<i class="fas fa-check"></i>'),
                (c.innerHTML = '<i class="fas fa-times"></i>'),
                (t.innerHTML = '<i class="fas fa-caret-left"></i>'),
                (r.innerHTML = '<i class="fas fa-caret-right"></i>'),
                S(u, d),
                t.addEventListener('click', g),
                r.addEventListener('click', g),
                {
                    confirmChoiseButton: l,
                    closedCalendarButton: c,
                    body: e,
                    currentDay: new Date().toLocaleString('ru', i),
                    range: () => ({
                        rangeIn: new Date(+s).toLocaleString('ru', i),
                        rangeOut: new Date(+m).toLocaleString('ru', i),
                    }),
                    checkNotSomeRangeDay: v,
                }
            );
        })();
    },
    function(e, t, n) {
        'use strict';
        t.a = function() {
            var e = { lat: 34.864382, lng: -111.795104 },
                t = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: e,
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL,
                        position: google.maps.ControlPosition.LEFT_TOP,
                    },
                });
            new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: e,
                map: t,
            });
        };
    },
    function(e, t, n) {
        n(3), (e.exports = n(5));
    },
    function(e, t, n) {
        'use strict';
        n.r(t),
            function(e) {
                var t = n(0),
                    a = n(1);
                location.href.includes('index') &&
                    (function() {
                        e.initMap = a.a;
                        const n = document.querySelector(
                                '.travel__search__button'
                            ),
                            r = document.querySelector('.adult-counter-minus'),
                            o = document.querySelector('.adult-counter-plus'),
                            c = document.querySelector(
                                '.children-counter-plus'
                            ),
                            l = document.querySelector(
                                '.children-counter-minus'
                            ),
                            i = document.querySelectorAll('.calendar-date'),
                            u = document.querySelector('.main__travel__search'),
                            d = g(),
                            s = g(),
                            m = document.createElement('div'),
                            f = document.querySelector('.date-in__input'),
                            y = document.querySelector('.date-out__input');
                        function g() {
                            let e = 0;
                            return t => {
                                let n = t.currentTarget.getAttribute('class');
                                n.includes('plus') ? e++ : e--;
                                let a = n.includes('adult')
                                    ? document.querySelector(
                                          '.adult-quantity__input'
                                      )
                                    : document.querySelector(
                                          '.children-quantity__input'
                                      );
                                (e = e >= 0 ? e : 0),
                                    a.setAttribute('value', e);
                            };
                        }
                        function p() {
                            t.a.body.classList.add('calendar-visible'),
                                (m.className = 'calendar-shadow-mask'),
                                u.insertBefore(m, t.a.body);
                        }
                        function h() {
                            t.a.body.classList.remove('calendar-visible'),
                                m.classList.remove('calendar-shadow-mask');
                        }
                        (f.placeholder = t.a.currentDay),
                            (y.placeholder = t.a.currentDay),
                            u.appendChild(t.a.body),
                            n.addEventListener('click', function() {
                                document
                                    .querySelector('.travel__search-hotel')
                                    .classList.toggle('visible');
                            }),
                            r.addEventListener('click', d),
                            o.addEventListener('click', d),
                            c.addEventListener('click', s),
                            l.addEventListener('click', s),
                            i.forEach(e => e.addEventListener('click', p)),
                            t.a.closedCalendarButton.addEventListener(
                                'click',
                                h
                            ),
                            t.a.confirmChoiseButton.addEventListener(
                                'click',
                                function() {
                                    t.a.checkNotSomeRangeDay() &&
                                        ((f.value = t.a.range().rangeIn),
                                        (y.value = t.a.range().rangeOut),
                                        h());
                                }
                            );
                    })(),
                    location.href.includes('hotels') &&
                        (function() {
                            const e = document.querySelector('.minRange'),
                                t = document.querySelector('.maxRange');
                            function n() {
                                const n = +e.value,
                                    a = +t.value,
                                    r = Math.round((100 * e.value) / 1e4),
                                    o = Math.round((100 * t.value) / 1e4),
                                    c = document.querySelector('.min-cost'),
                                    l = document.querySelector('.max-cost');
                                (c.innerHTML = `OT ${n}`),
                                    (l.innerHTML = `ДО ${a}`),
                                    n > a - 500 &&
                                        ((t.value = n + 500),
                                        a == t.max && (e.value = 9500)),
                                    a < n + 500 &&
                                        ((e.value = a - 500),
                                        n == e.min && (t.value = 500)),
                                    (e.style.backgroundImage = `linear-gradient(to right, \n        darkgray ${r}%,\n        white ${r}%,\n        white ${o}%,\n        darkgray ${o}% )`);
                            }
                            (e.oninput = n), (t.oninput = n);
                        })();
            }.call(this, n(4));
    },
    function(e, t) {
        var n;
        n = (function() {
            return this;
        })();
        try {
            n = n || new Function('return this')();
        } catch (e) {
            'object' == typeof window && (n = window);
        }
        e.exports = n;
    },
    function(e, t, n) {},
]);
//# sourceMappingURL=main.js.map
