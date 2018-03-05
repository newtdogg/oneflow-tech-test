import Vue from 'vue';
import searchBar from '@/components/searchBar';

describe('searchBar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(searchBar);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('#searchBar').textContent);
  });
});
