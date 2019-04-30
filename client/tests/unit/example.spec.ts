import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

import HelloWorld from 'client/src/components/HelloWorld.vue';

describe('HelloWorld.vue', (): void => {
    it('renders props.msg when passed', (): void => {
        const msg = 'new message';
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg },
        });
        expect(wrapper.text()).to.include(msg);
    });
});
