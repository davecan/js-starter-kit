import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should have h1 that says Users', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        });
    });

    it('should have table with tbody id=users', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const tbody = window.document.getElementById('users');
            expect(tbody).to.not.be.null;
            done();
            window.close();
        });
    });
});

describe('watch test', () => {
    it('should fail', () => {expect(true).to.equal(true);});
});