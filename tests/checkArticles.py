# -*- coding: utf-8 -*

import unittest
import glob
import os

class TestCap(unittest.TestCase):

    def setUp(self): 
        self.testListNone = str()

    def testCheckAddDisqusComponent(self):
        allArticleFolders = list(os.walk('../docs/'))[0][1]
        allArticleFolders.remove('.vuepress')
        for item in allArticleFolders:
            allArticlesOfFolers = glob.glob('../docs/{}/*.md'.format(item))
            for item2 in allArticlesOfFolers:
                with open(item2) as f:
                    content = f.read()
                if -1 is content.find('<disqus />'):
                    print('Fail file: {}'.format(item2))
                    raise ValueError
        

if __name__ == '__main__':
    unittest.main()