/*! For license information please see main.0bec4a91.js.LICENSE.txt */
!(function () {
  var e = {
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          u = {};
        function l(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin strokeMiterlimit stroke-opacity strokeWidth text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          x = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var N = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function L(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var A,
          M = Object.assign;
        function D(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              A = (t && t[1]) || "";
            }
          return "\n" + A + e;
        }
        var U = !1;
        function V(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  u = o.length - 1;
                1 <= i && 0 <= u && a[i] !== o[u];

              )
                u--;
              for (; 1 <= i && 0 <= u; i--, u--)
                if (a[i] !== o[u]) {
                  if (1 !== i || 1 !== u)
                    do {
                      if ((i--, 0 > --u || a[i] !== o[u])) {
                        var l = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= u);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return D(e.type);
            case 16:
              return D("Lazy");
            case 13:
              return D("Suspense");
            case 19:
              return D("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return "";
          }
        }
        function F(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case C:
              return "Profiler";
            case _:
              return "StrictMode";
            case O:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : F(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return F(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return F(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function K(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function B(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Z(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = B(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = B(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function $(e, t) {
          var n = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = K(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Q(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          Q(e, t);
          var n = K(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, K(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function q(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: K(n) };
        }
        function oe(e, t) {
          var n = K(t.value),
            r = K(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ue(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ue(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var xe = null,
          Se = null,
          _e = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof xe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ka(t)), xe(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function Te() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var Re = !1;
        function je(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== _e) && (Oe(), Te());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ne = !1;
        if (c)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                Ne = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (ce) {
            Ne = !1;
          }
        function Le(e, t, n, r, a, o, i, u, l) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ae = !1,
          Me = null,
          De = !1,
          Ue = null,
          Ve = {
            onError: function (e) {
              (Ae = !0), (Me = e);
            },
          };
        function We(e, t, n, r, a, o, i, u, l) {
          (Ae = !1), (Me = null), Le.apply(Ve, arguments);
        }
        function Fe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if (Fe(e) !== e) throw Error(o(188));
        }
        function Be(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Fe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return Ke(a), e;
                    if (i === r) return Ke(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var u = !1, l = a.child; l; ) {
                    if (l === n) {
                      (u = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (u = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!u) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (u = !0), (n = i), (r = a);
                        break;
                      }
                      if (l === r) {
                        (u = !0), (r = i), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!u) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ze(e)
            : null;
        }
        function Ze(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ze(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Xe = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          $e = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Qe = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          qe = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ut(e) / lt) | 0)) | 0;
              },
          ut = Math.log,
          lt = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var u = i & ~a;
            0 !== u ? (r = ft(u)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          xt,
          St,
          _t,
          Ct,
          Et = !1,
          Tt = [],
          Pt = null,
          Ot = null,
          Rt = null,
          jt = new Map(),
          It = new Map(),
          Nt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Lt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function At(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && xt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Mt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Fe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = $t(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && xt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Dt(e) && n.delete(t);
        }
        function Vt() {
          (Et = !1),
            null !== Pt && Dt(Pt) && (Pt = null),
            null !== Ot && Dt(Ot) && (Ot = null),
            null !== Rt && Dt(Rt) && (Rt = null),
            jt.forEach(Ut),
            It.forEach(Ut);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Vt)));
        }
        function Ft(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < Tt.length) {
            Wt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Wt(Pt, e),
              null !== Ot && Wt(Ot, e),
              null !== Rt && Wt(Rt, e),
              jt.forEach(t),
              It.forEach(t),
              n = 0;
            n < Nt.length;
            n++
          )
            (r = Nt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Nt.length && null === (n = Nt[0]).blockedOn; )
            Mt(n), null === n.blockedOn && Nt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Kt = !0;
        function Bt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Xt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Zt(e, t, n, r) {
          var a = bt,
            o = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Xt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = o);
          }
        }
        function Xt(e, t, n, r) {
          if (Kt) {
            var a = $t(e, t, n, r);
            if (null === a) Kr(e, t, r, Gt, n), Lt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = At(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = At(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = At(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return jt.set(o, At(jt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      It.set(o, At(It.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Lt(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && kt(o),
                  null === (o = $t(e, t, n, r)) && Kr(e, t, r, Gt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Kr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function $t(e, t, n, r) {
          if (((Gt = null), null !== (e = ga((e = ke(r))))))
            if (null === (t = Fe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case qe:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Qt = null,
          Jt = null,
          qt = null;
        function en() {
          if (qt) return qt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Qt ? Qt.value : Qt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (qt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          un,
          ln,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = M({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = M({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (un = e.screenY - ln.screenY))
                      : (un = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          hn = an(pn),
          mn = an(M({}, pn, { dataTransfer: 0 })),
          vn = an(M({}, fn, { relatedTarget: 0 })),
          yn = an(
            M({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = M({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(M({}, sn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          xn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return _n;
        }
        var En = M({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(En),
          Pn = an(
            M({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = an(
            M({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Rn = an(
            M({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          jn = M({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = an(jn),
          Nn = [9, 13, 27, 32],
          zn = c && "CompositionEvent" in window,
          Ln = null;
        c && "documentMode" in document && (Ln = document.documentMode);
        var An = c && "TextEvent" in window && !Ln,
          Mn = c && (!zn || (Ln && 8 < Ln && 11 >= Ln)),
          Dn = String.fromCharCode(32),
          Un = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Nn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Fn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Kn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Bn(e, t, n, r) {
          Ee(r),
            0 < (t = Zr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Zn = null,
          Xn = null;
        function Gn(e) {
          Dr(e, 0);
        }
        function $n(e) {
          if (X(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Qn = !1;
        if (c) {
          var Jn;
          if (c) {
            var qn = "oninput" in document;
            if (!qn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (qn = "function" === typeof er.oninput);
            }
            Jn = qn;
          } else Jn = !1;
          Qn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Zn && (Zn.detachEvent("onpropertychange", nr), (Xn = Zn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && $n(Xn)) {
            var t = [];
            Bn(t, Xn, e, ke(e)), je(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Xn = n), (Zn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return $n(Xn);
        }
        function or(e, t) {
          if ("click" === e) return $n(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return $n(t);
        }
        var ur =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (ur(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ur(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== G(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && lr(gr, r)) ||
              ((gr = r),
              0 < (r = Zr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!xr[e]) return e;
          var t,
            n = xr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xr.animationend.animation,
            delete xr.animationiteration.animation,
            delete xr.animationstart.animation),
          "TransitionEvent" in window || delete xr.transitionend.transition);
        var Er = Cr("animationend"),
          Tr = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Rr = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          Rr.set(e, t), l(t, [e]);
        }
        for (var Nr = 0; Nr < jr.length; Nr++) {
          var zr = jr[Nr];
          Ir(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Ir(Er, "onAnimationEnd"),
          Ir(Tr, "onAnimationIteration"),
          Ir(Pr, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Or, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Lr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Ar = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Lr)
          );
        function Mr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, u, l, s) {
              if ((We.apply(this, arguments), Ae)) {
                if (!Ae) throw Error(o(198));
                var c = Me;
                (Ae = !1), (Me = null), De || ((De = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var u = r[i],
                    l = u.instance,
                    s = u.currentTarget;
                  if (((u = u.listener), l !== o && a.isPropagationStopped()))
                    break e;
                  Mr(a, u, s), (o = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (u = r[i]).instance),
                    (s = u.currentTarget),
                    (u = u.listener),
                    l !== o && a.isPropagationStopped())
                  )
                    break e;
                  Mr(a, u, s), (o = l);
                }
            }
          }
          if (De) throw ((e = Ue), (De = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Wr = "_reactListening" + Math.random().toString(36).slice(2);
        function Fr(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ar.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), Vr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Bt;
              break;
            case 4:
              a = Zt;
              break;
            default:
              a = Xt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ne ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Kr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var u = r.stateNode.containerInfo;
                if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== u; ) {
                  if (null === (i = ga(u))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = o = i;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = o,
              a = ke(n),
              i = [];
            e: {
              var u = Rr.get(e);
              if (void 0 !== u) {
                var l = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (l = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (l = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = On;
                    break;
                  case Er:
                  case Tr:
                  case Pr:
                    l = yn;
                    break;
                  case Or:
                    l = Rn;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Ie(h, d)) &&
                        c.push(Br(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((u = new l(u, s, null, n, a)),
                  i.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (l || u) &&
                  ((u =
                    a.window === a
                      ? a
                      : (u = a.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = Fe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((l = null), (s = r)),
                  l !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? u : wa(l)),
                  (p = null == s ? u : wa(s)),
                  ((u = new c(m, h + "leave", l, n, a)).target = f),
                  (u.relatedTarget = p),
                  (m = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  l && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = l; p; p = Xr(p)) h++;
                    for (p = 0, m = d; m; m = Xr(m)) p++;
                    for (; 0 < h - p; ) (c = Xr(c)), h--;
                    for (; 0 < p - h; ) (d = Xr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Xr(c)), (d = Xr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Gr(i, u, l, c, !1),
                  null !== s && null !== f && Gr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (u = r ? wa(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === l && "file" === u.type)
              )
                var v = Yn;
              else if (Kn(u))
                if (Qn) v = ir;
                else {
                  v = ar;
                  var y = rr;
                }
              else
                (l = u.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? Bn(i, v, n, a)
                  : (y && y(e, u, r),
                    "focusout" === e &&
                      (y = u._wrapperState) &&
                      y.controlled &&
                      "number" === u.type &&
                      ee(u, "number", u.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Kn(y) || "true" === y.contentEditable) &&
                    ((vr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var g;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Fn
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Mn &&
                  "ko" !== n.locale &&
                  (Fn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Fn && (g = en())
                    : ((Jt = "value" in (Qt = a) ? Qt.value : Qt.textContent),
                      (Fn = !0))),
                0 < (y = Zr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Wn(n)) && (b.data = g))),
                (g = An
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Dn);
                        case "textInput":
                          return (e = t.data) === Dn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Fn)
                        return "compositionend" === e || (!zn && Vn(e, t))
                          ? ((e = en()), (qt = Jt = Qt = null), (Fn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Zr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Dr(i, t);
          });
        }
        function Br(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Zr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ie(e, n)) && r.unshift(Br(e, o, a)),
              null != (o = Ie(e, t)) && r.push(Br(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Xr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var u = n,
              l = u.alternate,
              s = u.stateNode;
            if (null !== l && l === r) break;
            5 === u.tag &&
              null !== s &&
              ((u = s),
              a
                ? null != (l = Ie(n, o)) && i.unshift(Br(n, l, u))
                : a || (null != (l = Ie(n, o)) && i.push(Br(n, l, u)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var $r = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Qr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace($r, "\n")
            .replace(Yr, "");
        }
        function Jr(e, t, n) {
          if (((t = Qr(t)), Qr(e) !== t && n)) throw Error(o(425));
        }
        function qr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ua);
                }
              : ra;
        function ua(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ft(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ft(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var xa = [],
          Sa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = xa[Sa]), (xa[Sa] = null), Sa--);
        }
        function Ea(e, t) {
          Sa++, (xa[Sa] = e.current), (e.current = t);
        }
        var Ta = {},
          Pa = _a(Ta),
          Oa = _a(!1),
          Ra = Ta;
        function ja(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ia(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Na() {
          Ca(Oa), Ca(Pa);
        }
        function za(e, t, n) {
          if (Pa.current !== Ta) throw Error(o(168));
          Ea(Pa, t), Ea(Oa, n);
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, H(e) || "Unknown", a));
          return M({}, n, r);
        }
        function Aa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Ra = Pa.current),
            Ea(Pa, e),
            Ea(Oa, Oa.current),
            !0
          );
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = La(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(Pa),
              Ea(Pa, e))
            : Ca(Oa),
            Ea(Oa, n);
        }
        var Da = null,
          Ua = !1,
          Va = !1;
        function Wa(e) {
          null === Da ? (Da = [e]) : Da.push(e);
        }
        function Fa() {
          if (!Va && null !== Da) {
            Va = !0;
            var e = 0,
              t = bt;
            try {
              var n = Da;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Da = null), (Ua = !1);
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), Xe(qe, Fa), a);
            } finally {
              (bt = t), (Va = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Ka = 0,
          Ba = null,
          Za = 0,
          Xa = [],
          Ga = 0,
          $a = null,
          Ya = 1,
          Qa = "";
        function Ja(e, t) {
          (Ha[Ka++] = Za), (Ha[Ka++] = Ba), (Ba = e), (Za = t);
        }
        function qa(e, t, n) {
          (Xa[Ga++] = Ya), (Xa[Ga++] = Qa), (Xa[Ga++] = $a), ($a = e);
          var r = Ya;
          e = Qa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Qa = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Qa = e);
        }
        function eo(e) {
          null !== e.return && (Ja(e, 1), qa(e, 1, 0));
        }
        function to(e) {
          for (; e === Ba; )
            (Ba = Ha[--Ka]), (Ha[Ka] = null), (Za = Ha[--Ka]), (Ha[Ka] = null);
          for (; e === $a; )
            ($a = Xa[--Ga]),
              (Xa[Ga] = null),
              (Qa = Xa[--Ga]),
              (Xa[Ga] = null),
              (Ya = Xa[--Ga]),
              (Xa[Ga] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Is(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function uo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== $a ? { id: Ya, overflow: Qa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Is(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function lo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!uo(e, t)) {
                if (lo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && uo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (lo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (lo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var vo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = M({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = _a(null),
          bo = null,
          wo = null,
          ko = null;
        function xo() {
          ko = wo = bo = null;
        }
        function So(e) {
          var t = go.current;
          Ca(go), (e._currentValue = t);
        }
        function _o(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Co(e, t) {
          (bo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wu = !0), (e.firstContext = null));
        }
        function Eo(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var To = null;
        function Po(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function Oo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Po(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ro(e, r)
          );
        }
        function Ro(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var jo = !1;
        function Io(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function No(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Lo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ol))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ro(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Po(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ro(e, n)
          );
        }
        function Ao(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Mo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Do(e, t, n, r) {
          var a = e.updateQueue;
          jo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var l = u,
              s = l.next;
            (l.next = null), null === i ? (o = s) : (i.next = s), (i = l);
            var c = e.alternate;
            null !== c &&
              (u = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === u ? (c.firstBaseUpdate = s) : (u.next = s),
              (c.lastBaseUpdate = l));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = l = null, u = o; ; ) {
              var d = u.lane,
                p = u.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: u.tag,
                      payload: u.payload,
                      callback: u.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = u;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = M({}, f, d);
                      break e;
                    case 2:
                      jo = !0;
                  }
                }
                null !== u.callback &&
                  0 !== u.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [u]) : d.push(u));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (l = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (u = u.next)) {
                if (null === (u = a.shared.pending)) break;
                (u = (d = u).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (a.baseState = l),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Ml |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Uo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Vo = new r.Component().refs;
        function Wo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : M({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Fo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Fe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = zo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Lo(e, o, a)) && (rs(t, e, a, r), Ao(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = zo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Lo(e, o, a)) && (rs(t, e, a, r), Ao(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = zo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Lo(e, a, r)) && (rs(t, e, r, n), Ao(t, e, r));
          },
        };
        function Ho(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, o);
        }
        function Ko(e, t, n) {
          var r = !1,
            a = Ta,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Eo(o))
              : ((a = Ia(t) ? Ra : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ja(e, a)
                  : Ta)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Fo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Bo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Fo.enqueueReplaceState(t, t.state, null);
        }
        function Zo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Vo), Io(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Eo(o))
            : ((o = Ia(t) ? Ra : Pa.current), (a.context = ja(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Wo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Fo.enqueueReplaceState(a, a.state, null),
              Do(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Xo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Vo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Go(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function $o(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = zs(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === I &&
                    $o(o) === t.type))
              ? (((r = a(t, n.props)).ref = Xo(e, t, n)), (r.return = e), r)
              : (((r = Ls(n.type, n.key, n.props, null, e.mode, r)).ref = Xo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = As(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ds("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Ls(t.type, t.key, t.props, null, e.mode, n)).ref = Xo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Us(t, e.mode, n)).return = e), t;
                case I:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || L(t))
                return ((t = As(t, e.mode, n, null)).return = e), t;
              Go(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? s(e, t, n, r) : null;
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case I:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || L(n)) return null !== a ? null : f(e, t, n, r, null);
              Go(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case I:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || L(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Go(t, r);
            }
            return null;
          }
          function m(a, o, u, l) {
            for (
              var s = null, c = null, f = o, m = (o = 0), v = null;
              null !== f && m < u.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var y = p(a, f, u[m], l);
              if (null === y) {
                null === f && (f = v);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = v);
            }
            if (m === u.length) return n(a, f), ao && Ja(a, m), s;
            if (null === f) {
              for (; m < u.length; m++)
                null !== (f = d(a, u[m], l)) &&
                  ((o = i(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Ja(a, m), s;
            }
            for (f = r(a, f); m < u.length; m++)
              null !== (v = h(f, a, m, u[m], l)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (o = i(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, m),
              s
            );
          }
          function v(a, u, l, s) {
            var c = L(l);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (l = c.call(l))) throw Error(o(151));
            for (
              var f = (c = null), m = u, v = (u = 0), y = null, g = l.next();
              null !== m && !g.done;
              v++, g = l.next()
            ) {
              m.index > v ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, g.value, s);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (u = i(b, u, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (g.done) return n(a, m), ao && Ja(a, v), c;
            if (null === m) {
              for (; !g.done; v++, g = l.next())
                null !== (g = d(a, g.value, s)) &&
                  ((u = i(g, u, v)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Ja(a, v), c;
            }
            for (m = r(a, m); !g.done; v++, g = l.next())
              null !== (g = h(m, a, v, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  m.delete(null === g.key ? v : g.key),
                (u = i(g, u, v)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ja(a, v),
              c
            );
          }
          return function e(r, o, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === I &&
                            $o(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Xo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((o = As(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = o))
                      : (((l = Ls(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = Xo(r, o, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return u(r);
                case x:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Us(i, r.mode, l)).return = r), (r = o);
                  }
                  return u(r);
                case I:
                  return e(r, o, (c = i._init)(i._payload), l);
              }
              if (te(i)) return m(r, o, i, l);
              if (L(i)) return v(r, o, i, l);
              Go(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Ds(i, r.mode, l)).return = r), (r = o)),
                u(r))
              : n(r, o);
          };
        }
        var Qo = Yo(!0),
          Jo = Yo(!1),
          qo = {},
          ei = _a(qo),
          ti = _a(qo),
          ni = _a(qo);
        function ri(e) {
          if (e === qo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ea(ni, t), Ea(ti, e), Ea(ei, qo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(ei), Ea(ei, t);
        }
        function oi() {
          Ca(ei), Ca(ti), Ca(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = le(t, e.type);
          t !== n && (Ea(ti, e), Ea(ei, n));
        }
        function ui(e) {
          ti.current === e && (Ca(ei), Ca(ti));
        }
        var li = _a(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          vi = null,
          yi = null,
          gi = !1,
          bi = !1,
          wi = 0,
          ki = 0;
        function xi() {
          throw Error(o(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function _i(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? uu : lu),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = vi = null),
                (t.updateQueue = null),
                (di.current = su),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = iu),
            (t = null !== vi && null !== vi.next),
            (hi = 0),
            (yi = vi = mi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ei() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ti() {
          if (null === vi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = vi.next;
          var t = null === yi ? mi.memoizedState : yi.next;
          if (null !== t) (yi = t), (vi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (vi = e).memoizedState,
              baseState: vi.baseState,
              baseQueue: vi.baseQueue,
              queue: vi.queue,
              next: null,
            }),
              null === yi ? (mi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Pi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Oi(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = vi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var u = a.next;
              (a.next = i.next), (i.next = u);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var l = (u = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((l = s = d), (u = r)) : (s = s.next = d),
                  (mi.lanes |= f),
                  (Ml |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (u = r) : (s.next = l),
              ur(r, t.memoizedState) || (wu = !0),
              (t.memoizedState = r),
              (t.baseState = u),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Ml |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ri(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var u = (a = a.next);
            do {
              (i = e(i, u.action)), (u = u.next);
            } while (u !== a);
            ur(i, t.memoizedState) || (wu = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji() {}
        function Ii(e, t) {
          var n = mi,
            r = Ti(),
            a = t(),
            i = !ur(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wu = !0)),
            (r = r.queue),
            Ki(Li.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ui(9, zi.bind(null, n, r, a, t), void 0, null),
              null === Rl)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Ni(n, t, a);
          }
          return a;
        }
        function Ni(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ai(t) && Mi(e);
        }
        function Li(e, t, n) {
          return n(function () {
            Ai(t) && Mi(e);
          });
        }
        function Ai(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ur(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Mi(e) {
          var t = Ro(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Di(e) {
          var t = Ei();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Pi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nu.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Ui(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Vi() {
          return Ti().memoizedState;
        }
        function Wi(e, t, n, r) {
          var a = Ei();
          (mi.flags |= e),
            (a.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Fi(e, t, n, r) {
          var a = Ti();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== vi) {
            var i = vi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Ui(t, n, o, r));
          }
          (mi.flags |= e), (a.memoizedState = Ui(1 | t, n, o, r));
        }
        function Hi(e, t) {
          return Wi(8390656, 8, e, t);
        }
        function Ki(e, t) {
          return Fi(2048, 8, e, t);
        }
        function Bi(e, t) {
          return Fi(4, 2, e, t);
        }
        function Zi(e, t) {
          return Fi(4, 4, e, t);
        }
        function Xi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Gi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Fi(4, 4, Xi.bind(null, t, e), n)
          );
        }
        function $i() {}
        function Yi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Qi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ji(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wu = !0)),
              (e.memoizedState = n))
            : (ur(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Ml |= n), (e.baseState = !0)),
              t);
        }
        function qi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function eu() {
          return Ti().memoizedState;
        }
        function tu(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ru(e))
          )
            au(t, n);
          else if (null !== (n = Oo(e, t, n, r))) {
            rs(n, e, r, ts()), ou(n, t, r);
          }
        }
        function nu(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ru(e)) au(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  u = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = u), ur(u, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Po(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = Oo(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ou(n, t, r));
          }
        }
        function ru(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function au(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ou(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var iu = {
            readContext: Eo,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          uu = {
            readContext: Eo,
            useCallback: function (e, t) {
              return (Ei().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Eo,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Wi(4194308, 4, Xi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Wi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Wi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ei();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ei();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tu.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ei().memoizedState = e);
            },
            useState: Di,
            useDebugValue: $i,
            useDeferredValue: function (e) {
              return (Ei().memoizedState = e);
            },
            useTransition: function () {
              var e = Di(!1),
                t = e[0];
              return (
                (e = qi.bind(null, e[1])), (Ei().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ei();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Rl)) throw Error(o(349));
                0 !== (30 & hi) || Ni(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Hi(Li.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ui(9, zi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ei(),
                t = Rl.identifierPrefix;
              if (ao) {
                var n = Qa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          lu = {
            readContext: Eo,
            useCallback: Yi,
            useContext: Eo,
            useEffect: Ki,
            useImperativeHandle: Gi,
            useInsertionEffect: Bi,
            useLayoutEffect: Zi,
            useMemo: Qi,
            useReducer: Oi,
            useRef: Vi,
            useState: function () {
              return Oi(Pi);
            },
            useDebugValue: $i,
            useDeferredValue: function (e) {
              return Ji(Ti(), vi.memoizedState, e);
            },
            useTransition: function () {
              return [Oi(Pi)[0], Ti().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ii,
            useId: eu,
            unstable_isNewReconciler: !1,
          },
          su = {
            readContext: Eo,
            useCallback: Yi,
            useContext: Eo,
            useEffect: Ki,
            useImperativeHandle: Gi,
            useInsertionEffect: Bi,
            useLayoutEffect: Zi,
            useMemo: Qi,
            useReducer: Ri,
            useRef: Vi,
            useState: function () {
              return Ri(Pi);
            },
            useDebugValue: $i,
            useDeferredValue: function (e) {
              var t = Ti();
              return null === vi
                ? (t.memoizedState = e)
                : Ji(t, vi.memoizedState, e);
            },
            useTransition: function () {
              return [Ri(Pi)[0], Ti().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Ii,
            useId: eu,
            unstable_isNewReconciler: !1,
          };
        function cu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fu(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function du(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pu = "function" === typeof WeakMap ? WeakMap : Map;
        function hu(e, t, n) {
          ((n = zo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Bl || ((Bl = !0), (Zl = r)), du(0, t);
            }),
            n
          );
        }
        function mu(e, t, n) {
          (n = zo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                du(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                du(0, t),
                  "function" !== typeof r &&
                    (null === Xl ? (Xl = new Set([this])) : Xl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function vu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Es.bind(null, e, t, n)), t.then(e, e));
        }
        function yu(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gu(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zo(-1, 1)).tag = 2), Lo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bu = w.ReactCurrentOwner,
          wu = !1;
        function ku(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Qo(t, e.child, n, r);
        }
        function xu(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Co(t, a),
            (r = _i(e, t, n, r, o, a)),
            (n = Ci()),
            null === e || wu
              ? (ao && n && eo(t), (t.flags |= 1), ku(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Bu(e, t, a))
          );
        }
        function Su(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ns(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ls(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), _u(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return Bu(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = zs(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _u(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (lr(o, r) && e.ref === t.ref) {
              if (((wu = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Bu(e, t, a);
              0 !== (131072 & e.flags) && (wu = !0);
            }
          }
          return Tu(e, t, n, r, a);
        }
        function Cu(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(zl, Nl),
                (Nl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(zl, Nl),
                  (Nl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ea(zl, Nl),
                (Nl |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(zl, Nl),
              (Nl |= r);
          return ku(e, t, a, n), t.child;
        }
        function Eu(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tu(e, t, n, r, a) {
          var o = Ia(n) ? Ra : Pa.current;
          return (
            (o = ja(t, o)),
            Co(t, a),
            (n = _i(e, t, n, r, o, a)),
            (r = Ci()),
            null === e || wu
              ? (ao && r && eo(t), (t.flags |= 1), ku(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Bu(e, t, a))
          );
        }
        function Pu(e, t, n, r, a) {
          if (Ia(n)) {
            var o = !0;
            Aa(t);
          } else o = !1;
          if ((Co(t, a), null === t.stateNode))
            Ku(e, t), Ko(t, n, r), Zo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              u = t.memoizedProps;
            i.props = u;
            var l = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Eo(s))
              : (s = ja(t, (s = Ia(n) ? Ra : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== r || l !== s) && Bo(t, i, r, s)),
              (jo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Do(t, r, i, a),
              (l = t.memoizedState),
              u !== r || d !== l || Oa.current || jo
                ? ("function" === typeof c &&
                    (Wo(t, n, c, r), (l = t.memoizedState)),
                  (u = jo || Ho(t, n, u, r, d, l, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = s),
                  (r = u))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              No(e, t),
              (u = t.memoizedProps),
              (s = t.type === t.elementType ? u : yo(t.type, u)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Eo(l))
                : (l = ja(t, (l = Ia(n) ? Ra : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((u !== f || d !== l) && Bo(t, i, r, l)),
              (jo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Do(t, r, i, a);
            var h = t.memoizedState;
            u !== f || d !== h || Oa.current || jo
              ? ("function" === typeof p &&
                  (Wo(t, n, p, r), (h = t.memoizedState)),
                (s = jo || Ho(t, n, s, r, d, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ou(e, t, n, r, o, a);
        }
        function Ou(e, t, n, r, a, o) {
          Eu(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ma(t, n, !1), Bu(e, t, o);
          (r = t.stateNode), (bu.current = t);
          var u =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Qo(t, e.child, null, o)),
                (t.child = Qo(t, null, u, o)))
              : ku(e, t, u, o),
            (t.memoizedState = r.state),
            a && Ma(t, n, !0),
            t.child
          );
        }
        function Ru(e) {
          var t = e.stateNode;
          t.pendingContext
            ? za(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && za(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function ju(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), ku(e, t, n, r), t.child;
        }
        var Iu,
          Nu,
          zu,
          Lu,
          Au = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Mu(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Du(e, t, n) {
          var r,
            a = t.pendingProps,
            i = li.current,
            u = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((u = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ea(li, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  u
                    ? ((a = t.mode),
                      (u = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== u
                        ? ((u.childLanes = 0), (u.pendingProps = l))
                        : (u = Ms(l, a, 0, null)),
                      (e = As(e, a, n, null)),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      (t.child.memoizedState = Mu(n)),
                      (t.memoizedState = Au),
                      e)
                    : Uu(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, u) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Vu(e, t, u, (r = fu(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Ms(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = As(i, a, u, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Qo(t, e.child, null, u),
                    (t.child.memoizedState = Mu(u)),
                    (t.memoizedState = Au),
                    i);
              if (0 === (1 & t.mode)) return Vu(e, t, u, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Vu(e, t, u, (r = fu((i = Error(o(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (u & e.childLanes)), wu || l)) {
                if (null !== (r = Rl)) {
                  switch (u & -u) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | u)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Ro(e, a), rs(r, e, a, -1));
                }
                return vs(), Vu(e, t, u, (r = fu(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ps.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Xa[Ga++] = Ya),
                    (Xa[Ga++] = Qa),
                    (Xa[Ga++] = $a),
                    (Ya = e.id),
                    (Qa = e.overflow),
                    ($a = t)),
                  (t = Uu(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, i, n);
          if (u) {
            (u = a.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = zs(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (u = zs(r, u))
                : ((u = As(u, l, n, null)).flags |= 2),
              (u.return = t),
              (a.return = t),
              (a.sibling = u),
              (t.child = a),
              (a = u),
              (u = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Mu(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (u.memoizedState = l),
              (u.childLanes = e.childLanes & ~n),
              (t.memoizedState = Au),
              a
            );
          }
          return (
            (e = (u = e.child).sibling),
            (a = zs(u, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Uu(e, t) {
          return (
            ((t = Ms(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Vu(e, t, n, r) {
          return (
            null !== r && mo(r),
            Qo(t, e.child, null, n),
            ((e = Uu(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Wu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), _o(e.return, t, n);
        }
        function Fu(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Hu(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ku(e, t, r.children, n), 0 !== (2 & (r = li.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Wu(e, n, t);
                else if (19 === e.tag) Wu(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea(li, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Fu(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Fu(t, !0, n, null, o);
                break;
              case "together":
                Fu(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ku(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Bu(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ml |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = zs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zs(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Zu(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Xu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Gu(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Xu(t), null;
            case 1:
            case 17:
              return Ia(t.type) && Na(), Xu(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ca(Oa),
                Ca(Pa),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (us(oo), (oo = null)))),
                Nu(e, t),
                Xu(t),
                null
              );
            case 5:
              ui(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                zu(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Xu(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Lr.length; a++) Ur(Lr[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ur("invalid", r);
                  }
                  for (var l in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(l)) {
                      var s = i[l];
                      "children" === l
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : u.hasOwnProperty(l) &&
                          null != s &&
                          "onScroll" === l &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Z(r), q(r, i, !0);
                      break;
                    case "textarea":
                      Z(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = qr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ue(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Iu(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Lr.length; a++) Ur(Lr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = $(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = M({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (u.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ur("scroll", e)
                              : null != c && b(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        Z(e), q(e, r, !1);
                        break;
                      case "textarea":
                        Z(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + K(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = qr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Xu(t), null;
            case 6:
              if (e && null != t.stateNode) Lu(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Xu(t), null;
            case 13:
              if (
                (Ca(li),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Xu(t), (i = !1);
                } else null !== oo && (us(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & li.current)
                        ? 0 === Ll && (Ll = 3)
                        : vs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Xu(t),
                  null);
            case 4:
              return (
                oi(),
                Nu(e, t),
                null === e && Fr(t.stateNode.containerInfo),
                Xu(t),
                null
              );
            case 10:
              return So(t.type._context), Xu(t), null;
            case 19:
              if ((Ca(li), null === (i = t.memoizedState))) return Xu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Zu(i, !1);
                else {
                  if (0 !== Ll || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = si(e))) {
                        for (
                          t.flags |= 128,
                            Zu(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(li, (1 & li.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Qe() > Hl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Zu(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Zu(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !ao)
                    )
                      return Xu(t), null;
                  } else
                    2 * Qe() - i.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Zu(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Qe()),
                  (t.sibling = null),
                  (n = li.current),
                  Ea(li, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Xu(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Nl) &&
                    (Xu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Xu(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function $u(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ia(t.type) && Na(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ca(Oa),
                Ca(Pa),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ui(t), null;
            case 13:
              if (
                (Ca(li),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(li), null;
            case 4:
              return oi(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Iu = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Nu = function () {}),
          (zu = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = $(e, a)), (r = $(e, r)), (i = []);
                  break;
                case "select":
                  (a = M({}, a, { value: void 0 })),
                    (r = M({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = qr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var l = a[c];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (u.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((l = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== l && (null != s || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          l[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != s && l !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (u.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ur("scroll", e),
                            i || l === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Lu = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yu = !1,
          Qu = !1,
          Ju = "function" === typeof WeakSet ? WeakSet : Set,
          qu = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cs(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Cs(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tl(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function al(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ol(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function il(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), il(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ul(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ul(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function sl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = qr));
          else if (4 !== r && null !== (e = e.child))
            for (sl(e, t, n), e = e.sibling; null !== e; )
              sl(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var fl = null,
          dl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (u) {}
          switch (n.tag) {
            case 5:
              Qu || el(n, t);
            case 6:
              var r = fl,
                a = dl;
              (fl = null),
                pl(e, t, n),
                (dl = a),
                null !== (fl = r) &&
                  (dl
                    ? ((e = fl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fl.removeChild(n.stateNode));
              break;
            case 18:
              null !== fl &&
                (dl
                  ? ((e = fl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Ft(e))
                  : la(fl, n.stateNode));
              break;
            case 4:
              (r = fl),
                (a = dl),
                (fl = n.stateNode.containerInfo),
                (dl = !0),
                pl(e, t, n),
                (fl = r),
                (dl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Qu &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tl(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Qu &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (u) {
                  Cs(n, t, u);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Qu = (r = Qu) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Qu = r))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function ml(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ju()),
              t.forEach(function (t) {
                var r = Os.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  u = t,
                  l = u;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (fl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (fl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === fl) throw Error(o(160));
                hl(i, u, a), (fl = null), (dl = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Cs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vl(t, e), gl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), al(3, e);
                } catch (v) {
                  Cs(e, e.return, v);
                }
                try {
                  rl(5, e, e.return);
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              break;
            case 1:
              vl(t, e), gl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (vl(t, e),
                gl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  u = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      Q(a, i),
                      be(l, u);
                    var c = be(l, i);
                    for (u = 0; u < s.length; u += 2) {
                      var f = s[u],
                        d = s[u + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (l) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (v) {
                    Cs(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((vl(t, e), gl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  Cs(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (vl(t, e),
                gl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ft(t.containerInfo);
                } catch (v) {
                  Cs(e, e.return, v);
                }
              break;
            case 4:
            default:
              vl(t, e), gl(e);
              break;
            case 13:
              vl(t, e),
                gl(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Fl = Qe())),
                4 & r && ml(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Qu = (c = Qu) || f), vl(t, e), (Qu = c))
                  : vl(t, e),
                gl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (qu = e, f = e.child; null !== f; ) {
                    for (d = qu = f; null !== qu; ) {
                      switch (((h = (p = qu).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Cs(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xl(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (qu = h)) : xl(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = d.stateNode),
                              (u =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (l.style.display = me("display", u)));
                      } catch (v) {
                        Cs(e, e.return, v);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (v) {
                        Cs(e, e.return, v);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vl(t, e), gl(e), 4 & r && ml(e);
            case 21:
          }
        }
        function gl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ul(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cl(e, ll(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  sl(e, ll(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (u) {
              Cs(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (qu = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== qu; ) {
            var a = qu,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yu;
              if (!i) {
                var u = a.alternate,
                  l = (null !== u && null !== u.memoizedState) || Qu;
                u = Yu;
                var s = Qu;
                if (((Yu = i), (Qu = l) && !s))
                  for (qu = a; null !== qu; )
                    (l = (i = qu).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Sl(a)
                        : null !== l
                        ? ((l.return = i), (qu = l))
                        : Sl(a);
                for (; null !== o; ) (qu = o), wl(o, t, n), (o = o.sibling);
                (qu = a), (Yu = u), (Qu = s);
              }
              kl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (qu = o))
                : kl(e);
          }
        }
        function kl(e) {
          for (; null !== qu; ) {
            var t = qu;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qu || al(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Qu)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Uo(t, i, r);
                      break;
                    case 3:
                      var u = t.updateQueue;
                      if (null !== u) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Uo(t, u, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ft(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Qu || (512 & t.flags && ol(t));
              } catch (p) {
                Cs(t, t.return, p);
              }
            }
            if (t === e) {
              qu = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (qu = n);
              break;
            }
            qu = t.return;
          }
        }
        function xl(e) {
          for (; null !== qu; ) {
            var t = qu;
            if (t === e) {
              qu = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (qu = n);
              break;
            }
            qu = t.return;
          }
        }
        function Sl(e) {
          for (; null !== qu; ) {
            var t = qu;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    Cs(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Cs(t, a, l);
                    }
                  }
                  var o = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Cs(t, o, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ol(t);
                  } catch (l) {
                    Cs(t, i, l);
                  }
              }
            } catch (l) {
              Cs(t, t.return, l);
            }
            if (t === e) {
              qu = null;
              break;
            }
            var u = t.sibling;
            if (null !== u) {
              (u.return = t.return), (qu = u);
              break;
            }
            qu = t.return;
          }
        }
        var _l,
          Cl = Math.ceil,
          El = w.ReactCurrentDispatcher,
          Tl = w.ReactCurrentOwner,
          Pl = w.ReactCurrentBatchConfig,
          Ol = 0,
          Rl = null,
          jl = null,
          Il = 0,
          Nl = 0,
          zl = _a(0),
          Ll = 0,
          Al = null,
          Ml = 0,
          Dl = 0,
          Ul = 0,
          Vl = null,
          Wl = null,
          Fl = 0,
          Hl = 1 / 0,
          Kl = null,
          Bl = !1,
          Zl = null,
          Xl = null,
          Gl = !1,
          $l = null,
          Yl = 0,
          Ql = 0,
          Jl = null,
          ql = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Ol) ? Qe() : -1 !== ql ? ql : (ql = Qe());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ol) && 0 !== Il
            ? Il & -Il
            : null !== vo.transition
            ? (0 === es && (es = mt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Ql) throw ((Ql = 0), (Jl = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Ol) && e === Rl) ||
              (e === Rl && (0 === (2 & Ol) && (Dl |= n), 4 === Ll && ls(e, Il)),
              as(e, r),
              1 === n &&
                0 === Ol &&
                0 === (1 & t.mode) &&
                ((Hl = Qe() + 500), Ua && Fa()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                u = 1 << i,
                l = a[i];
              -1 === l
                ? (0 !== (u & n) && 0 === (u & r)) || (a[i] = pt(u, t))
                : l <= t && (e.expiredLanes |= u),
                (o &= ~u);
            }
          })(e, t);
          var r = dt(e, e === Rl ? Il : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Wa(e);
                  })(ss.bind(null, e))
                : Wa(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Ol) && Fa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = qe;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Rs(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((ql = -1), (es = 0), 0 !== (6 & Ol))) throw Error(o(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === Rl ? Il : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Ol;
            Ol |= 2;
            var i = ms();
            for (
              (Rl === e && Il === t) ||
              ((Kl = null), (Hl = Qe() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (l) {
                hs(e, l);
              }
            xo(),
              (El.current = i),
              (Ol = a),
              null !== jl ? (t = 0) : ((Rl = null), (Il = 0), (t = Ll));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Al), ps(e, 0), ls(e, r), as(e, Qe()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ur(o(), a)) return !1;
                            } catch (u) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = Al), ps(e, 0), ls(e, r), as(e, Qe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xs(e, Wl, Kl);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Fl + 500 - Qe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xs.bind(null, e, Wl, Kl), t);
                    break;
                  }
                  xs(e, Wl, Kl);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var u = 31 - it(r);
                    (i = 1 << u), (u = t[u]) > a && (a = u), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Qe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xs.bind(null, e, Wl, Kl), r);
                    break;
                  }
                  xs(e, Wl, Kl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Qe()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Vl;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Wl), (Wl = n), null !== t && us(t)),
            e
          );
        }
        function us(e) {
          null === Wl ? (Wl = e) : Wl.push.apply(Wl, e);
        }
        function ls(e, t) {
          for (
            t &= ~Ul,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Ol)) throw Error(o(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Qe()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Al), ps(e, 0), ls(e, t), as(e, Qe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xs(e, Wl, Kl),
            as(e, Qe()),
            null
          );
        }
        function cs(e, t) {
          var n = Ol;
          Ol |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && ((Hl = Qe() + 500), Ua && Fa());
          }
        }
        function fs(e) {
          null !== $l && 0 === $l.tag && 0 === (6 & Ol) && Ss();
          var t = Ol;
          Ol |= 1;
          var n = Pl.transition,
            r = bt;
          try {
            if (((Pl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Pl.transition = n), 0 === (6 & (Ol = t)) && Fa();
          }
        }
        function ds() {
          (Nl = zl.current), Ca(zl);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== jl))
            for (n = jl.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Na();
                  break;
                case 3:
                  oi(), Ca(Oa), Ca(Pa), fi();
                  break;
                case 5:
                  ui(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ca(li);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Rl = e),
            (jl = e = zs(e.current, null)),
            (Il = Nl = t),
            (Ll = 0),
            (Al = null),
            (Ul = Dl = Ml = 0),
            (Wl = Vl = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = jl;
            try {
              if ((xo(), (di.current = iu), gi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = vi = mi = null),
                (bi = !1),
                (wi = 0),
                (Tl.current = null),
                null === n || null === n.return)
              ) {
                (Ll = 1), (Al = t), (jl = null);
                break;
              }
              e: {
                var i = e,
                  u = n.return,
                  l = n,
                  s = t;
                if (
                  ((t = Il),
                  (l.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yu(u);
                  if (null !== h) {
                    (h.flags &= -257),
                      gu(h, u, l, 0, t),
                      1 & h.mode && vu(i, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    vu(i, c, t), vs();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & l.mode) {
                  var y = yu(u);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gu(y, u, l, 0, t),
                      mo(cu(s, l));
                    break e;
                  }
                }
                (i = s = cu(s, l)),
                  4 !== Ll && (Ll = 2),
                  null === Vl ? (Vl = [i]) : Vl.push(i),
                  (i = u);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Mo(i, hu(0, s, t));
                      break e;
                    case 1:
                      l = s;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Xl || !Xl.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Mo(i, mu(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ks(n);
            } catch (w) {
              (t = w), jl === n && null !== n && (jl = n = n.return);
              continue;
            }
            break;
          }
        }
        function ms() {
          var e = El.current;
          return (El.current = iu), null === e ? iu : e;
        }
        function vs() {
          (0 !== Ll && 3 !== Ll && 2 !== Ll) || (Ll = 4),
            null === Rl ||
              (0 === (268435455 & Ml) && 0 === (268435455 & Dl)) ||
              ls(Rl, Il);
        }
        function ys(e, t) {
          var n = Ol;
          Ol |= 2;
          var r = ms();
          for ((Rl === e && Il === t) || ((Kl = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((xo(), (Ol = n), (El.current = r), null !== jl))
            throw Error(o(261));
          return (Rl = null), (Il = 0), Ll;
        }
        function gs() {
          for (; null !== jl; ) ws(jl);
        }
        function bs() {
          for (; null !== jl && !$e(); ) ws(jl);
        }
        function ws(e) {
          var t = _l(e.alternate, e, Nl);
          (e.memoizedProps = e.pendingProps),
            null === t ? ks(e) : (jl = t),
            (Tl.current = null);
        }
        function ks(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Gu(n, t, Nl))) return void (jl = n);
            } else {
              if (null !== (n = $u(n, t)))
                return (n.flags &= 32767), void (jl = n);
              if (null === e) return (Ll = 6), void (jl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (jl = t);
            jl = t = e;
          } while (null !== t);
          0 === Ll && (Ll = 5);
        }
        function xs(e, t, n) {
          var r = bt,
            a = Pl.transition;
          try {
            (Pl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== $l);
                if (0 !== (6 & Ol)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Rl && ((jl = Rl = null), (Il = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Gl ||
                    ((Gl = !0),
                    Rs(tt, function () {
                      return Ss(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Pl.transition), (Pl.transition = null);
                  var u = bt;
                  bt = 1;
                  var l = Ol;
                  (Ol |= 4),
                    (Tl.current = null),
                    (function (e, t) {
                      if (((ea = Kt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var u = 0,
                                l = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (l = u + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = u + r),
                                    3 === d.nodeType &&
                                      (u += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (l = u),
                                    p === i && ++f === r && (s = u),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === l || -1 === s
                                  ? null
                                  : { start: l, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Kt = !1,
                          qu = t;
                        null !== qu;

                      )
                        if (
                          ((e = (t = qu).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (qu = e);
                        else
                          for (; null !== qu; ) {
                            t = qu;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        y = m.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : yo(t.type, v),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Cs(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (qu = e);
                              break;
                            }
                            qu = t.return;
                          }
                      (m = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    hr(ta),
                    (Kt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bl(n, e, a),
                    Ye(),
                    (Ol = l),
                    (bt = u),
                    (Pl.transition = i);
                } else e.current = n;
                if (
                  (Gl && ((Gl = !1), ($l = e), (Yl = a)),
                  (i = e.pendingLanes),
                  0 === i && (Xl = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Qe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Bl) throw ((Bl = !1), (e = Zl), (Zl = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && Ss(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Jl
                      ? Ql++
                      : ((Ql = 0), (Jl = e))
                    : (Ql = 0),
                  Fa();
              })(e, t, n, r);
          } finally {
            (Pl.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== $l) {
            var e = wt(Yl),
              t = Pl.transition,
              n = bt;
            try {
              if (((Pl.transition = null), (bt = 16 > e ? 16 : e), null === $l))
                var r = !1;
              else {
                if (((e = $l), ($l = null), (Yl = 0), 0 !== (6 & Ol)))
                  throw Error(o(331));
                var a = Ol;
                for (Ol |= 4, qu = e.current; null !== qu; ) {
                  var i = qu,
                    u = i.child;
                  if (0 !== (16 & qu.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var s = 0; s < l.length; s++) {
                        var c = l[s];
                        for (qu = c; null !== qu; ) {
                          var f = qu;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (qu = d);
                          else
                            for (; null !== qu; ) {
                              var p = (f = qu).sibling,
                                h = f.return;
                              if ((il(f), f === c)) {
                                qu = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (qu = p);
                                break;
                              }
                              qu = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var y = v.sibling;
                            (v.sibling = null), (v = y);
                          } while (null !== v);
                        }
                      }
                      qu = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== u)
                    (u.return = i), (qu = u);
                  else
                    e: for (; null !== qu; ) {
                      if (0 !== (2048 & (i = qu).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (qu = g);
                        break e;
                      }
                      qu = i.return;
                    }
                }
                var b = e.current;
                for (qu = b; null !== qu; ) {
                  var w = (u = qu).child;
                  if (0 !== (2064 & u.subtreeFlags) && null !== w)
                    (w.return = u), (qu = w);
                  else
                    e: for (u = b; null !== qu; ) {
                      if (0 !== (2048 & (l = qu).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (x) {
                          Cs(l, l.return, x);
                        }
                      if (l === u) {
                        qu = null;
                        break e;
                      }
                      var k = l.sibling;
                      if (null !== k) {
                        (k.return = l.return), (qu = k);
                        break e;
                      }
                      qu = l.return;
                    }
                }
                if (
                  ((Ol = a),
                  Fa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (x) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Pl.transition = t);
            }
          }
          return !1;
        }
        function _s(e, t, n) {
          (e = Lo(e, (t = hu(0, (t = cu(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
        }
        function Cs(e, t, n) {
          if (3 === e.tag) _s(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _s(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Xl || !Xl.has(r)))
                ) {
                  (t = Lo(t, (e = mu(t, (e = cu(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Es(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Rl === e &&
              (Il & n) === n &&
              (4 === Ll ||
              (3 === Ll && (130023424 & Il) === Il && 500 > Qe() - Fl)
                ? ps(e, 0)
                : (Ul |= n)),
            as(e, t);
        }
        function Ts(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Ro(e, t)) && (yt(e, t, n), as(e, n));
        }
        function Ps(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ts(e, n);
        }
        function Os(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ts(e, n);
        }
        function Rs(e, t) {
          return Xe(e, t);
        }
        function js(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Is(e, t, n, r) {
          return new js(e, t, n, r);
        }
        function Ns(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zs(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Is(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ls(e, t, n, r, a, i) {
          var u = 2;
          if (((r = e), "function" === typeof e)) Ns(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case S:
                return As(n.children, a, i, t);
              case _:
                (u = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Is(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case O:
                return (
                  ((e = Is(13, n, t, a)).elementType = O), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = Is(19, n, t, a)).elementType = R), (e.lanes = i), e
                );
              case N:
                return Ms(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      u = 10;
                      break e;
                    case T:
                      u = 9;
                      break e;
                    case P:
                      u = 11;
                      break e;
                    case j:
                      u = 14;
                      break e;
                    case I:
                      (u = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Is(u, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function As(e, t, n, r) {
          return ((e = Is(7, e, r, t)).lanes = n), e;
        }
        function Ms(e, t, n, r) {
          return (
            ((e = Is(22, e, r, t)).elementType = N),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ds(e, t, n) {
          return ((e = Is(6, e, null, t)).lanes = n), e;
        }
        function Us(e, t, n) {
          return (
            ((t = Is(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vs(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ws(e, t, n, r, a, o, i, u, l) {
          return (
            (e = new Vs(e, t, n, u, l)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Is(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Io(o),
            e
          );
        }
        function Fs(e) {
          if (!e) return Ta;
          e: {
            if (Fe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ia(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ia(n)) return La(e, n, t);
          }
          return t;
        }
        function Hs(e, t, n, r, a, o, i, u, l) {
          return (
            ((e = Ws(n, r, !0, e, 0, o, 0, u, l)).context = Fs(null)),
            (n = e.current),
            ((o = zo((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Lo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Ks(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = Fs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Lo(a, t, i)) && (rs(e, a, i, o), Ao(e, a, i)),
            i
          );
        }
        function Bs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Zs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Xs(e, t) {
          Zs(e, t), (e = e.alternate) && Zs(e, t);
        }
        _l = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) wu = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wu = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ru(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ia(t.type) && Aa(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(li, 1 & li.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Du(e, t, n)
                            : (Ea(li, 1 & li.current),
                              null !== (e = Bu(e, t, n)) ? e.sibling : null);
                        Ea(li, 1 & li.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hu(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(li, li.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cu(e, t, n);
                    }
                    return Bu(e, t, n);
                  })(e, t, n)
                );
              wu = 0 !== (131072 & e.flags);
            }
          else (wu = !1), ao && 0 !== (1048576 & t.flags) && qa(t, Za, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Ku(e, t), (e = t.pendingProps);
              var a = ja(t, Pa.current);
              Co(t, n), (a = _i(null, t, r, e, a, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ia(r) ? ((i = !0), Aa(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Io(t),
                    (a.updater = Fo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Zo(t, r, e, n),
                    (t = Ou(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    ku(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Ku(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ns(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Tu(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Pu(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xu(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Su(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tu(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pu(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Ru(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  No(e, t),
                  Do(t, r, null, n);
                var u = t.memoizedState;
                if (((r = u.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: u.cache,
                      pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                      transitions: u.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = ju(e, t, r, n, (a = cu(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = ju(e, t, r, n, (a = cu(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Bu(e, t, n);
                    break e;
                  }
                  ku(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (u = a.children),
                na(r, a)
                  ? (u = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Eu(e, t),
                ku(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Du(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Qo(t, null, r, n)) : ku(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xu(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return ku(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ku(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (u = a.value),
                  Ea(go, r._currentValue),
                  (r._currentValue = u),
                  null !== i)
                )
                  if (ur(i.value, u)) {
                    if (i.children === a.children && !Oa.current) {
                      t = Bu(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        u = i.child;
                        for (var s = l.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = zo(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              _o(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        u = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (u = i.return)) throw Error(o(341));
                        (u.lanes |= n),
                          null !== (l = u.alternate) && (l.lanes |= n),
                          _o(u, n, t),
                          (u = i.sibling);
                      } else u = i.child;
                      if (null !== u) u.return = i;
                      else
                        for (u = i; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (i = u.sibling)) {
                            (i.return = u.return), (u = i);
                            break;
                          }
                          u = u.return;
                        }
                      i = u;
                    }
                ku(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Co(t, n),
                (r = r((a = Eo(a)))),
                (t.flags |= 1),
                ku(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Su(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return _u(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Ku(e, t),
                (t.tag = 1),
                Ia(r) ? ((e = !0), Aa(t)) : (e = !1),
                Co(t, n),
                Ko(t, r, a),
                Zo(t, r, a, n),
                Ou(null, t, r, !0, e, n)
              );
            case 19:
              return Hu(e, t, n);
            case 22:
              return Cu(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Gs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function $s(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Qs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function qs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var u = a;
              a = function () {
                var e = Bs(i);
                u.call(e);
              };
            }
            Ks(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Bs(i);
                    o.call(e);
                  };
                }
                var i = Hs(t, r, e, 0, null, !1, 0, "", qs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Fr(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var u = r;
                r = function () {
                  var e = Bs(l);
                  u.call(e);
                };
              }
              var l = Ws(e, 0, !1, null, 0, !1, 0, "", qs);
              return (
                (e._reactRootContainer = l),
                (e[ha] = l.current),
                Fr(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Ks(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return Bs(i);
        }
        (Ys.prototype.render = $s.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Ks(e, t, null, null);
          }),
          (Ys.prototype.unmount = $s.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Ks(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Nt.length && 0 !== t && t < Nt[n].priority;
                n++
              );
              Nt.splice(n, 0, e), 0 === n && Mt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    as(t, Qe()),
                    0 === (6 & Ol) && ((Hl = Qe() + 500), Fa()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Ro(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Xs(e, 1);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = Ro(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              Xs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Ro(e, t);
              if (null !== n) rs(n, e, t, ts());
              Xs(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (xe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(o(90));
                      X(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cs),
          (Oe = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Ee, Te, cs],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Be(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Qs(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: x,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Qs(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Gs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Ws(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Fr(8 === e.nodeType ? e.parentNode : e),
              new $s(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Be(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Js(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Qs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              u = Gs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
              (t = Hs(t, null, e, 1, null != n ? n : null, a, 0, i, u)),
              (e[ha] = t.current),
              Fr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Js(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Js(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Js(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      968: function (e) {
        var t;
        "undefined" !== typeof self && self,
          (t = function () {
            return (function (e) {
              var t = {};
              function n(r) {
                if (t[r]) return t[r].exports;
                var a = (t[r] = { i: r, l: !1, exports: {} });
                return (
                  e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
                );
              }
              return (
                (n.m = e),
                (n.c = t),
                (n.d = function (e, t, r) {
                  n.o(e, t) ||
                    Object.defineProperty(e, t, {
                      configurable: !1,
                      enumerable: !0,
                      get: r,
                    });
                }),
                (n.n = function (e) {
                  var t =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return n.d(t, "a", t), t;
                }),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.p = "/"),
                n((n.s = 7))
              );
            })([
              function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n, r, a, o, i, u) {
                  if (!e) {
                    var l;
                    if (void 0 === t)
                      l = new Error(
                        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
                      );
                    else {
                      var s = [n, r, a, o, i, u],
                        c = 0;
                      (l = new Error(
                        t.replace(/%s/g, function () {
                          return s[c++];
                        })
                      )).name = "Invariant Violation";
                    }
                    throw ((l.framesToPop = 1), l);
                  }
                };
              },
              function (e, t, n) {
                "use strict";
                function r(e) {
                  return function () {
                    return e;
                  };
                }
                var a = function () {};
                (a.thatReturns = r),
                  (a.thatReturnsFalse = r(!1)),
                  (a.thatReturnsTrue = r(!0)),
                  (a.thatReturnsNull = r(null)),
                  (a.thatReturnsThis = function () {
                    return this;
                  }),
                  (a.thatReturnsArgument = function (e) {
                    return e;
                  }),
                  (e.exports = a);
              },
              function (e, t, n) {
                "use strict";
                var r = Object.getOwnPropertySymbols,
                  a = Object.prototype.hasOwnProperty,
                  o = Object.prototype.propertyIsEnumerable;
                e.exports = (function () {
                  try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (
                      ((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])
                    )
                      return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                      t["_" + String.fromCharCode(n)] = n;
                    if (
                      "0123456789" !==
                      Object.getOwnPropertyNames(t)
                        .map(function (e) {
                          return t[e];
                        })
                        .join("")
                    )
                      return !1;
                    var r = {};
                    return (
                      "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        r[e] = e;
                      }),
                      "abcdefghijklmnopqrst" ===
                        Object.keys(Object.assign({}, r)).join("")
                    );
                  } catch (a) {
                    return !1;
                  }
                })()
                  ? Object.assign
                  : function (e, t) {
                      for (
                        var n,
                          i,
                          u = (function (e) {
                            if (null === e || void 0 === e)
                              throw new TypeError(
                                "Object.assign cannot be called with null or undefined"
                              );
                            return Object(e);
                          })(e),
                          l = 1;
                        l < arguments.length;
                        l++
                      ) {
                        for (var s in (n = Object(arguments[l])))
                          a.call(n, s) && (u[s] = n[s]);
                        if (r) {
                          i = r(n);
                          for (var c = 0; c < i.length; c++)
                            o.call(n, i[c]) && (u[i[c]] = n[i[c]]);
                        }
                      }
                      return u;
                    };
              },
              function (e, t, n) {
                "use strict";
                var r = n(1);
                e.exports = r;
              },
              function (e, t, n) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              },
              function (e, t, n) {
                "use strict";
                e.exports = {};
              },
              function (e, t, n) {
                "use strict";
                e.exports = function (e, t, n, r, a) {};
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r =
                    Object.assign ||
                    function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                      }
                      return e;
                    },
                  a = (function () {
                    function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    }
                    return function (t, n, r) {
                      return n && e(t.prototype, n), r && e(t, r), t;
                    };
                  })(),
                  o = n(8),
                  i = s(o),
                  u = s(n(11)),
                  l = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    return (t.default = e), t;
                  })(n(14));
                function s(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function c(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t ||
                    ("object" !== typeof t && "function" !== typeof t)
                    ? e
                    : t;
                }
                var f = (function (e) {
                  function t() {
                    var e, n, r;
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                    for (
                      var a = arguments.length, o = Array(a), i = 0;
                      i < a;
                      i++
                    )
                      o[i] = arguments[i];
                    return (
                      (n = r =
                        c(
                          this,
                          (e =
                            t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                            e,
                            [this].concat(o)
                          )
                        )),
                      (r.state = { delayed: r.props.delay > 0 }),
                      c(r, n)
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" !== typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    a(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = this.props.delay;
                          this.state.delayed &&
                            (this.timeout = setTimeout(function () {
                              e.setState({ delayed: !1 });
                            }, t));
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          var e = this.timeout;
                          e && clearTimeout(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.props,
                            t = e.color,
                            n = (e.delay, e.type),
                            a = e.height,
                            o = e.width,
                            u = (function (e, t) {
                              var n = {};
                              for (var r in e)
                                t.indexOf(r) >= 0 ||
                                  (Object.prototype.hasOwnProperty.call(e, r) &&
                                    (n[r] = e[r]));
                              return n;
                            })(e, [
                              "color",
                              "delay",
                              "type",
                              "height",
                              "width",
                            ]),
                            s = this.state.delayed ? "blank" : n,
                            c = l[s],
                            f = { fill: t, height: a, width: o };
                          return i.default.createElement(
                            "div",
                            r(
                              {
                                style: f,
                                dangerouslySetInnerHTML: { __html: c },
                              },
                              u
                            )
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(o.Component);
                (f.propTypes = {
                  color: u.default.string,
                  delay: u.default.number,
                  type: u.default.string,
                  height: u.default.oneOfType([
                    u.default.string,
                    u.default.number,
                  ]),
                  width: u.default.oneOfType([
                    u.default.string,
                    u.default.number,
                  ]),
                }),
                  (f.defaultProps = {
                    color: "#fff",
                    delay: 0,
                    type: "balls",
                    height: 64,
                    width: 64,
                  }),
                  (t.default = f);
              },
              function (e, t, n) {
                "use strict";
                e.exports = n(9);
              },
              function (e, t, n) {
                "use strict";
                var r = n(2),
                  a = n(0),
                  o = n(5),
                  i = n(1),
                  u = "function" === typeof Symbol && Symbol.for,
                  l = u ? Symbol.for("react.element") : 60103,
                  s = u ? Symbol.for("react.portal") : 60106,
                  c = u ? Symbol.for("react.fragment") : 60107,
                  f = u ? Symbol.for("react.strict_mode") : 60108,
                  d = u ? Symbol.for("react.provider") : 60109,
                  p = u ? Symbol.for("react.context") : 60110,
                  h = u ? Symbol.for("react.async_mode") : 60111,
                  m = u ? Symbol.for("react.forward_ref") : 60112,
                  v = "function" === typeof Symbol && Symbol.iterator;
                function y(e) {
                  for (
                    var t = arguments.length - 1,
                      n =
                        "http://reactjs.org/docs/error-decoder.html?invariant=" +
                        e,
                      r = 0;
                    r < t;
                    r++
                  )
                    n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
                  a(
                    !1,
                    "Minified React error #" +
                      e +
                      "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
                    n
                  );
                }
                var g = {
                  isMounted: function () {
                    return !1;
                  },
                  enqueueForceUpdate: function () {},
                  enqueueReplaceState: function () {},
                  enqueueSetState: function () {},
                };
                function b(e, t, n) {
                  (this.props = e),
                    (this.context = t),
                    (this.refs = o),
                    (this.updater = n || g);
                }
                function w() {}
                function k(e, t, n) {
                  (this.props = e),
                    (this.context = t),
                    (this.refs = o),
                    (this.updater = n || g);
                }
                (b.prototype.isReactComponent = {}),
                  (b.prototype.setState = function (e, t) {
                    "object" !== typeof e &&
                      "function" !== typeof e &&
                      null != e &&
                      y("85"),
                      this.updater.enqueueSetState(this, e, t, "setState");
                  }),
                  (b.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                  }),
                  (w.prototype = b.prototype);
                var x = (k.prototype = new w());
                (x.constructor = k),
                  r(x, b.prototype),
                  (x.isPureReactComponent = !0);
                var S = { current: null },
                  _ = Object.prototype.hasOwnProperty,
                  C = { key: !0, ref: !0, __self: !0, __source: !0 };
                function E(e, t, n) {
                  var r = void 0,
                    a = {},
                    o = null,
                    i = null;
                  if (null != t)
                    for (r in (void 0 !== t.ref && (i = t.ref),
                    void 0 !== t.key && (o = "" + t.key),
                    t))
                      _.call(t, r) && !C.hasOwnProperty(r) && (a[r] = t[r]);
                  var u = arguments.length - 2;
                  if (1 === u) a.children = n;
                  else if (1 < u) {
                    for (var s = Array(u), c = 0; c < u; c++)
                      s[c] = arguments[c + 2];
                    a.children = s;
                  }
                  if (e && e.defaultProps)
                    for (r in (u = e.defaultProps))
                      void 0 === a[r] && (a[r] = u[r]);
                  return {
                    $$typeof: l,
                    type: e,
                    key: o,
                    ref: i,
                    props: a,
                    _owner: S.current,
                  };
                }
                function T(e) {
                  return (
                    "object" === typeof e && null !== e && e.$$typeof === l
                  );
                }
                var P = /\/+/g,
                  O = [];
                function R(e, t, n, r) {
                  if (O.length) {
                    var a = O.pop();
                    return (
                      (a.result = e),
                      (a.keyPrefix = t),
                      (a.func = n),
                      (a.context = r),
                      (a.count = 0),
                      a
                    );
                  }
                  return {
                    result: e,
                    keyPrefix: t,
                    func: n,
                    context: r,
                    count: 0,
                  };
                }
                function j(e) {
                  (e.result = null),
                    (e.keyPrefix = null),
                    (e.func = null),
                    (e.context = null),
                    (e.count = 0),
                    10 > O.length && O.push(e);
                }
                function I(e, t, n, r) {
                  var a = typeof e;
                  ("undefined" !== a && "boolean" !== a) || (e = null);
                  var o = !1;
                  if (null === e) o = !0;
                  else
                    switch (a) {
                      case "string":
                      case "number":
                        o = !0;
                        break;
                      case "object":
                        switch (e.$$typeof) {
                          case l:
                          case s:
                            o = !0;
                        }
                    }
                  if (o) return n(r, e, "" === t ? "." + N(e, 0) : t), 1;
                  if (
                    ((o = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e))
                  )
                    for (var i = 0; i < e.length; i++) {
                      var u = t + N((a = e[i]), i);
                      o += I(a, u, n, r);
                    }
                  else if (
                    "function" ===
                    typeof (u =
                      null === e || "undefined" === typeof e
                        ? null
                        : "function" ===
                          typeof (u = (v && e[v]) || e["@@iterator"])
                        ? u
                        : null)
                  )
                    for (e = u.call(e), i = 0; !(a = e.next()).done; )
                      o += I((a = a.value), (u = t + N(a, i++)), n, r);
                  else
                    "object" === a &&
                      y(
                        "31",
                        "[object Object]" === (n = "" + e)
                          ? "object with keys {" +
                              Object.keys(e).join(", ") +
                              "}"
                          : n,
                        ""
                      );
                  return o;
                }
                function N(e, t) {
                  return "object" === typeof e && null !== e && null != e.key
                    ? (function (e) {
                        var t = { "=": "=0", ":": "=2" };
                        return (
                          "$" +
                          ("" + e).replace(/[=:]/g, function (e) {
                            return t[e];
                          })
                        );
                      })(e.key)
                    : t.toString(36);
                }
                function z(e, t) {
                  e.func.call(e.context, t, e.count++);
                }
                function L(e, t, n) {
                  var r = e.result,
                    a = e.keyPrefix;
                  (e = e.func.call(e.context, t, e.count++)),
                    Array.isArray(e)
                      ? A(e, r, n, i.thatReturnsArgument)
                      : null != e &&
                        (T(e) &&
                          ((t =
                            a +
                            (!e.key || (t && t.key === e.key)
                              ? ""
                              : ("" + e.key).replace(P, "$&/") + "/") +
                            n),
                          (e = {
                            $$typeof: l,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner,
                          })),
                        r.push(e));
                }
                function A(e, t, n, r, a) {
                  var o = "";
                  null != n && (o = ("" + n).replace(P, "$&/") + "/"),
                    (t = R(t, o, r, a)),
                    null == e || I(e, "", L, t),
                    j(t);
                }
                var M = {
                    Children: {
                      map: function (e, t, n) {
                        if (null == e) return e;
                        var r = [];
                        return A(e, r, null, t, n), r;
                      },
                      forEach: function (e, t, n) {
                        if (null == e) return e;
                        (t = R(null, null, t, n)),
                          null == e || I(e, "", z, t),
                          j(t);
                      },
                      count: function (e) {
                        return null == e
                          ? 0
                          : I(e, "", i.thatReturnsNull, null);
                      },
                      toArray: function (e) {
                        var t = [];
                        return A(e, t, null, i.thatReturnsArgument), t;
                      },
                      only: function (e) {
                        return T(e) || y("143"), e;
                      },
                    },
                    createRef: function () {
                      return { current: null };
                    },
                    Component: b,
                    PureComponent: k,
                    createContext: function (e, t) {
                      return (
                        void 0 === t && (t = null),
                        ((e = {
                          $$typeof: p,
                          _calculateChangedBits: t,
                          _defaultValue: e,
                          _currentValue: e,
                          _changedBits: 0,
                          Provider: null,
                          Consumer: null,
                        }).Provider = { $$typeof: d, _context: e }),
                        (e.Consumer = e)
                      );
                    },
                    forwardRef: function (e) {
                      return { $$typeof: m, render: e };
                    },
                    Fragment: c,
                    StrictMode: f,
                    unstable_AsyncMode: h,
                    createElement: E,
                    cloneElement: function (e, t, n) {
                      (null === e || void 0 === e) && y("267", e);
                      var a = void 0,
                        o = r({}, e.props),
                        i = e.key,
                        u = e.ref,
                        s = e._owner;
                      if (null != t) {
                        void 0 !== t.ref && ((u = t.ref), (s = S.current)),
                          void 0 !== t.key && (i = "" + t.key);
                        var c = void 0;
                        for (a in (e.type &&
                          e.type.defaultProps &&
                          (c = e.type.defaultProps),
                        t))
                          _.call(t, a) &&
                            !C.hasOwnProperty(a) &&
                            (o[a] =
                              void 0 === t[a] && void 0 !== c ? c[a] : t[a]);
                      }
                      if (1 === (a = arguments.length - 2)) o.children = n;
                      else if (1 < a) {
                        c = Array(a);
                        for (var f = 0; f < a; f++) c[f] = arguments[f + 2];
                        o.children = c;
                      }
                      return {
                        $$typeof: l,
                        type: e.type,
                        key: i,
                        ref: u,
                        props: o,
                        _owner: s,
                      };
                    },
                    createFactory: function (e) {
                      var t = E.bind(null, e);
                      return (t.type = e), t;
                    },
                    isValidElement: T,
                    version: "16.3.2",
                    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                      ReactCurrentOwner: S,
                      assign: r,
                    },
                  },
                  D = Object.freeze({ default: M }),
                  U = (D && M) || D;
                e.exports = U.default ? U.default : U;
              },
              function (e, t, n) {},
              function (e, t, n) {
                e.exports = n(13)();
              },
              function (e, t, n) {
                "use strict";
                var r = n(1),
                  a = n(0),
                  o = n(3),
                  i = n(2),
                  u = n(4),
                  l = n(6);
                e.exports = function (e, t) {
                  var n = "function" === typeof Symbol && Symbol.iterator,
                    s = "@@iterator",
                    c = "<<anonymous>>",
                    f = {
                      array: m("array"),
                      bool: m("boolean"),
                      func: m("function"),
                      number: m("number"),
                      object: m("object"),
                      string: m("string"),
                      symbol: m("symbol"),
                      any: h(r.thatReturnsNull),
                      arrayOf: function (e) {
                        return h(function (t, n, r, a, o) {
                          if ("function" !== typeof e)
                            return new p(
                              "Property `" +
                                o +
                                "` of component `" +
                                r +
                                "` has invalid PropType notation inside arrayOf."
                            );
                          var i = t[n];
                          if (!Array.isArray(i))
                            return new p(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                y(i) +
                                "` supplied to `" +
                                r +
                                "`, expected an array."
                            );
                          for (var l = 0; l < i.length; l++) {
                            var s = e(i, l, r, a, o + "[" + l + "]", u);
                            if (s instanceof Error) return s;
                          }
                          return null;
                        });
                      },
                      element: h(function (t, n, r, a, o) {
                        var i = t[n];
                        return e(i)
                          ? null
                          : new p(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                y(i) +
                                "` supplied to `" +
                                r +
                                "`, expected a single ReactElement."
                            );
                      }),
                      instanceOf: function (e) {
                        return h(function (t, n, r, a, o) {
                          if (!(t[n] instanceof e)) {
                            var i = e.name || c;
                            return new p(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                ((u = t[n]).constructor && u.constructor.name
                                  ? u.constructor.name
                                  : c) +
                                "` supplied to `" +
                                r +
                                "`, expected instance of `" +
                                i +
                                "`."
                            );
                          }
                          var u;
                          return null;
                        });
                      },
                      node: h(function (e, t, n, r, a) {
                        return v(e[t])
                          ? null
                          : new p(
                              "Invalid " +
                                r +
                                " `" +
                                a +
                                "` supplied to `" +
                                n +
                                "`, expected a ReactNode."
                            );
                      }),
                      objectOf: function (e) {
                        return h(function (t, n, r, a, o) {
                          if ("function" !== typeof e)
                            return new p(
                              "Property `" +
                                o +
                                "` of component `" +
                                r +
                                "` has invalid PropType notation inside objectOf."
                            );
                          var i = t[n],
                            l = y(i);
                          if ("object" !== l)
                            return new p(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                l +
                                "` supplied to `" +
                                r +
                                "`, expected an object."
                            );
                          for (var s in i)
                            if (i.hasOwnProperty(s)) {
                              var c = e(i, s, r, a, o + "." + s, u);
                              if (c instanceof Error) return c;
                            }
                          return null;
                        });
                      },
                      oneOf: function (e) {
                        return Array.isArray(e)
                          ? h(function (t, n, r, a, o) {
                              for (var i = t[n], u = 0; u < e.length; u++)
                                if (d(i, e[u])) return null;
                              return new p(
                                "Invalid " +
                                  a +
                                  " `" +
                                  o +
                                  "` of value `" +
                                  i +
                                  "` supplied to `" +
                                  r +
                                  "`, expected one of " +
                                  JSON.stringify(e) +
                                  "."
                              );
                            })
                          : r.thatReturnsNull;
                      },
                      oneOfType: function (e) {
                        if (!Array.isArray(e)) return r.thatReturnsNull;
                        for (var t = 0; t < e.length; t++) {
                          var n = e[t];
                          if ("function" !== typeof n)
                            return (
                              o(
                                !1,
                                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                                b(n),
                                t
                              ),
                              r.thatReturnsNull
                            );
                        }
                        return h(function (t, n, r, a, o) {
                          for (var i = 0; i < e.length; i++)
                            if (null == (0, e[i])(t, n, r, a, o, u))
                              return null;
                          return new p(
                            "Invalid " +
                              a +
                              " `" +
                              o +
                              "` supplied to `" +
                              r +
                              "`."
                          );
                        });
                      },
                      shape: function (e) {
                        return h(function (t, n, r, a, o) {
                          var i = t[n],
                            l = y(i);
                          if ("object" !== l)
                            return new p(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                l +
                                "` supplied to `" +
                                r +
                                "`, expected `object`."
                            );
                          for (var s in e) {
                            var c = e[s];
                            if (c) {
                              var f = c(i, s, r, a, o + "." + s, u);
                              if (f) return f;
                            }
                          }
                          return null;
                        });
                      },
                      exact: function (e) {
                        return h(function (t, n, r, a, o) {
                          var l = t[n],
                            s = y(l);
                          if ("object" !== s)
                            return new p(
                              "Invalid " +
                                a +
                                " `" +
                                o +
                                "` of type `" +
                                s +
                                "` supplied to `" +
                                r +
                                "`, expected `object`."
                            );
                          var c = i({}, t[n], e);
                          for (var f in c) {
                            var d = e[f];
                            if (!d)
                              return new p(
                                "Invalid " +
                                  a +
                                  " `" +
                                  o +
                                  "` key `" +
                                  f +
                                  "` supplied to `" +
                                  r +
                                  "`.\nBad object: " +
                                  JSON.stringify(t[n], null, "  ") +
                                  "\nValid keys: " +
                                  JSON.stringify(Object.keys(e), null, "  ")
                              );
                            var h = d(l, f, r, a, o + "." + f, u);
                            if (h) return h;
                          }
                          return null;
                        });
                      },
                    };
                  function d(e, t) {
                    return e === t
                      ? 0 !== e || 1 / e === 1 / t
                      : e !== e && t !== t;
                  }
                  function p(e) {
                    (this.message = e), (this.stack = "");
                  }
                  function h(e) {
                    function n(n, r, o, i, l, s, f) {
                      return (
                        (i = i || c),
                        (s = s || o),
                        f !== u &&
                          t &&
                          a(
                            !1,
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                          ),
                        null == r[o]
                          ? n
                            ? null === r[o]
                              ? new p(
                                  "The " +
                                    l +
                                    " `" +
                                    s +
                                    "` is marked as required in `" +
                                    i +
                                    "`, but its value is `null`."
                                )
                              : new p(
                                  "The " +
                                    l +
                                    " `" +
                                    s +
                                    "` is marked as required in `" +
                                    i +
                                    "`, but its value is `undefined`."
                                )
                            : null
                          : e(r, o, i, l, s)
                      );
                    }
                    var r = n.bind(null, !1);
                    return (r.isRequired = n.bind(null, !0)), r;
                  }
                  function m(e) {
                    return h(function (t, n, r, a, o, i) {
                      var u = t[n];
                      return y(u) !== e
                        ? new p(
                            "Invalid " +
                              a +
                              " `" +
                              o +
                              "` of type `" +
                              g(u) +
                              "` supplied to `" +
                              r +
                              "`, expected `" +
                              e +
                              "`."
                          )
                        : null;
                    });
                  }
                  function v(t) {
                    switch (typeof t) {
                      case "number":
                      case "string":
                      case "undefined":
                        return !0;
                      case "boolean":
                        return !t;
                      case "object":
                        if (Array.isArray(t)) return t.every(v);
                        if (null === t || e(t)) return !0;
                        var r = (function (e) {
                          var t = e && ((n && e[n]) || e[s]);
                          if ("function" === typeof t) return t;
                        })(t);
                        if (!r) return !1;
                        var a,
                          o = r.call(t);
                        if (r !== t.entries) {
                          for (; !(a = o.next()).done; )
                            if (!v(a.value)) return !1;
                        } else
                          for (; !(a = o.next()).done; ) {
                            var i = a.value;
                            if (i && !v(i[1])) return !1;
                          }
                        return !0;
                      default:
                        return !1;
                    }
                  }
                  function y(e) {
                    var t = typeof e;
                    return Array.isArray(e)
                      ? "array"
                      : e instanceof RegExp
                      ? "object"
                      : (function (e, t) {
                          return (
                            "symbol" === e ||
                            "Symbol" === t["@@toStringTag"] ||
                            ("function" === typeof Symbol &&
                              t instanceof Symbol)
                          );
                        })(t, e)
                      ? "symbol"
                      : t;
                  }
                  function g(e) {
                    if ("undefined" === typeof e || null === e) return "" + e;
                    var t = y(e);
                    if ("object" === t) {
                      if (e instanceof Date) return "date";
                      if (e instanceof RegExp) return "regexp";
                    }
                    return t;
                  }
                  function b(e) {
                    var t = g(e);
                    switch (t) {
                      case "array":
                      case "object":
                        return "an " + t;
                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + t;
                      default:
                        return t;
                    }
                  }
                  return (
                    (p.prototype = Error.prototype),
                    (f.checkPropTypes = l),
                    (f.PropTypes = f),
                    f
                  );
                };
              },
              function (e, t, n) {
                "use strict";
                var r = n(1),
                  a = n(0),
                  o = n(4);
                e.exports = function () {
                  function e(e, t, n, r, i, u) {
                    u !== o &&
                      a(
                        !1,
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                  };
                  return (n.checkPropTypes = r), (n.PropTypes = n), n;
                };
              },
              function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = n(15);
                Object.defineProperty(t, "blank", {
                  enumerable: !0,
                  get: function () {
                    return d(r).default;
                  },
                });
                var a = n(16);
                Object.defineProperty(t, "balls", {
                  enumerable: !0,
                  get: function () {
                    return d(a).default;
                  },
                });
                var o = n(17);
                Object.defineProperty(t, "bars", {
                  enumerable: !0,
                  get: function () {
                    return d(o).default;
                  },
                });
                var i = n(18);
                Object.defineProperty(t, "bubbles", {
                  enumerable: !0,
                  get: function () {
                    return d(i).default;
                  },
                });
                var u = n(19);
                Object.defineProperty(t, "cubes", {
                  enumerable: !0,
                  get: function () {
                    return d(u).default;
                  },
                });
                var l = n(20);
                Object.defineProperty(t, "cylon", {
                  enumerable: !0,
                  get: function () {
                    return d(l).default;
                  },
                });
                var s = n(21);
                Object.defineProperty(t, "spin", {
                  enumerable: !0,
                  get: function () {
                    return d(s).default;
                  },
                });
                var c = n(22);
                Object.defineProperty(t, "spinningBubbles", {
                  enumerable: !0,
                  get: function () {
                    return d(c).default;
                  },
                });
                var f = n(23);
                function d(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "spokes", {
                  enumerable: !0,
                  get: function () {
                    return d(f).default;
                  },
                });
              },
              function (e, t) {
                e.exports =
                  '<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> \n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(8)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(14)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(20)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(26)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>\n  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">\n    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />\n  </path>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n';
              },
              function (e, t) {
                e.exports =
                  '<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>\n  </path>\n</svg>\n';
              },
            ]);
          }),
          (e.exports = t());
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          u =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: u.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          x = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            u = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, a) && !_.hasOwnProperty(a) && (o[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) o.children = r;
          else if (1 < l) {
            for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === o[a] && (o[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: u,
            props: o,
            _owner: S.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, o, i) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (u) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === o ? "." + P(l, 0) : o),
              k(i)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  O(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (E(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + P((u = e[s]), s);
              l += O(u, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(u = e.next()).done; )
              l += O((u = u.value), t, a, (c = o + P(u, s++)), i);
          else if ("object" === u)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          N = { transition: null },
          z = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: N,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (s in t)
                x.call(t, s) &&
                  !_.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              l = Array(s);
              for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = N.transition;
            N.transition = {};
            try {
              e();
            } finally {
              N.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var u = 2 * (r + 1) - 1,
                l = e[u],
                s = u + 1,
                c = e[s];
              if (0 > o(l, n))
                s < a && 0 > o(c, l)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = l), (e[u] = n), (r = u));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var u = Date,
            l = u.now();
          t.unstable_now = function () {
            return u.now() - l;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), N(x);
            else {
              var t = r(c);
              null !== t && z(k, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), v && ((v = !1), g(E), (E = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !O()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var u = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (d.callback = u)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var l = !0;
            else {
              var f = r(c);
              null !== f && z(k, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          C = null,
          E = -1,
          T = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < T);
        }
        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((_ = !1), (C = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var j = new MessageChannel(),
            I = j.port2;
          (j.port1.onmessage = R),
            (S = function () {
              I.postMessage(null);
            });
        } else
          S = function () {
            y(R, 0);
          };
        function N(e) {
          (C = e), _ || ((_ = !0), S());
        }
        function z(e, n) {
          E = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), N(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (g(E), (E = -1)) : (v = !0), z(k, o - i)))
                : ((e.sortIndex = u), n(s, e), m || h || ((m = !0), N(x))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      613: function (e) {
        e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !1;
          for (
            var u = Object.prototype.hasOwnProperty.bind(t), l = 0;
            l < o.length;
            l++
          ) {
            var s = o[l];
            if (!u(s)) return !1;
            var c = e[s],
              f = t[s];
            if (
              !1 === (a = n ? n.call(r, c, f, s) : void 0) ||
              (void 0 === a && c !== f)
            )
              return !1;
          }
          return !0;
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var u = 2 & a && r;
          "object" == typeof u && !~e.indexOf(u);
          u = t(u)
        )
          Object.getOwnPropertyNames(u).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (n.nc = void 0),
    (function () {
      "use strict";
      var e = n(791),
        t = n.t(e, 2),
        r = n(250);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? a(e, t)
              : void 0
          );
        }
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          o(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function l(e) {
        if (Array.isArray(e)) return e;
      }
      function s() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function c(e, t) {
        return (
          l(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                u = [],
                l = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = o.call(n)).done) &&
                    (u.push(r.value), u.length !== t);
                    l = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return u;
            }
          })(e, t) ||
          i(e, t) ||
          s()
        );
      }
      function f(e) {
        return (
          (f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          f(e)
        );
      }
      function d() {
        d = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (R) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var o = t && t.prototype instanceof h ? t : h,
            i = Object.create(o.prototype),
            u = new T(a || []);
          return r(i, "_invoke", { value: S(e, n, u) }), i;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (R) {
            return { type: "throw", arg: R };
          }
        }
        e.wrap = s;
        var p = {};
        function h() {}
        function m() {}
        function v() {}
        var y = {};
        l(y, o, function () {
          return this;
        });
        var g = Object.getPrototypeOf,
          b = g && g(g(P([])));
        b && b !== t && n.call(b, o) && (y = b);
        var w = (v.prototype = h.prototype = Object.create(y));
        function k(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function a(r, o, i, u) {
            var l = c(e[r], e, o);
            if ("throw" !== l.type) {
              var s = l.arg,
                d = s.value;
              return d && "object" == f(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, i, u);
                    },
                    function (e) {
                      a("throw", e, i, u);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return a("throw", e, i, u);
                    }
                  );
            }
            u(l.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function S(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return O();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var u = _(i, n);
                if (u) {
                  if (u === p) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = c(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === p)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              p
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), p
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function P(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = v),
          r(w, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: m, configurable: !0 }),
          (m.displayName = l(v, u, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), l(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          k(x.prototype),
          l(x.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new x(s(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          k(w),
          l(w, u, "Generator"),
          l(w, o, function () {
            return this;
          }),
          l(w, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = P),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var u = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (u && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), E(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    E(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: P(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      function p(e, t, n, r, a, o, i) {
        try {
          var u = e[o](i),
            l = u.value;
        } catch (s) {
          return void n(s);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, a);
      }
      function h(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, a) {
            var o = e.apply(t, n);
            function i(e) {
              p(o, r, a, i, u, "next", e);
            }
            function u(e) {
              p(o, r, a, i, u, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function m(e) {
        var t = (function (e, t) {
          if ("object" !== f(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== f(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === f(t) ? t : String(t);
      }
      function v(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, m(r.key), r);
        }
      }
      function g(e, t, n) {
        return (
          t && y(e.prototype, t),
          n && y(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function w(e, t) {
        return (
          (w = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          w(e, t)
        );
      }
      function k(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && w(e, t);
      }
      function x(e) {
        return (
          (x = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          x(e)
        );
      }
      function S() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function _(e) {
        var t = S();
        return function () {
          var n,
            r = x(e);
          if (t) {
            var a = x(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === f(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return b(e);
          })(this, n);
        };
      }
      function C(e, t, n) {
        return (
          (C = S()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && w(a, n.prototype), a;
              }),
          C.apply(null, arguments)
        );
      }
      function E(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (E = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return C(e, arguments, x(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              w(r, e)
            );
          }),
          E(e)
        );
      }
      var T = function (e, t) {
        return (
          (T =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          T(e, t)
        );
      };
      var P = function () {
        return (
          (P =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          P.apply(this, arguments)
        );
      };
      function O(e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              l(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, u);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function R(e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(u) {
          return function (l) {
            return (function (u) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), u[0] && (i = 0)), i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & u[0]
                          ? r.return
                          : u[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, u[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (u = [2 & u[0], a.value]), u[0])) {
                    case 0:
                    case 1:
                      a = u;
                      break;
                    case 4:
                      return i.label++, { value: u[1], done: !1 };
                    case 5:
                      i.label++, (r = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = (a = i.trys).length > 0 && a[a.length - 1]) &&
                        (6 === u[0] || 2 === u[0])
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === u[0] && (!a || (u[1] > a[0] && u[1] < a[3]))) {
                        i.label = u[1];
                        break;
                      }
                      if (6 === u[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = u);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(u);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  u = t.call(e, i);
                } catch (l) {
                  (u = [6, l]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
          };
        }
      }
      function j(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      var I =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof n.g
          ? n.g
          : "undefined" != typeof self
          ? self
          : {};
      function N(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function z(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var L = z(function (e, t) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = (function () {
          function e() {
            var e = this;
            (this.locked = new Map()),
              (this.addToLocked = function (t, n) {
                var r = e.locked.get(t);
                void 0 === r
                  ? void 0 === n
                    ? e.locked.set(t, [])
                    : e.locked.set(t, [n])
                  : void 0 !== n && (r.unshift(n), e.locked.set(t, r));
              }),
              (this.isLocked = function (t) {
                return e.locked.has(t);
              }),
              (this.lock = function (t) {
                return new Promise(function (n, r) {
                  e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
                });
              }),
              (this.unlock = function (t) {
                var n = e.locked.get(t);
                if (void 0 !== n && 0 !== n.length) {
                  var r = n.pop();
                  e.locked.set(t, n), void 0 !== r && setTimeout(r, 0);
                } else e.locked.delete(t);
              });
          }
          return (
            (e.getInstance = function () {
              return (
                void 0 === e.instance && (e.instance = new e()), e.instance
              );
            }),
            e
          );
        })();
        t.default = function () {
          return n.getInstance();
        };
      });
      N(L);
      var A = N(
          z(function (e, t) {
            var n =
                (I && I.__awaiter) ||
                function (e, t, n, r) {
                  return new (n || (n = Promise))(function (a, o) {
                    function i(e) {
                      try {
                        l(r.next(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function u(e) {
                      try {
                        l(r.throw(e));
                      } catch (e) {
                        o(e);
                      }
                    }
                    function l(e) {
                      e.done
                        ? a(e.value)
                        : new n(function (t) {
                            t(e.value);
                          }).then(i, u);
                    }
                    l((r = r.apply(e, t || [])).next());
                  });
                },
              r =
                (I && I.__generator) ||
                function (e, t) {
                  var n,
                    r,
                    a,
                    o,
                    i = {
                      label: 0,
                      sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1];
                      },
                      trys: [],
                      ops: [],
                    };
                  return (
                    (o = { next: u(0), throw: u(1), return: u(2) }),
                    "function" == typeof Symbol &&
                      (o[Symbol.iterator] = function () {
                        return this;
                      }),
                    o
                  );
                  function u(o) {
                    return function (u) {
                      return (function (o) {
                        if (n)
                          throw new TypeError(
                            "Generator is already executing."
                          );
                        for (; i; )
                          try {
                            if (
                              ((n = 1),
                              r &&
                                (a =
                                  2 & o[0]
                                    ? r.return
                                    : o[0]
                                    ? r.throw ||
                                      ((a = r.return) && a.call(r), 0)
                                    : r.next) &&
                                !(a = a.call(r, o[1])).done)
                            )
                              return a;
                            switch (
                              ((r = 0), a && (o = [2 & o[0], a.value]), o[0])
                            ) {
                              case 0:
                              case 1:
                                a = o;
                                break;
                              case 4:
                                return i.label++, { value: o[1], done: !1 };
                              case 5:
                                i.label++, (r = o[1]), (o = [0]);
                                continue;
                              case 7:
                                (o = i.ops.pop()), i.trys.pop();
                                continue;
                              default:
                                if (
                                  !(
                                    (a =
                                      (a = i.trys).length > 0 &&
                                      a[a.length - 1]) ||
                                    (6 !== o[0] && 2 !== o[0])
                                  )
                                ) {
                                  i = 0;
                                  continue;
                                }
                                if (
                                  3 === o[0] &&
                                  (!a || (o[1] > a[0] && o[1] < a[3]))
                                ) {
                                  i.label = o[1];
                                  break;
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                  (i.label = a[1]), (a = o);
                                  break;
                                }
                                if (a && i.label < a[2]) {
                                  (i.label = a[2]), i.ops.push(o);
                                  break;
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue;
                            }
                            o = t.call(e, i);
                          } catch (e) {
                            (o = [6, e]), (r = 0);
                          } finally {
                            n = a = 0;
                          }
                        if (5 & o[0]) throw o[1];
                        return { value: o[0] ? o[1] : void 0, done: !0 };
                      })([o, u]);
                    };
                  }
                };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = "browser-tabs-lock-key";
            function o(e) {
              return new Promise(function (t) {
                return setTimeout(t, e);
              });
            }
            function i(e) {
              for (
                var t =
                    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
                  n = "",
                  r = 0;
                r < e;
                r++
              )
                n += t[Math.floor(61 * Math.random())];
              return n;
            }
            var u = (function () {
              function e() {
                (this.acquiredIatSet = new Set()),
                  (this.id = Date.now().toString() + i(15)),
                  (this.acquireLock = this.acquireLock.bind(this)),
                  (this.releaseLock = this.releaseLock.bind(this)),
                  (this.releaseLock__private__ =
                    this.releaseLock__private__.bind(this)),
                  (this.waitForSomethingToChange =
                    this.waitForSomethingToChange.bind(this)),
                  (this.refreshLockWhileAcquired =
                    this.refreshLockWhileAcquired.bind(this)),
                  void 0 === e.waiters && (e.waiters = []);
              }
              return (
                (e.prototype.acquireLock = function (t, u) {
                  return (
                    void 0 === u && (u = 5e3),
                    n(this, void 0, void 0, function () {
                      var n, l, s, c, f, d;
                      return r(this, function (r) {
                        switch (r.label) {
                          case 0:
                            (n = Date.now() + i(4)),
                              (l = Date.now() + u),
                              (s = a + "-" + t),
                              (c = window.localStorage),
                              (r.label = 1);
                          case 1:
                            return Date.now() < l ? [4, o(30)] : [3, 8];
                          case 2:
                            return (
                              r.sent(),
                              null !== c.getItem(s)
                                ? [3, 5]
                                : ((f = this.id + "-" + t + "-" + n),
                                  [4, o(Math.floor(25 * Math.random()))])
                            );
                          case 3:
                            return (
                              r.sent(),
                              c.setItem(
                                s,
                                JSON.stringify({
                                  id: this.id,
                                  iat: n,
                                  timeoutKey: f,
                                  timeAcquired: Date.now(),
                                  timeRefreshed: Date.now(),
                                })
                              ),
                              [4, o(30)]
                            );
                          case 4:
                            return (
                              r.sent(),
                              null !== (d = c.getItem(s)) &&
                              (d = JSON.parse(d)).id === this.id &&
                              d.iat === n
                                ? (this.acquiredIatSet.add(n),
                                  this.refreshLockWhileAcquired(s, n),
                                  [2, !0])
                                : [3, 7]
                            );
                          case 5:
                            return (
                              e.lockCorrector(),
                              [4, this.waitForSomethingToChange(l)]
                            );
                          case 6:
                            r.sent(), (r.label = 7);
                          case 7:
                            return (n = Date.now() + i(4)), [3, 1];
                          case 8:
                            return [2, !1];
                        }
                      });
                    })
                  );
                }),
                (e.prototype.refreshLockWhileAcquired = function (e, t) {
                  return n(this, void 0, void 0, function () {
                    var a = this;
                    return r(this, function (o) {
                      return (
                        setTimeout(function () {
                          return n(a, void 0, void 0, function () {
                            var n, a;
                            return r(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  return [4, L.default().lock(t)];
                                case 1:
                                  return (
                                    r.sent(),
                                    this.acquiredIatSet.has(t)
                                      ? ((n = window.localStorage),
                                        null === (a = n.getItem(e))
                                          ? (L.default().unlock(t), [2])
                                          : (((a =
                                              JSON.parse(a)).timeRefreshed =
                                              Date.now()),
                                            n.setItem(e, JSON.stringify(a)),
                                            L.default().unlock(t),
                                            this.refreshLockWhileAcquired(e, t),
                                            [2]))
                                      : (L.default().unlock(t), [2])
                                  );
                              }
                            });
                          });
                        }, 1e3),
                        [2]
                      );
                    });
                  });
                }),
                (e.prototype.waitForSomethingToChange = function (t) {
                  return n(this, void 0, void 0, function () {
                    return r(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [
                            4,
                            new Promise(function (n) {
                              var r = !1,
                                a = Date.now(),
                                o = !1;
                              function i() {
                                if (
                                  (o ||
                                    (window.removeEventListener("storage", i),
                                    e.removeFromWaiting(i),
                                    clearTimeout(u),
                                    (o = !0)),
                                  !r)
                                ) {
                                  r = !0;
                                  var t = 50 - (Date.now() - a);
                                  t > 0 ? setTimeout(n, t) : n();
                                }
                              }
                              window.addEventListener("storage", i),
                                e.addToWaiting(i);
                              var u = setTimeout(
                                i,
                                Math.max(0, t - Date.now())
                              );
                            }),
                          ];
                        case 1:
                          return n.sent(), [2];
                      }
                    });
                  });
                }),
                (e.addToWaiting = function (t) {
                  this.removeFromWaiting(t),
                    void 0 !== e.waiters && e.waiters.push(t);
                }),
                (e.removeFromWaiting = function (t) {
                  void 0 !== e.waiters &&
                    (e.waiters = e.waiters.filter(function (e) {
                      return e !== t;
                    }));
                }),
                (e.notifyWaiters = function () {
                  void 0 !== e.waiters &&
                    e.waiters.slice().forEach(function (e) {
                      return e();
                    });
                }),
                (e.prototype.releaseLock = function (e) {
                  return n(this, void 0, void 0, function () {
                    return r(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.releaseLock__private__(e)];
                        case 1:
                          return [2, t.sent()];
                      }
                    });
                  });
                }),
                (e.prototype.releaseLock__private__ = function (t) {
                  return n(this, void 0, void 0, function () {
                    var n, o, i;
                    return r(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return (
                            (n = window.localStorage),
                            (o = a + "-" + t),
                            null === (i = n.getItem(o))
                              ? [2]
                              : (i = JSON.parse(i)).id !== this.id
                              ? [3, 2]
                              : [4, L.default().lock(i.iat)]
                          );
                        case 1:
                          r.sent(),
                            this.acquiredIatSet.delete(i.iat),
                            n.removeItem(o),
                            L.default().unlock(i.iat),
                            e.notifyWaiters(),
                            (r.label = 2);
                        case 2:
                          return [2];
                      }
                    });
                  });
                }),
                (e.lockCorrector = function () {
                  for (
                    var t = Date.now() - 5e3,
                      n = window.localStorage,
                      r = Object.keys(n),
                      o = !1,
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    var u = r[i];
                    if (u.includes(a)) {
                      var l = n.getItem(u);
                      null !== l &&
                        ((void 0 === (l = JSON.parse(l)).timeRefreshed &&
                          l.timeAcquired < t) ||
                          (void 0 !== l.timeRefreshed &&
                            l.timeRefreshed < t)) &&
                        (n.removeItem(u), (o = !0));
                    }
                  }
                  o && e.notifyWaiters();
                }),
                (e.waiters = void 0),
                e
              );
            })();
            t.default = u;
          })
        ),
        M = { timeoutInSeconds: 60 },
        D = { name: "auth0-spa-js", version: "2.1.0" },
        U = function () {
          return Date.now();
        },
        V = (function (e) {
          k(n, e);
          var t = _(n);
          function n(e, r) {
            var a;
            return (
              v(this, n),
              ((a = t.call(this, r)).error = e),
              (a.error_description = r),
              Object.setPrototypeOf(b(a), n.prototype),
              a
            );
          }
          return (
            g(n, null, [
              {
                key: "fromPayload",
                value: function (e) {
                  return new n(e.error, e.error_description);
                },
              },
            ]),
            n
          );
        })(E(Error)),
        W = (function (e) {
          k(n, e);
          var t = _(n);
          function n(e, r, a) {
            var o,
              i =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            return (
              v(this, n),
              ((o = t.call(this, e, r)).state = a),
              (o.appState = i),
              Object.setPrototypeOf(b(o), n.prototype),
              o
            );
          }
          return g(n);
        })(V),
        F = (function (e) {
          k(n, e);
          var t = _(n);
          function n() {
            var e;
            return (
              v(this, n),
              (e = t.call(this, "timeout", "Timeout")),
              Object.setPrototypeOf(b(e), n.prototype),
              e
            );
          }
          return g(n);
        })(V),
        H = (function (e) {
          k(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              v(this, n),
              ((r = t.call(this)).popup = e),
              Object.setPrototypeOf(b(r), n.prototype),
              r
            );
          }
          return g(n);
        })(F),
        K = (function (e) {
          k(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              v(this, n),
              ((r = t.call(this, "cancelled", "Popup closed")).popup = e),
              Object.setPrototypeOf(b(r), n.prototype),
              r
            );
          }
          return g(n);
        })(V),
        B = (function (e) {
          k(n, e);
          var t = _(n);
          function n(e, r, a) {
            var o;
            return (
              v(this, n),
              ((o = t.call(this, e, r)).mfa_token = a),
              Object.setPrototypeOf(b(o), n.prototype),
              o
            );
          }
          return g(n);
        })(V),
        Z = (function (e) {
          k(n, e);
          var t = _(n);
          function n(e, r) {
            var a;
            return (
              v(this, n),
              ((a = t.call(
                this,
                "missing_refresh_token",
                "Missing Refresh Token (audience: '"
                  .concat(X(e, ["default"]), "', scope: '")
                  .concat(X(r), "')")
              )).audience = e),
              (a.scope = r),
              Object.setPrototypeOf(b(a), n.prototype),
              a
            );
          }
          return g(n);
        })(V);
      function X(e) {
        return e &&
          !(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          ).includes(e)
          ? e
          : "";
      }
      var G = function () {
          return window.crypto;
        },
        $ = function () {
          var e =
              "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",
            t = "";
          return (
            Array.from(G().getRandomValues(new Uint8Array(43))).forEach(
              function (n) {
                return (t += e[n % 66]);
              }
            ),
            t
          );
        },
        Y = function (e) {
          return btoa(e);
        },
        Q = function (e) {
          var t = e.clientId,
            n = j(e, ["clientId"]);
          return new URLSearchParams(
            (function (e) {
              return Object.keys(e)
                .filter(function (t) {
                  return void 0 !== e[t];
                })
                .reduce(function (t, n) {
                  return Object.assign(
                    Object.assign({}, t),
                    ((r = {}),
                    (a = n),
                    (o = e[n]),
                    (a = m(a)) in r
                      ? Object.defineProperty(r, a, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[a] = o),
                    r)
                  );
                  var r, a, o;
                }, {});
            })(Object.assign({ client_id: t }, n))
          ).toString();
        },
        J = function (e) {
          return (function (e) {
            return decodeURIComponent(
              atob(e)
                .split("")
                .map(function (e) {
                  return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );
          })(e.replace(/_/g, "/").replace(/-/g, "+"));
        },
        q = (function () {
          var e = h(
            d().mark(function e(t, n) {
              var r;
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), fetch(t, n);
                    case 2:
                      return (
                        (r = e.sent), (e.t0 = r.ok), (e.next = 6), r.json()
                      );
                    case 6:
                      return (
                        (e.t1 = e.sent),
                        e.abrupt("return", { ok: e.t0, json: e.t1 })
                      );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        ee = (function () {
          var e = h(
            d().mark(function e(t, n, r) {
              var a, o;
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = new AbortController()),
                        e.abrupt(
                          "return",
                          ((n.signal = a.signal),
                          Promise.race([
                            q(t, n),
                            new Promise(function (e, t) {
                              o = setTimeout(function () {
                                a.abort(),
                                  t(
                                    new Error("Timeout when executing 'fetch'")
                                  );
                              }, r);
                            }),
                          ]).finally(function () {
                            clearTimeout(o);
                          }))
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        te = (function () {
          var e = h(
            d().mark(function e(t, n, r, a, o, i, u) {
              var l, s;
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        ((l = {
                          auth: { audience: n, scope: r },
                          timeout: o,
                          fetchUrl: t,
                          fetchOptions: a,
                          useFormData: u,
                        }),
                        (s = i),
                        new Promise(function (e, t) {
                          var n = new MessageChannel();
                          (n.port1.onmessage = function (r) {
                            r.data.error
                              ? t(new Error(r.data.error))
                              : e(r.data),
                              n.port1.close();
                          }),
                            s.postMessage(l, [n.port2]);
                        }))
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, a, o, i, u) {
            return e.apply(this, arguments);
          };
        })(),
        ne = (function () {
          var e = h(
            d().mark(function e(t, n, r, a, o, i) {
              var u,
                l = arguments;
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (u = l.length > 6 && void 0 !== l[6] ? l[6] : 1e4),
                        e.abrupt(
                          "return",
                          o ? te(t, n, r, a, u, o, i) : ee(t, a, u)
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, r, a, o, i) {
            return e.apply(this, arguments);
          };
        })();
      function re(e, t) {
        return ae.apply(this, arguments);
      }
      function ae() {
        return (
          (ae = h(
            d().mark(function e(t, n) {
              var r, a, o, i, u, l, s, c;
              return d().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.baseUrl),
                        (a = t.timeout),
                        (o = t.audience),
                        (i = t.scope),
                        (u = t.auth0Client),
                        (l = t.useFormData),
                        (s = j(t, [
                          "baseUrl",
                          "timeout",
                          "audience",
                          "scope",
                          "auth0Client",
                          "useFormData",
                        ])),
                        (c = l ? Q(s) : JSON.stringify(s)),
                        (e.next = 4),
                        (function () {
                          var e = h(
                            d().mark(function e(t, n, r, a, o, i, u) {
                              var l, s, c, f, p, h, m, v;
                              return d().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (s = null), (c = 0);
                                      case 2:
                                        if (!(c < 3)) {
                                          e.next = 17;
                                          break;
                                        }
                                        return (
                                          (e.prev = 3),
                                          (e.next = 6),
                                          ne(t, r, a, o, i, u, n)
                                        );
                                      case 6:
                                        return (
                                          (l = e.sent),
                                          (s = null),
                                          e.abrupt("break", 17)
                                        );
                                      case 11:
                                        (e.prev = 11),
                                          (e.t0 = e.catch(3)),
                                          (s = e.t0);
                                      case 14:
                                        c++, (e.next = 2);
                                        break;
                                      case 17:
                                        if (!s) {
                                          e.next = 19;
                                          break;
                                        }
                                        throw s;
                                      case 19:
                                        if (
                                          ((f = l.json),
                                          (p = f.error),
                                          (h = f.error_description),
                                          (m = j(f, [
                                            "error",
                                            "error_description",
                                          ])),
                                          l.ok)
                                        ) {
                                          e.next = 27;
                                          break;
                                        }
                                        if (
                                          ((v =
                                            h ||
                                            "HTTP error. Unable to fetch ".concat(
                                              t
                                            )),
                                          "mfa_required" !== p)
                                        ) {
                                          e.next = 24;
                                          break;
                                        }
                                        throw new B(p, v, m.mfa_token);
                                      case 24:
                                        if ("missing_refresh_token" !== p) {
                                          e.next = 26;
                                          break;
                                        }
                                        throw new Z(r, a);
                                      case 26:
                                        throw new V(p || "request_error", v);
                                      case 27:
                                        return e.abrupt("return", m);
                                      case 28:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[3, 11]]
                              );
                            })
                          );
                          return function (t, n, r, a, o, i, u) {
                            return e.apply(this, arguments);
                          };
                        })()(
                          "".concat(r, "/oauth/token"),
                          a,
                          o || "default",
                          i,
                          {
                            method: "POST",
                            body: c,
                            headers: {
                              "Content-Type": l
                                ? "application/x-www-form-urlencoded"
                                : "application/json",
                              "Auth0-Client": btoa(JSON.stringify(u || D)),
                            },
                          },
                          n,
                          l
                        )
                      );
                    case 4:
                      return e.abrupt("return", e.sent);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          ae.apply(this, arguments)
        );
      }
      var oe = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return ((r = t.filter(Boolean).join(" ").trim().split(/\s+/)),
          Array.from(new Set(r))).join(" ");
          var r;
        },
        ie = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "@@auth0spajs@@",
              r = arguments.length > 2 ? arguments[2] : void 0;
            v(this, e),
              (this.prefix = n),
              (this.suffix = r),
              (this.clientId = t.clientId),
              (this.scope = t.scope),
              (this.audience = t.audience);
          }
          return (
            g(
              e,
              [
                {
                  key: "toKey",
                  value: function () {
                    return [
                      this.prefix,
                      this.clientId,
                      this.audience,
                      this.scope,
                      this.suffix,
                    ]
                      .filter(Boolean)
                      .join("::");
                  },
                },
              ],
              [
                {
                  key: "fromKey",
                  value: function (t) {
                    var n = c(t.split("::"), 4),
                      r = n[0],
                      a = n[1],
                      o = n[2];
                    return new e({ clientId: a, scope: n[3], audience: o }, r);
                  },
                },
                {
                  key: "fromCacheEntry",
                  value: function (t) {
                    return new e({
                      scope: t.scope,
                      audience: t.audience,
                      clientId: t.client_id,
                    });
                  },
                },
              ]
            ),
            e
          );
        })(),
        ue = (function () {
          function e() {
            v(this, e);
          }
          return (
            g(e, [
              {
                key: "set",
                value: function (e, t) {
                  localStorage.setItem(e, JSON.stringify(t));
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = window.localStorage.getItem(e);
                  if (t)
                    try {
                      return JSON.parse(t);
                    } catch (e) {
                      return;
                    }
                },
              },
              {
                key: "remove",
                value: function (e) {
                  localStorage.removeItem(e);
                },
              },
              {
                key: "allKeys",
                value: function () {
                  return Object.keys(window.localStorage).filter(function (e) {
                    return e.startsWith("@@auth0spajs@@");
                  });
                },
              },
            ]),
            e
          );
        })(),
        le = g(function e() {
          v(this, e),
            (this.enclosedCache = (function () {
              var e = {};
              return {
                set: function (t, n) {
                  e[t] = n;
                },
                get: function (t) {
                  var n = e[t];
                  if (n) return n;
                },
                remove: function (t) {
                  delete e[t];
                },
                allKeys: function () {
                  return Object.keys(e);
                },
              };
            })());
        }),
        se = (function () {
          function e(t, n, r) {
            v(this, e),
              (this.cache = t),
              (this.keyManifest = n),
              (this.nowProvider = r || U);
          }
          return (
            g(e, [
              {
                key: "setIdToken",
                value: (function () {
                  var e = h(
                    d().mark(function e(t, n, r) {
                      var a, o;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (o = this.getIdTokenCacheKey(t)),
                                  (e.next = 3),
                                  this.cache.set(o, {
                                    id_token: n,
                                    decodedToken: r,
                                  })
                                );
                              case 3:
                                return (
                                  (e.next = 5),
                                  null === (a = this.keyManifest) ||
                                  void 0 === a
                                    ? void 0
                                    : a.add(o)
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getIdToken",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.cache.get(
                                    this.getIdTokenCacheKey(t.clientId)
                                  )
                                );
                              case 2:
                                if ((n = e.sent) || !t.scope || !t.audience) {
                                  e.next = 12;
                                  break;
                                }
                                return (e.next = 6), this.get(t);
                              case 6:
                                if ((r = e.sent)) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return");
                              case 9:
                                if (r.id_token && r.decodedToken) {
                                  e.next = 11;
                                  break;
                                }
                                return e.abrupt("return");
                              case 11:
                                return e.abrupt("return", {
                                  id_token: r.id_token,
                                  decodedToken: r.decodedToken,
                                });
                              case 12:
                                if (!n) {
                                  e.next = 14;
                                  break;
                                }
                                return e.abrupt("return", {
                                  id_token: n.id_token,
                                  decodedToken: n.decodedToken,
                                });
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "get",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n,
                        r,
                        a,
                        o,
                        i,
                        u,
                        l,
                        s = arguments;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n =
                                    s.length > 1 && void 0 !== s[1] ? s[1] : 0),
                                  (e.next = 3),
                                  this.cache.get(t.toKey())
                                );
                              case 3:
                                if ((a = e.sent)) {
                                  e.next = 16;
                                  break;
                                }
                                return (e.next = 7), this.getCacheKeys();
                              case 7:
                                if ((o = e.sent)) {
                                  e.next = 10;
                                  break;
                                }
                                return e.abrupt("return");
                              case 10:
                                if (
                                  ((i = this.matchExistingCacheKey(t, o)),
                                  (e.t0 = i),
                                  !e.t0)
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                return (e.next = 15), this.cache.get(i);
                              case 15:
                                a = e.sent;
                              case 16:
                                if (a) {
                                  e.next = 18;
                                  break;
                                }
                                return e.abrupt("return");
                              case 18:
                                return (e.next = 20), this.nowProvider();
                              case 20:
                                if (
                                  ((u = e.sent),
                                  (l = Math.floor(u / 1e3)),
                                  !(a.expiresAt - n < l))
                                ) {
                                  e.next = 38;
                                  break;
                                }
                                if (!a.body.refresh_token) {
                                  e.next = 30;
                                  break;
                                }
                                return (
                                  (a.body = {
                                    refresh_token: a.body.refresh_token,
                                  }),
                                  (e.next = 27),
                                  this.cache.set(t.toKey(), a)
                                );
                              case 27:
                                (e.t2 = a.body), (e.next = 35);
                                break;
                              case 30:
                                return (
                                  (e.next = 32), this.cache.remove(t.toKey())
                                );
                              case 32:
                                return (
                                  (e.next = 34),
                                  null === (r = this.keyManifest) ||
                                  void 0 === r
                                    ? void 0
                                    : r.remove(t.toKey())
                                );
                              case 34:
                                e.t2 = void e.sent;
                              case 35:
                                (e.t1 = e.t2), (e.next = 39);
                                break;
                              case 38:
                                e.t1 = a.body;
                              case 39:
                                return e.abrupt("return", e.t1);
                              case 40:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "set",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r, a;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = new ie({
                                    clientId: t.client_id,
                                    scope: t.scope,
                                    audience: t.audience,
                                  })),
                                  (e.next = 3),
                                  this.wrapCacheEntry(t)
                                );
                              case 3:
                                return (
                                  (a = e.sent),
                                  (e.next = 6),
                                  this.cache.set(r.toKey(), a)
                                );
                              case 6:
                                return (
                                  (e.next = 8),
                                  null === (n = this.keyManifest) ||
                                  void 0 === n
                                    ? void 0
                                    : n.add(r.toKey())
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "clear",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n,
                        r,
                        a = this;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.getCacheKeys();
                              case 2:
                                if (((r = e.sent), (e.t0 = r), !e.t0)) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  r
                                    .filter(function (e) {
                                      return !t || e.includes(t);
                                    })
                                    .reduce(
                                      (function () {
                                        var e = h(
                                          d().mark(function e(t, n) {
                                            return d().wrap(function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (e.next = 2), t;
                                                  case 2:
                                                    return (
                                                      (e.next = 4),
                                                      a.cache.remove(n)
                                                    );
                                                  case 4:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                          })
                                        );
                                        return function (t, n) {
                                          return e.apply(this, arguments);
                                        };
                                      })(),
                                      Promise.resolve()
                                    )
                                );
                              case 7:
                                return (
                                  (e.next = 9),
                                  null === (n = this.keyManifest) ||
                                  void 0 === n
                                    ? void 0
                                    : n.clear()
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "wrapCacheEntry",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.nowProvider();
                              case 2:
                                return (
                                  (n = e.sent),
                                  e.abrupt("return", {
                                    body: t,
                                    expiresAt:
                                      Math.floor(n / 1e3) + t.expires_in,
                                  })
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getCacheKeys",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.keyManifest) {
                                  e.next = 15;
                                  break;
                                }
                                return (e.next = 3), this.keyManifest.get();
                              case 3:
                                if (
                                  ((e.t2 = t = e.sent),
                                  (e.t1 = null === e.t2),
                                  e.t1)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                e.t1 = void 0 === t;
                              case 7:
                                if (!e.t1) {
                                  e.next = 11;
                                  break;
                                }
                                (e.t3 = void 0), (e.next = 12);
                                break;
                              case 11:
                                e.t3 = t.keys;
                              case 12:
                                (e.t0 = e.t3), (e.next = 16);
                                break;
                              case 15:
                                e.t0 = this.cache.allKeys
                                  ? this.cache.allKeys()
                                  : void 0;
                              case 16:
                                return e.abrupt("return", e.t0);
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getIdTokenCacheKey",
                value: function (e) {
                  return new ie(
                    { clientId: e },
                    "@@auth0spajs@@",
                    "@@user@@"
                  ).toKey();
                },
              },
              {
                key: "matchExistingCacheKey",
                value: function (e, t) {
                  return t.filter(function (t) {
                    var n,
                      r = ie.fromKey(t),
                      a = new Set(r.scope && r.scope.split(" ")),
                      o =
                        (null === (n = e.scope) || void 0 === n
                          ? void 0
                          : n.split(" ")) || [],
                      i =
                        r.scope &&
                        o.reduce(function (e, t) {
                          return e && a.has(t);
                        }, !0);
                    return (
                      "@@auth0spajs@@" === r.prefix &&
                      r.clientId === e.clientId &&
                      r.audience === e.audience &&
                      i
                    );
                  })[0];
                },
              },
            ]),
            e
          );
        })(),
        ce = (function () {
          function e(t, n, r) {
            v(this, e),
              (this.storage = t),
              (this.clientId = n),
              (this.cookieDomain = r),
              (this.storageKey = "a0.spajs.txs.".concat(this.clientId));
          }
          return (
            g(e, [
              {
                key: "create",
                value: function (e) {
                  this.storage.save(this.storageKey, e, {
                    daysUntilExpire: 1,
                    cookieDomain: this.cookieDomain,
                  });
                },
              },
              {
                key: "get",
                value: function () {
                  return this.storage.get(this.storageKey);
                },
              },
              {
                key: "remove",
                value: function () {
                  this.storage.remove(this.storageKey, {
                    cookieDomain: this.cookieDomain,
                  });
                },
              },
            ]),
            e
          );
        })(),
        fe = function (e) {
          return "number" == typeof e;
        },
        de = [
          "iss",
          "aud",
          "exp",
          "nbf",
          "iat",
          "jti",
          "azp",
          "nonce",
          "auth_time",
          "at_hash",
          "c_hash",
          "acr",
          "amr",
          "sub_jwk",
          "cnf",
          "sip_from_tag",
          "sip_date",
          "sip_callid",
          "sip_cseq_num",
          "sip_via_branch",
          "orig",
          "dest",
          "mky",
          "events",
          "toe",
          "txn",
          "rph",
          "sid",
          "vot",
          "vtm",
        ],
        pe = function (e) {
          if (!e.id_token) throw new Error("ID token is required but missing");
          var t = (function (e) {
            var t = e.split("."),
              n = c(t, 3),
              r = n[0],
              a = n[1],
              o = n[2];
            if (3 !== t.length || !r || !a || !o)
              throw new Error("ID token could not be decoded");
            var i = JSON.parse(J(a)),
              u = { __raw: e },
              l = {};
            return (
              Object.keys(i).forEach(function (e) {
                (u[e] = i[e]), de.includes(e) || (l[e] = i[e]);
              }),
              {
                encoded: { header: r, payload: a, signature: o },
                header: JSON.parse(J(r)),
                claims: u,
                user: l,
              }
            );
          })(e.id_token);
          if (!t.claims.iss)
            throw new Error(
              "Issuer (iss) claim must be a string present in the ID token"
            );
          if (t.claims.iss !== e.iss)
            throw new Error(
              'Issuer (iss) claim mismatch in the ID token; expected "'
                .concat(e.iss, '", found "')
                .concat(t.claims.iss, '"')
            );
          if (!t.user.sub)
            throw new Error(
              "Subject (sub) claim must be a string present in the ID token"
            );
          if ("RS256" !== t.header.alg)
            throw new Error(
              'Signature algorithm of "'.concat(
                t.header.alg,
                '" is not supported. Expected the ID token to be signed with "RS256".'
              )
            );
          if (
            !t.claims.aud ||
            ("string" != typeof t.claims.aud && !Array.isArray(t.claims.aud))
          )
            throw new Error(
              "Audience (aud) claim must be a string or array of strings present in the ID token"
            );
          if (Array.isArray(t.claims.aud)) {
            if (!t.claims.aud.includes(e.aud))
              throw new Error(
                'Audience (aud) claim mismatch in the ID token; expected "'
                  .concat(e.aud, '" but was not one of "')
                  .concat(t.claims.aud.join(", "), '"')
              );
            if (t.claims.aud.length > 1) {
              if (!t.claims.azp)
                throw new Error(
                  "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
                );
              if (t.claims.azp !== e.aud)
                throw new Error(
                  'Authorized Party (azp) claim mismatch in the ID token; expected "'
                    .concat(e.aud, '", found "')
                    .concat(t.claims.azp, '"')
                );
            }
          } else if (t.claims.aud !== e.aud)
            throw new Error(
              'Audience (aud) claim mismatch in the ID token; expected "'
                .concat(e.aud, '" but found "')
                .concat(t.claims.aud, '"')
            );
          if (e.nonce) {
            if (!t.claims.nonce)
              throw new Error(
                "Nonce (nonce) claim must be a string present in the ID token"
              );
            if (t.claims.nonce !== e.nonce)
              throw new Error(
                'Nonce (nonce) claim mismatch in the ID token; expected "'
                  .concat(e.nonce, '", found "')
                  .concat(t.claims.nonce, '"')
              );
          }
          if (e.max_age && !fe(t.claims.auth_time))
            throw new Error(
              "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
            );
          if (null == t.claims.exp || !fe(t.claims.exp))
            throw new Error(
              "Expiration Time (exp) claim must be a number present in the ID token"
            );
          if (!fe(t.claims.iat))
            throw new Error(
              "Issued At (iat) claim must be a number present in the ID token"
            );
          var n = e.leeway || 60,
            r = new Date(e.now || Date.now()),
            a = new Date(0);
          if ((a.setUTCSeconds(t.claims.exp + n), r > a))
            throw new Error(
              "Expiration Time (exp) claim error in the ID token; current time ("
                .concat(r, ") is after expiration time (")
                .concat(a, ")")
            );
          if (null != t.claims.nbf && fe(t.claims.nbf)) {
            var o = new Date(0);
            if ((o.setUTCSeconds(t.claims.nbf - n), r < o))
              throw new Error(
                "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time ("
                  .concat(r, ") is before ")
                  .concat(o)
              );
          }
          if (null != t.claims.auth_time && fe(t.claims.auth_time)) {
            var i = new Date(0);
            if (
              (i.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
              r > i)
            )
              throw new Error(
                "Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time ("
                  .concat(r, ") is after last auth at ")
                  .concat(i)
              );
          }
          if (e.organization) {
            var u = e.organization.trim();
            if (u.startsWith("org_")) {
              var l = u;
              if (!t.claims.org_id)
                throw new Error(
                  "Organization ID (org_id) claim must be a string present in the ID token"
                );
              if (l !== t.claims.org_id)
                throw new Error(
                  'Organization ID (org_id) claim mismatch in the ID token; expected "'
                    .concat(l, '", found "')
                    .concat(t.claims.org_id, '"')
                );
            } else {
              var s = u.toLowerCase();
              if (!t.claims.org_name)
                throw new Error(
                  "Organization Name (org_name) claim must be a string present in the ID token"
                );
              if (s !== t.claims.org_name.toLowerCase())
                throw new Error(
                  'Organization Name (org_name) claim mismatch in the ID token; expected "'
                    .concat(s, '", found "')
                    .concat(t.claims.org_name.toLowerCase(), '"')
                );
            }
          }
          return t;
        },
        he = z(function (e, t) {
          var n =
            (I && I.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                      for (var a in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, a) &&
                          (e[a] = t[a]);
                    return e;
                  }),
                n.apply(this, arguments)
              );
            };
          function r(e, t) {
            if (!t) return "";
            var n = "; " + e;
            return !0 === t ? n : n + "=" + t;
          }
          function a(e, t, n) {
            return (
              encodeURIComponent(e)
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/\(/g, "%28")
                .replace(/\)/g, "%29") +
              "=" +
              encodeURIComponent(t).replace(
                /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                decodeURIComponent
              ) +
              (function (e) {
                if ("number" == typeof e.expires) {
                  var t = new Date();
                  t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
                    (e.expires = t);
                }
                return (
                  r("Expires", e.expires ? e.expires.toUTCString() : "") +
                  r("Domain", e.domain) +
                  r("Path", e.path) +
                  r("Secure", e.secure) +
                  r("SameSite", e.sameSite)
                );
              })(n)
            );
          }
          function o(e) {
            for (
              var t = {},
                n = e ? e.split("; ") : [],
                r = /(%[\dA-F]{2})+/gi,
                a = 0;
              a < n.length;
              a++
            ) {
              var o = n[a].split("="),
                i = o.slice(1).join("=");
              '"' === i.charAt(0) && (i = i.slice(1, -1));
              try {
                t[o[0].replace(r, decodeURIComponent)] = i.replace(
                  r,
                  decodeURIComponent
                );
              } catch (e) {}
            }
            return t;
          }
          function i() {
            return o(document.cookie);
          }
          function u(e, t, r) {
            document.cookie = a(e, t, n({ path: "/" }, r));
          }
          (t.__esModule = !0),
            (t.encode = a),
            (t.parse = o),
            (t.getAll = i),
            (t.get = function (e) {
              return i()[e];
            }),
            (t.set = u),
            (t.remove = function (e, t) {
              u(e, "", n(n({}, t), { expires: -1 }));
            });
        });
      N(he), he.encode, he.parse, he.getAll;
      var me = he.get,
        ve = he.set,
        ye = he.remove,
        ge = {
          get: function (e) {
            var t = me(e);
            if (void 0 !== t) return JSON.parse(t);
          },
          save: function (e, t, n) {
            var r = {};
            "https:" === window.location.protocol &&
              (r = { secure: !0, sameSite: "none" }),
              (null == n ? void 0 : n.daysUntilExpire) &&
                (r.expires = n.daysUntilExpire),
              (null == n ? void 0 : n.cookieDomain) &&
                (r.domain = n.cookieDomain),
              ve(e, JSON.stringify(t), r);
          },
          remove: function (e, t) {
            var n = {};
            (null == t ? void 0 : t.cookieDomain) &&
              (n.domain = t.cookieDomain),
              ye(e, n);
          },
        },
        be = {
          get: function (e) {
            return ge.get(e) || ge.get("_legacy_".concat(e));
          },
          save: function (e, t, n) {
            var r = {};
            "https:" === window.location.protocol && (r = { secure: !0 }),
              (null == n ? void 0 : n.daysUntilExpire) &&
                (r.expires = n.daysUntilExpire),
              (null == n ? void 0 : n.cookieDomain) &&
                (r.domain = n.cookieDomain),
              ve("_legacy_".concat(e), JSON.stringify(t), r),
              ge.save(e, t, n);
          },
          remove: function (e, t) {
            var n = {};
            (null == t ? void 0 : t.cookieDomain) &&
              (n.domain = t.cookieDomain),
              ye(e, n),
              ge.remove(e, t),
              ge.remove("_legacy_".concat(e), t);
          },
        },
        we = {
          get: function (e) {
            if ("undefined" != typeof sessionStorage) {
              var t = sessionStorage.getItem(e);
              return null != t ? JSON.parse(t) : void 0;
            }
          },
          save: function (e, t) {
            sessionStorage.setItem(e, JSON.stringify(t));
          },
          remove: function (e) {
            sessionStorage.removeItem(e);
          },
        };
      var ke,
        xe,
        Se =
          ("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==",
          null,
          !1,
          function (e) {
            return (
              (ke =
                ke ||
                (function (e, t, n) {
                  var r = void 0 === t ? null : t,
                    a = (function (e, t) {
                      var n = atob(e);
                      if (t) {
                        for (
                          var r = new Uint8Array(n.length), a = 0, o = n.length;
                          a < o;
                          ++a
                        )
                          r[a] = n.charCodeAt(a);
                        return String.fromCharCode.apply(
                          null,
                          new Uint16Array(r.buffer)
                        );
                      }
                      return n;
                    })(e, void 0 !== n && n),
                    o = a.indexOf("\n", 10) + 1,
                    i = a.substring(o) + (r ? "//# sourceMappingURL=" + r : ""),
                    u = new Blob([i], { type: "application/javascript" });
                  return URL.createObjectURL(u);
                })(
                  "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==",
                  null,
                  false
                )),
              new Worker(ke, e)
            );
          }),
        _e = {},
        Ce = (function () {
          function e(t, n) {
            v(this, e),
              (this.cache = t),
              (this.clientId = n),
              (this.manifestKey = this.createManifestKeyFrom(this.clientId));
          }
          return (
            g(e, [
              {
                key: "add",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = Set),
                                  (e.next = 3),
                                  this.cache.get(this.manifestKey)
                                );
                              case 3:
                                if (
                                  ((e.t3 = n = e.sent),
                                  (e.t2 = null === e.t3),
                                  e.t2)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                e.t2 = void 0 === n;
                              case 7:
                                if (!e.t2) {
                                  e.next = 11;
                                  break;
                                }
                                (e.t4 = void 0), (e.next = 12);
                                break;
                              case 11:
                                e.t4 = n.keys;
                              case 12:
                                if (((e.t1 = e.t4), e.t1)) {
                                  e.next = 15;
                                  break;
                                }
                                e.t1 = [];
                              case 15:
                                return (
                                  (e.t5 = e.t1),
                                  (r = new e.t0(e.t5)).add(t),
                                  (e.next = 20),
                                  this.cache.set(this.manifestKey, {
                                    keys: u(r),
                                  })
                                );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "remove",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.cache.get(this.manifestKey)
                                );
                              case 2:
                                if (!(n = e.sent)) {
                                  e.next = 16;
                                  break;
                                }
                                if (
                                  ((r = new Set(n.keys)).delete(t),
                                  !(r.size > 0))
                                ) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  this.cache.set(this.manifestKey, {
                                    keys: u(r),
                                  })
                                );
                              case 9:
                                (e.t0 = e.sent), (e.next = 15);
                                break;
                              case 12:
                                return (
                                  (e.next = 14),
                                  this.cache.remove(this.manifestKey)
                                );
                              case 14:
                                e.t0 = e.sent;
                              case 15:
                                return e.abrupt("return", e.t0);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "get",
                value: function () {
                  return this.cache.get(this.manifestKey);
                },
              },
              {
                key: "clear",
                value: function () {
                  return this.cache.remove(this.manifestKey);
                },
              },
              {
                key: "createManifestKeyFrom",
                value: function (e) {
                  return "@@auth0spajs@@::".concat(e);
                },
              },
            ]),
            e
          );
        })(),
        Ee = {
          memory: function () {
            return new le().enclosedCache;
          },
          localstorage: function () {
            return new ue();
          },
        },
        Te = function (e) {
          return Ee[e];
        },
        Pe = function (e) {
          var t = e.openUrl,
            n = e.onRedirect,
            r = j(e, ["openUrl", "onRedirect"]);
          return Object.assign(Object.assign({}, r), {
            openUrl: !1 === t || t ? t : n,
          });
        },
        Oe = new A(),
        Re = (function () {
          function e(t) {
            var n,
              r,
              a = this;
            if (
              (v(this, e),
              (this.userCache = new le().enclosedCache),
              (this.defaultOptions = {
                authorizationParams: { scope: "openid profile email" },
                useRefreshTokensFallback: !1,
                useFormData: !0,
              }),
              (this._releaseLockOnPageHide = h(
                d().mark(function e() {
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            Oe.releaseLock("auth0.lock.getTokenSilently")
                          );
                        case 2:
                          window.removeEventListener(
                            "pagehide",
                            a._releaseLockOnPageHide
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (this.options = Object.assign(
                Object.assign(Object.assign({}, this.defaultOptions), t),
                {
                  authorizationParams: Object.assign(
                    Object.assign({}, this.defaultOptions.authorizationParams),
                    t.authorizationParams
                  ),
                }
              )),
              "undefined" != typeof window &&
                (function () {
                  if (!G())
                    throw new Error(
                      "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
                    );
                  if (void 0 === G().subtle)
                    throw new Error(
                      "\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    "
                    );
                })(),
              t.cache &&
                t.cacheLocation &&
                console.warn(
                  "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
                ),
              t.cache)
            )
              r = t.cache;
            else {
              if (((n = t.cacheLocation || "memory"), !Te(n)))
                throw new Error('Invalid cache location "'.concat(n, '"'));
              r = Te(n)();
            }
            (this.httpTimeoutMs = t.httpTimeoutInSeconds
              ? 1e3 * t.httpTimeoutInSeconds
              : 1e4),
              (this.cookieStorage = !1 === t.legacySameSiteCookie ? ge : be),
              (this.orgHintCookieName = "auth0.".concat(
                this.options.clientId,
                ".organization_hint"
              )),
              (this.isAuthenticatedCookieName = (function (e) {
                return "auth0.".concat(e, ".is.authenticated");
              })(this.options.clientId)),
              (this.sessionCheckExpiryDays = t.sessionCheckExpiryDays || 1);
            var o,
              i = t.useCookiesForTransactions ? this.cookieStorage : we;
            (this.scope = oe(
              "openid",
              this.options.authorizationParams.scope,
              this.options.useRefreshTokens ? "offline_access" : ""
            )),
              (this.transactionManager = new ce(
                i,
                this.options.clientId,
                this.options.cookieDomain
              )),
              (this.nowProvider = this.options.nowProvider || U),
              (this.cacheManager = new se(
                r,
                r.allKeys ? void 0 : new Ce(r, this.options.clientId),
                this.nowProvider
              )),
              (this.domainUrl =
                ((o = this.options.domain),
                /^https?:\/\//.test(o) ? o : "https://".concat(o))),
              (this.tokenIssuer = (function (e, t) {
                return e
                  ? e.startsWith("https://")
                    ? e
                    : "https://".concat(e, "/")
                  : "".concat(t, "/");
              })(this.options.issuer, this.domainUrl)),
              "undefined" != typeof window &&
                window.Worker &&
                this.options.useRefreshTokens &&
                "memory" === n &&
                (this.worker = new Se());
          }
          return (
            g(e, [
              {
                key: "_url",
                value: function (e) {
                  var t = encodeURIComponent(
                    btoa(JSON.stringify(this.options.auth0Client || D))
                  );
                  return ""
                    .concat(this.domainUrl)
                    .concat(e, "&auth0Client=")
                    .concat(t);
                },
              },
              {
                key: "_authorizeUrl",
                value: function (e) {
                  return this._url("/authorize?".concat(Q(e)));
                },
              },
              {
                key: "_verifyIdToken",
                value: (function () {
                  var e = h(
                    d().mark(function e(t, n, r) {
                      var a, o;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.nowProvider();
                              case 2:
                                return (
                                  (a = e.sent),
                                  e.abrupt(
                                    "return",
                                    pe({
                                      iss: this.tokenIssuer,
                                      aud: this.options.clientId,
                                      id_token: t,
                                      nonce: n,
                                      organization: r,
                                      leeway: this.options.leeway,
                                      max_age:
                                        ((o =
                                          this.options.authorizationParams
                                            .max_age),
                                        "string" != typeof o
                                          ? o
                                          : parseInt(o, 10) || void 0),
                                      now: a,
                                    })
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_processOrgHint",
                value: function (e) {
                  e
                    ? this.cookieStorage.save(this.orgHintCookieName, e, {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain,
                      })
                    : this.cookieStorage.remove(this.orgHintCookieName, {
                        cookieDomain: this.options.cookieDomain,
                      });
                },
              },
              {
                key: "_prepareAuthorizeUrl",
                value: (function () {
                  var e = h(
                    d().mark(function e(t, n, r) {
                      var a, o, i, l, s, c;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = Y($())),
                                  (o = Y($())),
                                  (i = $()),
                                  (e.t0 = function (e) {
                                    var t = new Uint8Array(e);
                                    return (function (e) {
                                      var t = { "+": "-", "/": "_", "=": "" };
                                      return e.replace(/[+/=]/g, function (e) {
                                        return t[e];
                                      });
                                    })(
                                      window.btoa(
                                        String.fromCharCode.apply(
                                          String,
                                          u(Array.from(t))
                                        )
                                      )
                                    );
                                  }),
                                  (e.next = 6),
                                  (function () {
                                    var e = h(
                                      d().mark(function e(t) {
                                        var n;
                                        return d().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (n = G().subtle.digest(
                                                    { name: "SHA-256" },
                                                    new TextEncoder().encode(t)
                                                  )),
                                                  (e.next = 3),
                                                  n
                                                );
                                              case 3:
                                                return e.abrupt(
                                                  "return",
                                                  e.sent
                                                );
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()(i)
                                );
                              case 6:
                                return (
                                  (e.t1 = e.sent),
                                  (l = (0, e.t0)(e.t1)),
                                  (s = (function (e, t, n, r, a, o, i, u) {
                                    return Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          { client_id: e.clientId },
                                          e.authorizationParams
                                        ),
                                        n
                                      ),
                                      {
                                        scope: oe(t, n.scope),
                                        response_type: "code",
                                        response_mode: u || "query",
                                        state: r,
                                        nonce: a,
                                        redirect_uri:
                                          i ||
                                          e.authorizationParams.redirect_uri,
                                        code_challenge: o,
                                        code_challenge_method: "S256",
                                      }
                                    );
                                  })(
                                    this.options,
                                    this.scope,
                                    t,
                                    a,
                                    o,
                                    l,
                                    t.redirect_uri ||
                                      this.options.authorizationParams
                                        .redirect_uri ||
                                      r,
                                    null == n ? void 0 : n.response_mode
                                  )),
                                  (c = this._authorizeUrl(s)),
                                  e.abrupt("return", {
                                    nonce: o,
                                    code_verifier: i,
                                    scope: s.scope,
                                    audience: s.audience || "default",
                                    redirect_uri: s.redirect_uri,
                                    state: a,
                                    url: c,
                                  })
                                );
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loginWithPopup",
                value: (function () {
                  var e = h(
                    d().mark(function e(t, n) {
                      var r, a, o, i;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = t || {}),
                                  (n = n || {}).popup ||
                                    ((n.popup = (function (e) {
                                      var t =
                                          window.screenX +
                                          (window.innerWidth - 400) / 2,
                                        n =
                                          window.screenY +
                                          (window.innerHeight - 600) / 2;
                                      return window.open(
                                        "",
                                        "auth0:authorize:popup",
                                        "left="
                                          .concat(t, ",top=")
                                          .concat(
                                            n,
                                            ",width=400,height=600,resizable,scrollbars=yes,status=1"
                                          )
                                      );
                                    })()),
                                    n.popup))
                                ) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "Unable to open a popup for loginWithPopup - window.open returned `null`"
                                );
                              case 2:
                                return (
                                  (e.next = 4),
                                  this._prepareAuthorizeUrl(
                                    t.authorizationParams || {},
                                    { response_mode: "web_message" },
                                    window.location.origin
                                  )
                                );
                              case 4:
                                return (
                                  (a = e.sent),
                                  (n.popup.location.href = a.url),
                                  (e.next = 8),
                                  (function (e) {
                                    return new Promise(function (t, n) {
                                      var r,
                                        a = setInterval(function () {
                                          e.popup &&
                                            e.popup.closed &&
                                            (clearInterval(a),
                                            clearTimeout(o),
                                            window.removeEventListener(
                                              "message",
                                              r,
                                              !1
                                            ),
                                            n(new K(e.popup)));
                                        }, 1e3),
                                        o = setTimeout(function () {
                                          clearInterval(a),
                                            n(new H(e.popup)),
                                            window.removeEventListener(
                                              "message",
                                              r,
                                              !1
                                            );
                                        }, 1e3 * (e.timeoutInSeconds || 60));
                                      (r = function (i) {
                                        if (
                                          i.data &&
                                          "authorization_response" ===
                                            i.data.type
                                        ) {
                                          if (
                                            (clearTimeout(o),
                                            clearInterval(a),
                                            window.removeEventListener(
                                              "message",
                                              r,
                                              !1
                                            ),
                                            e.popup.close(),
                                            i.data.response.error)
                                          )
                                            return n(
                                              V.fromPayload(i.data.response)
                                            );
                                          t(i.data.response);
                                        }
                                      }),
                                        window.addEventListener("message", r);
                                    });
                                  })(
                                    Object.assign(Object.assign({}, n), {
                                      timeoutInSeconds:
                                        n.timeoutInSeconds ||
                                        this.options
                                          .authorizeTimeoutInSeconds ||
                                        60,
                                    })
                                  )
                                );
                              case 8:
                                if (((o = e.sent), a.state === o.state)) {
                                  e.next = 11;
                                  break;
                                }
                                throw new V("state_mismatch", "Invalid state");
                              case 11:
                                return (
                                  (i =
                                    (null === (r = t.authorizationParams) ||
                                    void 0 === r
                                      ? void 0
                                      : r.organization) ||
                                    this.options.authorizationParams
                                      .organization),
                                  (e.next = 14),
                                  this._requestToken(
                                    {
                                      audience: a.audience,
                                      scope: a.scope,
                                      code_verifier: a.code_verifier,
                                      grant_type: "authorization_code",
                                      code: o.code,
                                      redirect_uri: a.redirect_uri,
                                    },
                                    { nonceIn: a.nonce, organization: i }
                                  )
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getUser",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t, n;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this._getIdTokenFromCache()
                                );
                              case 2:
                                return (
                                  (n = e.sent),
                                  e.abrupt(
                                    "return",
                                    null ===
                                      (t =
                                        null == n ? void 0 : n.decodedToken) ||
                                      void 0 === t
                                      ? void 0
                                      : t.user
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getIdTokenClaims",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t, n;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this._getIdTokenFromCache()
                                );
                              case 2:
                                return (
                                  (n = e.sent),
                                  e.abrupt(
                                    "return",
                                    null ===
                                      (t =
                                        null == n ? void 0 : n.decodedToken) ||
                                      void 0 === t
                                      ? void 0
                                      : t.claims
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loginWithRedirect",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        i,
                        u,
                        l,
                        s,
                        c,
                        f,
                        p = arguments;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = Pe(
                                    p.length > 0 && void 0 !== p[0] ? p[0] : {}
                                  )),
                                  (r = n.openUrl),
                                  (a = n.fragment),
                                  (o = n.appState),
                                  (i = j(n, [
                                    "openUrl",
                                    "fragment",
                                    "appState",
                                  ])),
                                  (u =
                                    (null === (t = i.authorizationParams) ||
                                    void 0 === t
                                      ? void 0
                                      : t.organization) ||
                                    this.options.authorizationParams
                                      .organization),
                                  (e.next = 9),
                                  this._prepareAuthorizeUrl(
                                    i.authorizationParams || {}
                                  )
                                );
                              case 9:
                                if (
                                  ((l = e.sent),
                                  (s = l.url),
                                  (c = j(l, ["url"])),
                                  this.transactionManager.create(
                                    Object.assign(
                                      Object.assign(Object.assign({}, c), {
                                        appState: o,
                                      }),
                                      u && { organization: u }
                                    )
                                  ),
                                  (f = a ? "".concat(s, "#").concat(a) : s),
                                  !r)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                return (e.next = 17), r(f);
                              case 17:
                                e.next = 20;
                                break;
                              case 19:
                                window.location.assign(f);
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "handleRedirectCallback",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        i,
                        u,
                        l,
                        s,
                        c,
                        f,
                        p = arguments;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    p.length > 0 && void 0 !== p[0]
                                      ? p[0]
                                      : window.location.href),
                                  0 !== (n = t.split("?").slice(1)).length)
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                throw new Error(
                                  "There are no query params available for parsing."
                                );
                              case 4:
                                if (
                                  ((r = (function (e) {
                                    e.indexOf("#") > -1 &&
                                      (e = e.substring(0, e.indexOf("#")));
                                    var t = new URLSearchParams(e);
                                    return {
                                      state: t.get("state"),
                                      code: t.get("code") || void 0,
                                      error: t.get("error") || void 0,
                                      error_description:
                                        t.get("error_description") || void 0,
                                    };
                                  })(n.join(""))),
                                  (a = r.state),
                                  (o = r.code),
                                  (i = r.error),
                                  (u = r.error_description),
                                  (l = this.transactionManager.get()))
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                throw new V(
                                  "missing_transaction",
                                  "Invalid state"
                                );
                              case 7:
                                if ((this.transactionManager.remove(), !i)) {
                                  e.next = 9;
                                  break;
                                }
                                throw new W(i, u || i, a, l.appState);
                              case 9:
                                if (
                                  l.code_verifier &&
                                  (!l.state || l.state === a)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                throw new V("state_mismatch", "Invalid state");
                              case 11:
                                return (
                                  (s = l.organization),
                                  (c = l.nonce),
                                  (f = l.redirect_uri),
                                  (e.next = 14),
                                  this._requestToken(
                                    Object.assign(
                                      {
                                        audience: l.audience,
                                        scope: l.scope,
                                        code_verifier: l.code_verifier,
                                        grant_type: "authorization_code",
                                        code: o,
                                      },
                                      f ? { redirect_uri: f } : {}
                                    ),
                                    { nonceIn: c, organization: s }
                                  )
                                );
                              case 14:
                                return e.abrupt("return", {
                                  appState: l.appState,
                                });
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "checkSession",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  this.cookieStorage.get(
                                    this.isAuthenticatedCookieName
                                  )
                                ) {
                                  e.next = 4;
                                  break;
                                }
                                if (
                                  this.cookieStorage.get(
                                    "auth0.is.authenticated"
                                  )
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                this.cookieStorage.save(
                                  this.isAuthenticatedCookieName,
                                  !0,
                                  {
                                    daysUntilExpire:
                                      this.sessionCheckExpiryDays,
                                    cookieDomain: this.options.cookieDomain,
                                  }
                                ),
                                  this.cookieStorage.remove(
                                    "auth0.is.authenticated"
                                  );
                              case 4:
                                return (
                                  (e.prev = 4),
                                  (e.next = 7),
                                  this.getTokenSilently(t)
                                );
                              case 7:
                                e.next = 11;
                                break;
                              case 9:
                                (e.prev = 9), (e.t0 = e.catch(4));
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 9]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTokenSilently",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        o = this,
                        i = arguments;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    i.length > 0 && void 0 !== i[0]
                                      ? i[0]
                                      : {}),
                                  (r = Object.assign(
                                    Object.assign({ cacheMode: "on" }, t),
                                    {
                                      authorizationParams: Object.assign(
                                        Object.assign(
                                          Object.assign(
                                            {},
                                            this.options.authorizationParams
                                          ),
                                          t.authorizationParams
                                        ),
                                        {
                                          scope: oe(
                                            this.scope,
                                            null ===
                                              (n = t.authorizationParams) ||
                                              void 0 === n
                                              ? void 0
                                              : n.scope
                                          ),
                                        }
                                      ),
                                    }
                                  )),
                                  (e.next = 4),
                                  (function (e, t) {
                                    var n = _e[t];
                                    return (
                                      n ||
                                        ((n = e().finally(function () {
                                          delete _e[t], (n = null);
                                        })),
                                        (_e[t] = n)),
                                      n
                                    );
                                  })(function () {
                                    return o._getTokenSilently(r);
                                  }, ""
                                    .concat(this.options.clientId, "::")
                                    .concat(
                                      r.authorizationParams.audience,
                                      "::"
                                    )
                                    .concat(r.authorizationParams.scope))
                                );
                              case 4:
                                return (
                                  (a = e.sent),
                                  e.abrupt(
                                    "return",
                                    t.detailedResponse
                                      ? a
                                      : null == a
                                      ? void 0
                                      : a.access_token
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getTokenSilently",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r, a, o, i, u, l, s, c;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = t.cacheMode),
                                  (r = j(t, ["cacheMode"])),
                                  "off" === n)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  this._getEntryFromCache({
                                    scope: r.authorizationParams.scope,
                                    audience:
                                      r.authorizationParams.audience ||
                                      "default",
                                    clientId: this.options.clientId,
                                  })
                                );
                              case 4:
                                if (!(a = e.sent)) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", a);
                              case 7:
                                if ("cache-only" === n) {
                                  e.next = 39;
                                  break;
                                }
                                return (
                                  (e.next = 10),
                                  (function () {
                                    var e = h(
                                      d().mark(function e(t) {
                                        var n,
                                          r,
                                          a = arguments;
                                        return d().wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (n =
                                                  a.length > 1 &&
                                                  void 0 !== a[1]
                                                    ? a[1]
                                                    : 3),
                                                  (r = 0);
                                              case 2:
                                                if (!(r < n)) {
                                                  e.next = 10;
                                                  break;
                                                }
                                                return (e.next = 5), t();
                                              case 5:
                                                if (!e.sent) {
                                                  e.next = 7;
                                                  break;
                                                }
                                                return e.abrupt("return", !0);
                                              case 7:
                                                r++, (e.next = 2);
                                                break;
                                              case 10:
                                                return e.abrupt("return", !1);
                                              case 11:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()(function () {
                                    return Oe.acquireLock(
                                      "auth0.lock.getTokenSilently",
                                      5e3
                                    );
                                  }, 10)
                                );
                              case 10:
                                if (e.sent) {
                                  e.next = 12;
                                  break;
                                }
                                throw new F();
                              case 12:
                                if (
                                  ((e.prev = 12),
                                  window.addEventListener(
                                    "pagehide",
                                    this._releaseLockOnPageHide
                                  ),
                                  "off" === n)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 16),
                                  this._getEntryFromCache({
                                    scope: r.authorizationParams.scope,
                                    audience:
                                      r.authorizationParams.audience ||
                                      "default",
                                    clientId: this.options.clientId,
                                  })
                                );
                              case 16:
                                if (!(o = e.sent)) {
                                  e.next = 19;
                                  break;
                                }
                                return e.abrupt("return", o);
                              case 19:
                                if (!this.options.useRefreshTokens) {
                                  e.next = 25;
                                  break;
                                }
                                return (
                                  (e.next = 22),
                                  this._getTokenUsingRefreshToken(r)
                                );
                              case 22:
                                (e.t0 = e.sent), (e.next = 28);
                                break;
                              case 25:
                                return (
                                  (e.next = 27), this._getTokenFromIFrame(r)
                                );
                              case 27:
                                e.t0 = e.sent;
                              case 28:
                                return (
                                  (i = e.t0),
                                  (u = i.id_token),
                                  (l = i.access_token),
                                  (s = i.oauthTokenScope),
                                  (c = i.expires_in),
                                  e.abrupt(
                                    "return",
                                    Object.assign(
                                      Object.assign(
                                        { id_token: u, access_token: l },
                                        s ? { scope: s } : null
                                      ),
                                      { expires_in: c }
                                    )
                                  )
                                );
                              case 34:
                                return (
                                  (e.prev = 34),
                                  (e.next = 37),
                                  Oe.releaseLock("auth0.lock.getTokenSilently")
                                );
                              case 37:
                                return (
                                  window.removeEventListener(
                                    "pagehide",
                                    this._releaseLockOnPageHide
                                  ),
                                  e.finish(34)
                                );
                              case 39:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[12, , 34, 39]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTokenWithPopup",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        o = arguments;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    o.length > 0 && void 0 !== o[0]
                                      ? o[0]
                                      : {}),
                                  (n =
                                    o.length > 1 && void 0 !== o[1]
                                      ? o[1]
                                      : {}),
                                  (a = Object.assign(Object.assign({}, t), {
                                    authorizationParams: Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          {},
                                          this.options.authorizationParams
                                        ),
                                        t.authorizationParams
                                      ),
                                      {
                                        scope: oe(
                                          this.scope,
                                          null ===
                                            (r = t.authorizationParams) ||
                                            void 0 === r
                                            ? void 0
                                            : r.scope
                                        ),
                                      }
                                    ),
                                  })),
                                  (n = Object.assign(Object.assign({}, M), n)),
                                  (e.next = 6),
                                  this.loginWithPopup(a, n)
                                );
                              case 6:
                                return (
                                  (e.next = 8),
                                  this.cacheManager.get(
                                    new ie({
                                      scope: a.authorizationParams.scope,
                                      audience:
                                        a.authorizationParams.audience ||
                                        "default",
                                      clientId: this.options.clientId,
                                    })
                                  )
                                );
                              case 8:
                                return e.abrupt("return", e.sent.access_token);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "isAuthenticated",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.getUser();
                              case 2:
                                return e.abrupt("return", !!e.sent);
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_buildLogoutUrl",
                value: function (e) {
                  null !== e.clientId
                    ? (e.clientId = e.clientId || this.options.clientId)
                    : delete e.clientId;
                  var t = e.logoutParams || {},
                    n = t.federated,
                    r = j(t, ["federated"]),
                    a = n ? "&federated" : "";
                  return (
                    this._url(
                      "/v2/logout?".concat(
                        Q(Object.assign({ clientId: e.clientId }, r))
                      )
                    ) + a
                  );
                },
              },
              {
                key: "logout",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t,
                        n,
                        r,
                        a,
                        o,
                        i = arguments;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = Pe(
                                    (t =
                                      i.length > 0 && void 0 !== i[0]
                                        ? i[0]
                                        : {})
                                  )),
                                  (r = n.openUrl),
                                  (a = j(n, ["openUrl"])),
                                  null !== t.clientId)
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (e.next = 5), this.cacheManager.clear();
                              case 5:
                                e.next = 9;
                                break;
                              case 7:
                                return (
                                  (e.next = 9),
                                  this.cacheManager.clear(
                                    t.clientId || this.options.clientId
                                  )
                                );
                              case 9:
                                if (
                                  (this.cookieStorage.remove(
                                    this.orgHintCookieName,
                                    { cookieDomain: this.options.cookieDomain }
                                  ),
                                  this.cookieStorage.remove(
                                    this.isAuthenticatedCookieName,
                                    { cookieDomain: this.options.cookieDomain }
                                  ),
                                  this.userCache.remove("@@user@@"),
                                  (o = this._buildLogoutUrl(a)),
                                  !r)
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (e.next = 16), r(o);
                              case 16:
                                e.next = 19;
                                break;
                              case 18:
                                !1 !== r && window.location.assign(o);
                              case 19:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getTokenFromIFrame",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r, a, o, i, u, l, s, c, f, p, h, m;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = Object.assign(
                                    Object.assign({}, t.authorizationParams),
                                    { prompt: "none" }
                                  )),
                                  (r = this.cookieStorage.get(
                                    this.orgHintCookieName
                                  )) &&
                                    !n.organization &&
                                    (n.organization = r),
                                  (e.next = 4),
                                  this._prepareAuthorizeUrl(
                                    n,
                                    { response_mode: "web_message" },
                                    window.location.origin
                                  )
                                );
                              case 4:
                                if (
                                  ((a = e.sent),
                                  (o = a.url),
                                  (i = a.state),
                                  (u = a.nonce),
                                  (l = a.code_verifier),
                                  (s = a.redirect_uri),
                                  (c = a.scope),
                                  (f = a.audience),
                                  (e.prev = 12),
                                  !window.crossOriginIsolated)
                                ) {
                                  e.next = 15;
                                  break;
                                }
                                throw new V(
                                  "login_required",
                                  "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
                                );
                              case 15:
                                return (
                                  (p =
                                    t.timeoutInSeconds ||
                                    this.options.authorizeTimeoutInSeconds),
                                  (e.next = 18),
                                  (function (e, t) {
                                    var n =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : 60;
                                    return new Promise(function (r, a) {
                                      var o =
                                        window.document.createElement("iframe");
                                      o.setAttribute("width", "0"),
                                        o.setAttribute("height", "0"),
                                        (o.style.display = "none");
                                      var i,
                                        u = function () {
                                          window.document.body.contains(o) &&
                                            (window.document.body.removeChild(
                                              o
                                            ),
                                            window.removeEventListener(
                                              "message",
                                              i,
                                              !1
                                            ));
                                        },
                                        l = setTimeout(function () {
                                          a(new F()), u();
                                        }, 1e3 * n);
                                      (i = (function (e) {
                                        function t(t) {
                                          return e.apply(this, arguments);
                                        }
                                        return (
                                          (t.toString = function () {
                                            return e.toString();
                                          }),
                                          t
                                        );
                                      })(function (e) {
                                        if (
                                          e.origin == t &&
                                          e.data &&
                                          "authorization_response" ===
                                            e.data.type
                                        ) {
                                          var n = e.source;
                                          n && n.close(),
                                            e.data.response.error
                                              ? a(
                                                  V.fromPayload(e.data.response)
                                                )
                                              : r(e.data.response),
                                            clearTimeout(l),
                                            window.removeEventListener(
                                              "message",
                                              i,
                                              !1
                                            ),
                                            setTimeout(u, 2e3);
                                        }
                                      })),
                                        window.addEventListener(
                                          "message",
                                          i,
                                          !1
                                        ),
                                        window.document.body.appendChild(o),
                                        o.setAttribute("src", e);
                                    });
                                  })(o, this.domainUrl, p)
                                );
                              case 18:
                                if (((h = e.sent), i === h.state)) {
                                  e.next = 21;
                                  break;
                                }
                                throw new V("state_mismatch", "Invalid state");
                              case 21:
                                return (
                                  (e.next = 23),
                                  this._requestToken(
                                    Object.assign(
                                      Object.assign({}, t.authorizationParams),
                                      {
                                        code_verifier: l,
                                        code: h.code,
                                        grant_type: "authorization_code",
                                        redirect_uri: s,
                                        timeout:
                                          t.authorizationParams.timeout ||
                                          this.httpTimeoutMs,
                                      }
                                    ),
                                    { nonceIn: u, organization: n.organization }
                                  )
                                );
                              case 23:
                                return (
                                  (m = e.sent),
                                  e.abrupt(
                                    "return",
                                    Object.assign(Object.assign({}, m), {
                                      scope: c,
                                      oauthTokenScope: m.scope,
                                      audience: f,
                                    })
                                  )
                                );
                              case 27:
                                throw (
                                  ((e.prev = 27),
                                  (e.t0 = e.catch(12)),
                                  "login_required" === e.t0.error &&
                                    this.logout({ openUrl: !1 }),
                                  e.t0)
                                );
                              case 30:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[12, 27]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getTokenUsingRefreshToken",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r, a, o;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.cacheManager.get(
                                    new ie({
                                      scope: t.authorizationParams.scope,
                                      audience:
                                        t.authorizationParams.audience ||
                                        "default",
                                      clientId: this.options.clientId,
                                    })
                                  )
                                );
                              case 2:
                                if (
                                  ((n = e.sent) && n.refresh_token) ||
                                  this.worker
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                if (!this.options.useRefreshTokensFallback) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (e.next = 7), this._getTokenFromIFrame(t)
                                );
                              case 7:
                              case 22:
                                return e.abrupt("return", e.sent);
                              case 8:
                                throw new Z(
                                  t.authorizationParams.audience || "default",
                                  t.authorizationParams.scope
                                );
                              case 9:
                                return (
                                  (r =
                                    t.authorizationParams.redirect_uri ||
                                    this.options.authorizationParams
                                      .redirect_uri ||
                                    window.location.origin),
                                  (a =
                                    "number" == typeof t.timeoutInSeconds
                                      ? 1e3 * t.timeoutInSeconds
                                      : null),
                                  (e.prev = 10),
                                  (e.next = 13),
                                  this._requestToken(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(
                                          {},
                                          t.authorizationParams
                                        ),
                                        {
                                          grant_type: "refresh_token",
                                          refresh_token: n && n.refresh_token,
                                          redirect_uri: r,
                                        }
                                      ),
                                      a && { timeout: a }
                                    )
                                  )
                                );
                              case 13:
                                return (
                                  (o = e.sent),
                                  e.abrupt(
                                    "return",
                                    Object.assign(Object.assign({}, o), {
                                      scope: t.authorizationParams.scope,
                                      oauthTokenScope: o.scope,
                                      audience:
                                        t.authorizationParams.audience ||
                                        "default",
                                    })
                                  )
                                );
                              case 17:
                                if (
                                  ((e.prev = 17),
                                  (e.t0 = e.catch(10)),
                                  !(
                                    e.t0.message.indexOf(
                                      "Missing Refresh Token"
                                    ) > -1 ||
                                    (e.t0.message &&
                                      e.t0.message.indexOf(
                                        "invalid refresh token"
                                      ) > -1)
                                  ) || !this.options.useRefreshTokensFallback)
                                ) {
                                  e.next = 23;
                                  break;
                                }
                                return (
                                  (e.next = 22), this._getTokenFromIFrame(t)
                                );
                              case 23:
                                throw e.t0;
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[10, 17]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_saveEntryInCache",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r, a;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.id_token),
                                  (r = t.decodedToken),
                                  (a = j(t, ["id_token", "decodedToken"])),
                                  this.userCache.set("@@user@@", {
                                    id_token: n,
                                    decodedToken: r,
                                  }),
                                  (e.next = 4),
                                  this.cacheManager.setIdToken(
                                    this.options.clientId,
                                    t.id_token,
                                    t.decodedToken
                                  )
                                );
                              case 4:
                                return (e.next = 6), this.cacheManager.set(a);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getIdTokenFromCache",
                value: (function () {
                  var e = h(
                    d().mark(function e() {
                      var t, n, r;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    this.options.authorizationParams.audience ||
                                    "default"),
                                  (e.next = 3),
                                  this.cacheManager.getIdToken(
                                    new ie({
                                      clientId: this.options.clientId,
                                      audience: t,
                                      scope: this.scope,
                                    })
                                  )
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (r = this.userCache.get("@@user@@")),
                                  e.abrupt(
                                    "return",
                                    n &&
                                      n.id_token ===
                                        (null == r ? void 0 : r.id_token)
                                      ? r
                                      : (this.userCache.set("@@user@@", n), n)
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_getEntryFromCache",
                value: (function () {
                  var e = h(
                    d().mark(function e(t) {
                      var n, r, a, o, i, u, l, s;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = t.scope),
                                  (r = t.audience),
                                  (a = t.clientId),
                                  (e.next = 3),
                                  this.cacheManager.get(
                                    new ie({
                                      scope: n,
                                      audience: r,
                                      clientId: a,
                                    }),
                                    60
                                  )
                                );
                              case 3:
                                if (!(o = e.sent) || !o.access_token) {
                                  e.next = 12;
                                  break;
                                }
                                return (
                                  (i = o.access_token),
                                  (u = o.oauthTokenScope),
                                  (l = o.expires_in),
                                  (e.next = 10),
                                  this._getIdTokenFromCache()
                                );
                              case 10:
                                return (
                                  (s = e.sent),
                                  e.abrupt(
                                    "return",
                                    s &&
                                      Object.assign(
                                        Object.assign(
                                          {
                                            id_token: s.id_token,
                                            access_token: i,
                                          },
                                          u ? { scope: u } : null
                                        ),
                                        { expires_in: l }
                                      )
                                  )
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "_requestToken",
                value: (function () {
                  var e = h(
                    d().mark(function e(t, n) {
                      var r, a, o, i, u;
                      return d().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = (r = n || {}).nonceIn),
                                  (o = r.organization),
                                  (e.next = 5),
                                  re(
                                    Object.assign(
                                      {
                                        baseUrl: this.domainUrl,
                                        client_id: this.options.clientId,
                                        auth0Client: this.options.auth0Client,
                                        useFormData: this.options.useFormData,
                                        timeout: this.httpTimeoutMs,
                                      },
                                      t
                                    ),
                                    this.worker
                                  )
                                );
                              case 5:
                                return (
                                  (i = e.sent),
                                  (e.next = 8),
                                  this._verifyIdToken(i.id_token, a, o)
                                );
                              case 8:
                                return (
                                  (u = e.sent),
                                  (e.next = 11),
                                  this._saveEntryInCache(
                                    Object.assign(
                                      Object.assign(
                                        Object.assign(Object.assign({}, i), {
                                          decodedToken: u,
                                          scope: t.scope,
                                          audience: t.audience || "default",
                                        }),
                                        i.scope
                                          ? { oauthTokenScope: i.scope }
                                          : null
                                      ),
                                      { client_id: this.options.clientId }
                                    )
                                  )
                                );
                              case 11:
                                return (
                                  this.cookieStorage.save(
                                    this.isAuthenticatedCookieName,
                                    !0,
                                    {
                                      daysUntilExpire:
                                        this.sessionCheckExpiryDays,
                                      cookieDomain: this.options.cookieDomain,
                                    }
                                  ),
                                  this._processOrgHint(o),
                                  e.abrupt(
                                    "return",
                                    Object.assign(Object.assign({}, i), {
                                      decodedToken: u,
                                    })
                                  )
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        je = { isAuthenticated: !1, isLoading: !0 },
        Ie = function () {
          throw new Error(
            "You forgot to wrap your component in <Auth0Provider>."
          );
        },
        Ne = P(P({}, je), {
          buildAuthorizeUrl: Ie,
          buildLogoutUrl: Ie,
          getAccessTokenSilently: Ie,
          getAccessTokenWithPopup: Ie,
          getIdTokenClaims: Ie,
          loginWithRedirect: Ie,
          loginWithPopup: Ie,
          logout: Ie,
          handleRedirectCallback: Ie,
        }),
        ze = (0, e.createContext)(Ne),
        Le = (function (e) {
          function t(n, r) {
            var a = e.call(this, r || n) || this;
            return (
              (a.error = n),
              (a.error_description = r),
              Object.setPrototypeOf(a, t.prototype),
              a
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function n() {
                this.constructor = e;
              }
              T(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n()));
            })(t, e),
            t
          );
        })(Error),
        Ae = /[?&]code=[^&]+/,
        Me = /[?&]state=[^&]+/,
        De = /[?&]error=[^&]+/,
        Ue = function (e) {
          return function (t) {
            return t instanceof Error
              ? t
              : null !== t &&
                "object" === typeof t &&
                "error" in t &&
                "string" === typeof t.error
              ? "error_description" in t &&
                "string" === typeof t.error_description
                ? new Le(t.error, t.error_description)
                : new Le(t.error)
              : new Error(e);
          };
        },
        Ve = Ue("Login failed"),
        We = Ue("Get access token failed"),
        Fe = function (e) {
          var t;
          (null === e || void 0 === e ? void 0 : e.redirectUri) &&
            (console.warn(
              "Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"
            ),
            (e.authorizationParams = e.authorizationParams || {}),
            (e.authorizationParams.redirect_uri = e.redirectUri),
            delete e.redirectUri),
            (null ===
              (t =
                null === e || void 0 === e ? void 0 : e.authorizationParams) ||
            void 0 === t
              ? void 0
              : t.redirectUri) &&
              (console.warn(
                "Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"
              ),
              (e.authorizationParams.redirect_uri =
                e.authorizationParams.redirectUri),
              delete e.authorizationParams.redirectUri);
        },
        He = function (e, t) {
          switch (t.type) {
            case "LOGIN_POPUP_STARTED":
              return P(P({}, e), { isLoading: !0 });
            case "LOGIN_POPUP_COMPLETE":
            case "INITIALISED":
              return P(P({}, e), {
                isAuthenticated: !!t.user,
                user: t.user,
                isLoading: !1,
                error: void 0,
              });
            case "HANDLE_REDIRECT_COMPLETE":
            case "GET_ACCESS_TOKEN_COMPLETE":
              return e.user === t.user
                ? e
                : P(P({}, e), { isAuthenticated: !!t.user, user: t.user });
            case "LOGOUT":
              return P(P({}, e), { isAuthenticated: !1, user: void 0 });
            case "ERROR":
              return P(P({}, e), { isLoading: !1, error: t.error });
          }
        },
        Ke = function (e) {
          window.history.replaceState(
            {},
            document.title,
            (null === e || void 0 === e ? void 0 : e.returnTo) ||
              window.location.pathname
          );
        },
        Be = function (t) {
          var n = t.children,
            r = t.skipRedirectCallback,
            a = t.onRedirectCallback,
            o = void 0 === a ? Ke : a,
            i = t.context,
            u = void 0 === i ? ze : i,
            l = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" === typeof Object.getOwnPropertySymbols
              ) {
                var a = 0;
                for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                  t.indexOf(r[a]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                    (n[r[a]] = e[r[a]]);
              }
              return n;
            })(t, [
              "children",
              "skipRedirectCallback",
              "onRedirectCallback",
              "context",
            ]),
            s = (0, e.useState)(function () {
              return new Re(
                (function (e) {
                  return (
                    Fe(e),
                    P(P({}, e), {
                      auth0Client: { name: "auth0-react", version: "2.2.0" },
                    })
                  );
                })(l)
              );
            })[0],
            c = (0, e.useReducer)(He, je),
            f = c[0],
            d = c[1],
            p = (0, e.useRef)(!1);
          (0, e.useEffect)(
            function () {
              p.current ||
                ((p.current = !0),
                O(void 0, void 0, void 0, function () {
                  var e, t, n;
                  return R(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          a.trys.push([0, 7, , 8]),
                          (e = void 0),
                          void 0 === i && (i = window.location.search),
                          (!Ae.test(i) && !De.test(i)) || !Me.test(i) || r
                            ? [3, 3]
                            : [4, s.handleRedirectCallback()]
                        );
                      case 1:
                        return (t = a.sent().appState), [4, s.getUser()];
                      case 2:
                        return (e = a.sent()), o(t, e), [3, 6];
                      case 3:
                        return [4, s.checkSession()];
                      case 4:
                        return a.sent(), [4, s.getUser()];
                      case 5:
                        (e = a.sent()), (a.label = 6);
                      case 6:
                        return d({ type: "INITIALISED", user: e }), [3, 8];
                      case 7:
                        return (
                          (n = a.sent()),
                          d({ type: "ERROR", error: Ve(n) }),
                          [3, 8]
                        );
                      case 8:
                        return [2];
                    }
                    var i;
                  });
                }));
            },
            [s, o, r]
          );
          var h = (0, e.useCallback)(
              function (e) {
                return Fe(e), s.loginWithRedirect(e);
              },
              [s]
            ),
            m = (0, e.useCallback)(
              function (e, t) {
                return O(void 0, void 0, void 0, function () {
                  var n, r;
                  return R(this, function (a) {
                    switch (a.label) {
                      case 0:
                        d({ type: "LOGIN_POPUP_STARTED" }), (a.label = 1);
                      case 1:
                        return (
                          a.trys.push([1, 3, , 4]), [4, s.loginWithPopup(e, t)]
                        );
                      case 2:
                        return a.sent(), [3, 4];
                      case 3:
                        return (
                          (n = a.sent()),
                          d({ type: "ERROR", error: Ve(n) }),
                          [2]
                        );
                      case 4:
                        return [4, s.getUser()];
                      case 5:
                        return (
                          (r = a.sent()),
                          d({ type: "LOGIN_POPUP_COMPLETE", user: r }),
                          [2]
                        );
                    }
                  });
                });
              },
              [s]
            ),
            v = (0, e.useCallback)(
              function (e) {
                return (
                  void 0 === e && (e = {}),
                  O(void 0, void 0, void 0, function () {
                    return R(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, s.logout(e)];
                        case 1:
                          return (
                            t.sent(),
                            (e.openUrl || !1 === e.openUrl) &&
                              d({ type: "LOGOUT" }),
                            [2]
                          );
                      }
                    });
                  })
                );
              },
              [s]
            ),
            y = (0, e.useCallback)(
              function (e) {
                return O(void 0, void 0, void 0, function () {
                  var t, n, r, a;
                  return R(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          o.trys.push([0, 2, 3, 5]), [4, s.getTokenSilently(e)]
                        );
                      case 1:
                        return (t = o.sent()), [3, 5];
                      case 2:
                        throw ((n = o.sent()), We(n));
                      case 3:
                        return (
                          (r = d),
                          (a = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                          [4, s.getUser()]
                        );
                      case 4:
                        return r.apply(void 0, [((a.user = o.sent()), a)]), [7];
                      case 5:
                        return [2, t];
                    }
                  });
                });
              },
              [s]
            ),
            g = (0, e.useCallback)(
              function (e, t) {
                return O(void 0, void 0, void 0, function () {
                  var n, r, a, o;
                  return R(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (
                          i.trys.push([0, 2, 3, 5]),
                          [4, s.getTokenWithPopup(e, t)]
                        );
                      case 1:
                        return (n = i.sent()), [3, 5];
                      case 2:
                        throw ((r = i.sent()), We(r));
                      case 3:
                        return (
                          (a = d),
                          (o = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                          [4, s.getUser()]
                        );
                      case 4:
                        return a.apply(void 0, [((o.user = i.sent()), o)]), [7];
                      case 5:
                        return [2, n];
                    }
                  });
                });
              },
              [s]
            ),
            b = (0, e.useCallback)(
              function () {
                return s.getIdTokenClaims();
              },
              [s]
            ),
            w = (0, e.useCallback)(
              function (e) {
                return O(void 0, void 0, void 0, function () {
                  var t, n, r;
                  return R(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          a.trys.push([0, 2, 3, 5]),
                          [4, s.handleRedirectCallback(e)]
                        );
                      case 1:
                        return [2, a.sent()];
                      case 2:
                        throw ((t = a.sent()), We(t));
                      case 3:
                        return (
                          (n = d),
                          (r = { type: "HANDLE_REDIRECT_COMPLETE" }),
                          [4, s.getUser()]
                        );
                      case 4:
                        return n.apply(void 0, [((r.user = a.sent()), r)]), [7];
                      case 5:
                        return [2];
                    }
                  });
                });
              },
              [s]
            ),
            k = (0, e.useMemo)(
              function () {
                return P(P({}, f), {
                  getAccessTokenSilently: y,
                  getAccessTokenWithPopup: g,
                  getIdTokenClaims: b,
                  loginWithRedirect: h,
                  loginWithPopup: m,
                  logout: v,
                  handleRedirectCallback: w,
                });
              },
              [f, y, g, b, h, m, v, w]
            );
          return e.createElement(u.Provider, { value: k }, n);
        },
        Ze = function (t) {
          return void 0 === t && (t = ze), (0, e.useContext)(t);
        };
      function Xe() {
        return (
          (Xe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Xe.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(xe || (xe = {}));
      var Ge,
        $e = "popstate";
      function Ye(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function Qe(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function Je(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function qe(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          Xe(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? tt(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function et(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function tt(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function nt(e, t, n, r) {
        void 0 === r && (r = {});
        var a = r,
          o = a.window,
          i = void 0 === o ? document.defaultView : o,
          u = a.v5Compat,
          l = void 0 !== u && u,
          s = i.history,
          c = xe.Pop,
          f = null,
          d = p();
        function p() {
          return (s.state || { idx: null }).idx;
        }
        function h() {
          c = xe.Pop;
          var e = p(),
            t = null == e ? null : e - d;
          (d = e), f && f({ action: c, location: v.location, delta: t });
        }
        function m(e) {
          var t =
              "null" !== i.location.origin
                ? i.location.origin
                : i.location.href,
            n = "string" === typeof e ? e : et(e);
          return (
            Ye(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == d && ((d = 0), s.replaceState(Xe({}, s.state, { idx: d }), ""));
        var v = {
          get action() {
            return c;
          },
          get location() {
            return e(i, s);
          },
          listen: function (e) {
            if (f)
              throw new Error("A history only accepts one active listener");
            return (
              i.addEventListener($e, h),
              (f = e),
              function () {
                i.removeEventListener($e, h), (f = null);
              }
            );
          },
          createHref: function (e) {
            return t(i, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = xe.Push;
            var r = qe(v.location, e, t);
            n && n(r, e);
            var a = Je(r, (d = p() + 1)),
              o = v.createHref(r);
            try {
              s.pushState(a, "", o);
            } catch (u) {
              if (u instanceof DOMException && "DataCloneError" === u.name)
                throw u;
              i.location.assign(o);
            }
            l && f && f({ action: c, location: v.location, delta: 1 });
          },
          replace: function (e, t) {
            c = xe.Replace;
            var r = qe(v.location, e, t);
            n && n(r, e);
            var a = Je(r, (d = p())),
              o = v.createHref(r);
            s.replaceState(a, "", o),
              l && f && f({ action: c, location: v.location, delta: 0 });
          },
          go: function (e) {
            return s.go(e);
          },
        };
        return v;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(Ge || (Ge = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function rt(e, t, n) {
        void 0 === n && (n = "/");
        var r = yt(("string" === typeof t ? tt(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = at(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = ht(a[i], vt(r));
        return o;
      }
      function at(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (Ye(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var u = kt([r, i.relativePath]),
            l = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (Ye(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                u +
                '".'
            ),
            at(e.children, t, l, u)),
            (null != e.path || e.index) &&
              t.push({ path: u, score: pt(u, e.index), routesMeta: l });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = (function (e, t) {
                  var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = i(e)) ||
                      (t && e && "number" === typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        a = function () {};
                      return {
                        s: a,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: a,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    u = !0,
                    l = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (u = e.done), e;
                    },
                    e: function (e) {
                      (l = !0), (o = e);
                    },
                    f: function () {
                      try {
                        u || null == n.return || n.return();
                      } finally {
                        if (l) throw o;
                      }
                    },
                  };
                })(ot(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var u = r.value;
                  a(e, t, u);
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function ot(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = l((n = t)) || o(n) || i(n) || s(),
          a = r[0],
          c = r.slice(1),
          f = a.endsWith("?"),
          d = a.replace(/\?$/, "");
        if (0 === c.length) return f ? [d, ""] : [d];
        var p = ot(c.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            u(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          f && h.push.apply(h, u(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var it = /^:\w+$/,
        ut = 3,
        lt = 2,
        st = 1,
        ct = 10,
        ft = -2,
        dt = function (e) {
          return "*" === e;
        };
      function pt(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(dt) && (r += ft),
          t && (r += lt),
          n
            .filter(function (e) {
              return !dt(e);
            })
            .reduce(function (e, t) {
              return e + (it.test(t) ? ut : "" === t ? st : ct);
            }, r)
        );
      }
      function ht(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var u = n[i],
            l = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = mt(
              { path: u.relativePath, caseSensitive: u.caseSensitive, end: l },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = u.route;
          o.push({
            params: r,
            pathname: kt([a, c.pathname]),
            pathnameBase: xt(kt([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = kt([a, c.pathnameBase]));
        }
        return o;
      }
      function mt(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            Qe(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = c(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var u = i[0],
          l = u.replace(/(.)\/+$/, "$1"),
          s = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              l = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    Qe(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: l,
          pattern: e,
        };
      }
      function vt(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            Qe(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function yt(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function gt(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function bt(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function wt(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = tt(e))
            : (Ye(
                !(a = Xe({}, e)).pathname || !a.pathname.includes("?"),
                gt("?", "pathname", "search", a)
              ),
              Ye(
                !a.pathname || !a.pathname.includes("#"),
                gt("#", "pathname", "hash", a)
              ),
              Ye(
                !a.search || !a.search.includes("#"),
                gt("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          u = i ? "/" : a.pathname;
        if (r || null == u) o = n;
        else {
          var l = t.length - 1;
          if (u.startsWith("..")) {
            for (var s = u.split("/"); ".." === s[0]; ) s.shift(), (l -= 1);
            a.pathname = s.join("/");
          }
          o = l >= 0 ? t[l] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? tt(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              u = void 0 === i ? "" : i,
              l = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: l, search: St(o), hash: _t(u) };
          })(a, o),
          f = u && "/" !== u && u.endsWith("/"),
          d = (i || "." === u) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var kt = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        xt = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        St = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        _t = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        Ct = (function (e) {
          k(n, e);
          var t = _(n);
          function n() {
            return v(this, n), t.apply(this, arguments);
          }
          return g(n);
        })(E(Error));
      function Et(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var Tt = ["post", "put", "patch", "delete"],
        Pt = (new Set(Tt), ["get"].concat(Tt));
      new Set(Pt), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function Ot() {
        return (
          (Ot = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ot.apply(this, arguments)
        );
      }
      var Rt = e.createContext(null);
      var jt = e.createContext(null);
      var It = e.createContext(null);
      var Nt = e.createContext(null);
      var zt = e.createContext(null);
      var Lt = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var At = e.createContext(null);
      function Mt() {
        return null != e.useContext(zt);
      }
      function Dt() {
        return Mt() || Ye(!1), e.useContext(zt).location;
      }
      function Ut(t) {
        e.useContext(Nt).static || e.useLayoutEffect(t);
      }
      function Vt() {
        return e.useContext(Lt).isDataRoute
          ? (function () {
              var t = Yt(Kt.UseNavigateStable).router,
                n = Jt(Bt.UseNavigateStable),
                r = e.useRef(!1);
              return (
                Ut(function () {
                  r.current = !0;
                }),
                e.useCallback(
                  function (e, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof e
                          ? t.navigate(e)
                          : t.navigate(e, Ot({ fromRouteId: n }, a)));
                  },
                  [t, n]
                )
              );
            })()
          : (function () {
              Mt() || Ye(!1);
              var t = e.useContext(Rt),
                n = e.useContext(Nt),
                r = n.basename,
                a = n.navigator,
                o = e.useContext(Lt).matches,
                i = Dt().pathname,
                u = JSON.stringify(
                  bt(o).map(function (e) {
                    return e.pathnameBase;
                  })
                ),
                l = e.useRef(!1);
              return (
                Ut(function () {
                  l.current = !0;
                }),
                e.useCallback(
                  function (e, n) {
                    if ((void 0 === n && (n = {}), l.current))
                      if ("number" !== typeof e) {
                        var o = wt(e, JSON.parse(u), i, "path" === n.relative);
                        null == t &&
                          "/" !== r &&
                          (o.pathname =
                            "/" === o.pathname ? r : kt([r, o.pathname])),
                          (n.replace ? a.replace : a.push)(o, n.state, n);
                      } else a.go(e);
                  },
                  [r, a, u, i, t]
                )
              );
            })();
      }
      function Wt(t, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = e.useContext(Lt).matches,
          o = Dt().pathname,
          i = JSON.stringify(
            bt(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return e.useMemo(
          function () {
            return wt(t, JSON.parse(i), o, "path" === r);
          },
          [t, i, o, r]
        );
      }
      function Ft(t, n, r) {
        Mt() || Ye(!1);
        var a,
          o = e.useContext(Nt).navigator,
          i = e.useContext(Lt).matches,
          u = i[i.length - 1],
          l = u ? u.params : {},
          s = (u && u.pathname, u ? u.pathnameBase : "/"),
          c = (u && u.route, Dt());
        if (n) {
          var f,
            d = "string" === typeof n ? tt(n) : n;
          "/" === s ||
            (null == (f = d.pathname) ? void 0 : f.startsWith(s)) ||
            Ye(!1),
            (a = d);
        } else a = c;
        var p = a.pathname || "/",
          h = rt(t, { pathname: "/" === s ? p : p.slice(s.length) || "/" });
        var m = $t(
          h &&
            h.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, l, e.params),
                pathname: kt([
                  s,
                  o.encodeLocation
                    ? o.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? s
                    : kt([
                        s,
                        o.encodeLocation
                          ? o.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          i,
          r
        );
        return n && m
          ? e.createElement(
              zt.Provider,
              {
                value: {
                  location: Ot(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    a
                  ),
                  navigationType: xe.Pop,
                },
              },
              m
            )
          : m;
      }
      function Ht() {
        var t = (function () {
            var t,
              n = e.useContext(At),
              r = Qt(Bt.UseRouteError),
              a = Jt(Bt.UseRouteError);
            if (n) return n;
            return null == (t = r.errors) ? void 0 : t[a];
          })(),
          n = Et(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          r = t instanceof Error ? t.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("h2", null, "Unexpected Application Error!"),
          e.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? e.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      var Kt,
        Bt,
        Zt = e.createElement(Ht, null),
        Xt = (function (t) {
          k(r, t);
          var n = _(r);
          function r(e) {
            var t;
            return (
              v(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            g(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? e.createElement(
                          Lt.Provider,
                          { value: this.props.routeContext },
                          e.createElement(At.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ("idle" !== t.revalidation && "idle" === e.revalidation)
                      ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                        }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ]
            ),
            r
          );
        })(e.Component);
      function Gt(t) {
        var n = t.routeContext,
          r = t.match,
          a = t.children,
          o = e.useContext(Rt);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          e.createElement(Lt.Provider, { value: n }, a)
        );
      }
      function $t(t, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == t)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          t = r.matches;
        }
        var i = t,
          u = null == (a = r) ? void 0 : a.errors;
        if (null != u) {
          var l = i.findIndex(function (e) {
            return e.route.id && (null == u ? void 0 : u[e.route.id]);
          });
          l >= 0 || Ye(!1), (i = i.slice(0, Math.min(i.length, l + 1)));
        }
        return i.reduceRight(function (t, a, o) {
          var l = a.route.id ? (null == u ? void 0 : u[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || Zt);
          var c = n.concat(i.slice(0, o + 1)),
            f = function () {
              var n;
              return (
                (n = l
                  ? s
                  : a.route.Component
                  ? e.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : t),
                e.createElement(Gt, {
                  match: a,
                  routeContext: {
                    outlet: t,
                    matches: c,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? e.createElement(Xt, {
                location: r.location,
                revalidation: r.revalidation,
                component: s,
                error: l,
                children: f(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : f();
        }, null);
      }
      function Yt(t) {
        var n = e.useContext(Rt);
        return n || Ye(!1), n;
      }
      function Qt(t) {
        var n = e.useContext(jt);
        return n || Ye(!1), n;
      }
      function Jt(t) {
        var n = (function (t) {
            var n = e.useContext(Lt);
            return n || Ye(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || Ye(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate");
      })(Kt || (Kt = {})),
        (function (e) {
          (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId");
        })(Bt || (Bt = {}));
      var qt;
      t.startTransition;
      function en(e) {
        Ye(!1);
      }
      function tn(t) {
        var n = t.basename,
          r = void 0 === n ? "/" : n,
          a = t.children,
          o = void 0 === a ? null : a,
          i = t.location,
          u = t.navigationType,
          l = void 0 === u ? xe.Pop : u,
          s = t.navigator,
          c = t.static,
          f = void 0 !== c && c;
        Mt() && Ye(!1);
        var d = r.replace(/^\/*/, "/"),
          p = e.useMemo(
            function () {
              return { basename: d, navigator: s, static: f };
            },
            [d, s, f]
          );
        "string" === typeof i && (i = tt(i));
        var h = i,
          m = h.pathname,
          v = void 0 === m ? "/" : m,
          y = h.search,
          g = void 0 === y ? "" : y,
          b = h.hash,
          w = void 0 === b ? "" : b,
          k = h.state,
          x = void 0 === k ? null : k,
          S = h.key,
          _ = void 0 === S ? "default" : S,
          C = e.useMemo(
            function () {
              var e = yt(v, d);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: g,
                      hash: w,
                      state: x,
                      key: _,
                    },
                    navigationType: l,
                  };
            },
            [d, v, g, w, x, _, l]
          );
        return null == C
          ? null
          : e.createElement(
              Nt.Provider,
              { value: p },
              e.createElement(zt.Provider, { children: o, value: C })
            );
      }
      function nn(e) {
        var t = e.children,
          n = e.location;
        return Ft(an(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(qt || (qt = {}));
      var rn = new Promise(function () {});
      e.Component;
      function an(t, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          e.Children.forEach(t, function (t, a) {
            if (e.isValidElement(t)) {
              var o = [].concat(u(n), [a]);
              if (t.type !== e.Fragment) {
                t.type !== en && Ye(!1),
                  t.props.index && t.props.children && Ye(!1);
                var i = {
                  id: t.props.id || o.join("-"),
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  Component: t.props.Component,
                  index: t.props.index,
                  path: t.props.path,
                  loader: t.props.loader,
                  action: t.props.action,
                  errorElement: t.props.errorElement,
                  ErrorBoundary: t.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != t.props.ErrorBoundary ||
                    null != t.props.errorElement,
                  shouldRevalidate: t.props.shouldRevalidate,
                  handle: t.props.handle,
                  lazy: t.props.lazy,
                };
                t.props.children && (i.children = an(t.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, an(t.props.children, o));
            }
          }),
          r
        );
      }
      function on() {
        return (
          (on = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          on.apply(this, arguments)
        );
      }
      function un(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      var ln = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
      ];
      var sn = t.startTransition;
      function cn(t) {
        var n,
          r = t.basename,
          a = t.children,
          o = t.future,
          i = t.window,
          u = e.useRef();
        null == u.current &&
          (u.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            nt(
              function (e, t) {
                var n = e.location;
                return qe(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : et(t);
              },
              null,
              n
            )));
        var l = u.current,
          s = c(e.useState({ action: l.action, location: l.location }), 2),
          f = s[0],
          d = s[1],
          p = (o || {}).v7_startTransition,
          h = e.useCallback(
            function (e) {
              p && sn
                ? sn(function () {
                    return d(e);
                  })
                : d(e);
            },
            [d, p]
          );
        return (
          e.useLayoutEffect(
            function () {
              return l.listen(h);
            },
            [l, h]
          ),
          e.createElement(tn, {
            basename: r,
            children: a,
            location: f.location,
            navigationType: f.action,
            navigator: l,
          })
        );
      }
      var fn =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        dn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        pn = e.forwardRef(function (t, n) {
          var r,
            a = t.onClick,
            o = t.relative,
            i = t.reloadDocument,
            u = t.replace,
            l = t.state,
            s = t.target,
            c = t.to,
            f = t.preventScrollReset,
            d = un(t, ln),
            p = e.useContext(Nt).basename,
            h = !1;
          if ("string" === typeof c && dn.test(c) && ((r = c), fn))
            try {
              var m = new URL(window.location.href),
                v = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
                y = yt(v.pathname, p);
              v.origin === m.origin && null != y
                ? (c = y + v.search + v.hash)
                : (h = !0);
            } catch (w) {}
          var g = (function (t, n) {
              var r = (void 0 === n ? {} : n).relative;
              Mt() || Ye(!1);
              var a = e.useContext(Nt),
                o = a.basename,
                i = a.navigator,
                u = Wt(t, { relative: r }),
                l = u.hash,
                s = u.pathname,
                c = u.search,
                f = s;
              return (
                "/" !== o && (f = "/" === s ? o : kt([o, s])),
                i.createHref({ pathname: f, search: c, hash: l })
              );
            })(c, { relative: o }),
            b = (function (t, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                i = r.state,
                u = r.preventScrollReset,
                l = r.relative,
                s = Vt(),
                c = Dt(),
                f = Wt(t, { relative: l });
              return e.useCallback(
                function (e) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(e, a)
                  ) {
                    e.preventDefault();
                    var n = void 0 !== o ? o : et(c) === et(f);
                    s(t, {
                      replace: n,
                      state: i,
                      preventScrollReset: u,
                      relative: l,
                    });
                  }
                },
                [c, s, f, o, i, a, t, u, l]
              );
            })(c, {
              replace: u,
              state: l,
              target: s,
              preventScrollReset: f,
              relative: o,
            });
          return e.createElement(
            "a",
            on({}, d, {
              href: r || g,
              onClick:
                h || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: s,
            })
          );
        });
      var hn, mn;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher");
      })(hn || (hn = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(mn || (mn = {}));
      var vn = n.p + "static/media/basicCourseImg.3d9ef4b3db07361f6034.webp",
        yn = n.p + "static/media/middleCourseImg.462698c881d32191c245.webp",
        gn = n.p + "static/media/advancedCourseImg.bba74be0ea3d94cca489.webp",
        bn = n(184),
        wn = (0, e.createContext)();
      var kn = function (t) {
        var n = t.children,
          r = c(
            (0, e.useState)([
              { name: "Curso Inicial", price: 200, img: vn, id: 1 },
              { name: "Curso Medio", price: 250, img: yn, id: 2 },
              { name: "Curso Avanzado", price: 350, img: gn, id: 3 },
            ]),
            2
          ),
          a = r[0],
          o = r[1],
          i = c((0, e.useState)([]), 2),
          u = {
            allCourses: a,
            setAllCourses: o,
            myCourses: i[0],
            setMyCourses: i[1],
          };
        return (0, bn.jsx)(wn.Provider, { value: u, children: n });
      };
      function xn(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var Sn = n(968),
        _n = n.n(Sn);
      var Cn = function () {
        return (
          (Cn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          Cn.apply(this, arguments)
        );
      };
      Object.create;
      function En(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      "function" === typeof SuppressedError && SuppressedError;
      var Tn = n(613),
        Pn = n.n(Tn),
        On = "-ms-",
        Rn = "-moz-",
        jn = "-webkit-",
        In = "comm",
        Nn = "rule",
        zn = "decl",
        Ln = "@import",
        An = "@keyframes",
        Mn = "@layer",
        Dn = Math.abs,
        Un = String.fromCharCode,
        Vn = Object.assign;
      function Wn(e) {
        return e.trim();
      }
      function Fn(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function Hn(e, t, n) {
        return e.replace(t, n);
      }
      function Kn(e, t) {
        return e.indexOf(t);
      }
      function Bn(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function Zn(e, t, n) {
        return e.slice(t, n);
      }
      function Xn(e) {
        return e.length;
      }
      function Gn(e) {
        return e.length;
      }
      function $n(e, t) {
        return t.push(e), e;
      }
      function Yn(e, t) {
        return e.filter(function (e) {
          return !Fn(e, t);
        });
      }
      var Qn = 1,
        Jn = 1,
        qn = 0,
        er = 0,
        tr = 0,
        nr = "";
      function rr(e, t, n, r, a, o, i, u) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: Qn,
          column: Jn,
          length: i,
          return: "",
          siblings: u,
        };
      }
      function ar(e, t) {
        return Vn(
          rr("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function or(e) {
        for (; e.root; ) e = ar(e.root, { children: [e] });
        $n(e, e.siblings);
      }
      function ir() {
        return (
          (tr = er > 0 ? Bn(nr, --er) : 0),
          Jn--,
          10 === tr && ((Jn = 1), Qn--),
          tr
        );
      }
      function ur() {
        return (
          (tr = er < qn ? Bn(nr, er++) : 0),
          Jn++,
          10 === tr && ((Jn = 1), Qn++),
          tr
        );
      }
      function lr() {
        return Bn(nr, er);
      }
      function sr() {
        return er;
      }
      function cr(e, t) {
        return Zn(nr, e, t);
      }
      function fr(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function dr(e) {
        return (Qn = Jn = 1), (qn = Xn((nr = e))), (er = 0), [];
      }
      function pr(e) {
        return (nr = ""), e;
      }
      function hr(e) {
        return Wn(cr(er - 1, yr(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function mr(e) {
        for (; (tr = lr()) && tr < 33; ) ur();
        return fr(e) > 2 || fr(tr) > 3 ? "" : " ";
      }
      function vr(e, t) {
        for (
          ;
          --t &&
          ur() &&
          !(
            tr < 48 ||
            tr > 102 ||
            (tr > 57 && tr < 65) ||
            (tr > 70 && tr < 97)
          );

        );
        return cr(e, sr() + (t < 6 && 32 == lr() && 32 == ur()));
      }
      function yr(e) {
        for (; ur(); )
          switch (tr) {
            case e:
              return er;
            case 34:
            case 39:
              34 !== e && 39 !== e && yr(tr);
              break;
            case 40:
              41 === e && yr(e);
              break;
            case 92:
              ur();
          }
        return er;
      }
      function gr(e, t) {
        for (; ur() && e + tr !== 57 && (e + tr !== 84 || 47 !== lr()); );
        return "/*" + cr(t, er - 1) + "*" + Un(47 === e ? e : ur());
      }
      function br(e) {
        for (; !fr(lr()); ) ur();
        return cr(e, er);
      }
      function wr(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function kr(e, t, n, r) {
        switch (e.type) {
          case Mn:
            if (e.children.length) break;
          case Ln:
          case zn:
            return (e.return = e.return || e.value);
          case In:
            return "";
          case An:
            return (e.return = e.value + "{" + wr(e.children, r) + "}");
          case Nn:
            if (!Xn((e.value = e.props.join(",")))) return "";
        }
        return Xn((n = wr(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function xr(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ Bn(e, 0)
              ? (((((((t << 2) ^ Bn(e, 0)) << 2) ^ Bn(e, 1)) << 2) ^
                  Bn(e, 2)) <<
                  2) ^
                  Bn(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return jn + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return jn + e + e;
          case 4789:
            return Rn + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return jn + e + Rn + e + On + e + e;
          case 5936:
            switch (Bn(e, t + 11)) {
              case 114:
                return jn + e + On + Hn(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return jn + e + On + Hn(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return jn + e + On + Hn(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return jn + e + On + e + e;
          case 6165:
            return jn + e + On + "flex-" + e + e;
          case 5187:
            return (
              jn +
              e +
              Hn(e, /(\w+).+(:[^]+)/, jn + "box-$1$2" + On + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              jn +
              e +
              On +
              "flex-item-" +
              Hn(e, /flex-|-self/g, "") +
              (Fn(e, /flex-|baseline/)
                ? ""
                : On + "grid-row-" + Hn(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              jn +
              e +
              On +
              "flex-line-pack" +
              Hn(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return jn + e + On + Hn(e, "shrink", "negative") + e;
          case 5292:
            return jn + e + On + Hn(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              jn +
              "box-" +
              Hn(e, "-grow", "") +
              jn +
              e +
              On +
              Hn(e, "grow", "positive") +
              e
            );
          case 4554:
            return jn + Hn(e, /([^-])(transform)/g, "$1" + jn + "$2") + e;
          case 6187:
            return (
              Hn(
                Hn(Hn(e, /(zoom-|grab)/, jn + "$1"), /(image-set)/, jn + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return Hn(e, /(image-set\([^]*)/, jn + "$1$`$1");
          case 4968:
            return (
              Hn(
                Hn(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  jn + "box-pack:$3" + On + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              jn +
              e +
              e
            );
          case 4200:
            if (!Fn(e, /flex-|baseline/))
              return On + "grid-column-align" + Zn(e, t) + e;
            break;
          case 2592:
          case 3360:
            return On + Hn(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), Fn(e.props, /grid-\w+-end/);
              })
              ? ~Kn(e + (n = n[t].value), "span")
                ? e
                : On +
                  Hn(e, "-start", "") +
                  e +
                  On +
                  "grid-row-span:" +
                  (~Kn(n, "span")
                    ? Fn(n, /\d+/)
                    : +Fn(n, /\d+/) - +Fn(e, /\d+/)) +
                  ";"
              : On + Hn(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return Fn(e.props, /grid-\w+-start/);
              })
              ? e
              : On + Hn(Hn(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Hn(e, /(.+)-inline(.+)/, jn + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (Xn(e) - 1 - t > 6)
              switch (Bn(e, t + 1)) {
                case 109:
                  if (45 !== Bn(e, t + 4)) break;
                case 102:
                  return (
                    Hn(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        jn +
                        "$2-$3$1" +
                        Rn +
                        (108 == Bn(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~Kn(e, "stretch")
                    ? xr(Hn(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return Hn(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, a, o, i, u) {
                return (
                  On +
                  n +
                  ":" +
                  r +
                  u +
                  (a ? On + n + "-span:" + (o ? i : +i - +r) + u : "") +
                  e
                );
              }
            );
          case 4949:
            if (121 === Bn(e, t + 6)) return Hn(e, ":", ":" + jn) + e;
            break;
          case 6444:
            switch (Bn(e, 45 === Bn(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  Hn(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      jn +
                      (45 === Bn(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      jn +
                      "$2$3$1" +
                      On +
                      "$2box$3"
                  ) + e
                );
              case 100:
                return Hn(e, ":", ":" + On) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return Hn(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function Sr(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case zn:
              return void (e.return = xr(e.value, e.length, n));
            case An:
              return wr([ar(e, { value: Hn(e.value, "@", "@" + jn) })], r);
            case Nn:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (Fn(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      or(
                        ar(e, {
                          props: [Hn(t, /:(read-\w+)/, ":" + Rn + "$1")],
                        })
                      ),
                        or(ar(e, { props: [t] })),
                        Vn(e, { props: Yn(n, r) });
                      break;
                    case "::placeholder":
                      or(
                        ar(e, {
                          props: [Hn(t, /:(plac\w+)/, ":" + jn + "input-$1")],
                        })
                      ),
                        or(
                          ar(e, {
                            props: [Hn(t, /:(plac\w+)/, ":" + Rn + "$1")],
                          })
                        ),
                        or(
                          ar(e, {
                            props: [Hn(t, /:(plac\w+)/, On + "input-$1")],
                          })
                        ),
                        or(ar(e, { props: [t] })),
                        Vn(e, { props: Yn(n, r) });
                  }
                  return "";
                });
          }
      }
      function _r(e) {
        return pr(Cr("", null, null, null, [""], (e = dr(e)), 0, [0], e));
      }
      function Cr(e, t, n, r, a, o, i, u, l) {
        for (
          var s = 0,
            c = 0,
            f = i,
            d = 0,
            p = 0,
            h = 0,
            m = 1,
            v = 1,
            y = 1,
            g = 0,
            b = "",
            w = a,
            k = o,
            x = r,
            S = b;
          v;

        )
          switch (((h = g), (g = ur()))) {
            case 40:
              if (108 != h && 58 == Bn(S, f - 1)) {
                -1 != Kn((S += Hn(hr(g), "&", "&\f")), "&\f") && (y = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              S += hr(g);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              S += mr(h);
              break;
            case 92:
              S += vr(sr() - 1, 7);
              continue;
            case 47:
              switch (lr()) {
                case 42:
                case 47:
                  $n(Tr(gr(ur(), sr()), t, n, l), l);
                  break;
                default:
                  S += "/";
              }
              break;
            case 123 * m:
              u[s++] = Xn(S) * y;
            case 125 * m:
            case 59:
            case 0:
              switch (g) {
                case 0:
                case 125:
                  v = 0;
                case 59 + c:
                  -1 == y && (S = Hn(S, /\f/g, "")),
                    p > 0 &&
                      Xn(S) - f &&
                      $n(
                        p > 32
                          ? Pr(S + ";", r, n, f - 1, l)
                          : Pr(Hn(S, " ", "") + ";", r, n, f - 2, l),
                        l
                      );
                  break;
                case 59:
                  S += ";";
                default:
                  if (
                    ($n(
                      (x = Er(
                        S,
                        t,
                        n,
                        s,
                        c,
                        a,
                        u,
                        b,
                        (w = []),
                        (k = []),
                        f,
                        o
                      )),
                      o
                    ),
                    123 === g)
                  )
                    if (0 === c) Cr(S, t, x, x, w, o, f, u, k);
                    else
                      switch (99 === d && 110 === Bn(S, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Cr(
                            e,
                            x,
                            x,
                            r &&
                              $n(
                                Er(e, x, x, 0, 0, a, u, b, a, (w = []), f, k),
                                k
                              ),
                            a,
                            k,
                            f,
                            u,
                            r ? w : k
                          );
                          break;
                        default:
                          Cr(S, x, x, x, [""], k, 0, u, k);
                      }
              }
              (s = c = p = 0), (m = y = 1), (b = S = ""), (f = i);
              break;
            case 58:
              (f = 1 + Xn(S)), (p = h);
            default:
              if (m < 1)
                if (123 == g) --m;
                else if (125 == g && 0 == m++ && 125 == ir()) continue;
              switch (((S += Un(g)), g * m)) {
                case 38:
                  y = c > 0 ? 1 : ((S += "\f"), -1);
                  break;
                case 44:
                  (u[s++] = (Xn(S) - 1) * y), (y = 1);
                  break;
                case 64:
                  45 === lr() && (S += hr(ur())),
                    (d = lr()),
                    (c = f = Xn((b = S += br(sr())))),
                    g++;
                  break;
                case 45:
                  45 === h && 2 == Xn(S) && (m = 0);
              }
          }
        return o;
      }
      function Er(e, t, n, r, a, o, i, u, l, s, c, f) {
        for (
          var d = a - 1, p = 0 === a ? o : [""], h = Gn(p), m = 0, v = 0, y = 0;
          m < r;
          ++m
        )
          for (
            var g = 0, b = Zn(e, d + 1, (d = Dn((v = i[m])))), w = e;
            g < h;
            ++g
          )
            (w = Wn(v > 0 ? p[g] + " " + b : Hn(b, /&\f/g, p[g]))) &&
              (l[y++] = w);
        return rr(e, t, n, 0 === a ? Nn : u, l, s, c, f);
      }
      function Tr(e, t, n, r) {
        return rr(e, t, n, In, Un(tr), Zn(e, 2, -2), 0, r);
      }
      function Pr(e, t, n, r, a) {
        return rr(e, t, n, zn, Zn(e, 0, r), Zn(e, r + 1, -1), r, a);
      }
      var Or = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        Rr =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
              REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
              }.SC_ATTR)) ||
          "data-styled",
        jr = "undefined" != typeof window && "HTMLElement" in window,
        Ir = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                  REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                  REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_AUTH0_CLIENT_ID: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
                REACT_APP_AUTH0_DOMAIN: "dev-pxe14roena18vlea.us.auth0.com",
              }.SC_DISABLE_SPEEDY
        ),
        Nr = (new Set(), Object.freeze([])),
        zr = Object.freeze({});
      function Lr(e, t, n) {
        return (
          void 0 === n && (n = zr),
          (e.theme !== n.theme && e.theme) || t || n.theme
        );
      }
      var Ar = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        Mr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Dr = /(^-|-$)/g;
      function Ur(e) {
        return e.replace(Mr, "-").replace(Dr, "");
      }
      var Vr = /(a)(d)/gi,
        Wr = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Fr(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Wr(t % 52) + n;
        return (Wr(t % 52) + n).replace(Vr, "$1-$2");
      }
      var Hr,
        Kr = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Br = function (e) {
          return Kr(5381, e);
        };
      function Zr(e) {
        return Fr(Br(e) >>> 0);
      }
      function Xr(e) {
        return "string" == typeof e && !0;
      }
      var Gr = "function" == typeof Symbol && Symbol.for,
        $r = Gr ? Symbol.for("react.memo") : 60115,
        Yr = Gr ? Symbol.for("react.forward_ref") : 60112,
        Qr = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        Jr = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        qr = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        ea =
          (((Hr = {})[Yr] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Hr[$r] = qr),
          Hr);
      function ta(e) {
        return ("type" in (t = e) && t.type.$$typeof) === $r
          ? qr
          : "$$typeof" in e
          ? ea[e.$$typeof]
          : Qr;
        var t;
      }
      var na = Object.defineProperty,
        ra = Object.getOwnPropertyNames,
        aa = Object.getOwnPropertySymbols,
        oa = Object.getOwnPropertyDescriptor,
        ia = Object.getPrototypeOf,
        ua = Object.prototype;
      function la(e, t, n) {
        if ("string" != typeof t) {
          if (ua) {
            var r = ia(t);
            r && r !== ua && la(e, r, n);
          }
          var a = ra(t);
          aa && (a = a.concat(aa(t)));
          for (var o = ta(e), i = ta(t), u = 0; u < a.length; ++u) {
            var l = a[u];
            if (!(l in Jr || (n && n[l]) || (i && l in i) || (o && l in o))) {
              var s = oa(t, l);
              try {
                na(e, l, s);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function sa(e) {
        return "function" == typeof e;
      }
      function ca(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function fa(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function da(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function pa(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function ha(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !pa(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e[r] = ha(e[r], t[r]);
        else if (pa(t)) for (var r in t) e[r] = ha(e[r], t[r]);
        return e;
      }
      function ma(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function va(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var ya = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                  if ((a <<= 1) < 0) throw va(16, "".concat(e));
                (this.groupSizes = new Uint32Array(a)),
                  this.groupSizes.set(n),
                  (this.length = a);
                for (var o = r; o < a; o++) this.groupSizes[o] = 0;
              }
              for (
                var i = this.indexOfGroup(e + 1), u = ((o = 0), t.length);
                o < u;
                o++
              )
                this.tag.insertRule(i, t[o]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var a = n; a < r; a++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  a = r + n,
                  o = r;
                o < a;
                o++
              )
                t += "".concat(this.tag.getRule(o)).concat("/*!sc*/\n");
              return t;
            }),
            e
          );
        })(),
        ga = new Map(),
        ba = new Map(),
        wa = 1,
        ka = function (e) {
          if (ga.has(e)) return ga.get(e);
          for (; ba.has(wa); ) wa++;
          var t = wa++;
          return ga.set(e, t), ba.set(t, e), t;
        },
        xa = function (e, t) {
          ga.set(e, t), ba.set(t, e);
        },
        Sa = "style["
          .concat(Rr, "][")
          .concat("data-styled-version", '="')
          .concat("6.0.6", '"]'),
        _a = new RegExp(
          "^".concat(Rr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        Ca = function (e, t, n) {
          for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)
            (r = a[o]) && e.registerName(t, r);
        },
        Ea = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                "/*!sc*/\n"
              ),
              a = [],
              o = 0,
              i = r.length;
            o < i;
            o++
          ) {
            var u = r[o].trim();
            if (u) {
              var l = u.match(_a);
              if (l) {
                var s = 0 | parseInt(l[1], 10),
                  c = l[2];
                0 !== s &&
                  (xa(c, s), Ca(e, c, l[3]), e.getTag().insertRules(s, a)),
                  (a.length = 0);
              } else a.push(u);
            }
          }
        };
      function Ta() {
        return n.nc;
      }
      var Pa = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            a = (function (e) {
              for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                var r = t[n];
                if (r && 1 === r.nodeType && r.hasAttribute(Rr)) return r;
              }
            })(n),
            o = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(Rr, "active"),
            r.setAttribute("data-styled-version", "6.0.6");
          var i = Ta();
          return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r;
        },
        Oa = (function () {
          function e(e) {
            (this.element = Pa(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var a = t[n];
                  if (a.ownerNode === e) return a;
                }
                throw va(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        Ra = (function () {
          function e(e) {
            (this.element = Pa(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        ja = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        Ia = jr,
        Na = { isServer: !jr, useCSSOMInjection: !Ir },
        za = (function () {
          function e(e, t, n) {
            void 0 === e && (e = zr), void 0 === t && (t = {});
            var r = this;
            (this.options = Cn(Cn({}, Na), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                jr &&
                Ia &&
                ((Ia = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(Sa), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    a &&
                      "active" !== a.getAttribute(Rr) &&
                      (Ea(e, a), a.parentNode && a.parentNode.removeChild(a));
                  }
                })(this)),
              ma(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = "",
                      a = function (n) {
                        var a = (function (e) {
                          return ba.get(e);
                        })(n);
                        if (void 0 === a) return "continue";
                        var o = e.names.get(a),
                          i = t.getGroup(n);
                        if (void 0 === o || 0 === i.length) return "continue";
                        var u = ""
                            .concat(Rr, ".g")
                            .concat(n, '[id="')
                            .concat(a, '"]'),
                          l = "";
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (l += "".concat(e, ","));
                          }),
                          (r += ""
                            .concat(i)
                            .concat(u, '{content:"')
                            .concat(l, '"}')
                            .concat("/*!sc*/\n"));
                      },
                      o = 0;
                    o < n;
                    o++
                  )
                    a(o);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return ka(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  Cn(Cn({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new ja(n) : t ? new Oa(n) : new Ra(n);
                  })(this.options)),
                  new ya(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((ka(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(ka(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(ka(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        La = /&/g,
        Aa = /^\s*\/\/.*$/gm;
      function Ma(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = Ma(e.children, t)),
            e
          );
        });
      }
      function Da(e) {
        var t,
          n,
          r,
          a = void 0 === e ? zr : e,
          o = a.options,
          i = void 0 === o ? zr : o,
          u = a.plugins,
          l = void 0 === u ? Nr : u,
          s = function (e, r, a) {
            return a === n ||
              (a.startsWith(n) &&
                a.endsWith(n) &&
                a.replaceAll(n, "").length > 0)
              ? ".".concat(t)
              : e;
          },
          c = l.slice();
        c.push(function (e) {
          e.type === Nn &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(La, n).replace(r, s));
        }),
          i.prefix && c.push(Sr),
          c.push(kr);
        var f = function (e, a, o, u) {
          void 0 === a && (a = ""),
            void 0 === o && (o = ""),
            void 0 === u && (u = "&"),
            (t = u),
            (n = a),
            (r = new RegExp("\\".concat(n, "\\b"), "g"));
          var l = e.replace(Aa, ""),
            s = _r(
              o || a ? "".concat(o, " ").concat(a, " { ").concat(l, " }") : l
            );
          i.namespace && (s = Ma(s, i.namespace));
          var f,
            d = [];
          return (
            wr(
              s,
              (function (e) {
                var t = Gn(e);
                return function (n, r, a, o) {
                  for (var i = "", u = 0; u < t; u++)
                    i += e[u](n, r, a, o) || "";
                  return i;
                };
              })(
                c.concat(
                  ((f = function (e) {
                    return d.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && f(e));
                  })
                )
              )
            ),
            d
          );
        };
        return (
          (f.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || va(15), Kr(e, t.name);
                }, 5381)
                .toString()
            : ""),
          f
        );
      }
      var Ua = new za(),
        Va = Da(),
        Wa = e.createContext({
          shouldForwardProp: void 0,
          styleSheet: Ua,
          stylis: Va,
        }),
        Fa = (Wa.Consumer, e.createContext(void 0));
      function Ha() {
        return (0, e.useContext)(Wa);
      }
      function Ka(t) {
        var n = (0, e.useState)(t.stylisPlugins),
          r = n[0],
          a = n[1],
          o = Ha().styleSheet,
          i = (0, e.useMemo)(
            function () {
              var e = o;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target, o]
          ),
          u = (0, e.useMemo)(
            function () {
              return Da({
                options: {
                  namespace: t.namespace,
                  prefix: t.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [t.enableVendorPrefixes, t.namespace, r]
          );
        return (
          (0, e.useEffect)(
            function () {
              Pn()(r, t.stylisPlugins) || a(t.stylisPlugins);
            },
            [t.stylisPlugins]
          ),
          e.createElement(
            Wa.Provider,
            {
              value: {
                shouldForwardProp: t.shouldForwardProp,
                styleSheet: i,
                stylis: u,
              },
            },
            e.createElement(Fa.Provider, { value: u }, t.children)
          )
        );
      }
      var Ba = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = Va);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              ma(this, function () {
                throw va(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = Va), this.name + e.hash;
            }),
            e
          );
        })(),
        Za = function (e) {
          return e >= "A" && e <= "Z";
        };
      function Xa(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && "-" === r && "-" === e[0]) return e;
          Za(r) ? (t += "-" + r.toLowerCase()) : (t += r);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var Ga = function (e) {
          return null == e || !1 === e || "" === e;
        },
        $a = function e(t) {
          var n,
            r,
            a = [];
          for (var o in t) {
            var i = t[o];
            t.hasOwnProperty(o) &&
              !Ga(i) &&
              ((Array.isArray(i) && i.isCss) || sa(i)
                ? a.push("".concat(Xa(o), ":"), i, ";")
                : pa(i)
                ? a.push.apply(
                    a,
                    En(En(["".concat(o, " {")], e(i), !1), ["}"], !1)
                  )
                : a.push(
                    ""
                      .concat(Xa(o), ": ")
                      .concat(
                        ((n = o),
                        null == (r = i) || "boolean" == typeof r || "" === r
                          ? ""
                          : "number" != typeof r ||
                            0 === r ||
                            n in Or ||
                            n.startsWith("--")
                          ? String(r).trim()
                          : "".concat(r, "px")),
                        ";"
                      )
                  ));
          }
          return a;
        };
      function Ya(e, t, n, r) {
        return Ga(e)
          ? []
          : ca(e)
          ? [".".concat(e.styledComponentId)]
          : sa(e)
          ? !sa((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t
            ? [e]
            : Ya(e(t), t, n, r)
          : e instanceof Ba
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : pa(e)
          ? $a(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              Nr,
              e.map(function (e) {
                return Ya(e, t, n, r);
              })
            )
          : [e.toString()];
        var a;
      }
      function Qa(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (sa(n) && !ca(n)) return !1;
        }
        return !0;
      }
      var Ja = Br("6.0.6"),
        qa = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && Qa(e)),
              (this.componentId = t),
              (this.baseHash = Kr(Ja, t)),
              (this.baseStyle = n),
              za.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  r = fa(r, this.staticRulesId);
                else {
                  var a = da(Ya(this.rules, e, t, n)),
                    o = Fr(Kr(this.baseHash, a) >>> 0);
                  if (!t.hasNameForId(this.componentId, o)) {
                    var i = n(a, ".".concat(o), void 0, this.componentId);
                    t.insertRules(this.componentId, o, i);
                  }
                  (r = fa(r, o)), (this.staticRulesId = o);
                }
              else {
                for (
                  var u = Kr(this.baseHash, n.hash), l = "", s = 0;
                  s < this.rules.length;
                  s++
                ) {
                  var c = this.rules[s];
                  if ("string" == typeof c) l += c;
                  else if (c) {
                    var f = da(Ya(c, e, t, n));
                    (u = Kr(u, f)), (l += f);
                  }
                }
                if (l) {
                  var d = Fr(u >>> 0);
                  t.hasNameForId(this.componentId, d) ||
                    t.insertRules(
                      this.componentId,
                      d,
                      n(l, ".".concat(d), void 0, this.componentId)
                    ),
                    (r = fa(r, d));
                }
              }
              return r;
            }),
            e
          );
        })(),
        eo = e.createContext(void 0);
      eo.Consumer;
      var to = {};
      new Set();
      function no(t, n, r) {
        var a = ca(t),
          o = t,
          i = !Xr(t),
          u = n.attrs,
          l = void 0 === u ? Nr : u,
          s = n.componentId,
          c =
            void 0 === s
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : Ur(e);
                  to[n] = (to[n] || 0) + 1;
                  var r = "".concat(n, "-").concat(Zr("6.0.6" + n + to[n]));
                  return t ? "".concat(t, "-").concat(r) : r;
                })(n.displayName, n.parentComponentId)
              : s,
          f = n.displayName,
          d =
            (void 0 === f &&
              (function (e) {
                Xr(e)
                  ? "styled.".concat(e)
                  : "Styled(".concat(
                      (function (e) {
                        return e.displayName || e.name || "Component";
                      })(e),
                      ")"
                    );
              })(t),
            n.displayName && n.componentId
              ? "".concat(Ur(n.displayName), "-").concat(n.componentId)
              : n.componentId || c),
          p = a && o.attrs ? o.attrs.concat(l).filter(Boolean) : l,
          h = n.shouldForwardProp;
        if (a && o.shouldForwardProp) {
          var m = o.shouldForwardProp;
          if (n.shouldForwardProp) {
            var v = n.shouldForwardProp;
            h = function (e, t) {
              return m(e, t) && v(e, t);
            };
          } else h = m;
        }
        var y = new qa(r, d, a ? o.componentStyle : void 0);
        var g = e.forwardRef(function (t, n) {
          return (function (t, n, r) {
            var a = t.attrs,
              o = t.componentStyle,
              i = t.defaultProps,
              u = t.foldedComponentIds,
              l = t.styledComponentId,
              s = t.target,
              c = e.useContext(eo),
              f = Ha(),
              d = t.shouldForwardProp || f.shouldForwardProp,
              p = (function (e, t, n) {
                for (
                  var r,
                    a = Cn(Cn({}, t), { className: void 0, theme: n }),
                    o = 0;
                  o < e.length;
                  o += 1
                ) {
                  var i = sa((r = e[o])) ? r(a) : r;
                  for (var u in i)
                    a[u] =
                      "className" === u
                        ? fa(a[u], i[u])
                        : "style" === u
                        ? Cn(Cn({}, a[u]), i[u])
                        : i[u];
                }
                return (
                  t.className && (a.className = fa(a.className, t.className)), a
                );
              })(a, n, Lr(n, c, i) || zr),
              h = p.as || s,
              m = {};
            for (var v in p)
              void 0 === p[v] ||
                "$" === v[0] ||
                "as" === v ||
                "theme" === v ||
                ("forwardedAs" === v
                  ? (m.as = p.forwardedAs)
                  : (d && !d(v, h)) || (m[v] = p[v]));
            var y = (function (e, t) {
                var n = Ha();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(o, p),
              g = fa(u, l);
            return (
              y && (g += " " + y),
              p.className && (g += " " + p.className),
              (m[Xr(h) && !Ar.has(h) ? "class" : "className"] = g),
              (m.ref = r),
              (0, e.createElement)(h, m)
            );
          })(g, t, n);
        });
        return (
          (g.attrs = p),
          (g.componentStyle = y),
          (g.shouldForwardProp = h),
          (g.foldedComponentIds = a
            ? fa(o.foldedComponentIds, o.styledComponentId)
            : ""),
          (g.styledComponentId = d),
          (g.target = a ? o.target : t),
          Object.defineProperty(g, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = a
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var r = 0, a = t; r < a.length; r++) ha(e, a[r], !0);
                    return e;
                  })({}, o.defaultProps, e)
                : e;
            },
          }),
          ma(g, function () {
            return ".".concat(g.styledComponentId);
          }),
          i &&
            la(g, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          g
        );
      }
      function ro(e, t) {
        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      }
      var ao = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function oo(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (sa(e) || pa(e)) return ao(Ya(ro(Nr, En([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && "string" == typeof r[0]
          ? Ya(r)
          : ao(Ya(ro(r, t)));
      }
      function io(e, t, n) {
        if ((void 0 === n && (n = zr), !t)) throw va(1, t);
        var r = function (r) {
          for (var a = [], o = 1; o < arguments.length; o++)
            a[o - 1] = arguments[o];
          return e(t, n, oo.apply(void 0, En([r], a, !1)));
        };
        return (
          (r.attrs = function (r) {
            return io(
              e,
              t,
              Cn(Cn({}, n), {
                attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
              })
            );
          }),
          (r.withConfig = function (r) {
            return io(e, t, Cn(Cn({}, n), r));
          }),
          r
        );
      }
      var uo = function (e) {
          return io(no, e);
        },
        lo = uo;
      Ar.forEach(function (e) {
        lo[e] = uo(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Qa(e)),
            za.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, t, n, r) {
          var a = r(da(Ya(this.rules, t, n, r)), ""),
            o = this.componentId + e;
          n.insertRules(o, o, a);
        }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && za.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          });
      })();
      var so;
      (function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString(),
              n = Ta(),
              r = da(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(Rr, '="true"'),
                  "".concat("data-styled-version", '="').concat("6.0.6", '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(r, ">").concat(e, "</style>");
          }),
            (this.getStyleTags = function () {
              if (t.sealed) throw va(2);
              return t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (t.sealed) throw va(2);
              var r =
                  (((n = {})[Rr] = ""),
                  (n["data-styled-version"] = "6.0.6"),
                  (n.dangerouslySetInnerHTML = {
                    __html: t.instance.toString(),
                  }),
                  n),
                a = Ta();
              return (
                a && (r.nonce = a),
                [e.createElement("style", Cn({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new za({ isServer: !0 })),
            (this.sealed = !1);
        }
        (t.prototype.collectStyles = function (t) {
          if (this.sealed) throw va(2);
          return e.createElement(Ka, { sheet: this.instance }, t);
        }),
          (t.prototype.interleaveWithNodeStream = function (e) {
            throw va(3);
          });
      })(),
        "__sc-".concat(Rr, "__");
      var co,
        fo,
        po,
        ho,
        mo,
        vo,
        yo,
        go = function () {
          var e = Ze().loginWithRedirect;
          return (0, bn.jsx)(bo, {
            onClick: e,
            className: "button",
            children: "Iniciar Sesi\xf3n",
          });
        },
        bo = lo.button(
          so ||
            (so = xn([
              '\n  cursor: pointer;\n  position: relative;\n  font-family: "Open Sans", monospace;\n  padding: 8px 15px;\n  font-size: 16px;\n  color: rgb(193, 163, 98);\n  outline: 2px solid rgb(193, 163, 98);\n  border-radius: 5px;\n  background-color: transparent;\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n  overflow: hidden;\n  border: none;\n\n  &:hover {\n    color: #212121;\n    scale: 1.1;\n    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);\n    outline: none;\n    border: none;\n    background-color: rgb(193, 163, 98);\n  }\n',
            ]))
        );
      var wo,
        ko = function (e) {
          var t = e.pathIsMyCourses,
            n = Ze(),
            r = n.user,
            a = n.isAuthenticated;
          return (0, bn.jsxs)(xo, {
            login: a ? "120px" : "150px",
            children: [
              (0, bn.jsxs)(So, {
                children: [
                  (0, bn.jsx)(Po, {
                    to: "/",
                    children: (0, bn.jsx)(_o, { children: "Trading Master" }),
                  }),
                  a &&
                    (0, bn.jsx)(Po, {
                      to: "/profile",
                      children: (0, bn.jsx)(Co, { src: r.picture }),
                    }),
                ],
              }),
              (0, bn.jsx)(Eo, {
                children: t
                  ? (0, bn.jsx)(Po, { to: "/", children: "Inicio" })
                  : (0, bn.jsxs)(bn.Fragment, {
                      children: [
                        (0, bn.jsx)(To, {
                          href: "#allCourses",
                          children: "Cursos",
                        }),
                        (0, bn.jsx)(To, {
                          href: "#aboutUs",
                          children: "Nosotros",
                        }),
                        (0, bn.jsx)(To, {
                          href: "#contact",
                          children: "Contacto",
                        }),
                      ],
                    }),
              }),
              !a && (0, bn.jsx)(go, {}),
            ],
          });
        },
        xo = lo.header(
          co ||
            (co = xn([
              "\n  background-color: #2b2d42;\n  width: 100vw;\n  height: ",
              ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 0;\n",
            ])),
          function (e) {
            return e.login;
          }
        ),
        So = lo.div(
          fo ||
            (fo = xn([
              "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: space-around;\n",
            ]))
        ),
        _o = lo.p(
          po ||
            (po = xn([
              '\n  font-size: 1.8rem;\n  text-transform: uppercase;\n  color: rgb(193, 163, 98);\n  font-family: "Inconsolata", monospace;\n  letter-spacing: 1.3px;\n',
            ]))
        ),
        Co = lo.img(
          ho ||
            (ho = xn([
              "\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  outline: 2px solid rgb(193, 163, 98);\n",
            ]))
        ),
        Eo = lo.nav(
          mo ||
            (mo = xn([
              "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 50px;\n",
            ]))
        ),
        To = lo.a(
          vo ||
            (vo = xn([
              "\n  color: #b4b4b4;\n  text-decoration: none;\n  font-style: italic;\n  text-transform: capitalize;\n  transition-duration: 0.1s;\n  &:hover {\n    color: #fff;\n  }\n",
            ]))
        ),
        Po = lo(pn)(
          yo ||
            (yo = xn([
              "\n  color: #b4b4b4;\n  text-decoration: none;\n  font-style: italic;\n  text-transform: capitalize;\n  transition-duration: 0.1s;\n  &:hover {\n    color: #fff;\n  }\n",
            ]))
        );
      var Oo,
        Ro = function () {
          return (0, bn.jsxs)(jo, {
            children: [
              (0, bn.jsx)("h3", { children: "Mis cursos" }),
              (0, bn.jsx)(pn, {
                to: "/mycourses",
                children: (0, bn.jsx)("button", {
                  children: "IR A MIS CURSOS",
                }),
              }),
            ],
          });
        },
        jo = lo.div(
          wo ||
            (wo = xn([
              "\n  background-color: #457b9d;\n  box-shadow: 0 0 5px #fff;\n  width: 90%;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 1rem;\n  text-align: center;\n",
            ]))
        );
      var Io,
        No,
        zo,
        Lo = function () {
          return (0, bn.jsxs)(Ao, {
            children: [
              (0, bn.jsx)("h3", {
                children: "Convertite en Trader Profesional",
              }),
              (0, bn.jsx)("p", {
                children: "\xbfQuer\xe9s crecer econ\xf3micamente?",
              }),
              (0, bn.jsx)("p", { children: "\xbfObtener un ingreso extra?" }),
              (0, bn.jsx)("p", {
                children:
                  "En Trading Master te mostramos c\xf3mo. No es magia, es simplemente saber mover el dinero invirti\xe9ndolo inteligentemente.En Academia Forex estamos orgullosos de ofrecer una experiencia educativa flexible, personalizada y de alta calidad para todos y cada uno de los estudiantes.",
              }),
            ],
          });
        },
        Ao = lo.div(
          Oo ||
            (Oo = xn([
              "\n  background-color: #457b9d;\n  width: 90%;\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  row-gap: 2rem;\n  text-align: center;\n",
            ]))
        );
      var Mo,
        Do,
        Uo = function (t) {
          var n = t.nameCourse,
            r = t.imgCourse,
            a = t.priceCourse,
            o = t.idCourse,
            i = c((0, e.useState)(), 2),
            l = i[0],
            s = i[1],
            f = (0, e.useContext)(wn),
            d = f.allCourses,
            p = f.myCourses,
            h = f.setMyCourses;
          return (0, bn.jsx)(Vo, {
            children: l
              ? (0, bn.jsxs)(bn.Fragment, {
                  children: [
                    (0, bn.jsx)("button", {
                      onClick: function () {
                        return s(!1);
                      },
                      children: "Atr\xe1s",
                    }),
                    (0, bn.jsx)("p", {
                      children:
                        "Este curso est\xe1 orientado a aquellas personas que ya tienen conocimiento en trading y desean conocer en detalle una operatoria avanzada para llegar a un nivel superior.",
                    }),
                    (0, bn.jsx)("button", {
                      onClick: function () {
                        return (function (e) {
                          var t = d.find(function (t) {
                            return t.id === e;
                          });
                          h([].concat(u(p), [t]));
                        })(o);
                      },
                      children: "Comprar",
                    }),
                  ],
                })
              : (0, bn.jsxs)(bn.Fragment, {
                  children: [
                    (0, bn.jsx)(Wo, { children: n }),
                    (0, bn.jsx)("b", { children: "$" + a }),
                    (0, bn.jsx)("br", {}),
                    (0, bn.jsx)("img", { src: r, alt: "img course" }),
                    (0, bn.jsx)("br", {}),
                    (0, bn.jsx)(Fo, {
                      onClick: function () {
                        return s(!l);
                      },
                      children: "Ver Detalles",
                    }),
                  ],
                }),
          });
        },
        Vo = lo.div(
          Io ||
            (Io = xn([
              "\n  background-color: rgba(255, 214, 255, 0.6);\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n",
            ]))
        ),
        Wo = lo.p(
          No ||
            (No = xn([
              "\n  font-size: 1.5rem;\n  color: black;\n  font-style: italic;\n",
            ]))
        ),
        Fo = lo.p(
          zo || (zo = xn(["\n  font-size: 1.3rem;\n  color: black;\n"]))
        );
      var Ho,
        Ko = function () {
          var t = (0, e.useContext)(wn).allCourses;
          return (0, bn.jsxs)(Bo, {
            id: "allCourses",
            children: [
              (0, bn.jsx)("h2", {
                style: { color: "#fff" },
                children: "Cursos",
              }),
              (0, bn.jsx)(Zo, {
                children: t.map(function (e) {
                  return (0,
                  bn.jsx)(Uo, { idCourse: e.id, nameCourse: e.name, priceCourse: e.price, imgCourse: e.img }, e.id);
                }),
              }),
            ],
          });
        },
        Bo = lo.div(
          Mo ||
            (Mo = xn([
              "\n  width: 330px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  row-gap: 2rem;\n  padding: 1rem 0;\n",
            ]))
        ),
        Zo = lo.ol(
          Do ||
            (Do = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2rem;\n  row-gap: 3rem;\n",
            ]))
        );
      var Xo,
        Go,
        $o = function () {
          return (0, bn.jsxs)(Yo, {
            id: "aboutUs",
            children: [
              (0, bn.jsx)("h4", { children: "\xbfQui\xe9nes somos?" }),
              (0, bn.jsx)("p", {
                style: { width: "90%" },
                children:
                  "En Academia Forex, ofrecemos la mejor plataforma de aprendizaje online porque los estudiantes siempre son el esp\xedritu que nos moviliza.Es por eso que el programa de aprendizaje se adapta y personaliza f\xe1cilmente para satisfacer las necesidades de cada estudiante, sin importar d\xf3nde se encuentren ni su nivel de conocimiento. Con un equipo apasionado, contamos con asistencia por tel\xe9fono, email o sesiones de video para que aprendas esta habilidad y te conviertas en un trader profesional.",
              }),
            ],
          });
        },
        Yo = lo.div(
          Ho ||
            (Ho = xn([
              "\n  background-color: #457b9d;\n  width: 90%;\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  row-gap: 2rem;\n  text-align: center;\n",
            ]))
        );
      var Qo,
        Jo = function () {
          return (0, bn.jsxs)(qo, {
            id: "contact",
            children: [
              (0, bn.jsx)("p", { children: "Cont\xe1ctanos" }),
              (0, bn.jsxs)("div", {
                children: [
                  (0, bn.jsx)("p", { children: "eltrading@gmail.com" }),
                  (0, bn.jsx)("p", { children: "234 534 1235" }),
                ],
              }),
              (0, bn.jsxs)(ei, {
                children: [
                  (0, bn.jsxs)("div", {
                    children: [
                      (0, bn.jsx)("label", { children: "Nombre: " }),
                      " ",
                      (0, bn.jsx)("input", {}),
                      " ",
                    ],
                  }),
                  (0, bn.jsxs)("div", {
                    children: [
                      (0, bn.jsx)("label", { children: "Tel\xe9fono: " }),
                      " ",
                      (0, bn.jsx)("input", {}),
                    ],
                  }),
                  (0, bn.jsxs)("div", {
                    children: [
                      (0, bn.jsx)("label", { children: "Email: " }),
                      " ",
                      (0, bn.jsx)("input", {}),
                    ],
                  }),
                  (0, bn.jsxs)("div", {
                    children: [
                      (0, bn.jsx)("label", { children: "Mensaje: " }),
                      " ",
                      (0, bn.jsx)("input", {}),
                    ],
                  }),
                  (0, bn.jsx)("button", { type: "submit", children: "Enviar" }),
                ],
              }),
            ],
          });
        },
        qo = lo.div(
          Xo ||
            (Xo = xn([
              "\n  background-color: #457b9d;\n  width: 100%;\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  row-gap: 2rem;\n  text-align: center;\n",
            ]))
        ),
        ei = lo.form(
          Go ||
            (Go = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  row-gap: 1rem;\n",
            ]))
        );
      var ti,
        ni,
        ri = function () {
          return (0, bn.jsx)(ai, {
            children: (0, bn.jsx)("p", {
              children: "Hecho por Vaito and giXi",
            }),
          });
        },
        ai = lo.footer(
          Qo ||
            (Qo = xn([
              "\n  background-color: #fff;\n  width: 100vw;\n  height: 70px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n",
            ]))
        );
      var oi,
        ii = function () {
          var e = Ze(),
            t = e.isLoading,
            n = e.isAuthenticated;
          return t
            ? (0, bn.jsx)(ui, {
                children: (0, bn.jsx)(_n(), {
                  type: "bars",
                  color: "rgb(193, 163, 98)",
                  width: "250px",
                  height: "200px",
                }),
              })
            : (0, bn.jsxs)(li, {
                children: [
                  (0, bn.jsx)(ko, {}),
                  n && (0, bn.jsx)(Ro, {}),
                  (0, bn.jsx)(Lo, {}),
                  (0, bn.jsx)(Ko, {}),
                  (0, bn.jsx)($o, {}),
                  (0, bn.jsx)(Jo, {}),
                  (0, bn.jsx)(ri, {}),
                ],
              });
        },
        ui = lo.div(
          ti ||
            (ti = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n",
            ]))
        ),
        li = lo.div(
          ni ||
            (ni = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  row-gap: 3rem;\n",
            ]))
        );
      var si,
        ci,
        fi,
        di = function () {
          var e = Ze().logout;
          return (0, bn.jsx)(pi, {
            onClick: function () {
              return e({ logoutParams: { returnTo: window.location.origin } });
            },
            children: "Cerrar Sesi\xf3n",
          });
        },
        pi = lo.button(
          oi ||
            (oi = xn([
              "\n  padding: 0.5rem;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 1.1rem;\n",
            ]))
        );
      var hi,
        mi,
        vi = function () {
          var e = Ze(),
            t = e.user;
          return e.isLoading
            ? (0, bn.jsx)("p", { children: "Cargando" })
            : (0, bn.jsxs)(yi, {
                children: [
                  (0, bn.jsx)(pn, { to: "/", children: "Atr\xe1s" }),
                  (0, bn.jsx)("h2", { children: "Perf\xedl" }),
                  (0, bn.jsxs)(gi, {
                    children: [
                      (0, bn.jsxs)("p", {
                        children: [
                          (0, bn.jsx)(bi, { children: "Nombre: " }),
                          t.name,
                        ],
                      }),
                      (0, bn.jsxs)("p", {
                        children: [
                          (0, bn.jsx)(bi, { children: "Email:" }),
                          " ",
                          t.email,
                        ],
                      }),
                      (0, bn.jsx)("img", { src: t.picture, alt: t.name }),
                    ],
                  }),
                  (0, bn.jsx)(di, {}),
                ],
              });
        },
        yi = lo.div(
          si ||
            (si = xn([
              "\n  background-color: #457b9d;\n  width: 330px;\n  height: 380px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  row-gap: 2rem;\n",
            ]))
        ),
        gi = lo.div(
          ci ||
            (ci = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: center;\n  row-gap: 5px;\n",
            ]))
        ),
        bi = lo.span(
          fi ||
            (fi = xn([
              "\n  text-transform: uppercase;\n  font-weight: bold;\n",
            ]))
        );
      var wi,
        ki,
        xi,
        Si,
        _i = function (e) {
          var t = e.nameCourse,
            n = e.imgCourse;
          return (0, bn.jsxs)(Ci, {
            children: [
              (0, bn.jsx)(Ei, { children: t }),
              (0, bn.jsx)("br", {}),
              (0, bn.jsx)("img", { src: n, alt: "img course" }),
              (0, bn.jsx)("button", { children: "VER" }),
            ],
          });
        },
        Ci = lo.div(
          hi ||
            (hi = xn([
              "\n  background-color: rgba(255, 214, 255, 0.6);\n  width: 300px;\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n",
            ]))
        ),
        Ei = lo.p(
          mi ||
            (mi = xn([
              "\n  font-size: 1.5rem;\n  color: black;\n  font-style: italic;\n",
            ]))
        );
      var Ti = function () {
          var t = (0, e.useContext)(wn).myCourses;
          return (0, bn.jsxs)(Pi, {
            children: [
              (0, bn.jsx)(ko, { pathIsMyCourses: !0 }),
              (0, bn.jsxs)(Oi, {
                children: [
                  (0, bn.jsx)("h2", { children: "Mis cursos" }),
                  0 === t.length
                    ? (0, bn.jsx)(ji, { children: "No tienes cursos a\xfan" })
                    : (0, bn.jsx)(Ri, {
                        children: t.map(function (e) {
                          return (0,
                          bn.jsx)(_i, { nameCourse: e.name, imgCourse: e.img }, e.id + "bought");
                        }),
                      }),
                ],
              }),
              (0, bn.jsx)(ri, {}),
            ],
          });
        },
        Pi = lo.div(
          wi ||
            (wi = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 100vh;\n",
            ]))
        ),
        Oi = lo.div(
          ki ||
            (ki = xn([
              "\n  background-color: #457b9d;\n  width: 330px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  row-gap: 2rem;\n  padding: 1rem 0;\n",
            ]))
        ),
        Ri = lo.ol(
          xi ||
            (xi = xn([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2rem;\n  row-gap: 3rem;\n",
            ]))
        ),
        ji = lo.p(Si || (Si = xn(["\n  color: #fff;\n"])));
      r.createRoot(document.getElementById("root")).render(
        (0, bn.jsx)(e.StrictMode, {
          children: (0, bn.jsx)(Be, {
            domain: "dev-pxe14roena18vlea.us.auth0.com",
            clientId: "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV",
            authorizationParams: { redirect_uri: window.location.origin },
            children: (0, bn.jsx)(kn, {
              children: (0, bn.jsx)(cn, {
                children: (0, bn.jsxs)(nn, {
                  children: [
                    (0, bn.jsx)(en, {
                      path: "/",
                      exact: !0,
                      element: (0, bn.jsx)(ii, {}),
                    }),
                    (0, bn.jsx)(en, {
                      path: "/profile",
                      element: (0, bn.jsx)(vi, {}),
                    }),
                    (0, bn.jsx)(en, {
                      path: "/mycourses",
                      element: (0, bn.jsx)(Ti, {}),
                    }),
                  ],
                }),
              }),
            }),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.0bec4a91.js.map
