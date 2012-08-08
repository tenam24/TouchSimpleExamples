/*
 * File: app/view/ReplyOptions.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ReplyOptions', {
    extend: 'Ext.ActionSheet',
    alias: 'widget.replyOptions',

    config: {
        items: [
            {
                xtype: 'button',
                text: 'Reply'
            },
            {
                xtype: 'button',
                text: 'Reply All'
            },
            {
                xtype: 'button',
                itemId: 'mybutton5',
                ui: 'decline',
                text: 'Cancel'
            }
        ],
        listeners: [
            {
                fn: 'onMybutton5Tap',
                event: 'tap',
                delegate: '#mybutton5'
            }
        ]
    },

    onMybutton5Tap: function(button, e, options) {
        this.hide();
    }

});