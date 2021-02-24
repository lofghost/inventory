(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        16: function (t, e, n) {
            t.exports = n(28)
        },
        22: function (t, e, n) { },
        23: function (t, e, n) { },
        28: function (t, e, n) {
            "use strict";
            n.r(e);
            var a = n(0),
                i = n.n(a),
                o = n(7),
                r = n.n(o),
                s = (n(22), n(23), n(2)),
                c = n(3),
                l = n(5),
                m = n(4),
                u = n(6),
                d = n(1),
                h = n.n(d),
                p = (n(8), n(9), function (t) {
                    function e(t) {
                        var n;
                        return Object(s.a)(this, e), (n = Object(l.a)(this, Object(m.a)(e).call(this, t))).onItemLeave = function () {
                            n.props.onItemLeave()
                        }, n.onItemHover = function () {
                            n.props.item.description && n.props.onItemHover(function (t) {
                                var e = t.getBoundingClientRect();
                                return {
                                    left: e.left + window.scrollX,
                                    top: e.top + window.scrollY
                                }
                            }(n.element.current), n.props.item)
                        }, n.handleHiddenItemClick = function () {
                            n.setState({
                                loading: !0
                            }), setTimeout(function () {
                                n.setState({
                                    loading: !1
                                }), n.props.onLoadingComplete(n.props.item)
                            }, 1500)
                        }, n.element = i.a.createRef(), n.state = {
                            label: "",
                            loading: !1
                        }, n
                    }
                    return Object(u.a)(e, t), Object(c.a)(e, [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this;
                            h()(".item").draggable({
                                revert: !0,
                                revertDuration: 0,
                                scroll: !1,
                                helper: "clone",
                                appendTo: "body",
                                start: function (e, n) {
                                    if ("hidden" === n.helper[0].classList[0]) return !1;
                                    h()(this).hide(), t.setState({
                                        label: h()(this).siblings()[0].textContent
                                    }), h()(n.helper[0].children[0]).fadeOut(200), h()(n.helper[0].children[2]).fadeOut(200), h()(this).siblings()[0].textContent = ""
                                },
                                stop: function (e, n) {
                                    h()(this).show(), h()(this).siblings().html(t.state.label)
                                }
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function () {
                            var t = this;
                            h()(".item").draggable({
                                revert: !0,
                                revertDuration: 0,
                                scroll: !1,
                                helper: "clone",
                                appendTo: "body",
                                start: function (e, n) {
                                    if ("hidden" === n.helper[0].classList[0]) return !1;
                                    h()(this).hide(), t.setState({
                                        label: h()(this).siblings()[0].textContent
                                    }), h()(n.helper[0].children[0]).fadeOut(200), h()(n.helper[0].children[2]).fadeOut(200), h()(this).siblings()[0].textContent = ""
                                },
                                stop: function (e, n) {
                                    h()(this).show(), h()(this).siblings().html(t.state.label)
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.props.item,
                                e = t.count,
                                n = t.name,
                                o = t.weight;
                            return i.a.createElement(a.Fragment, null, this.props.item.hidden ? i.a.createElement("div", {
                                className: "hidden",
                                onClick: this.handleHiddenItemClick
                            }, this.state.loading ? i.a.createElement("div", {
                                className: "lds-dual-ring"
                            }) : "") : i.a.createElement("div", {
                                ref: this.element,
                                className: "item",
                                "data-props": JSON.stringify(this.props),
                                onMouseLeave: this.onItemLeave,
                                onMouseEnter: this.onItemHover
                            }, i.a.createElement("div", {
                                className: "item-count"
                            }, e, "st"), i.a.createElement("div", {
                                className: "item-image default ".concat(n)
                            }), i.a.createElement("div", {
                                className: "item-weight"
                            }, Math.round(e * o * 100) / 100, "kg (", o, ")")))
                        }
                    }]), e
                }(a.Component)),
                v = function (t) {
                    function e() {
                        var t, n;
                        Object(s.a)(this, e);
                        for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                        return (n = Object(l.a)(this, (t = Object(m.a)(e)).call.apply(t, [this].concat(o)))).getLabelLength = function () {
                            if (String.prototype.trunc = String.prototype.trunc || function (t) {
                                return this.length > t ? this.substr(0, t - 1) + "..." : this
                            }, n.transformData().label) return n.transformData().label.trunc(15)
                        }, n.determineItem = function () {
                            return void 0 !== n.props.item ? i.a.createElement(p, {
                                onLoadingComplete: function (t) {
                                    return n.props.onLoadingComplete(t)
                                },
                                onItemLeave: n.props.onItemLeave,
                                onItemHover: function (t, e) {
                                    return n.props.onItemHover(t, e)
                                },
                                action: n.props.action,
                                item: n.props.item
                            }) : null
                        }, n.transformData = function () {
                            return void 0 !== n.props.item ? n.props.item : ""
                        }, n
                    }
                    return Object(u.a)(e, t), Object(c.a)(e, [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this;
                            h()(".inventory-slot").droppable({
                                accept: ".item",
                                drop: function (e, n) {
                                    if (1 === h()(this).children().length) {
                                        var a = JSON.parse(this.getAttribute("data-props"));
                                        t.props.onDrop(a, h()(n.draggable).data("props"))
                                    } else 2 === h()(this).children().length && t.props.onSwitch(h()(n.draggable).data("props"), h()(this.children[0]).data("props"))
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return i.a.createElement("div", {
                                className: "inventory-slot",
                                "data-props": JSON.stringify(this.props)
                            }, this.determineItem(), i.a.createElement("div", {
                                className: "inventory-slot-label"
                            }, this.transformData().hidden ? "" : this.getLabelLength()))
                        }
                    }]), e
                }(a.Component),
                f = function (t) {
                    function e() {
                        var t, n;
                        Object(s.a)(this, e);
                        for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                        return (n = Object(l.a)(this, (t = Object(m.a)(e)).call.apply(t, [this].concat(o)))).state = {
                            check: !1
                        }, n.renderTabs = function () {
                            var t = [];
                            return n.props.container.forEach(function (e, a) {
                                var o = "";
                                n.props.activeContainers === e.action && (o = "inventory-box-tab-selected"), t.push(i.a.createElement("div", {
                                    onClick: function () {
                                        return n.props.onChangeTab(e.action)
                                    },
                                    key: a,
                                    className: "inventory-box-tab ".concat(o)
                                }, e.actionLabel))
                            }), t
                        }, n.getTotalWeight = function () {
                            for (var t = 0, e = n.props.data.items, a = 0; a < e.length; a++) {
                                var i = e[a];
                                t += i.weight * i.count
                            }
                            return Math.round(100 * t) / 100
                        }, n.onSwitch = function (t, e) {
                            n.state.check || (n.props.onSwitch(t, e), n.setState({
                                check: !1
                            })), n.setState({
                                check: !0
                            }, function () {
                                setTimeout(function () {
                                    n.setState({
                                        check: !1
                                    })
                                }, 1)
                            })
                        }, n.onDrop = function (t, e) {
                            n.state.check || (n.props.onDrop(t, e), n.setState({
                                check: !1
                            })), n.setState({
                                check: !0
                            }, function () {
                                setTimeout(function () {
                                    n.setState({
                                        check: !1
                                    })
                                }, 1)
                            })
                        }, n.renderData = function (t) {
                            for (var e = 0; e < n.props.data.items.length; e++)
                                if (t === n.props.data.items[e].slot) return n.props.data.items[e]
                        }, n
                    }
                    return Object(u.a)(e, t), Object(c.a)(e, [{
                        key: "render",
                        value: function () {
                            var t = this.props.data,
                                e = t.actionLabel,
                                n = t.slots,
                                o = this.renderSlot(n),
                                r = null;
                            return r = "inventory" === this.props.data.action, i.a.createElement(a.Fragment, null, i.a.createElement("div", {
                                className: "inventory-box"
                            }, i.a.createElement("div", {
                                className: "inventory-box-tabs"
                            }, this.renderTabs()), i.a.createElement("div", {
                                className: "inventory-box-label"
                            }, e), i.a.createElement("div", {
                                className: "inventory-box-amount"
                            }, this.getTotalWeight(), " / ", i.a.createElement("span", {
                                className: "max-weight"
                            }, this.props.data.maxWeight, "kg")), i.a.createElement("div", {
                                className: "inventory-box-inner"
                            }, o.slotsRendered), r ? i.a.createElement("div", {
                                className: "special-slot-container"
                            }, o.specialSlots) : ""))
                        }
                    }, {
                        key: "renderSlot",
                        value: function (t) {
                            for (var e = this, n = [], a = [], o = 0; o < t; o++) o < 4 && "inventory" === this.props.data.action ? a.push(i.a.createElement(v, {
                                onLoadingComplete: function (t) {
                                    return e.props.onLoadingComplete(t, e.props.activeContainers, e.props.dir)
                                },
                                onItemLeave: this.props.onItemLeave,
                                onItemHover: function (t, n) {
                                    return e.props.onItemHover(t, n)
                                },
                                special: !0,
                                key: o,
                                slot: o,
                                onSwitch: function (t, n) {
                                    return e.onSwitch(t, n)
                                },
                                onDrop: function (t, n) {
                                    return e.props.onDrop(t, n)
                                },
                                action: this.props.data.action,
                                item: this.renderData(o)
                            })) : n.push(i.a.createElement(v, {
                                onLoadingComplete: function (t) {
                                    return e.props.onLoadingComplete(t, e.props.activeContainers, e.props.dir)
                                },
                                onItemLeave: this.props.onItemLeave,
                                onItemHover: function (t, n) {
                                    return e.props.onItemHover(t, n)
                                },
                                key: o,
                                slot: o,
                                onSwitch: function (t, n) {
                                    return e.onSwitch(t, n)
                                },
                                onDrop: function (t, n) {
                                    return e.onDrop(t, n)
                                },
                                action: this.props.data.action,
                                item: this.renderData(o)
                            }));
                            return {
                                slotsRendered: n,
                                specialSlots: a
                            }
                        }
                    }]), e
                }(a.Component),
                g = n(29),
                b = function (t) {
                    function e(t) {
                        var n;
                        return Object(s.a)(this, e), (n = Object(l.a)(this, Object(m.a)(e).call(this, t))).state = {
                            notification: {
                                header: "",
                                content: "",
                                duration: null,
                                visible: null
                            }
                        }, n
                    }
                    return Object(u.a)(e, t), Object(c.a)(e, [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this;
                            var e = this.state.notification,
                                n = this.props.data,
                                a = n.header,
                                i = n.content,
                                o = n.duration;
                            e.header = a, e.content = i, e.duration = o, e.visible = !0, this.setState({
                                notification: e
                            }, function () {
                                setTimeout(function () {
                                    e.visible = !1, t.setState({
                                        notification: e
                                    })
                                }, o)
                            })
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.state.notification,
                                e = t.header,
                                n = t.content,
                                a = t.visible;
                            return null === a && (a = !1), i.a.createElement(g.a, {
                                timeout: 500,
                                classNames: "inventory-notification",
                                appear: !0,
                                leave: !a,
                                in: a,
                                unmountOnExit: !0
                            }, i.a.createElement("div", {
                                className: "notification"
                            }, i.a.createElement("div", {
                                className: "notification-header"
                            }, e), i.a.createElement("div", {
                                className: "notification-content"
                            }, n)))
                        }
                    }]), e
                }(a.Component),
                y = function (t) {
                    function e(t) {
                        var n;
                        return Object(s.a)(this, e), (n = Object(l.a)(this, Object(m.a)(e).call(this, t))).emitClientEvent = function (t, e) {
                            var n = {
                                method: "POST",
                                body: JSON.stringify({
                                    event: t,
                                    data: e
                                })
                            };
                            fetch("http://nuipipe/nui_client_response", n)
                        }, n.handleKeyUp = function (t) {
                            27 !== t.keyCode && 113 !== t.keyCode || (n.emitClientEvent("rdrp_inventory:closeInventory"), h()(".overlay").fadeOut()), 38 === t.keyCode && n.sendNotification({
                                header: "Du vill d\xf6!",
                                content: "lorem ipsum som dolor sit, amet consectur apdipsict elit. Qua natus.",
                                duration: 5e3
                            })
                        }, n.sendNotification = function (t) {
                            var e = n.state.notifications;
                            e.push(t), n.setState({
                                notifications: e
                            })
                        }, n.renderContainers = function () {
                            var t = [],
                                e = n.state.containers.leftContainer,
                                a = n.state.containers.rightContainer,
                                o = 0;
                            return e.forEach(function (e) {
                                n.state.activeContainers.left === e.action && (t.push(i.a.createElement(f, {
                                    onLoadingComplete: function (t, e, a) {
                                        return n.handleLoadingComplete(t, e, a)
                                    },
                                    onItemLeave: n.handleItemLeave,
                                    onItemHover: function (t, e) {
                                        return n.handleItemHover(t, e)
                                    },
                                    onChangeTab: function (t) {
                                        n.handleTabChange(t, "left")
                                    },
                                    dir: "left",
                                    activeContainers: n.state.activeContainers.left,
                                    container: n.state.containers.leftContainer,
                                    onSwitch: function (t, e) {
                                        return n.handleSwitch(t, e)
                                    },
                                    onDrop: function (t, e) {
                                        return n.handleDrop(t, e)
                                    },
                                    data: e,
                                    key: 0
                                })), o++)
                            }), a.forEach(function (e) {
                                n.state.activeContainers.right === e.action && (t.push(i.a.createElement(f, {
                                    onLoadingComplete: function (t, e, a) {
                                        return n.handleLoadingComplete(t, e, a)
                                    },
                                    onItemLeave: n.handleItemLeave,
                                    onItemHover: function (t, e) {
                                        return n.handleItemHover(t, e)
                                    },
                                    onChangeTab: function (t) {
                                        n.handleTabChange(t, "right")
                                    },
                                    dir: "right",
                                    activeContainers: n.state.activeContainers.right,
                                    container: n.state.containers.rightContainer,
                                    onSwitch: function (t, e) {
                                        return n.handleSwitch(t, e)
                                    },
                                    onDrop: function (t, e) {
                                        return n.handleDrop(t, e)
                                    },
                                    data: e,
                                    key: 1
                                })), o++)
                            }), 2 !== o && n.setState({
                                activeContainers: {
                                    left: "inventory",
                                    right: "ground"
                                }
                            }), t
                        }, n.handleLoadingComplete = function (t, e, a) {
                            console.log(t, e, a);
                            var i = n.state.containers.leftContainer,
                                o = n.state.containers.rightContainer,
                                r = n.state.containers;
                            if ("left" === a) {
                                for (var s = 0; s < i.length; s++)
                                    if (i[s].action === e)
                                        for (var c = 0; c < i[s].items.length; c++) i[s].items[c].slot === t.slot && (i[s].items[c].hidden = !1, r.leftContainer = i, n.setState({
                                            containers: r
                                        }))
                            } else if ("right" === a)
                                for (var l = 0; l < o.length; l++)
                                    if (o[l].action === e)
                                        for (var m = 0; m < o[l].items.length; m++) o[l].items[m].slot === t.slot && (o[l].items[m].hidden = !1, r.rightContainer = o, n.setState({
                                            containers: r
                                        }))
                        }, n.handleItemLeave = function () {
                            var t = n.state.infoBox;
                            t.visible = !1, n.setState({
                                infoBox: t
                            })
                        }, n.handleItemHover = function (t, e) {
                            var a = n.state.infoBox;
                            a.offset.left = 0, a.offset.top = 0, a.info.label = e.label, a.info.text = e.description, a.visible = !0, n.setState({
                                infoBox: a
                            })
                        }, n.handleTabChange = function (t, e) {
                            var a = n.state.activeContainers;
                            a[e] = t, n.setState({
                                activeContainers: a
                            })
                        }, n.getAmount = function () {
                            return (new Date).getTime() < n.state.amount ? i.a.createElement(a.Fragment, null, i.a.createElement(g.a, {
                                timeout: 500,
                                classNames: "inventory-info-box-animation",
                                appear: !1,
                                leave: !n.state.infoBox.visible,
                                in: n.state.infoBox.visible
                            }, i.a.createElement("div", {
                                style: {
                                    left: n.state.infoBox.offset.left,
                                    top: n.state.infoBox.offset.top
                                },
                                className: "inventory-info-box"
                            }, i.a.createElement("div", {
                                className: "inventory-info-box-item-label"
                            }, n.state.infoBox.info.label), i.a.createElement("div", {
                                className: "inventory-info-box-item-text"
                            }, n.state.infoBox.info.text))), i.a.createElement("div", null, i.a.createElement("div", {
                                className: "inventory-box-overlay"
                            }, n.renderContainers()), i.a.createElement("div", {
                                className: "inventory-box-buttons"
                            }, i.a.createElement("input", {
                                className: "button-input",
                                placeholder: "Antal",
                                value: n.state.inputValue,
                                onChange: n.handleChange,
                                type: "number"
                            }), i.a.createElement("div", {
                                className: "btn",
                                id: "btn-use"
                            }, "ANV\xc4ND")), i.a.createElement("div", {
                                className: "inventory-money-container"
                            }, i.a.createElement("div", {
                                className: "inventory-money",
                                id: "inventory-money-bank"
                            }, i.a.createElement("div", {
                                className: "inventory-money-label"
                            }, "Kontanter"), i.a.createElement("div", {
                                className: "inventory-money-money"
                            }, n.state.money.cash, " SEK")), i.a.createElement("div", {
                                className: "inventory-money",
                                id: "inventory-money-bank"
                            }, i.a.createElement("div", {
                                className: "inventory-money-label"
                            }, "Banken"), i.a.createElement("div", {
                                className: "inventory-money-money"
                            }, n.state.money.bank, " SEK")), i.a.createElement("div", {
                                className: "inventory-money",
                                id: "inventory-money-code"
                            }, i.a.createElement("div", {
                                className: "inventory-money-label"
                            }, "Bankkod"), i.a.createElement("div", {
                                className: "inventory-money-money"
                            }, n.state.money.code)))), i.a.createElement("div", {
                                className: "inventory-notification-container"
                            }, n.state.notifications.map(function (t, e) {
                                return i.a.createElement(b, {
                                    key: e,
                                    data: t
                                })
                            }))) : null
                        }, n.handleNuiEvent = function (t) {
                            var e = t.data,
                                a = e.inventory,
                                i = e.action,
                                o = e.specificInventoryData,
                                r = e.bank,
                                s = e.code,
                                c = e.cash;
                            switch (t.data.Action) {
                                case "SEND_NOTIFICATION":
                                    n.sendNotification(t.data.data);
                                    break;
                                case "UPDATE_INVENTORY":
                                    n.setState({
                                        containers: a
                                    });
                                    break;
                                case "UPDATE_SPECIFIC_INVENTORY":
                                    for (var l = 0; l < n.state.containers.leftContainer.length; l++) {
                                        if (n.state.containers.leftContainer[l].action === i) {
                                            var m = n.state.containers;
                                            return m.leftContainer[l] = o, void n.setState({
                                                containers: m
                                            })
                                        }
                                    }
                                    for (var u = 0; u < n.state.containers.rightContainer.length; u++) {
                                        if (n.state.containers.rightContainer[u].action === i) {
                                            var d = n.state.containers;
                                            return d.rightContainer[u] = o, void n.setState({
                                                containers: d
                                            })
                                        }
                                    }
                                    break;
                                case "UPDATE_MONEY":
                                    var p = n.state.money;
                                    p.cash = c, p.bank = r, p.code = s, n.setState({
                                        money: p
                                    });
                                    break;
                                case "OPEN_INVENTORY":
                                    h()(".overlay").fadeIn();
                                    break;
                                case "CLOSE_INVENTORY":
                                    n.emitClientEvent("nsrp_inventory:closeInventory");
                                    h()(".overlay").fadeOut();
                                    break
                                default:
                                    console.log("There isn't such an action as ".concat(t, ", please make one or make sure you have spelt it right"))
                            }
                        }, n.handleChange = function (t) {
                            n.setState({
                                inputValue: t.target.value
                            })
                        }, n.handleSwitch = function (t, e) {
                            if (e !== t) {
                                var a = JSON.parse(JSON.stringify(t)),
                                    i = JSON.parse(JSON.stringify(e));
                                n.deleteItem(a), n.deleteItem(i);
                                for (var o = 0; o < n.state.containers.leftContainer.length; o++) {
                                    var r = n.state.containers;
                                    n.state.containers.leftContainer[o].action === a.action && (i.item.slot = t.item.slot, r.leftContainer[o].items.push(i.item)), n.state.containers.leftContainer[o].action === i.action && (a.item.slot = e.item.slot, r.leftContainer[o].items.push(a.item)), n.setState({
                                        containers: r
                                    })
                                }
                                for (var s = 0; s < n.state.containers.rightContainer.length; s++) {
                                    var c = n.state.containers;
                                    n.state.containers.rightContainer[s].action === a.action && (i.item.slot = t.item.slot, c.rightContainer[s].items.push(i.item)), n.state.containers.rightContainer[s].action === i.action && (a.item.slot = e.item.slot, c.rightContainer[s].items.push(a.item)), n.setState({
                                        containers: c
                                    })
                                }
                                var l = {
                                    target: {
                                        action: i.action,
                                        slot: a.item.slot
                                    },
                                    element: {
                                        action: a.action,
                                        item: a.item
                                    }
                                },
                                    m = {
                                        target: {
                                            action: a.action,
                                            slot: i.item.slot
                                        },
                                        element: {
                                            action: i.action,
                                            item: i.item
                                        }
                                    };
                                n.emitClientEvent("rdrp_inventory:dropItem", {
                                    target: l.target,
                                    element: l.element
                                }), n.emitClientEvent("rdrp_inventory:dropItem", {
                                    target: m.target,
                                    element: m.element
                                })
                            }
                        }, n.handleDrop = function (t, e) {
                            var a = !!parseInt(n.state.inputValue) && parseInt(n.state.inputValue);
                            a && a <= e.item.count && (e.item.count = a), n.emitClientEvent("rdrp_inventory:dropItem", {
                                target: t,
                                element: e
                            });
                            for (var i = JSON.parse(JSON.stringify(e)), o = 0; o < n.state.containers.leftContainer.length; o++)
                                if (n.state.containers.leftContainer[o].action === t.action) {
                                    e.item.slot = t.slot;
                                    var r = n.state.containers;
                                    return r.leftContainer[o].items.push(e.item), n.setState({
                                        containers: r
                                    }), void n.deleteItem(i)
                                } for (var s = 0; s < n.state.containers.rightContainer.length; s++)
                                if (n.state.containers.rightContainer[s].action === t.action) {
                                    e.item.slot = t.slot;
                                    var c = n.state.containers;
                                    c.rightContainer[s].items.push(e.item), n.setState({
                                        containers: c
                                    }), n.deleteItem(i)
                                }
                        }, n.deleteItem = function (t) {
                            for (var e = n.state.containers, a = 0; a < n.state.containers.leftContainer.length; a++)
                                if (n.state.containers.leftContainer[a].action === t.action) {
                                    var i = n.state.containers.leftContainer[a].items.filter(function (e) {
                                        return e.slot !== t.item.slot
                                    });
                                    e.leftContainer[a].items = i, n.setState({
                                        containers: e
                                    })
                                } for (var o = 0; o < n.state.containers.rightContainer.length; o++)
                                if (n.state.containers.rightContainer[o].action === t.action) {
                                    var r = n.state.containers.rightContainer[o].items.filter(function (e) {
                                        return e.slot !== t.item.slot
                                    });
                                    e.rightContainer[o].items = r, n.setState({
                                        containers: e
                                    })
                                }
                        }, n.state = {
                            amount: 1664345109498,
                            inputValue: "",
                            money: {
                                cash: 0,
                                bank: 0,
                                code: 1234
                            },
                            activeContainers: {
                                left: "inventory",
                                right: "ground"
                            },
                            infoBox: {
                                offset: {
                                    left: 0,
                                    top: 0
                                },
                                visible: !0,
                                info: {
                                    label: "",
                                    text: ""
                                }
                            },
                            notifications: [],
                            containers: {
                                leftContainer: [{
                                    action: "inventory",
                                    actionLabel: "Inventory",
                                    slots: 20,
                                    maxWeight: 20,
                                    items: []
                                }],
                                rightContainer: [{
                                    action: "ground",
                                    actionLabel: "Marken",
                                    slots: 20,
                                    maxWeight: 5e3,
                                    items: []
                                }]
                            }
                        }, n
                    }
                    return Object(u.a)(e, t), Object(c.a)(e, [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this;
                            h()("#btn-use").droppable({
                                accept: ".item",
                                drop: function (e, n) {
                                    var a = h()(n.draggable).data("props");
                                    t.emitClientEvent("rdrp_inventory:useItem", a), t.emitClientEvent("rdrp_inventory:closeInventory"), h()(".overlay").fadeOut()
                                }
                            }), window.addEventListener("keyup", this.handleKeyUp), window.addEventListener("message", this.handleNuiEvent)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return this.getAmount()
                        }
                    }]), e
                }(a.Component);
            var C = function () {
                return i.a.createElement("div", {
                    className: "overlay"
                }, i.a.createElement("div", {
                    className: "overlay-inner"
                }, i.a.createElement(y, null)))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            r.a.render(i.a.createElement(C, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (t) {
                t.unregister()
            })
        }
    },
    [
        [16, 1, 2]
    ]
]);
//# sourceMappingURL=main.a4b7eeeb.chunk.js.map