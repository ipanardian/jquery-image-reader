/**
*  jQuery Image Reader v1.0.0
*  (c) 2016 Ipan Ardian
*
*  A jQuery plugin that previews image very fast without needing to upload to your server
*  For details, see the web site: https://github.com/ipanardian/jquery-image-reader
*  The MIT License
*/

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory)
	} 
	else if (typeof module === 'object' && module.exports) {
		module.exports = (root, jQuery) => {
			if (jQuery === undefined) {
				if ( typeof window !== 'undefined' ) {
					jQuery = require('jquery')
				}
				else {
					jQuery = require('jquery')(root)
				}
			}
			factory(jQuery)
			return jQuery
		}
	} 
	else {
		factory(jQuery)
	}
}($ => {
	'use strict'

	$.fn.imageReader = function (options) {
		var defaults = {
			// id destination 
			destination: '#image-preview',

			// render type
			// canvas or 
			// image (default)
			renderType: 'image',

			// callback when image has loaded
			onload() {}
		}
		var settings = Object.assign(defaults, options)
		
		if (!('FileReader' in window)) {
			console.error('Your browser does not support FileReader API')
			return
		}

		// allowed image type
		const IMAGE_TYPE = new Set([
			'image/jpeg',
			'image/jpg',
			'image/png',
			'image/gif',
			'image/svg+xml',
			'image/bmp',
			'image/x-icon',
			'image/vnd.microsoft.icon'
		])

		let reader = {
			container: $(settings.destination),
			clearContainer () {
				this.container.html('')
			},
			validateMimeType (type) {
				return IMAGE_TYPE.has(type)
			},
			processRead (file) {
				if (!this.validateMimeType(file.type)) {
					console.warn('Invalid file type')
					return
				}

				try {
					let reader = new FileReader()
					reader.onload = e => {
						switch (settings.renderType) {
							case 'canvas':
								this.renderObjectToCanvas(file, e)
								break

							default:
								this.renderObjectToImage(file, e)
								break
						}
					}
					reader.readAsDataURL(file)
				}
				catch (err) {
					throw new Error(err.message) 
				}
			},
			createImage (e, onload) {
				let image = new Image()
				if (typeof onload === 'function') {
					image.onload = function() {
						onload(image)
					}
				}
				image.src = e.target.result
			},
			renderObjectToImage (f, e) {
				this.createImage(e, (img) => {
					this.container.append(img)
					this.callback(f, img)
				})
			},
			renderObjectToCanvas (f, e) {
				let canvas = document.createElement('canvas')
				let ctx = canvas.getContext('2d')

				this.createImage(e, (img) => {
					canvas.width = img.width
				    canvas.height = img.height
				    ctx.drawImage(img, 0, 0)
				    this.container.append(canvas)
				    this.callback(f, canvas)
				})
			},
			callback (_this, obj) {
				settings.onload.call(_this, obj)
			}
		}

		return this.each(function () {
			$(this).on('change', () => {
				reader.clearContainer()
				for(let x = 0, xlen = this.files.length; x < xlen; x++) {
					reader.processRead(this.files[x])
				}
			})
		})
	}
}))