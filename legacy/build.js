#!/usr/bin/env node

/**
 * Build Script for Modular Portfolio
 * Generates all pages from components and configuration
 */

const PageBuilder = require('./build/page-builder.js');

console.log('🚀 Building modular portfolio...\n');

try {
    const builder = new PageBuilder();
    builder.buildAll();
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}