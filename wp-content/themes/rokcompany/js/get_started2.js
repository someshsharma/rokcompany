(function() {
    var a, b, c, d, e, f, g, h, i = [].slice,
        j = {}.hasOwnProperty,
        k = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) j.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        };
    g = function() {}, b = function() {
        function a() {}
        return a.prototype.addEventListener = a.prototype.on, a.prototype.on = function(a, b) {
            return this._callbacks = this._callbacks || {}, this._callbacks[a] || (this._callbacks[a] = []), this._callbacks[a].push(b), this
        }, a.prototype.emit = function() {
            var a, b, c, d, e, f;
            if (d = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, c = this._callbacks[d])
                for (e = 0, f = c.length; f > e; e++) b = c[e], b.apply(this, a);
            return this
        }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = a.prototype.off, a.prototype.removeEventListener = a.prototype.off, a.prototype.off = function(a, b) {
            var c, d, e, f, g;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (d = this._callbacks[a], !d) return this;
            if (1 === arguments.length) return delete this._callbacks[a], this;
            for (e = f = 0, g = d.length; g > f; e = ++f)
                if (c = d[e], c === b) {
                    d.splice(e, 1);
                    break
                }
            return this
        }, a
    }(), a = function(a) {
        function c(a, b) {
            var e, f, g;
            if (this.element = a, this.version = c.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (c.instances.push(this), this.element.dropzone = this, e = null != (g = c.optionsForElement(this.element)) ? g : {}, this.options = d({}, this.defaultOptions, e, null != b ? b : {}), this.options.forceFallback || !c.isBrowserSupported()) return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? c.getElement(this.options.previewsContainer, "previewsContainer") : this.element), this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : c.getElements(this.options.clickable, "clickable")), this.init()
        }
        var d, e;
        return k(c, a), c.prototype.Emitter = b, c.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], c.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 256,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1e3,
            maxFiles: null,
            filesizeBase: 1e3,
            params: {},
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            capture: null,
            dictDefaultMessage: "Drop files here to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "You can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: null,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(a, b) {
                return b()
            },
            init: function() {
                return g
            },
            forceFallback: !1,
            fallback: function() {
                var a, b, d, e, f, g;
                for (this.element.className = "" + this.element.className + " dz-browser-not-supported", g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++) a = g[e], /(^| )dz-message($| )/.test(a.className) && (b = a, a.className = "dz-message");
                return b || (b = c.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(b)), d = b.getElementsByTagName("span")[0], d && (d.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm())
            },
            resize: function(a) {
                var b, c, d;
                return b = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: a.width,
                    srcHeight: a.height
                }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, b
            },
            drop: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragstart: g,
            dragend: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            dragenter: function() {
                return this.element.classList.add("dz-drag-hover")
            },
            dragover: function() {
                return this.element.classList.add("dz-drag-hover")
            },
            dragleave: function() {
                return this.element.classList.remove("dz-drag-hover")
            },
            paste: g,
            reset: function() {
                return this.element.classList.remove("dz-started")
            },
            addedfile: function(a) {
                var b, d, e, f, g, h, i, j, k, l, m, n, o;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                    for (a.previewElement = c.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), f = 0, i = l.length; i > f; f++) b = l[f], b.textContent = a.name;
                    for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++) b = m[g], b.innerHTML = this.filesize(a.size);
                    for (this.options.addRemoveLinks && (a._removeLink = c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), a.previewElement.appendChild(a._removeLink)), d = function(b) {
                            return function(d) {
                                return d.preventDefault(), d.stopPropagation(), a.status === c.UPLOADING ? c.confirm(b.options.dictCancelUploadConfirmation, function() {
                                    return b.removeFile(a)
                                }) : b.options.dictRemoveFileConfirmation ? c.confirm(b.options.dictRemoveFileConfirmation, function() {
                                    return b.removeFile(a)
                                }) : b.removeFile(a)
                            }
                        }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, k = n.length; k > h; h++) e = n[h], o.push(e.addEventListener("click", d));
                    return o
                }
            },
            removedfile: function(a) {
                var b;
                return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), this._updateMaxFilesReachedClass()
            },
            thumbnail: function(a, b) {
                var c, d, e, f;
                if (a.previewElement) {
                    for (a.previewElement.classList.remove("dz-file-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), d = 0, e = f.length; e > d; d++) c = f[d], c.alt = a.name, c.src = b;
                    return setTimeout(function() {
                        return function() {
                            return a.previewElement.classList.add("dz-image-preview")
                        }
                    }(this), 1)
                }
            },
            error: function(a, b) {
                var c, d, e, f, g;
                if (a.previewElement) {
                    for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.textContent = b);
                    return g
                }
            },
            errormultiple: g,
            processing: function(a) {
                return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0
            },
            processingmultiple: g,
            uploadprogress: function(a, b) {
                var c, d, e, f, g;
                if (a.previewElement) {
                    for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push("PROGRESS" === c.nodeName ? c.value = b : c.style.width = "" + b + "%");
                    return g
                }
            },
            totaluploadprogress: g,
            sending: g,
            sendingmultiple: g,
            success: function(a) {
                return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0
            },
            successmultiple: g,
            canceled: function(a) {
                return this.emit("error", a, "Upload canceled.")
            },
            canceledmultiple: g,
            complete: function(a) {
                return a._removeLink && (a._removeLink.textContent = this.options.dictRemoveFile), a.previewElement ? a.previewElement.classList.add("dz-complete") : void 0
            },
            completemultiple: g,
            maxfilesexceeded: g,
            maxfilesreached: g,
            queuecomplete: g,
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
        }, d = function() {
            var a, b, c, d, e, f, g;
            for (d = arguments[0], c = 2 <= arguments.length ? i.call(arguments, 1) : [], f = 0, g = c.length; g > f; f++) {
                b = c[f];
                for (a in b) e = b[a], d[a] = e
            }
            return d
        }, c.prototype.getAcceptedFiles = function() {
            var a, b, c, d, e;
            for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted && e.push(a);
            return e
        }, c.prototype.getRejectedFiles = function() {
            var a, b, c, d, e;
            for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted || e.push(a);
            return e
        }, c.prototype.getFilesWithStatus = function(a) {
            var b, c, d, e, f;
            for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.status === a && f.push(b);
            return f
        }, c.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(c.QUEUED)
        }, c.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(c.UPLOADING)
        }, c.prototype.getActiveFiles = function() {
            var a, b, d, e, f;
            for (e = this.files, f = [], b = 0, d = e.length; d > b; b++) a = e[b], (a.status === c.UPLOADING || a.status === c.QUEUED) && f.push(a);
            return f
        }, c.prototype.init = function() {
            var a, b, d, e, f, g, h;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (d = function(a) {
                    return function() {
                        return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), null != a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), a.hiddenFileInput.addEventListener("change", function() {
                            var b, c, e, f;
                            if (c = a.hiddenFileInput.files, c.length)
                                for (e = 0, f = c.length; f > e; e++) b = c[e], a.addFile(b);
                            return d()
                        })
                    }
                }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, e = 0, f = h.length; f > e; e++) a = h[e], this.on(a, this.options[a]);
            return this.on("uploadprogress", function(a) {
                return function() {
                    return a.updateTotalUploadProgress()
                }
            }(this)), this.on("removedfile", function(a) {
                return function() {
                    return a.updateTotalUploadProgress()
                }
            }(this)), this.on("canceled", function(a) {
                return function(b) {
                    return a.emit("complete", b)
                }
            }(this)), this.on("complete", function(a) {
                return function() {
                    return 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function() {
                        return a.emit("queuecomplete")
                    }, 0) : void 0
                }
            }(this)), b = function(a) {
                return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1
            }, this.listeners = [{
                element: this.element,
                events: {
                    dragstart: function(a) {
                        return function(b) {
                            return a.emit("dragstart", b)
                        }
                    }(this),
                    dragenter: function(a) {
                        return function(c) {
                            return b(c), a.emit("dragenter", c)
                        }
                    }(this),
                    dragover: function(a) {
                        return function(c) {
                            var d;
                            try {
                                d = c.dataTransfer.effectAllowed
                            } catch (e) {}
                            return c.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", b(c), a.emit("dragover", c)
                        }
                    }(this),
                    dragleave: function(a) {
                        return function(b) {
                            return a.emit("dragleave", b)
                        }
                    }(this),
                    drop: function(a) {
                        return function(c) {
                            return b(c), a.drop(c)
                        }
                    }(this),
                    dragend: function(a) {
                        return function(b) {
                            return a.emit("dragend", b)
                        }
                    }(this)
                }
            }], this.clickableElements.forEach(function(a) {
                return function(b) {
                    return a.listeners.push({
                        element: b,
                        events: {
                            click: function(d) {
                                return b !== a.element || d.target === a.element || c.elementInside(d.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0
                            }
                        }
                    })
                }
            }(this)), this.enable(), this.options.init.call(this)
        }, c.prototype.destroy = function() {
            var a;
            return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, c.instances.splice(c.instances.indexOf(this), 1)
        }, c.prototype.updateTotalUploadProgress = function() {
            var a, b, c, d, e, f, g, h;
            if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++) b = h[f], d += b.upload.bytesSent, c += b.upload.total;
                e = 100 * d / c
            } else e = 100;
            return this.emit("totaluploadprogress", e, c, d)
        }, c.prototype._getParamName = function(a) {
            return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "")
        }, c.prototype.getFallbackForm = function() {
            var a, b, d, e;
            return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', b = c.createElement(d), "FORM" !== this.element.tagName ? (e = c.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), e.appendChild(b)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != e ? e : b)
        }, c.prototype.getExistingFallback = function() {
            var a, b, c, d, e, f;
            for (b = function(a) {
                    var b, c, d;
                    for (c = 0, d = a.length; d > c; c++)
                        if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b
                }, f = ["div", "form"], d = 0, e = f.length; e > d; d++)
                if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a
        }, c.prototype.setupEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                var d, e;
                d = a.events, e = [];
                for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1));
                return e
            }());
            return g
        }, c.prototype.removeEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                var d, e;
                d = a.events, e = [];
                for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                return e
            }());
            return g
        }, c.prototype.disable = function() {
            var a, b, c, d, e;
            for (this.clickableElements.forEach(function(a) {
                    return a.classList.remove("dz-clickable")
                }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(this.cancelUpload(a));
            return e
        }, c.prototype.enable = function() {
            return this.clickableElements.forEach(function(a) {
                return a.classList.add("dz-clickable")
            }), this.setupEventListeners()
        }, c.prototype.filesize = function(a) {
            var b, c, d, e, f, g, h, i;
            for (g = ["TB", "GB", "MB", "KB", "b"], d = e = null, c = h = 0, i = g.length; i > h; c = ++h)
                if (f = g[c], b = Math.pow(this.options.filesizeBase, 4 - c) / 10, a >= b) {
                    d = a / Math.pow(this.options.filesizeBase, 4 - c), e = f;
                    break
                }
            return d = Math.round(10 * d) / 10, "<strong>" + d + "</strong> " + e
        }, c.prototype._updateMaxFilesReachedClass = function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
        }, c.prototype.drop = function(a) {
            var b, c;
            a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, b.length && (c = a.dataTransfer.items, c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)))
        }, c.prototype.paste = function(a) {
            var b, c;
            if (null != (null != a && null != (c = a.clipboardData) ? c.items : void 0)) return this.emit("paste", a), b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0
        }, c.prototype.handleFiles = function(a) {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addFile(b));
            return e
        }, c.prototype._addFilesFromItems = function(a) {
            var b, c, d, e, f;
            for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], f.push(null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? this.addFile(c.getAsFile()) : b.isDirectory ? this._addFilesFromDirectory(b, b.name) : void 0 : null != c.getAsFile ? null == c.kind || "file" === c.kind ? this.addFile(c.getAsFile()) : void 0 : void 0);
            return f
        }, c.prototype._addFilesFromDirectory = function(a, b) {
            var c, d;
            return c = a.createReader(), d = function(a) {
                return function(c) {
                    var d, e, f;
                    for (e = 0, f = c.length; f > e; e++) d = c[e], d.isFile ? d.file(function(c) {
                        return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, a.addFile(c))
                    }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name)
                }
            }(this), c.readEntries(d, function(a) {
                return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(a) : void 0
            })
        }, c.prototype.accept = function(a, b) {
            return a.size > 1024 * this.options.maxFilesize * 1024 ? b(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : c.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, b) : b(this.options.dictInvalidFileType)
        }, c.prototype.addFile = function(a) {
            return a.upload = {
                progress: 0,
                total: a.size,
                bytesSent: 0
            }, this.files.push(a), a.status = c.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), this.accept(a, function(b) {
                return function(c) {
                    return c ? (a.accepted = !1, b._errorProcessing([a], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), b._updateMaxFilesReachedClass()
                }
            }(this))
        }, c.prototype.enqueueFiles = function(a) {
            var b, c, d;
            for (c = 0, d = a.length; d > c; c++) b = a[c], this.enqueueFile(b);
            return null
        }, c.prototype.enqueueFile = function(a) {
            if (a.status !== c.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
            return a.status = c.QUEUED, this.options.autoProcessQueue ? setTimeout(function(a) {
                return function() {
                    return a.processQueue()
                }
            }(this), 0) : void 0
        }, c.prototype._thumbnailQueue = [], c.prototype._processingThumbnail = !1, c.prototype._enqueueThumbnail = function(a) {
            return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), setTimeout(function(a) {
                return function() {
                    return a._processThumbnailQueue()
                }
            }(this), 0)) : void 0
        }, c.prototype._processThumbnailQueue = function() {
            return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function(a) {
                return function() {
                    return a._processingThumbnail = !1, a._processThumbnailQueue()
                }
            }(this)))
        }, c.prototype.removeFile = function(a) {
            return a.status === c.UPLOADING && this.cancelUpload(a), this.files = h(this.files, a), this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0
        }, c.prototype.removeAllFiles = function(a) {
            var b, d, e, f;
            for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++) b = f[d], (b.status !== c.UPLOADING || a) && this.removeFile(b);
            return null
        }, c.prototype.createThumbnail = function(a, b) {
            var c;
            return c = new FileReader, c.onload = function(d) {
                return function() {
                    var e;
                    return "image/svg+xml" === a.type ? (d.emit("thumbnail", a, c.result), void(null != b && b())) : (e = document.createElement("img"), e.onload = function() {
                        var c, g, h, i, j, k, l, m;
                        return a.width = e.width, a.height = e.height, h = d.options.resize.call(d, a), null == h.trgWidth && (h.trgWidth = h.optWidth), null == h.trgHeight && (h.trgHeight = h.optHeight), c = document.createElement("canvas"), g = c.getContext("2d"), c.width = h.trgWidth, c.height = h.trgHeight, f(g, e, null != (j = h.srcX) ? j : 0, null != (k = h.srcY) ? k : 0, h.srcWidth, h.srcHeight, null != (l = h.trgX) ? l : 0, null != (m = h.trgY) ? m : 0, h.trgWidth, h.trgHeight), i = c.toDataURL("image/png"), d.emit("thumbnail", a, i), null != b ? b() : void 0
                    }, e.onerror = b, e.src = c.result)
                }
            }(this), c.readAsDataURL(a)
        }, c.prototype.processQueue = function() {
            var a, b, c, d;
            if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                for (; b > a;) {
                    if (!d.length) return;
                    this.processFile(d.shift()), a++
                }
            }
        }, c.prototype.processFile = function(a) {
            return this.processFiles([a])
        }, c.prototype.processFiles = function(a) {
            var b, d, e;
            for (d = 0, e = a.length; e > d; d++) b = a[d], b.processing = !0, b.status = c.UPLOADING, this.emit("processing", b);
            return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a)
        }, c.prototype._getFilesWithXhr = function(a) {
            var b, c;
            return c = function() {
                var c, d, e, f;
                for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.xhr === a && f.push(b);
                return f
            }.call(this)
        }, c.prototype.cancelUpload = function(a) {
            var b, d, e, f, g, h, i;
            if (a.status === c.UPLOADING) {
                for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++) b = d[e], b.status = c.CANCELED;
                for (a.xhr.abort(), f = 0, h = d.length; h > f; f++) b = d[f], this.emit("canceled", b);
                this.options.uploadMultiple && this.emit("canceledmultiple", d)
            } else((i = a.status) === c.ADDED || i === c.QUEUED) && (a.status = c.CANCELED, this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [a]));
            return this.options.autoProcessQueue ? this.processQueue() : void 0
        }, e = function() {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], "function" == typeof b ? b.apply(this, a) : b
        }, c.prototype.uploadFile = function(a) {
            return this.uploadFiles([a])
        }, c.prototype.uploadFiles = function(a) {
            var b, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
            for (w = new XMLHttpRequest, x = 0, B = a.length; B > x; x++) b = a[x], b.xhr = w;
            p = e(this.options.method, a), u = e(this.options.url, a), w.open(p, u, !0), w.withCredentials = !!this.options.withCredentials, s = null, g = function(c) {
                return function() {
                    var d, e, f;
                    for (f = [], d = 0, e = a.length; e > d; d++) b = a[d], f.push(c._errorProcessing(a, s || c.options.dictResponseError.replace("{{statusCode}}", w.status), w));
                    return f
                }
            }(this), t = function(c) {
                return function(d) {
                    var e, f, g, h, i, j, k, l, m;
                    if (null != d)
                        for (f = 100 * d.loaded / d.total, g = 0, j = a.length; j > g; g++) b = a[g], b.upload = {
                            progress: f,
                            total: d.total,
                            bytesSent: d.loaded
                        };
                    else {
                        for (e = !0, f = 100, h = 0, k = a.length; k > h; h++) b = a[h], (100 !== b.upload.progress || b.upload.bytesSent !== b.upload.total) && (e = !1), b.upload.progress = f, b.upload.bytesSent = b.upload.total;
                        if (e) return
                    }
                    for (m = [], i = 0, l = a.length; l > i; i++) b = a[i], m.push(c.emit("uploadprogress", b, f, b.upload.bytesSent));
                    return m
                }
            }(this), w.onload = function(b) {
                return function(d) {
                    var e;
                    if (a[0].status !== c.CANCELED && 4 === w.readyState) {
                        if (s = w.responseText, w.getResponseHeader("content-type") && ~w.getResponseHeader("content-type").indexOf("application/json")) try {
                            s = JSON.parse(s)
                        } catch (f) {
                            d = f, s = "Invalid JSON response from server."
                        }
                        return t(), 200 <= (e = w.status) && 300 > e ? b._finished(a, s, d) : g()
                    }
                }
            }(this), w.onerror = function() {
                return function() {
                    return a[0].status !== c.CANCELED ? g() : void 0
                }
            }(this), r = null != (G = w.upload) ? G : w, r.onprogress = t, j = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && d(j, this.options.headers);
            for (h in j) i = j[h], w.setRequestHeader(h, i);
            if (f = new FormData, this.options.params) {
                H = this.options.params;
                for (o in H) v = H[o], f.append(o, v)
            }
            for (y = 0, C = a.length; C > y; y++) b = a[y], this.emit("sending", b, w, f);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", a, w, f), "FORM" === this.element.tagName)
                for (I = this.element.querySelectorAll("input, textarea, select, button"), z = 0, D = I.length; D > z; z++)
                    if (l = I[z], m = l.getAttribute("name"), n = l.getAttribute("type"), "SELECT" === l.tagName && l.hasAttribute("multiple"))
                        for (J = l.options, A = 0, E = J.length; E > A; A++) q = J[A], q.selected && f.append(m, q.value);
                    else(!n || "checkbox" !== (K = n.toLowerCase()) && "radio" !== K || l.checked) && f.append(m, l.value);
            for (k = F = 0, L = a.length - 1; L >= 0 ? L >= F : F >= L; k = L >= 0 ? ++F : --F) f.append(this._getParamName(k), a[k], a[k].name);
            return w.send(f)
        }, c.prototype._finished = function(a, b, d) {
            var e, f, g;
            for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.SUCCESS, this.emit("success", e, b, d), this.emit("complete", e);
            return this.options.uploadMultiple && (this.emit("successmultiple", a, b, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, c.prototype._errorProcessing = function(a, b, d) {
            var e, f, g;
            for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.ERROR, this.emit("error", e, b, d), this.emit("complete", e);
            return this.options.uploadMultiple && (this.emit("errormultiple", a, b, d), this.emit("completemultiple", a)), this.options.autoProcessQueue ? this.processQueue() : void 0
        }, c
    }(b), a.version = "4.0.1", a.options = {}, a.optionsForElement = function(b) {
        return b.getAttribute("id") ? a.options[c(b.getAttribute("id"))] : void 0
    }, a.instances = [], a.forElement = function(a) {
        if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return a.dropzone
    }, a.autoDiscover = !0, a.discover = function() {
        var b, c, d, e, f, g;
        for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], b = function(a) {
                var b, c, e, f;
                for (f = [], c = 0, e = a.length; e > c; c++) b = a[c], f.push(/(^| )dropzone($| )/.test(b.className) ? d.push(b) : void 0);
                return f
            }, b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"))), g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(a.optionsForElement(c) !== !1 ? new a(c) : void 0);
        return g
    }, a.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], a.isBrowserSupported = function() {
        var b, c, d, e, f;
        if (b = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
            if ("classList" in document.createElement("a"))
                for (f = a.blacklistedBrowsers, d = 0, e = f.length; e > d; d++) c = f[d], c.test(navigator.userAgent) && (b = !1);
            else b = !1;
        else b = !1;
        return b
    }, h = function(a, b) {
        var c, d, e, f;
        for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], c !== b && f.push(c);
        return f
    }, c = function(a) {
        return a.replace(/[\-_](\w)/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }, a.createElement = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0]
    }, a.elementInside = function(a, b) {
        if (a === b) return !0;
        for (; a = a.parentNode;)
            if (a === b) return !0;
        return !1
    }, a.getElement = function(a, b) {
        var c;
        if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return c
    }, a.getElements = function(a, b) {
        var c, d, e, f, g, h, i, j;
        if (a instanceof Array) {
            e = [];
            try {
                for (f = 0, h = a.length; h > f; f++) d = a[f], e.push(this.getElement(d, b))
            } catch (k) {
                c = k, e = null
            }
        } else if ("string" == typeof a)
            for (e = [], j = document.querySelectorAll(a), g = 0, i = j.length; i > g; g++) d = j[g], e.push(d);
        else null != a.nodeType && (e = [a]);
        if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return e
    }, a.confirm = function(a, b, c) {
        return window.confirm(a) ? b() : null != c ? c() : void 0
    }, a.isValidFile = function(a, b) {
        var c, d, e, f, g;
        if (!b) return !0;
        for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++)
            if (e = b[f], e = e.trim(), "." === e.charAt(0)) {
                if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length)) return !0
            } else if (/\/\*$/.test(e)) {
            if (c === e.replace(/\/.*$/, "")) return !0
        } else if (d === e) return !0;
        return !1
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(b) {
        return this.each(function() {
            return new a(this, b)
        })
    }), "undefined" != typeof module && null !== module ? module.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success", e = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, k = 0, f = g, i = g; i > k;) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
        return j = i / g, 0 === j ? 1 : j
    }, f = function(a, b, c, d, f, g, h, i, j, k) {
        var l;
        return l = e(b), a.drawImage(b, c, d, f, g, h, i, j, k / l)
    }, d = function(a, b) {
        var c, d, e, f, g, h, i, j, k;
        if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", f = function(c) {
                return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0
            }, g = function() {
                var a;
                try {
                    j.doScroll("left")
                } catch (b) {
                    return a = b, void setTimeout(g, 50)
                }
                return f("poll")
            }, "complete" !== d.readyState) {
            if (d.createEventObject && j.doScroll) {
                try {
                    k = !a.frameElement
                } catch (l) {}
                k && g()
            }
            return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), a[c](h + "load", f, !1)
        }
    }, a._autoDiscoverFunction = function() {
        return a.autoDiscover ? a.discover() : void 0
    }, d(window, a._autoDiscoverFunction)
}).call(this);;
/* nouislider - 8.0.2 - 2015-07-06 13:22:09 */
! function(a) {
    if ("function" == typeof define && define.amd) define([], a);
    else if ("object" == typeof exports) {
        var b = require("fs");
        module.exports = a(), module.exports.css = function() {
            return b.readFileSync(__dirname + "/nouislider.min.css", "utf8")
        }
    } else window.noUiSlider = a()
}(function() {
    "use strict";

    function a(a) {
        return a.filter(function(a) {
            return this[a] ? !1 : this[a] = !0
        }, {})
    }

    function b(a, b) {
        return Math.round(a / b) * b
    }

    function c(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.defaultView || c.parentWindow,
            e = c.documentElement,
            f = d.pageXOffset;
        return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f = 0), {
            top: b.top + d.pageYOffset - e.clientTop,
            left: b.left + f - e.clientLeft
        }
    }

    function d(a) {
        return "number" == typeof a && !isNaN(a) && isFinite(a)
    }

    function e(a) {
        var b = Math.pow(10, 7);
        return Number((Math.round(a * b) / b).toFixed(7))
    }

    function f(a, b, c) {
        j(a, b), setTimeout(function() {
            k(a, b)
        }, c)
    }

    function g(a) {
        return Math.max(Math.min(a, 100), 0)
    }

    function h(a) {
        return Array.isArray(a) ? a : [a]
    }

    function i(a) {
        var b = a.split(".");
        return b.length > 1 ? b[1].length : 0
    }

    function j(a, b) {
        a.classList ? a.classList.add(b) : a.className += " " + b
    }

    function k(a, b) {
        a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function l(a, b) {
        a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className)
    }

    function m(a, b) {
        return 100 / (b - a)
    }

    function n(a, b) {
        return 100 * b / (a[1] - a[0])
    }

    function o(a, b) {
        return n(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0])
    }

    function p(a, b) {
        return b * (a[1] - a[0]) / 100 + a[0]
    }

    function q(a, b) {
        for (var c = 1; a >= b[c];) c += 1;
        return c
    }

    function r(a, b, c) {
        if (c >= a.slice(-1)[0]) return 100;
        var d, e, f, g, h = q(c, a);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + o([d, e], c) / m(f, g)
    }

    function s(a, b, c) {
        if (c >= 100) return a.slice(-1)[0];
        var d, e, f, g, h = q(c, b);
        return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], p([d, e], (c - f) * m(f, g))
    }

    function t(a, c, d, e) {
        if (100 === e) return e;
        var f, g, h = q(e, a);
        return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : c[h - 1] ? a[h - 1] + b(e - a[h - 1], c[h - 1]) : e
    }

    function u(a, b, c) {
        var e;
        if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider: 'range' contains invalid value.");
        if (e = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !d(e) || !d(b[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        c.xPct.push(e), c.xVal.push(b[0]), e ? c.xSteps.push(isNaN(b[1]) ? !1 : b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1])
    }

    function v(a, b, c) {
        return b ? void(c.xSteps[a] = n([c.xVal[a], c.xVal[a + 1]], b) / m(c.xPct[a], c.xPct[a + 1])) : !0
    }

    function w(a, b, c, d) {
        this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.snap = b, this.direction = c;
        var e, f = [];
        for (e in a) a.hasOwnProperty(e) && f.push([a[e], e]);
        for (f.sort(function(a, b) {
                return a[0] - b[0]
            }), e = 0; e < f.length; e++) u(f[e][1], f[e][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) v(e, this.xNumSteps[e], this)
    }

    function x(a, b) {
        if (!d(b)) throw new Error("noUiSlider: 'step' is not numeric.");
        a.singleStep = b
    }

    function y(a, b) {
        if ("object" != typeof b || Array.isArray(b)) throw new Error("noUiSlider: 'range' is not an object.");
        if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        a.spectrum = new w(b, a.snap, a.dir, a.singleStep)
    }

    function z(a, b) {
        if (b = h(b), !Array.isArray(b) || !b.length || b.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
        a.handles = b.length, a.start = b
    }

    function A(a, b) {
        if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider: 'snap' option must be a boolean.")
    }

    function B(a, b) {
        if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider: 'animate' option must be a boolean.")
    }

    function C(a, b) {
        if ("lower" === b && 1 === a.handles) a.connect = 1;
        else if ("upper" === b && 1 === a.handles) a.connect = 2;
        else if (b === !0 && 2 === a.handles) a.connect = 3;
        else {
            if (b !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
            a.connect = 0
        }
    }

    function D(a, b) {
        switch (b) {
            case "horizontal":
                a.ort = 0;
                break;
            case "vertical":
                a.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function E(a, b) {
        if (!d(b)) throw new Error("noUiSlider: 'margin' option must be numeric.");
        if (a.margin = a.spectrum.getMargin(b), !a.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
    }

    function F(a, b) {
        if (!d(b)) throw new Error("noUiSlider: 'limit' option must be numeric.");
        if (a.limit = a.spectrum.getMargin(b), !a.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
    }

    function G(a, b) {
        switch (b) {
            case "ltr":
                a.dir = 0;
                break;
            case "rtl":
                a.dir = 1, a.connect = [0, 2, 1, 3][a.connect];
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function H(a, b) {
        if ("string" != typeof b) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        var c = b.indexOf("tap") >= 0,
            d = b.indexOf("drag") >= 0,
            e = b.indexOf("fixed") >= 0,
            f = b.indexOf("snap") >= 0;
        a.events = {
            tap: c || f,
            drag: d,
            fixed: e,
            snap: f
        }
    }

    function I(a, b) {
        if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0;
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function J(a) {
        var b, c = {
            margin: 0,
            limit: 0,
            animate: !0,
            format: U
        };
        b = {
            step: {
                r: !1,
                t: x
            },
            start: {
                r: !0,
                t: z
            },
            connect: {
                r: !0,
                t: C
            },
            direction: {
                r: !0,
                t: G
            },
            snap: {
                r: !1,
                t: A
            },
            animate: {
                r: !1,
                t: B
            },
            range: {
                r: !0,
                t: y
            },
            orientation: {
                r: !1,
                t: D
            },
            margin: {
                r: !1,
                t: E
            },
            limit: {
                r: !1,
                t: F
            },
            behaviour: {
                r: !0,
                t: H
            },
            format: {
                r: !1,
                t: I
            }
        };
        var d = {
            connect: !1,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        };
        return Object.keys(d).forEach(function(b) {
            void 0 === a[b] && (a[b] = d[b])
        }), Object.keys(b).forEach(function(d) {
            var e = b[d];
            if (void 0 === a[d]) {
                if (e.r) throw new Error("noUiSlider: '" + d + "' is required.");
                return !0
            }
            e.t(c, a[d])
        }), c.pips = a.pips, c.style = c.ort ? "top" : "left", c
    }

    function K(a, b, c) {
        var d = a + b[0],
            e = a + b[1];
        return c ? (0 > d && (e += Math.abs(d)), e > 100 && (d -= e - 100), [g(d), g(e)]) : [d, e]
    }

    function L(a) {
        a.preventDefault();
        var b, c, d = 0 === a.type.indexOf("touch"),
            e = 0 === a.type.indexOf("mouse"),
            f = 0 === a.type.indexOf("pointer"),
            g = a;
        return 0 === a.type.indexOf("MSPointer") && (f = !0), d && (b = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY), (e || f) && (b = a.clientX + window.pageXOffset, c = a.clientY + window.pageYOffset), g.points = [b, c], g.cursor = e || f, g
    }

    function M(a, b) {
        var c = document.createElement("div"),
            d = document.createElement("div"),
            e = ["-lower", "-upper"];
        return a && e.reverse(), j(d, T[3]), j(d, T[3] + e[b]), j(c, T[2]), c.appendChild(d), c
    }

    function N(a, b, c) {
        switch (a) {
            case 1:
                j(b, T[7]), j(c[0], T[6]);
                break;
            case 3:
                j(c[1], T[6]);
            case 2:
                j(c[0], T[7]);
            case 0:
                j(b, T[6])
        }
    }

    function O(a, b, c) {
        var d, e = [];
        for (d = 0; a > d; d += 1) e.push(c.appendChild(M(b, d)));
        return e
    }

    function P(a, b, c) {
        j(c, T[0]), j(c, T[8 + a]), j(c, T[4 + b]);
        var d = document.createElement("div");
        return j(d, T[1]), c.appendChild(d), d
    }

    function Q(b, d) {
        function e(a, b, c) {
            if ("range" === a || "steps" === a) return M.xVal;
            if ("count" === a) {
                var d, e = 100 / (b - 1),
                    f = 0;
                for (b = [];
                    (d = f++ * e) <= 100;) b.push(d);
                a = "positions"
            }
            return "positions" === a ? b.map(function(a) {
                return M.fromStepping(c ? M.getStep(a) : a)
            }) : "values" === a ? c ? b.map(function(a) {
                return M.fromStepping(M.getStep(M.toStepping(a)))
            }) : b : void 0
        }

        function m(b, c, d) {
            var e = M.direction,
                f = {},
                g = M.xVal[0],
                h = M.xVal[M.xVal.length - 1],
                i = !1,
                j = !1,
                k = 0;
            return M.direction = 0, d = a(d.slice().sort(function(a, b) {
                return a - b
            })), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function(a, e) {
                var g, h, l, m, n, o, p, q, r, s, t = a,
                    u = d[e + 1];
                if ("steps" === c && (g = M.xNumSteps[e]), g || (g = u - t), t !== !1 && void 0 !== u)
                    for (h = t; u >= h; h += g) {
                        for (m = M.toStepping(h), n = m - k, q = n / b, r = Math.round(q), s = n / r, l = 1; r >= l; l += 1) o = k + l * s, f[o.toFixed(5)] = ["x", 0];
                        p = d.indexOf(h) > -1 ? 1 : "steps" === c ? 2 : 0, !e && i && (p = 0), h === u && j || (f[m.toFixed(5)] = [h, p]), k = m
                    }
            }), M.direction = e, f
        }

        function n(a, b, c) {
            function e(a) {
                return ["-normal", "-large", "-sub"][a]
            }

            function f(a, b, c) {
                return 'class="' + b + " " + b + "-" + h + " " + b + e(c[1]) + '" style="' + d.style + ": " + a + '%"'
            }

            function g(a, d) {
                M.direction && (a = 100 - a), d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i.innerHTML += "<div " + f(a, "noUi-marker", d) + "></div>", d[1] && (i.innerHTML += "<div " + f(a, "noUi-value", d) + ">" + c.to(d[0]) + "</div>")
            }
            var h = ["horizontal", "vertical"][d.ort],
                i = document.createElement("div");
            return j(i, "noUi-pips"), j(i, "noUi-pips-" + h), Object.keys(a).forEach(function(b) {
                g(b, a[b])
            }), i
        }

        function o(a) {
            var b = a.mode,
                c = a.density || 1,
                d = a.filter || !1,
                f = a.values || !1,
                g = a.stepped || !1,
                h = e(b, f, g),
                i = m(c, b, h),
                j = a.format || {
                    to: Math.round
                };
            return I.appendChild(n(i, d, j))
        }

        function p() {
            return G["offset" + ["Width", "Height"][d.ort]]
        }

        function q(a, b) {
            void 0 !== b && (b = Math.abs(b - d.dir)), Object.keys(R).forEach(function(c) {
                var d = c.split(".")[0];
                a === d && R[c].forEach(function(a) {
                    a(h(B()), b, r(Array.prototype.slice.call(Q)))
                })
            })
        }

        function r(a) {
            return 1 === a.length ? a[0] : d.dir ? a.reverse() : a
        }

        function s(a, b, c, e) {
            var f = function(b) {
                    return I.hasAttribute("disabled") ? !1 : l(I, T[14]) ? !1 : (b = L(b), a === S.start && void 0 !== b.buttons && b.buttons > 1 ? !1 : (b.calcPoint = b.points[d.ort], void c(b, e)))
                },
                g = [];
            return a.split(" ").forEach(function(a) {
                b.addEventListener(a, f, !1), g.push([a, f])
            }), g
        }

        function t(a, b) {
            var c, d, e = b.handles || H,
                f = !1,
                g = 100 * (a.calcPoint - b.start) / p(),
                h = e[0] === H[0] ? 0 : 1;
            if (c = K(g, b.positions, e.length > 1), f = y(e[0], c[h], 1 === e.length), e.length > 1) {
                if (f = y(e[1], c[h ? 0 : 1], !1) || f)
                    for (d = 0; d < b.handles.length; d++) q("slide", d)
            } else f && q("slide", h)
        }

        function u(a, b) {
            var c = G.getElementsByClassName(T[15]),
                d = b.handles[0] === H[0] ? 0 : 1;
            c.length && k(c[0], T[15]), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener));
            var e = document.documentElement;
            e.noUiListeners.forEach(function(a) {
                e.removeEventListener(a[0], a[1])
            }), k(I, T[12]), q("set", d), q("change", d)
        }

        function v(a, b) {
            var c = document.documentElement;
            if (1 === b.handles.length && (j(b.handles[0].children[0], T[15]), b.handles[0].hasAttribute("disabled"))) return !1;
            a.stopPropagation();
            var d = s(S.move, c, t, {
                    start: a.calcPoint,
                    handles: b.handles,
                    positions: [J[0], J[H.length - 1]]
                }),
                e = s(S.end, c, u, {
                    handles: b.handles
                });
            if (c.noUiListeners = d.concat(e), a.cursor) {
                document.body.style.cursor = getComputedStyle(a.target).cursor, H.length > 1 && j(I, T[12]);
                var f = function() {
                    return !1
                };
                document.body.noUiListener = f, document.body.addEventListener("selectstart", f, !1)
            }
        }

        function w(a) {
            var b, e, g = a.calcPoint,
                h = 0;
            return a.stopPropagation(), H.forEach(function(a) {
                h += c(a)[d.style]
            }), b = h / 2 > g || 1 === H.length ? 0 : 1, g -= c(G)[d.style], e = 100 * g / p(), d.events.snap || f(I, T[14], 300), H[b].hasAttribute("disabled") ? !1 : (y(H[b], e), q("slide", b), q("set", b), q("change", b), void(d.events.snap && v(a, {
                handles: [H[h]]
            })))
        }

        function x(a) {
            var b, c;
            if (!a.fixed)
                for (b = 0; b < H.length; b += 1) s(S.start, H[b].children[0], v, {
                    handles: [H[b]]
                });
            a.tap && s(S.start, G, w, {
                handles: H
            }), a.drag && (c = [G.getElementsByClassName(T[7])[0]], j(c[0], T[10]), a.fixed && c.push(H[c[0] === H[0] ? 1 : 0].children[0]), c.forEach(function(a) {
                s(S.start, a, v, {
                    handles: H
                })
            }))
        }

        function y(a, b, c) {
            var e = a !== H[0] ? 1 : 0,
                f = J[0] + d.margin,
                h = J[1] - d.margin,
                i = J[0] + d.limit,
                l = J[1] - d.limit;
            return H.length > 1 && (b = e ? Math.max(b, f) : Math.min(b, h)), c !== !1 && d.limit && H.length > 1 && (b = e ? Math.min(b, i) : Math.max(b, l)), b = M.getStep(b), b = g(parseFloat(b.toFixed(7))), b === J[e] ? !1 : (a.style[d.style] = b + "%", a.previousSibling || (k(a, T[17]), b > 50 && j(a, T[17])), J[e] = b, Q[e] = M.fromStepping(b), q("update", e), !0)
        }

        function z(a, b) {
            var c, e, f;
            for (d.limit && (a += 1), c = 0; a > c; c += 1) e = c % 2, f = b[e], null !== f && f !== !1 && ("number" == typeof f && (f = String(f)), f = d.format.from(f), (f === !1 || isNaN(f) || y(H[e], M.toStepping(f), c === 3 - d.dir) === !1) && q("update", e))
        }

        function A(a) {
            var b, c, e = h(a);
            for (d.dir && d.handles > 1 && e.reverse(), d.animate && -1 !== J[0] && f(I, T[14], 300), b = H.length > 1 ? 3 : 1, 1 === e.length && (b = 1), z(b, e), c = 0; c < H.length; c++) q("set", c)
        }

        function B() {
            var a, b = [];
            for (a = 0; a < d.handles; a += 1) b[a] = d.format.to(Q[a]);
            return r(b)
        }

        function C() {
            T.forEach(function(a) {
                a && k(I, a)
            }), I.innerHTML = "", delete I.noUiSlider
        }

        function D() {
            var a = J.map(function(a, b) {
                var c = M.getApplicableStep(a),
                    d = i(String(c[2])),
                    e = Q[b],
                    f = 100 === a ? null : c[2],
                    g = Number((e - c[2]).toFixed(d)),
                    h = 0 === a ? null : g >= c[1] ? c[2] : c[0] || !1;
                return [h, f]
            });
            return r(a)
        }

        function E(a, b) {
            R[a] = R[a] || [], R[a].push(b), "update" === a.split(".")[0] && H.forEach(function(a, b) {
                q("update", b)
            })
        }

        function F(a) {
            var b = a.split(".")[0],
                c = a.substring(b.length);
            Object.keys(R).forEach(function(a) {
                var d = a.split(".")[0],
                    e = a.substring(d.length);
                b && b !== d || c && c !== e || delete R[a]
            })
        }
        var G, H, I = b,
            J = [-1, -1],
            M = d.spectrum,
            Q = [],
            R = {};
        if (I.noUiSlider) throw new Error("Slider was already initialized.");
        return G = P(d.dir, d.ort, I), H = O(d.handles, d.dir, G), N(d.connect, I, H), x(d.events), d.pips && o(d.pips), {
            destroy: C,
            steps: D,
            on: E,
            off: F,
            get: B,
            set: A
        }
    }

    function R(a, b) {
        if (!a.nodeName) throw new Error("noUiSlider.create requires a single element.");
        var c = J(b, a),
            d = Q(a, c);
        d.set(c.start), a.noUiSlider = d
    }
    var S = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        },
        T = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
    w.prototype.getMargin = function(a) {
        return 2 === this.xPct.length ? n(this.xVal, a) : !1
    }, w.prototype.toStepping = function(a) {
        return a = r(this.xVal, this.xPct, a), this.direction && (a = 100 - a), a
    }, w.prototype.fromStepping = function(a) {
        return this.direction && (a = 100 - a), e(s(this.xVal, this.xPct, a))
    }, w.prototype.getStep = function(a) {
        return this.direction && (a = 100 - a), a = t(this.xPct, this.xSteps, this.snap, a), this.direction && (a = 100 - a), a
    }, w.prototype.getApplicableStep = function(a) {
        var b = q(a, this.xPct),
            c = 100 === a ? 2 : 1;
        return [this.xNumSteps[b - 2], this.xVal[b - c], this.xNumSteps[b - c]]
    }, w.prototype.convert = function(a) {
        return this.getStep(this.toStepping(a))

    };
    var U = {
        to: function(a) {
            return a.toFixed(2)
        },
        from: Number
    };
    return {
        create: R
    }
});
(function() {
    function r(b) {
        return b.split("").reverse().join("")
    }

    function s(b, f, c) {
        if ((b[f] || b[c]) && b[f] === b[c]) throw Error(f);
    }

    function v(b, f, c, d, e, p, q, k, l, h, n, a) {
        q = a;
        var m, g = n = "";
        p && (a = p(a));
        if ("number" !== typeof a || !isFinite(a)) return !1;
        b && 0 === parseFloat(a.toFixed(b)) && (a = 0);
        0 > a && (m = !0, a = Math.abs(a));
        b && (p = Math.pow(10, b), a = (Math.round(a * p) / p).toFixed(b));
        a = a.toString(); - 1 !== a.indexOf(".") && (b = a.split("."), a = b[0], c && (n = c + b[1]));
        f && (a = r(a).match(/.{1,3}/g), a = r(a.join(r(f))));
        m && k && (g += k);
        d && (g += d);
        m && l && (g += l);
        g = g + a + n;
        e && (g += e);
        h && (g = h(g, q));
        return g
    }

    function w(b, f, c, d, e, h, q, k, l, r, n, a) {
        var m;
        b = "";
        n && (a = n(a));
        if (!a || "string" !== typeof a) return !1;
        k && a.substring(0, k.length) === k && (a = a.replace(k, ""), m = !0);
        d && a.substring(0, d.length) === d && (a = a.replace(d, ""));
        l && a.substring(0, l.length) === l && (a = a.replace(l, ""), m = !0);
        e && a.slice(-1 * e.length) === e && (a = a.slice(0, -1 * e.length));
        f && (a = a.split(f).join(""));
        c && (a = a.replace(c, "."));
        m && (b += "-");
        b = Number((b + a).replace(/[^0-9\.\-.]/g, ""));
        q && (b = q(b));
        return "number" === typeof b && isFinite(b) ? b : !1
    }

    function x(b) {
        var f, c, d, e = {};
        for (f = 0; f < h.length; f += 1) c = h[f], d = b[c], void 0 === d ? e[c] = "negative" !== c || e.negativeBefore ? "mark" === c && "." !== e.thousand ? "." : !1 : "-" : "decimals" === c ? 0 < d && 8 > d && (e[c] = d) : "encoder" === c || "decoder" === c || "edit" === c || "undo" === c ? "function" === typeof d && (e[c] = d) : "string" === typeof d && (e[c] = d);
        s(e, "mark", "thousand");
        s(e, "prefix", "negative");
        s(e, "prefix", "negativeBefore");
        return e
    }

    function u(b, f, c) {
        var d, e = [];
        for (d = 0; d < h.length; d += 1) e.push(b[h[d]]);
        e.push(c);
        return f.apply("", e)
    }

    function t(b) {
        if (!(this instanceof t)) return new t(b);
        "object" === typeof b && (b = x(b), this.to = function(f) {
            return u(b, v, f)
        }, this.from = function(f) {
            return u(b, w, f)
        })
    }
    var h = "decimals thousand mark prefix postfix encoder decoder negativeBefore negative edit undo".split(" ");
    window.wNumb = t
})();;
jQuery(function($) {
    var $gsform = $('#get-started');
    var $box = $('.select-box'),
        $select = $box.find('.select li'),
        $result = $('#get-started-type');

    function multiSelect() {
        var $this = $(this),
            $button = $this.parentsUntil('.screen').find('.next'),
            thisValue = $this.text(),
            resultsVal = $result.val(),
            results = [];
        if (resultsVal) {
            results = resultsVal.split(', ');
        }
        if ($this.attr('data-toggled') === 'on') {
            $this.removeClass('selected');
            $this.attr('data-toggled', 'off');
            $result.attr('data-toggled', 'off');
            results = $.grep(results, function(value) {
                return value !== thisValue;
            });
        } else {
            $this.addClass('selected');
            $this.attr('data-toggled', 'on');
            results.push(thisValue);
        }
        if (results.length > 0) {
            $box.addClass('filled');
            $button.removeAttr('disabled');
        } else {
            $box.removeClass('filled');
            $button.attr('disabled', 'disabled');
        }
        $result.val(results.join(', '));
        if ($result[0].scrollHeight > $result.innerHeight()) {
            $result.addClass('double');
        } else {
            $result.removeClass('double');
        }
    }
    $select.on('click', multiSelect);
    var budget = document.getElementById('budget');
    if ($(budget).length > 0) {
        var $budgetBtn = $(budget).parentsUntil('.screen').find('.next');
        noUiSlider.create(budget, {
            start: [100, 150],
            connect: true,
            step: 25,
            range: {
                'min': 0,
                'max': 250
            },
            format: wNumb({
                decimals: 0,
                thousand: ',',
                prefix: '$',
                postfix: 'k',
                edit: function(value) {
                    if (value == "$250k") {
                        return value + "+";
                    }
                    return value;
                }
            })
        });
        budget.noUiSlider.on('update', function(values, handles) {
            if (values[1] === '$0') {
                $('.range-field').removeClass('has-value');
                $('#money-smile').attr('class', '');
            } else {
                $('.range-field').addClass('has-value');
            }
            if (values[1] === '$5,000' || values[1] === '$75,000') {
                $('#money-smile').attr('class', 'smile');
            }
            if (values[1] === '$80,000') {
                $('#money-smile').attr('class', 'surprise');
            }
            $('.budget-min').text(values[0]);
            $('.budget-max').text(values[1]);
            $('[name=budget_min]').val(values[0]);
            $('[name=budget_max]').val(values[1]);
        });
    }
    $('#screen-more textarea').css('overflow', 'hidden').autogrow();
    var plusIcon = '<svg x="0px" y="0px" viewBox="0 0 44 44" enable-background="new 0 0 44 44" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#EEF0F0" d="M22,44C9.9,44,0,34.1,0,22C0,9.9,9.9,0,22,0s22,9.9,22,22 C44,34.1,34.1,44,22,44z M22,1.9c-11.1,0-20.1,9-20.1,20.1c0,11.1,9,20.1,20.1,20.1s20.1-9,20.1-20.1C42.1,10.9,33.1,1.9,22,1.9z M33.5,23H23v10.5c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1c0,0,0-6.8,0-9.5c0-0.6,0-1,0-1H10.5c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1H21V10.5 c0-0.5,0.4-1,1-1c0.5,0,1,0.4,1,1V21h10.5c0.5,0,1,0.4,1,1C34.4,22.5,34,23,33.5,23z"/></svg>';
    Dropzone.autoDiscover = false;
    var $gsuploads = new Dropzone('#support-files', {
        url: '/wp-admin/admin-ajax.php?action=handle_getstarted_files',
        dictDefaultMessage: plusIcon + 'Drag Files to Upload or <a>Browse</a>'
    });
    $uploaded_files = [];
    $gsuploads.on("success", function(FileInfo) {
        response = JSON.parse(FileInfo.xhr.response);
        console.log("uploads success", response);
        if ("success" === response.status) {
            $uploaded_files.push(response.url);
        }
    });
    var $screens = $('.screen'),
        $dots = $('.dot'),
        $next = $('.next');

    function step(e) {
        e.preventDefault();
        var $this = $(this),
            active = $screens.filter('.active').attr('id'),
            $active = $screens.filter('#' + active),
            nextScreen = $this.data('screen'),
            $nextScreen = $screens.filter('#' + nextScreen),
            $thisDot = $dots.filter('[data-screen=' + active + ']'),
            $nextDot = $dots.filter('[data-screen=' + nextScreen + ']');

        function next() {
            $screens.removeClass('active');
            $nextScreen.addClass('active');
            $thisDot.attr('data-status', 'complete');
            $nextDot.attr('data-status', 'current');
        }

        function error() {
            $active.addClass('error');
        }
        if ($this.is('.dot')) {
            if ($this.data('status') !== 'disabled') {
                next();
                $this.nextAll('.dot').attr('data-status', 'disabled');
            }
        }
        if ($this.is('.next')) {
            var $input = $active.find('input');
            if ($input.length == 0) {
                $input = $active.find('textarea');
                if ($input.val() !== '') {
                    next();
                } else {
                    error();
                }
            } else {
                if ($input.length > 1) {
                    var all_valid = 1;
                    $input.each(function(index, element) {
                        if ($(this).attr('type') === 'hidden' || $(this).is(':valid')) {} else {
                            all_valid = 0;
                        }
                        if (all_valid === 1) {
                            next();
                        } else {
                            error();
                        }
                    });
                } else {
                    if ($input.attr('type') === 'hidden' || $input.is(':valid')) {
                        next();
                    } else {
                        error();
                    }
                }
            }
        }
    }
    $next.on('click', step);
    $dots.on('click', step);

    function enableNext(index, elem) {
        var $input = $(elem),
            $button = $input.parentsUntil('.screen').find('.next');
        $input.on('keyup', function() {
            if ($input.val() !== '') {
                $button.removeAttr('disabled');
            }
        });
    }
    $screens.find('input').each(enableNext);
    $gsform.find('#get-started-last-name, #get-started-email, #get-started-phone').each(function(i, elem) {
        $(elem).keypress(function(e) {
            if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
                var $nextBtn = $(elem).parentsUntil('.content').find('.next'),
                    nextScreen = $nextBtn.data('screen'),
                    $nextField = $screens.filter('#' + nextScreen).find('input');
                $nextBtn.click();
                $nextField.focus();
                return false;
            } else {
                return true;
            }
        });
    });
    
});;

function countUp(e, t, i, s, o, n) {
    for (var r = 0, a = ["webkit", "moz", "ms", "o"], l = 0; l < a.length && !window.requestAnimationFrame; ++l) window.requestAnimationFrame = window[a[l] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[l] + "CancelAnimationFrame"] || window[a[l] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
        var i = (new Date).getTime(),
            s = Math.max(0, 16 - (i - r)),
            o = window.setTimeout(function() {
                e(i + s)
            }, s);
        return r = i + s, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }), this.options = n || {
        useEasing: !0,
        useGrouping: !0,
        separator: ",",
        decimal: "."
    }, "" === this.options.separator && (this.options.useGrouping = !1), null === this.options.prefix && (this.options.prefix = ""), null === this.options.suffix && (this.options.suffix = "");
    var d = this;
    this.d = "string" == typeof e ? document.getElementById(e) : e, this.startVal = Number(t), this.endVal = Number(i), this.countDown = this.startVal > this.endVal ? !0 : !1, this.startTime = null, this.timestamp = null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math.max(0, s || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * o || 2e3, this.version = function() {
        return "1.3.3"
    }, this.printValue = function(e) {
        var t = isNaN(e) ? "--" : d.formatNumber(e);
        "INPUT" === d.d.tagName ? this.d.value = t : "text" === d.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
    }, this.easeOutExpo = function(e, t, i, s) {
        return i * (-Math.pow(2, -10 * e / s) + 1) * 1024 / 1023 + t
    }, this.count = function(e) {
        null === d.startTime && (d.startTime = e), d.timestamp = e;
        var t = e - d.startTime;
        if (d.remaining = d.duration - t, d.options.useEasing)
            if (d.countDown) {
                var i = d.easeOutExpo(t, 0, d.startVal - d.endVal, d.duration);
                d.frameVal = d.startVal - i
            } else d.frameVal = d.easeOutExpo(t, d.startVal, d.endVal - d.startVal, d.duration);
        else if (d.countDown) {
            var s = (d.startVal - d.endVal) * (t / d.duration);
            d.frameVal = d.startVal - s
        } else d.frameVal = d.startVal + (d.endVal - d.startVal) * (t / d.duration);
        d.frameVal = d.countDown ? d.frameVal < d.endVal ? d.endVal : d.frameVal : d.frameVal > d.endVal ? d.endVal : d.frameVal, d.frameVal = Math.round(d.frameVal * d.dec) / d.dec, d.printValue(d.frameVal), t < d.duration ? d.rAF = requestAnimationFrame(d.count) : null != d.callback && d.callback()
    }, this.start = function(e) {
        return d.callback = e, isNaN(d.endVal) || isNaN(d.startVal) ? (console.log("countUp error: startVal or endVal is not a number"), d.printValue()) : d.rAF = requestAnimationFrame(d.count), !1
    }, this.stop = function() {
        cancelAnimationFrame(d.rAF)
    }, this.reset = function() {
        d.startTime = null, d.startVal = t, cancelAnimationFrame(d.rAF), d.printValue(d.startVal)
    }, this.resume = function() {
        d.stop(), d.startTime = null, d.duration = d.remaining, d.startVal = d.frameVal, requestAnimationFrame(d.count)
    }, this.update = function(e) {
        d.stop(), d.startTime = null, d.startVal = d.endVal, d.endVal = Number(e), d.countDown = d.startVal > d.endVal ? !0 : !1, d.rAF = requestAnimationFrame(d.count)
    }, this.formatNumber = function(e) {
        e = e.toFixed(d.decimals), e += "";
        var t, i, s, o;
        if (t = e.split("."), i = t[0], s = t.length > 1 ? d.options.decimal + t[1] : "", o = /(\d+)(\d{3})/, d.options.useGrouping)
            for (; o.test(i);) i = i.replace(o, "$1" + d.options.separator + "$2");
        return d.options.prefix + i + s + d.options.suffix
    }, d.printValue(d.startVal)
}
jQuery(function(e) {
        function t(t) {
            t.preventDefault();
            var i = e(this),
                s = e("." + i.data("toggle"));
            (i.hasClass("button") || i.hasClass("down-tab")) && e("html, body").stop().animate({
                scrollTop: s.offset().top - 74
            }, 1e3), "on" === i.attr("data-toggled") ? (s.removeClass("open"), i.attr("data-toggled", "off"), i.hasClass("button") && i.text("View More"), i.hasClass("find") && i.text("Find Us"), i.is("label") && i.next("textarea").attr("data-toggled", "off"), i.is("textarea") && i.prev("label").attr("data-toggled", "off")) : (s.addClass("open"), i.attr("data-toggled", "on"), i.hasClass("button") && i.text("View Less"), i.hasClass("find") && i.text("Close"), i.is("label") && i.next("textarea").attr("data-toggled", "on"), i.is("textarea") && i.prev("label").attr("data-toggled", "on"))
        }

        function i() {
            e(".inline-label").each(function(t, i) {
                var s = e(i),
                    o = s.find("input:not([type=checkbox])");
                if (0 === o.length && (o = s.find("textarea")), o.length > 0) {
                    var n = s.find("label:first");
                    "" !== o.val() && n.css("opacity", 0).remove(), o.on("focus", function() {
                        "" === o.val() && n.animate({
                            opacity: .5
                        }, 250)
                    }), o.on("keyup", function() {
                        n.css("opacity", 0).remove()
                    }), o.on("blur", function() {
                        "" === o.val() && (n.animate({
                            opacity: 1
                        }, 250), s.prepend(n))
                    })
                }
            })
        }

        function s() {
            e(".shrink-label, .gfield").each(function(t, i) {
                var s = e(i),
                    o = s.find("label:first"),
                    n = s.find("input:not([type=checkbox])");
                0 === n.length && (n = s.find("textarea"), s.addClass("hasTextarea")), 0 === n.length && (o.hide(), s.removeClass("hasTextarea")), n.length > 0 && ("" !== n.val() && s.addClass("filled"), n.on("focus", function() {
                    "" === n.val() && s.addClass("filled")
                }), n.on("keyup", function() {
                    s.addClass("filled")
                }), n.on("blur", function() {
                    "" === n.val() && s.removeClass("filled")
                }))
            })
        }

        function o() {
            var t = e(this),
                i = t.width(),
                s = t.height(),
                o = t.parent().width(),
                n = s / i,
                r = n * o;
            t.width(o), t.height(r)
        }

        function n() {
            f.each(o)
        }

        function r() {
            e(this).val().length > 0 ? e(this).parent("p").next("button").addClass("active") : e(this).parent("p").next("button").removeClass("active")
        }

        function a(t) {
            t.preventDefault();
            var i = e(this);
            i.html("Loading&hellip;"), e.ajax({
                type: "GET",
                url: i.attr("href") + "#older",
                dataType: "html",
                success: function(t) {
                    var s = e(t),
                        o = s.find("article").hide().fadeIn(500),
                        n = s.find("#loadposts a").attr("href");
                    k.append(o), i.text("View More"), void 0 !== n ? i.attr("href", n) : y.remove()
                }
            })
        }

        function l(t) {
            t.preventDefault();
            var i = e(this);
            e.ajax({
                type: "GET",
                url: i.attr("href"),
                dataType: "html",
                success: function(t) {
                    {
                        var s = e(t),
                            o = s.find(".work li").hide().fadeIn(500);
                        s.find(".work").outerHeight()
                    }
                    S.html(o), e(".work-filter li").removeClass("current"), i.parent("li").addClass("current"), $reveal.css("transform", "translateY(-" + height + "px)")
                }
            })
        }

        function d(t) {
            "success" === t.result ? (e(".subscribe").addClass("success").html('<p class="message success">Thank you for subscribing!</p>'), ga("send", {
                hitType: "event",
                eventCategory: "Form",
                eventAction: "Submission",
                eventLabel: "Blog Subscribe"
            })) : C.addClass("error")
        }
        var c = e("body"),
            u = e(window),
            h = 1;
        u.on("scroll", function() {
            c.toggleClass("scrolled", u.scrollTop() > h)
        });
        var p = e(".toggle");
        p.on("click", t), i(), e(document).ajaxComplete(i), s(), e(document).ajaxComplete(s).bind("gform_post_render", s);
        var f = e(document.querySelectorAll(".wp-video iframe"));
        n(), e(window).resize(n);
        var _ = 74,
            v = 1e3,
            m = e(".js-smoothscroll");
        e("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(t) {
            (t.which > 0 || "mousedown" === t.type || "mousewheel" === t.type) && e("html, body").stop()
        }), m.on("click", function() {
            var t = e(this),
                i = e(t.attr("href")).offset().top;
            return e("html, body").stop().animate({
                scrollTop: i - _
            }, v), !1
        }), e(".social-buttons a").on("click", function(e) {
            e.preventDefault(), window.open(this.href, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=600")
        }), e(".search input, .subscribe input, .field-planner-accordion input").on("keyup", r), e(".icon_tabs").each(function() {
            $icons = e(this).find(".icons"), $tabs = e(this).find(".tabs"), $tabs.slick({
                slide: "li",
                slidesToShow: 1,
                arrows: !1,
                asNavFor: $icons
            }), $icons.slick({
                slide: "li",
                slidesToShow: 3,
                asNavFor: $tabs,
                centerMode: !1,
                centerPadding: 0,
                focusOnSelect: !0,
                responsive: [{
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        centerMode: !0,
                        centerPadding: "25%"
                    }
                }]
            }), $iconsItems = $icons.find("li"), $iconsItems.on("click", function() {
                $iconsItems.removeClass("active"), e(this).addClass("active")
            })
        }), $banners = e(".banners").slick({
            slide: "li",
            slidesToShow: 1
        }), $banners.find("video").length > 0 && $banners.find("video").get(0).play(), e("header.page video").length > 0 && e("header.page video").get(0).play(), e("div.blog ul").slick({
            slide: "li",
            slidesToShow: 1,
            dots: !1,
            arrows: !0,
            responsive: [{
                breakpoint: 700,
                settings: {
                    dots: !0,
                    arrows: !1
                }
            }]
        }), e(".social-feeds .twitter").slick({
            slide: "li",
            slidesToShow: 1,
            dots: !0,
            arrows: !1
        }), e(".screens").slick({
            slide: "li",
            slidesToShow: 1,
            arrows: !1,
            centerMode: !0,
            centerPadding: "50%",
            variableWidth: !0,
            focusOnSelect: !0,
            autoplay: !0,
            autoplaySpeed: 5e3,
            pauseOnHover: !1,
            cssEase: "ease-in-out",
            speed: 1e3
        }), e(".the-stats").slick({
            slide: "li",
            slidesToShow: 1,
            arrows: !1,
            centerMode: !0,
            centerPadding: 0,
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 700,
                settings: {
                    centerPadding: "20%"
                }
            }]
        }), e(".testimonies").each(function() {
            $avatars = e(this).find(".avatars"), $quotes = e(this).find(".quotes");
            var t = ($avatars.slick({
                slide: "li",
                slidesToShow: 3,
                arrows: !1,
                focusOnSelect: !0,
                asNavFor: $quotes,
                autoplay: !0,
                autoplaySpeed: 7e3,
                pauseOnHover: !1,
                cssEase: "ease-in-out",
                speed: 1e3
            }), $quotes.slick({
                slide: "li",
                slidesToShow: 1,
                asNavFor: $avatars,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 7e3,
                pauseOnHover: !1,
                cssEase: "ease-in-out",
                speed: 1e3
            }));
            $avatarsItems = $avatars.find("li"), $avatarsItems.removeClass("active"), $avatarsItems.first().addClass("active");
            var i = !0;
            $avatarsItems.on("click", function() {
                0 != i && ($avatarsItems.removeClass("active"), e(this).addClass("active"))
            }), t.on("beforeChange", function(e, t, s, o) {
                i = !1, $avatarsItems.removeClass("active"), $nextSlide = $avatarsItems.eq(o), setTimeout(function() {
                    $nextSlide.addClass("active"), i = !0, console.log(i)
                }, 1e3)
            })
        }), e(".auto-slides").slick({
            slide: "li",
            slidesToShow: 1,
            centerMode: !0,
            centerPadding: "22%",
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 5e3,
            pauseOnHover: !1,
            cssEase: "ease-in-out",
            speed: 1e3
        });
        var g = e(".highlights"),
            w = e("#Pink_Dots circle");
        g.slick({
            slide: "li",
            slidesToShow: 1,
            arrows: !1,
            autoplay: !0,
            pauseOnHover: !1,
            fade: !0
        }), g.on("beforeChange", function(e, t, i, s) {
            var o = g.find("[data-slick-index=" + s + "]"),
                n = o.data("dot"),
                r = w.filter("." + n);
            w.attr("data-current", "false"), r.attr("data-current", "true")
        }), e(".images_top_left").slick({
            slide: "img",
            slidesToShow: 1,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 5e3,
            speed: 1e3,
            fade: !0,
            pauseOnHover: !1
        }), e(".images_top_right").slick({
            slide: "img",
            slidesToShow: 1,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 4500,
            speed: 1e3,
            fade: !0,
            pauseOnHover: !1
        }), e(".images_lower_left").slick({
            slide: "img",
            slidesToShow: 1,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 4e3,
            speed: 1e3,
            fade: !0
        }), e(".images_mid_right").slick({
            slide: "img",
            slidesToShow: 1,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 5e3,
            speed: 900,
            fade: !0,
            pauseOnHover: !1
        }), e(".images_lower_right").slick({
            slide: "img",
            slidesToShow: 1,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 4500,
            speed: 900,
            fade: !0,
            pauseOnHover: !1
        }), e(".map").length > 0 && e(window).on("scroll", function() {
            var t = e(window).scrollTop();
            t >= e(".map").offset().top - 250 && e(".map").addClass("active")
        }), u.load(function() {
            e(".compare").twentytwenty({
                default_offset_pct: .5
            }), c.hasClass("single-case-study") && jsPlumb.bind("ready", function(e, t) {
                if (document.getElementById("mood-left-1")) {
                    var i = jsPlumb.getInstance({
                        PaintStyle: {
                            lineWidth: 1,
                            strokeStyle: "#a2a2a2"
                        }
                    });
                    i.connect({
                        source: "mood-left-1",
                        target: "mood-left-2",
                        connector: ["Flowchart", {
                            cornerRadius: 1
                        }],
                        anchors: [
                            [.75, 1, 0, 1],
                            [.5, 0, 0, -1]
                        ],
                        endpoint: "Blank"
                    }), u.on("resize", function() {
                        i.repaintEverything()
                    })
                }
                if (document.getElementById("mood-right-2")) {
                    var s = jsPlumb.getInstance({
                        PaintStyle: {
                            lineWidth: 1,
                            strokeStyle: "#a2a2a2"
                        }
                    });
                    s.connect({
                        source: "mood-right-2",
                        target: "mood",
                        connector: ["Flowchart", {
                            cornerRadius: 1
                        }],
                        anchors: ["Top", "Right"],
                        endpoint: "Blank"
                    }), u.on("resize", function() {
                        s.repaintEverything()
                    })
                }
                if (document.getElementById("styleguide-main-caption")) {
                    var o = jsPlumb.getInstance({
                        PaintStyle: {
                            lineWidth: 1,
                            strokeStyle: "#a2a2a2"
                        }
                    });
                    o.connect({
                        source: "styleguide-main-caption",
                        target: "styleguide-main",
                        connector: ["Flowchart", {
                            cornerRadius: 1
                        }],
                        anchors: ["Right", [.1, .5, -1, 0]],
                        endpoint: "Blank"
                    }), u.on("resize", function() {
                        o.repaintEverything()
                    })
                }
            })
        });
        var y = e("#loadposts"),
            b = e(y.find("a")),
            k = e("#older .articles");
        b.on("click", a);
        var T = document.getElementById("older");
        if (e(T).length > 0) {
            new Waypoint({
                element: T,
                handler: function(t) {
                    e("body").toggleClass("scroll-sticky")
                },
                offset: "100%"
            })
        }
        u.on("load", function() {
            function t() {
                var e = u.scrollTop(),
                    t = u.height(),
                    s = e + t,
                    n = -(o - (s - r));
                n > 0 && (n = 0), s >= r && i.css("transform", "translateY(" + n + "px)")
            }
            var i = e(".reveal");
            if (i.length > 0) {
                var s = e("section.page"),
                    o = i.outerHeight(),
                    n = i.offset().top,
                    r = Math.max(n, n + o);
                s.css("padding-bottom", o), i.css("transform", "translateY(-" + o + "px)"), u.on("resize scroll", t)
            }
        });
        var x = e(".work-filter li a"),
            S = e(".work");
        x.on("click", l), e(".video-play").each(function(t, i) {
            var s = e(i),
                o = s.next("video").get(0);
            e(i).on("click", function() {
                "on" === s.attr("data-toggled") ? (o.pause(), s.attr("data-toggled", "off")) : (o.play(), s.attr("data-toggled", "on"))
            })
        });
        var C = e(".subscribe form");
        C.ajaxChimp({
            url: "//uptrending.us11.list-manage.com/subscribe/post?u=d3d54c1be8a5bc30793f161f9&amp;id=73ac0b1ca2",
            callback: d
        })
    }),
    function(e) {
        e.fn.autogrow = function(t) {
            return this.filter("textarea").each(function() {
                var i = this,
                    s = e(i),
                    o = s.height(),
                    n = s.hasClass("autogrow-short") ? 0 : parseInt(s.css("lineHeight")) || 0,
                    r = e.extend({
                        preGrowCallback: null,
                        postGrowCallback: null
                    }, t),
                    a = e("<div></div>").css({
                        position: "absolute",
                        top: -1e4,
                        left: -1e4,
                        width: s.width(),
                        fontSize: s.css("fontSize"),
                        fontFamily: s.css("fontFamily"),
                        fontWeight: s.css("fontWeight"),
                        lineHeight: s.css("lineHeight"),
                        resize: "none",
                        "word-wrap": "break-word"
                    }).appendTo(document.body),
                    l = function(e) {
                        var t = function(e, t) {
                                for (var i = 0, s = ""; t > i; i++) s += e;
                                return s
                            },
                            l = i.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function(e) {
                                return t("&nbsp;", e.length - 1) + " "
                            });
                        e && e.data && "keydown" === e.data.event && 13 === e.keyCode && (l += "<br />"), a.css("width", s.width()), a.html(l + (0 === n ? "..." : ""));
                        var d = Math.max(a.height() + n, o);
                        null != r.preGrowCallback && (d = r.preGrowCallback(s, a, d, o)), s.height(d), null != r.postGrowCallback && r.postGrowCallback(s)
                    };
                s.change(l).keyup(l).keydown({
                    event: "keydown"
                }, l), e(window).resize(l), l()
            })
        }
    }(jQuery),
    function() {
        var e, t, i, s, o, n = {}.hasOwnProperty,
            r = function(e, t) {
                function i() {
                    this.constructor = e
                }
                for (var s in t) n.call(t, s) && (e[s] = t[s]);
                return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
            };
        s = function() {
            function e() {
                this.options_index = 0, this.parsed = []
            }
            return e.prototype.add_node = function(e) {
                return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
            }, e.prototype.add_group = function(e) {
                var t, i, s, o, n, r;
                for (t = this.parsed.length, this.parsed.push({
                        array_index: t,
                        group: !0,
                        label: this.escapeExpression(e.label),
                        title: e.title ? e.title : void 0,
                        children: 0,
                        disabled: e.disabled,
                        classes: e.className
                    }), n = e.childNodes, r = [], s = 0, o = n.length; o > s; s++) i = n[s], r.push(this.add_option(i, t, e.disabled));
                return r
            }, e.prototype.add_option = function(e, t, i) {
                return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: e.value,
                    text: e.text,
                    html: e.innerHTML,
                    title: e.title ? e.title : void 0,
                    selected: e.selected,
                    disabled: i === !0 ? i : e.disabled,
                    group_array_index: t,
                    group_label: null != t ? this.parsed[t].label : null,
                    classes: e.className,
                    style: e.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, e.prototype.escapeExpression = function(e) {
                var t, i;
                return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(i, function(e) {
                    return t[e] || "&amp;"
                })) : e
            }, e
        }(), s.select_to_array = function(e) {
            var t, i, o, n, r;
            for (i = new s, r = e.childNodes, o = 0, n = r.length; n > o; o++) t = r[o], i.add_node(t);
            return i.parsed
        }, t = function() {
            function e(t, i) {
                this.form_field = t, this.options = null != i ? i : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
            }
            return e.prototype.set_default_values = function() {
                var e = this;
                return this.click_test_action = function(t) {
                    return e.test_active_click(t)
                }, this.activate_action = function(t) {
                    return e.activate_field(t)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
            }, e.prototype.set_default_text = function() {
                return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
            }, e.prototype.choice_label = function(e) {
                return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html
            }, e.prototype.mouse_enter = function() {
                return this.mouse_on_container = !0
            }, e.prototype.mouse_leave = function() {
                return this.mouse_on_container = !1
            }, e.prototype.input_focus = function() {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function() {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, e.prototype.input_blur = function() {
                var e = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                    return e.blur_test()
                }, 100))
            }, e.prototype.results_option_build = function(e) {
                var t, i, s, o, n;
                for (t = "", n = this.results_data, s = 0, o = n.length; o > s; s++) i = n[s], t += i.group ? this.result_add_group(i) : this.result_add_option(i), (null != e ? e.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i)));
                return t
            }, e.prototype.result_add_option = function(e) {
                var t, i;
                return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), i = document.createElement("li"), i.className = t.join(" "), i.style.cssText = e.style, i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
            }, e.prototype.result_add_group = function(e) {
                var t, i;
                return (e.search_match || e.group_match) && e.active_options > 0 ? (t = [], t.push("group-result"), e.classes && t.push(e.classes), i = document.createElement("li"), i.className = t.join(" "), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
            }, e.prototype.results_update_field = function() {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, e.prototype.reset_single_select_options = function() {
                var e, t, i, s, o;
                for (s = this.results_data, o = [], t = 0, i = s.length; i > t; t++) e = s[t], o.push(e.selected ? e.selected = !1 : void 0);
                return o
            }, e.prototype.results_toggle = function() {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, e.prototype.results_search = function() {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, e.prototype.winnow_results = function() {
                var e, t, i, s, o, n, r, a, l, d, c, u;
                for (this.no_results_clear(), s = 0, n = this.get_search_text(), e = n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(e, "i"), i = this.get_search_regex(e), u = this.results_data, d = 0, c = u.length; c > d; d++) t = u[d], t.search_match = !1, o = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (o = this.results_data[t.group_array_index], 0 === o.active_options && o.search_match && (s += 1), o.active_options += 1), t.search_text = t.group ? t.label : t.html, (!t.group || this.group_search) && (t.search_match = this.search_string_match(t.search_text, i), t.search_match && !t.group && (s += 1), t.search_match ? (n.length && (r = t.search_text.search(l), a = t.search_text.substr(0, r + n.length) + "</em>" + t.search_text.substr(r + n.length), t.search_text = a.substr(0, r) + "<em>" + a.substr(r)), null != o && (o.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
                return this.result_clear_highlight(), 1 > s && n.length ? (this.update_results_content(""), this.no_results(n)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, e.prototype.get_search_regex = function(e) {
                var t;
                return t = this.search_contains ? "" : "^", new RegExp(t + e, "i")
            }, e.prototype.search_string_match = function(e, t) {
                var i, s, o, n;
                if (t.test(e)) return !0;
                if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (s = e.replace(/\[|\]/g, "").split(" "), s.length))
                    for (o = 0, n = s.length; n > o; o++)
                        if (i = s[o], t.test(i)) return !0
            }, e.prototype.choices_count = function() {
                var e, t, i, s;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, s = this.form_field.options, t = 0, i = s.length; i > t; t++) e = s[t], e.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, e.prototype.choices_click = function(e) {
                return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, e.prototype.keyup_checker = function(e) {
                var t, i;
                switch (t = null != (i = e.which) ? i : e.keyCode, this.search_field_scale(), t) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (e.preventDefault(), this.results_showing) return this.result_select(e);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                }
            }, e.prototype.clipboard_event_checker = function() {
                var e = this;
                return setTimeout(function() {
                    return e.results_search()
                }, 50)
            }, e.prototype.container_width = function() {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, e.prototype.include_option_in_results = function(e) {
                return this.is_multiple && !this.display_selected_options && e.selected ? !1 : !this.display_disabled_options && e.disabled ? !1 : e.empty ? !1 : !0
            }, e.prototype.search_results_touchstart = function(e) {
                return this.touch_started = !0, this.search_results_mouseover(e)
            }, e.prototype.search_results_touchmove = function(e) {
                return this.touch_started = !1, this.search_results_mouseout(e)
            }, e.prototype.search_results_touchend = function(e) {
                return this.touch_started ? this.search_results_mouseup(e) : void 0
            }, e.prototype.outerHTML = function(e) {
                var t;
                return e.outerHTML ? e.outerHTML : (t = document.createElement("div"), t.appendChild(e), t.innerHTML)
            }, e.browser_is_supported = function() {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
            }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
        }(), e = jQuery, e.fn.extend({
            chosen: function(s) {
                return t.browser_is_supported() ? this.each(function() {
                    var t, o;
                    t = e(this), o = t.data("chosen"), "destroy" === s && o instanceof i ? o.destroy() : o instanceof i || t.data("chosen", new i(this, s))
                }) : this
            }
        }), i = function(t) {
            function i() {
                return o = i.__super__.constructor.apply(this, arguments)
            }
            return r(i, t), i.prototype.setup = function() {
                return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, i.prototype.set_up_html = function() {
                var t, i;
                return t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), i = {
                    "class": t.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", i), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, i.prototype.on_ready = function() {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, i.prototype.register_observers = function() {
                var e = this;
                return this.container.bind("touchstart.chosen", function(t) {
                    return e.container_mousedown(t), t.preventDefault()
                }), this.container.bind("touchend.chosen", function(t) {
                    return e.container_mouseup(t), t.preventDefault()
                }), this.container.bind("mousedown.chosen", function(t) {
                    e.container_mousedown(t)
                }), this.container.bind("mouseup.chosen", function(t) {
                    e.container_mouseup(t)
                }), this.container.bind("mouseenter.chosen", function(t) {
                    e.mouse_enter(t)
                }), this.container.bind("mouseleave.chosen", function(t) {
                    e.mouse_leave(t)
                }), this.search_results.bind("mouseup.chosen", function(t) {
                    e.search_results_mouseup(t)
                }), this.search_results.bind("mouseover.chosen", function(t) {
                    e.search_results_mouseover(t)
                }), this.search_results.bind("mouseout.chosen", function(t) {
                    e.search_results_mouseout(t)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                    e.search_results_mousewheel(t)
                }), this.search_results.bind("touchstart.chosen", function(t) {
                    e.search_results_touchstart(t)
                }), this.search_results.bind("touchmove.chosen", function(t) {
                    e.search_results_touchmove(t)
                }), this.search_results.bind("touchend.chosen", function(t) {
                    e.search_results_touchend(t)
                }), this.form_field_jq.bind("chosen:updated.chosen", function(t) {
                    e.results_update_field(t)
                }), this.form_field_jq.bind("chosen:activate.chosen", function(t) {
                    e.activate_field(t)
                }), this.form_field_jq.bind("chosen:open.chosen", function(t) {
                    e.container_mousedown(t)
                }), this.form_field_jq.bind("chosen:close.chosen", function(t) {
                    e.input_blur(t)
                }), this.search_field.bind("blur.chosen", function(t) {
                    e.input_blur(t)
                }), this.search_field.bind("keyup.chosen", function(t) {
                    e.keyup_checker(t)
                }), this.search_field.bind("keydown.chosen", function(t) {
                    e.keydown_checker(t)
                }), this.search_field.bind("focus.chosen", function(t) {
                    e.input_focus(t)
                }), this.search_field.bind("cut.chosen", function(t) {
                    e.clipboard_event_checker(t)
                }), this.search_field.bind("paste.chosen", function(t) {
                    e.clipboard_event_checker(t)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
                    e.choices_click(t)
                }) : this.container.bind("click.chosen", function(e) {
                    e.preventDefault()
                })
            }, i.prototype.destroy = function() {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, i.prototype.search_field_disabled = function() {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, i.prototype.container_mousedown = function(t) {
                return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, i.prototype.container_mouseup = function(e) {
                return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
            }, i.prototype.search_results_mousewheel = function(e) {
                var t;
                return e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
            }, i.prototype.blur_test = function() {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, i.prototype.close_field = function() {
                return e(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, i.prototype.activate_field = function() {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, i.prototype.test_active_click = function(t) {
                var i;
                return i = e(t.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
            }, i.prototype.results_build = function() {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, i.prototype.result_do_highlight = function(e) {
                var t, i, s, o, n;
                if (e.length) {
                    if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), n = this.search_results.scrollTop(), o = s + n, i = this.result_highlight.position().top + this.search_results.scrollTop(), t = i + this.result_highlight.outerHeight(), t >= o) return this.search_results.scrollTop(t - s > 0 ? t - s : 0);
                    if (n > i) return this.search_results.scrollTop(i)
                }
            }, i.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null;
            }, i.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, i.prototype.update_results_content = function(e) {
                return this.search_results.html(e)
            }, i.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, i.prototype.set_tab_index = function() {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
            }, i.prototype.set_label_behavior = function() {
                var t = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(e) {
                    return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
                }) : void 0
            }, i.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, i.prototype.search_results_mouseup = function(t) {
                var i;
                return i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), i.length ? (this.result_highlight = i, this.result_select(t), this.search_field.focus()) : void 0
            }, i.prototype.search_results_mouseover = function(t) {
                var i;
                return i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), i ? this.result_do_highlight(i) : void 0
            }, i.prototype.search_results_mouseout = function(t) {
                return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, i.prototype.choice_build = function(t) {
                var i, s, o = this;
                return i = e("<li />", {
                    "class": "search-choice"
                }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? i.addClass("search-choice-disabled") : (s = e("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": t.array_index
                }), s.bind("click.chosen", function(e) {
                    return o.choice_destroy_link_click(e)
                }), i.append(s)), this.search_container.before(i)
            }, i.prototype.choice_destroy_link_click = function(t) {
                return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t.target))
            }, i.prototype.choice_destroy = function(e) {
                return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, i.prototype.results_reset = function() {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, i.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, i.prototype.result_select = function(e) {
                var t, i;
                return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), i = this.results_data[t[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())) : void 0
            }, i.prototype.single_set_selected_text = function(e) {
                return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e)
            }, i.prototype.result_deselect = function(e) {
                var t;
                return t = this.results_data[e], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[t.options_index].value
                }), this.search_field_scale(), !0)
            }, i.prototype.single_deselect_control_build = function() {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, i.prototype.get_search_text = function() {
                return e("<div/>").text(e.trim(this.search_field.val())).html()
            }, i.prototype.winnow_results_set_highlight = function() {
                var e, t;
                return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e ? this.result_do_highlight(e) : void 0
            }, i.prototype.no_results = function(t) {
                var i;
                return i = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), i.find("span").first().html(t), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, i.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, i.prototype.keydown_arrow = function() {
                var e;
                return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
            }, i.prototype.keyup_arrow = function() {
                var e;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, i.prototype.keydown_backstroke = function() {
                var e;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, i.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, i.prototype.keydown_checker = function(e) {
                var t, i;
                switch (t = null != (i = e.which) ? i : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                        break;
                    case 13:
                        this.results_showing && e.preventDefault();
                        break;
                    case 32:
                        this.disable_search && e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        e.preventDefault(), this.keydown_arrow()
                }
            }, i.prototype.search_field_scale = function() {
                var t, i, s, o, n, r, a, l, d;
                if (this.is_multiple) {
                    for (s = 0, a = 0, n = "position:absolute; left: -1000px; top: -1000px; display:none;", r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, d = r.length; d > l; l++) o = r[l], n += o + ":" + this.search_field.css(o) + ";";
                    return t = e("<div />", {
                        style: n
                    }), t.text(this.search_field.val()), e("body").append(t), a = t.width() + 25, t.remove(), i = this.container.outerWidth(), a > i - 10 && (a = i - 10), this.search_field.css({
                        width: a + "px"
                    })
                }
            }, i
        }(t)
    }.call(this),
    function(e) {
        "use strict";

        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }

        function i(e, t) {
            var i = s(e, t) ? n : o;
            i(e, t)
        }
        var s, o, n;
        "classList" in document.documentElement ? (s = function(e, t) {
            return e.classList.contains(t)
        }, o = function(e, t) {
            e.classList.add(t)
        }, n = function(e, t) {
            e.classList.remove(t)
        }) : (s = function(e, i) {
            return t(i).test(e.className)
        }, o = function(e, t) {
            s(e, t) || (e.className = e.className + " " + t)
        }, n = function(e, i) {
            e.className = e.className.replace(t(i), " ")
        });
        var r = {
            hasClass: s,
            addClass: o,
            removeClass: n,
            toggleClass: i,
            has: s,
            add: o,
            remove: n,
            toggle: i
        };
        "function" == typeof define && define.amd ? define(r) : "object" == typeof exports ? module.exports = r : e.classie = r
    }(window),
    function() {
        ! function() {
            var e, t = -1,
                i = window.navigator.userAgent,
                s = i.indexOf("MSIE "),
                o = i.indexOf("Trident/index.html");
            if (s > 0) t = parseInt(i.substring(s + 5, i.indexOf(".", s)), 10);
            else if (o > 0) {
                var n = i.indexOf("rv:");
                t = parseInt(i.substring(n + 3, i.indexOf(".", n)), 10)
            }
            return t > -1 ? t : e
        }(), document.getElementById("single")
    }(),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e, t) {
        function i(e) {
            function t(e) {
                s ? (i(), q(t), o = !0, s = !1) : o = !1
            }
            var i = e,
                s = !1,
                o = !1;
            this.kick = function(e) {
                s = !0, o || t()
            }, this.end = function(e) {
                var t = i;
                e && (o ? (i = s ? function() {
                    t(), e()
                } : e, s = !0) : e())
            }
        }

        function s() {
            return !0
        }

        function o() {
            return !1
        }

        function n(e) {
            e.preventDefault()
        }

        function r(e) {
            L[e.target.tagName.toLowerCase()] || e.preventDefault()
        }

        function a(e) {
            return 1 === e.which && !e.ctrlKey && !e.altKey
        }

        function l(e, t) {
            var i, s;
            if (e.identifiedTouch) return e.identifiedTouch(t);
            for (i = -1, s = e.length; ++i < s;)
                if (e[i].identifier === t) return e[i]
        }

        function d(e, t) {
            var i = l(e.changedTouches, t.identifier);
            if (i && (i.pageX !== t.pageX || i.pageY !== t.pageY)) return i
        }

        function c(e) {
            var t;
            a(e) && (t = {
                target: e.target,
                startX: e.pageX,
                startY: e.pageY,
                timeStamp: e.timeStamp
            }, D(document, V.move, u, t), D(document, V.cancel, h, t))
        }

        function u(e) {
            var t = e.data;
            g(e, t, e, p)
        }

        function h(e) {
            p()
        }

        function p() {
            E(document, V.move, u), E(document, V.cancel, h)
        }

        function f(e) {
            var t, i;
            L[e.target.tagName.toLowerCase()] || (t = e.changedTouches[0], i = {
                target: t.target,
                startX: t.pageX,
                startY: t.pageY,
                timeStamp: e.timeStamp,
                identifier: t.identifier
            }, D(document, X.move + "." + t.identifier, _, i), D(document, X.cancel + "." + t.identifier, v, i))
        }

        function _(e) {
            var t = e.data,
                i = d(e, t);
            i && g(e, t, i, m)
        }

        function v(e) {
            var t = e.data,
                i = l(e.changedTouches, t.identifier);
            i && m(t.identifier)
        }

        function m(e) {
            E(document, "." + e, _), E(document, "." + e, v)
        }

        function g(e, t, i, s) {
            var o = i.pageX - t.startX,
                n = i.pageY - t.startY;
            M * M > o * o + n * n || b(e, t, i, o, n, s)
        }

        function w() {
            return this._handled = s, !1
        }

        function y(e) {
            e._handled()
        }

        function b(e, t, i, s, o, n) {
            {
                var r, a;
                t.target
            }
            r = e.targetTouches, a = e.timeStamp - t.timeStamp, t.type = "movestart", t.distX = s, t.distY = o, t.deltaX = s, t.deltaY = o, t.pageX = i.pageX, t.pageY = i.pageY, t.velocityX = s / a, t.velocityY = o / a, t.targetTouches = r, t.finger = r ? r.length : 1, t._handled = w, t._preventTouchmoveDefault = function() {
                e.preventDefault()
            }, z(t.target, t), n(t.identifier)
        }

        function k(e) {
            var t = e.data.timer;
            e.data.touch = e, e.data.timeStamp = e.timeStamp, t.kick()
        }

        function T(e) {
            var t = e.data.event,
                i = e.data.timer;
            x(), O(t, i, function() {
                setTimeout(function() {
                    E(t.target, "click", o)
                }, 0)
            })
        }

        function x(e) {
            E(document, V.move, k), E(document, V.end, T)
        }

        function S(e) {
            var t = e.data.event,
                i = e.data.timer,
                s = d(e, t);
            s && (e.preventDefault(), t.targetTouches = e.targetTouches, e.data.touch = s, e.data.timeStamp = e.timeStamp, i.kick())
        }

        function C(e) {
            var t = e.data.event,
                i = e.data.timer,
                s = l(e.changedTouches, t.identifier);
            s && ($(t), O(t, i))
        }

        function $(e) {
            E(document, "." + e.identifier, S), E(document, "." + e.identifier, C)
        }

        function A(e, t, i, s) {
            var o = i - e.timeStamp;
            e.type = "move", e.distX = t.pageX - e.startX, e.distY = t.pageY - e.startY, e.deltaX = t.pageX - e.pageX, e.deltaY = t.pageY - e.pageY, e.velocityX = .3 * e.velocityX + .7 * e.deltaX / o, e.velocityY = .3 * e.velocityY + .7 * e.deltaY / o, e.pageX = t.pageX, e.pageY = t.pageY
        }

        function O(e, t, i) {
            t.end(function() {
                return e.type = "moveend", z(e.target, e), i && i()
            })
        }

        function P(e, t, i) {
            return D(this, "movestart.move", y), !0
        }

        function j(e) {
            return E(this, "dragstart drag", n), E(this, "mousedown touchstart", r), E(this, "movestart", y), !0
        }

        function H(e) {
            "move" !== e.namespace && "moveend" !== e.namespace && (D(this, "dragstart." + e.guid + " drag." + e.guid, n, t, e.selector), D(this, "mousedown." + e.guid, r, t, e.selector))
        }

        function I(e) {
            "move" !== e.namespace && "moveend" !== e.namespace && (E(this, "dragstart." + e.guid + " drag." + e.guid), E(this, "mousedown." + e.guid))
        }
        var M = 6,
            D = e.event.add,
            E = e.event.remove,
            z = function(t, i, s) {
                e.event.trigger(i, s, t)
            },
            q = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                    return window.setTimeout(function() {
                        e()
                    }, 25)
                }
            }(),
            L = {
                textarea: !0,
                input: !0,
                select: !0,
                button: !0
            },
            V = {
                move: "mousemove",
                cancel: "mouseup dragstart",
                end: "mouseup"
            },
            X = {
                move: "touchmove",
                cancel: "touchend",
                end: "touchend"
            };
        e.event.special.movestart = {
            setup: P,
            teardown: j,
            add: H,
            remove: I,
            _default: function(e) {
                function s(t) {
                    A(n, r.touch, r.timeStamp), z(e.target, n)
                }
                var n, r;
                e._handled() && (n = {
                    target: e.target,
                    startX: e.startX,
                    startY: e.startY,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    distX: e.distX,
                    distY: e.distY,
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    velocityX: e.velocityX,
                    velocityY: e.velocityY,
                    timeStamp: e.timeStamp,
                    identifier: e.identifier,
                    targetTouches: e.targetTouches,
                    finger: e.finger
                }, r = {
                    event: n,
                    timer: new i(s),
                    touch: t,
                    timeStamp: t
                }, e.identifier === t ? (D(e.target, "click", o), D(document, V.move, k, r), D(document, V.end, T, r)) : (e._preventTouchmoveDefault(), D(document, X.move + "." + e.identifier, S, r), D(document, X.end + "." + e.identifier, C, r)))
            }
        }, e.event.special.move = {
            setup: function() {
                D(this, "movestart.move", e.noop)
            },
            teardown: function() {
                E(this, "movestart.move", e.noop)
            }
        }, e.event.special.moveend = {
            setup: function() {
                D(this, "movestart.moveend", e.noop)
            },
            teardown: function() {
                E(this, "movestart.moveend", e.noop)
            }
        }, D(document, "mousedown.move", c), D(document, "touchstart.move", f), "function" == typeof Array.prototype.indexOf && ! function(e, t) {
            for (var i = ["changedTouches", "targetTouches"], s = i.length; s--;) - 1 === e.event.props.indexOf(i[s]) && e.event.props.push(i[s])
        }(e)
    }),
    function(e) {
        "use strict";
        e.ajaxChimp = {
            responses: {
                "We have sent you a confirmation email": 0,
                "Please enter a value": 1,
                "An email address must contain a single @": 2,
                "The domain portion of the email address is invalid (the portion after the @: )": 3,
                "The username portion of the email address is invalid (the portion before the @: )": 4,
                "This email address looks fake or invalid. Please enter a real email address": 5
            },
            translations: {
                en: null
            },
            init: function(t, i) {
                e(t).ajaxChimp(i)
            }
        }, e.fn.ajaxChimp = function(t) {
            return e(this).each(function(i, s) {
                var o = e(s),
                    n = o.find("input[type=email]"),
                    r = o.find("label[for=" + n.attr("id") + "]"),
                    a = e.extend({
                        url: o.attr("action"),
                        language: "en"
                    }, t),
                    l = a.url.replace("/post?", "/post-json?").concat("&c=?");
                o.attr("novalidate", "true"), n.attr("name", "EMAIL"), o.submit(function() {
                    function t(t) {
                        if ("success" === t.result) i = "We have sent you a confirmation email", r.removeClass("error").addClass("valid"), n.removeClass("error").addClass("valid");
                        else {
                            n.removeClass("valid").addClass("error"), r.removeClass("valid").addClass("error");
                            var s = -1;
                            try {
                                var o = t.msg.split(" - ", 2);
                                if (void 0 === o[1]) i = t.msg;
                                else {
                                    var l = parseInt(o[0], 10);
                                    l.toString() === o[0] ? (s = o[0], i = o[1]) : (s = -1, i = t.msg)
                                }
                            } catch (d) {
                                s = -1, i = t.msg
                            }
                        }
                        "en" !== a.language && void 0 !== e.ajaxChimp.responses[i] && e.ajaxChimp.translations && e.ajaxChimp.translations[a.language] && e.ajaxChimp.translations[a.language][e.ajaxChimp.responses[i]] && (i = e.ajaxChimp.translations[a.language][e.ajaxChimp.responses[i]]), r.html(i), r.show(2e3), a.callback && a.callback(t)
                    }
                    var i, s = {},
                        d = o.serializeArray();
                    e.each(d, function(e, t) {
                        s[t.name] = t.value
                    }), e.ajax({
                        url: l,
                        data: s,
                        success: t,
                        dataType: "jsonp",
                        error: function(e, t) {
                            console.log("mailchimp ajax submit error: " + t)
                        }
                    });
                    var c = "Submitting...";
                    return "en" !== a.language && e.ajaxChimp.translations && e.ajaxChimp.translations[a.language] && e.ajaxChimp.translations[a.language].submit && (c = e.ajaxChimp.translations[a.language].submit), r.html(c).show(2e3), !1
                })
            }), this
        }
    }(jQuery),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t = window.Slick || {};
        t = function() {
            function t(t, s) {
                var o, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.hidden = "hidden", n.paused = !1, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, o = e(t).data("slick") || {}, n.options = e.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0), n.checkResponsive(!0)
            }
            var i = 0;
            return t
        }(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, s) {
            var o = this;
            if ("boolean" == typeof i) s = i, i = null;
            else if (0 > i || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : s ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : s === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var s = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function(e) {
                    e = Math.ceil(e), o.options.vertical === !1 ? (s[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(s))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (o.applyTransition(), t = Math.ceil(t), s[o.animType] = o.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(s), i && setTimeout(function() {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, t.prototype.asNavFor = function(t) {
            var i = this,
                s = i.options.asNavFor;
            s && null !== s && (s = e(s).not(i.$slider)), null !== s && "object" == typeof s && s.each(function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this;
            e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }, t.prototype.buildArrows = function() {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, s = this;
            if (s.options.dots === !0 && s.slideCount > s.options.slidesToShow) {
                for (i = '<ul class="' + s.options.dotsClass + '">', t = 0; t <= s.getDotCount(); t += 1) i += "<li>" + s.options.customPaging.call(this, s, t) + "</li>";
                i += "</ul>", s.$dots = e(i).appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, s, o, n, r, a = this;
            if (s = document.createDocumentFragment(), n = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(n.length / r), e = 0; o > e; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = e * r + (t * a.options.slidesPerRow + i);
                            n.get(c) && d.appendChild(n.get(c))
                        }
                        l.appendChild(d)
                    }
                    s.appendChild(l)
                }
                a.$slider.html(s), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var s, o, n, r = this,
                a = !1,
                l = r.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = l : "min" === r.respondTo && (n = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (s in r.breakpoints) r.breakpoints.hasOwnProperty(s) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[s] && (o = r.breakpoints[s]) : n > r.breakpoints[s] && (o = r.breakpoints[s]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var s, o, n, r = this,
                a = e(t.target);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, s = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === s ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === s ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i, s = this;
            if (t = s.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = i;
                        break
                    }
                    i = t[o]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
        }, t.prototype.clickHandler = function(e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout(function() {
                i.disableTransition(e), t.call()
            }, i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                s = 0;
            if (e.options.infinite === !0)
                for (; t < e.slideCount;) ++s, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (e.options.centerMode === !0) s = e.slideCount;
            else
                for (; t < e.slideCount;) ++s, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, s, o = this,
                n = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, n = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, n = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, n = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, n = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = o.options.vertical === !1 ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + n, o.options.variableWidth === !0 && (s = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? e : e + o.options.slidesToShow), t = s[0] ? -1 * s[0].offsetLeft : 0, o.options.centerMode === !0 && (s = o.$slideTrack.children(".slick-slide").eq(o.options.infinite === !1 ? e : e + o.options.slidesToShow + 1), t = s[0] ? -1 * s[0].offsetLeft : 0, t += (o.$list.width() - s.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                s = 0,
                o = [];
            for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, s = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) o.push(i), i = s + t.options.slidesToScroll, s += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, s, o = this;
            return s = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(t, n) {
                return n.offsetLeft - s + e(n).outerWidth() / 2 > -1 * o.swipeLeft ? (i = n, !1) : void 0
            }), t = Math.abs(e(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.on("click.slick", {
                message: "next"
            }, e.changeSlide))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each(function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        s = document.createElement("img");
                    s.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, function() {
                            t.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, s.src = i
                })
            }
            var i, s, o, n, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = o + r.options.slidesToShow, r.options.fade === !0 && (o > 0 && o--, n <= r.slideCount && n++)), i = r.$slider.find(".slick-slide").slice(o, n), t(i), r.slideCount <= r.options.slidesToShow ? (s = r.$slider.find(".slick-slide"), t(s)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (s = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(s)) : 0 === r.currentSlide && (s = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(s))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.paused = !1, e.autoPlay()
        }, t.prototype.postSlide = function(e) {
            var t = this;
            t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            var e = this;
            e.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function() {
            var t, i, s = this;
            t = e("img[data-lazy]", s.$slider).length, t > 0 && (i = e("img[data-lazy]", s.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
                i.removeAttr("data-lazy"), s.progressiveLazyLoad(), s.options.adaptiveHeight === !0 && s.setPosition()
            }).error(function() {
                i.removeAttr("data-lazy"), s.progressiveLazyLoad()
            }))
        }, t.prototype.refresh = function(t) {
            var i = this,
                s = i.currentSlide;
            i.destroy(!0), e.extend(i, i.initials, {
                currentSlide: s
            }), i.init(), t || i.changeSlide({
                data: {
                    message: "index",
                    index: s
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, s, o = this,
                n = o.options.responsive || null;
            if ("array" === e.type(n) && n.length) {
                o.respondTo = o.options.respondTo || "window";
                for (t in n)
                    if (s = o.breakpoints.length - 1, i = n[t].breakpoint, n.hasOwnProperty(t)) {
                        for (; s >= 0;) o.breakpoints[s] && o.breakpoints[s] === i && o.breakpoints.splice(s, 1), s--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = n[t].settings
                    }
                o.breakpoints.sort(function(e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var s = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : s.slideCount - 1) : e = t === !0 ? --e : e, s.slideCount < 1 || 0 > e || e > s.slideCount - 1 ? !1 : (s.unload(), i === !0 ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, void s.reinit())
        }, t.prototype.setCSS = function(e) {
            var t, i, s = this,
                o = {};
            s.options.rtl === !0 && (e = -e), t = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", o[s.positionProp] = e, s.transformsEnabled === !1 ? s.$slideTrack.css(o) : (o = {}, s.cssTransitions === !1 ? (o[s.animType] = "translate(" + t + ", " + i + ")", s.$slideTrack.css(o)) : (o[s.animType] = "translate3d(" + t + ", " + i + ", 0px)", s.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each(function(s, o) {
                t = i.slideWidth * s * -1, e(o).css(i.options.rtl === !0 ? {
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                } : {
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function(t, i, s) {
            var o, n, r = this;
            if ("responsive" === t && "array" === e.type(i))
                for (n in i)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [i[n]];
                    else {
                        for (o = r.options.responsive.length - 1; o >= 0;) r.options.responsive[o].breakpoint === i[n].breakpoint && r.options.responsive.splice(o, 1), o--;
                        r.options.responsive.push(i[n])
                    } else r.options[t] = i;
            s === !0 && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, s, o, n = this;
            i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), n.options.centerMode === !0 ? (t = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (e >= t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + e, i.slice(s - t + 1, s + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = n.options.infinite === !0 ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? i.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, s, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (s = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - s; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; s > t; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.setPaused = function(e) {
            var t = this;
            t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                s = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(s.attr("data-slick-index"));
            return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
        }, t.prototype.slideHandler = function(e, t, i) {
            var s, o, n, r, a = null,
                l = this;
            return t = t || !1, l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === e || l.slideCount <= l.options.slidesToShow ? void 0 : (t === !1 && l.asNavFor(e), s = e, a = l.getLeft(s), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (0 > e || e > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (s = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(s)
            }) : l.postSlide(s))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > e || e > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (s = l.currentSlide, i !== !0 ? l.animateSlide(r, function() {
                l.postSlide(s)
            }) : l.postSlide(s))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = 0 > s ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + s : s >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : s - l.slideCount : s, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), n = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (i !== !0 ? (l.fadeSlideOut(n), l.fadeSlide(o, function() {
                l.postSlide(o)
            })) : l.postSlide(o), void l.animateHeight()) : void(i !== !0 ? l.animateSlide(a, function() {
                l.postSlide(o)
            }) : l.postSlide(o))))
        }, t.prototype.startLoad = function() {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, s, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), s = Math.round(180 * i / Math.PI), 0 > s && (s = 360 - Math.abs(s)), 45 >= s && s >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= s && s >= 315 ? o.options.rtl === !1 ? "left" : "right" : s >= 135 && 225 >= s ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? s >= 35 && 135 >= s ? "left" : "right" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i = this;
            if (i.dragging = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
                case "left":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
                    break;
                case "right":
                    t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, s, o, n, r = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !r.dragging || n && 1 !== n.length ? !1 : (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.swipeLeft = r.options.vertical === !1 ? t + s * o : t + s * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = t + s * o), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function() {
            var e = this;
            document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
                e(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + t.instanceUid + i
                })
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.activateADA = function() {
            var e = this,
                t = e.$slider.find("*").is(":focus");
            e.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false",
                tabindex: "0"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            }), t && e.$slideTrack.find(".slick-active").focus()
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.on("focus.slick blur.slick", "*", function(i) {
                i.stopImmediatePropagation();
                var s = e(this);
                setTimeout(function() {
                    t.isPlay && (s.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
                }, 0)
            })
        }, e.fn.slick = function() {
            var e, i = this,
                s = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                n = i.length,
                r = 0;
            for (r; n > r; r++)
                if ("object" == typeof s || "undefined" == typeof s ? i[r].slick = new t(i[r], s) : e = i[r].slick[s].apply(i[r].slick, o), "undefined" != typeof e) return e;
            return i
        }
    }),
    function(e) {
        e.fn.twentytwenty = function(t) {
            var i = e.extend({
                default_offset_pct: .5
            }, t);
            return this.each(function() {
                var t = i.default_offset_pct,
                    s = e(this);
                s.wrap("<div class='twentytwenty-wrapper'></div>"), s.append("<div class='twentytwenty-overlay'></div>");
                var o = s.find("img:first"),
                    n = s.find("img:last");
                s.append("<div class='twentytwenty-handle'></div>");
                var r = s.find(".twentytwenty-handle");
                r.append("<span class='twentytwenty-left-arrow'></span>"), r.append("<span class='twentytwenty-right-arrow'></span>"), s.addClass("twentytwenty-container"), o.addClass("twentytwenty-before"), n.addClass("twentytwenty-after");
                var a = s.find(".twentytwenty-overlay");
                a.append("<div class='twentytwenty-before-label'></div>"), a.append("<div class='twentytwenty-after-label'></div>");
                var l = function(e) {
                        var t = o.width(),
                            i = o.height();
                        return {
                            w: t + "px",
                            h: i + "px",
                            cw: e * t + "px"
                        }
                    },
                    d = function(e) {
                        o.css("clip", "rect(0," + e.cw + "," + e.h + ",0)"), s.css("height", e.h)
                    },
                    c = function(e) {
                        var t = l(e);
                        r.css("left", t.cw), d(t)
                    };
                e(window).on("resize.twentytwenty", function(e) {
                    c(t)
                });
                var u = 0,
                    h = 0;
                s.on("movestart", function(e) {
                    (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) && e.preventDefault(), s.addClass("active"), u = s.offset().left, h = o.width()
                }), s.on("moveend", function(e) {
                    s.removeClass("active")
                }), s.on("move", function(e) {
                    s.hasClass("active") && (t = (e.pageX - u) / h, 0 > t && (t = 0), t > 1 && (t = 1), c(t))
                }), s.find("img").on("mousedown", function(e) {
                    e.preventDefault()
                }), e(window).trigger("resize.twentytwenty")
            })
        }
    }(jQuery);;
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++)
                if (d = i[c], !d.getAttribute("data-secret")) {
                    if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
                } else;
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (200 > ~~g) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);