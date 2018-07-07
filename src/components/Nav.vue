<template>
    <div>
        <nav class="navbar">
            <div class="navbar_logo">
                <router-link to="/">FX-GO</router-link>
            </div>
            <div class="navbar_toggle" :class="{ open: isOpen }" @click="openNav">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="navbar_links">
                <li><router-link to="/">History</router-link></li>
                <li><router-link to="/">About</router-link></li>
            </ul>
        </nav>
        <div class="mobile_nav" :class="{ open: isOpen }">
            <ul class="mobile_nav_links">
                <li><router-link to="/">History</router-link></li>
                <li><router-link to="/">About</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        openNav() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables";
.navbar {
    width: 100vw;
    background: $main-color;
    color: white;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
    position: sticky;
    top: 0;
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: $black;
            transition: color 0.3s ease-in;
        }
    }
    &_logo {
        font-size: 2em;
        align-self: center;
        padding-left: 3em;
    }
    &_toggle {
        display: none;
        width: 40px;
        height: 29px;
        position: relative;
        margin-right: 1em;
        align-self: center;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
        cursor: pointer;
        span {
            display: block;
            position: absolute;
            height: 3px;
            width: 50%;
            background: #ffffff;
            opacity: 1;
            transform: rotate(0deg);
            transition: 0.25s ease-in-out;
            &:nth-child(even) {
                left: 50%;
                border-radius: 0 9px 9px 0;
            }
            &:nth-child(odd) {
                left: 0px;
                border-radius: 9px 0 0 9px;
            }
            &:nth-child(1),
            &:nth-child(2) {
                top: 0px;
            }
            &:nth-child(3),
            &:nth-child(4) {
                top: 12px;
            }
            &:nth-child(5),
            &:nth-child(6) {
                top: 26px;
            }
        }
        &.open {
            span {
                &:nth-child(1),
                &:nth-child(6) {
                    transform: rotate(45deg);
                }
                &:nth-child(2),
                &:nth-child(5) {
                    transform: rotate(-45deg);
                }
                &:nth-child(1) {
                    left: 3px;
                    top: 5px;
                }
                &:nth-child(2) {
                    left: calc(50% - 3px);
                    top: 5px;
                }
                &:nth-child(3) {
                    left: -50%;
                    opacity: 0;
                }
                &:nth-child(4) {
                    left: 100%;
                    opacity: 0;
                }
                &:nth-child(5) {
                    left: 3px;
                    top: 20px;
                }
                &:nth-child(6) {
                    left: calc(50% - 3px);
                    top: 20px;
                }
            }
        }
    }
    &_links {
        display: flex;
        list-style: none;
        align-content: center;
        padding-right: 3em;
        li {
            padding: 0.3em 1em;
        }
    }
}
.mobile_nav {
    // display: none;
    width: 90vw;
    justify-items: center;
    max-height: 0;
    opacity: 0;
    background: $main-color;
    position: absolute;
    margin-left: 5vw;
    margin-top: -20px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 3px 4px 10px 1px #00000085;
    transition: all 0.2s ease-in;
    overflow-y: hidden;
    &_links {
        list-style: none;
        padding: 3em;
        li {
            padding: 1em;
            font-size: 2em;
            a {
                color: white;
                text-decoration: none;
                &:hover {
                    color: $black;
                    transition: color 0.3s ease-in;
                }
            }
            &:hover {
                transform: skewX(-20deg);
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .navbar {
        &_logo {
            padding-left: 1em;
            font-size: 1.5em;
        }
        &_links {
            display: none;
        }
        &_toggle {
            display: block;
        }
    }
    .mobile_nav {
        &.open {
            // display: block;
            opacity: 1;
            max-height: 40vh;
        }
    }
}
</style>
