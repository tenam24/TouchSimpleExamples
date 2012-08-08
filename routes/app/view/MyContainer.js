/*
 * File: app/view/MyContainer.js
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

Ext.define('MyApp.view.MyContainer', {
    extend: 'Ext.Container',

    config: {
        html: 'Try some of the following route URLs: <br><br><ul><li><a href="#login">#login</a></li><li><a href="#user/12345">#user/12345</a></li><li><a href="#folder/myfolder/file/myfile">#folder/myfolder/file/myfile</a></li>',
        padding: 40,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Routes'
            }
        ]
    }

});